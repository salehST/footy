import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import _ from 'lodash';
dayjs.extend(advancedFormat);
import store from '@/store';
// Abercrombie&Verkaik
export function getTextDate(value: string, locale: string): string {
	function capitalize(str: string) {
		return str.replace(/(?:^|\s)\S/g, function (a: any) {
			return a.toUpperCase();
		});
	}

	const arizona = 'America/Phoenix';
	const amsterdam = 'Europe/Amsterdam';
	const d = new Date(value).toLocaleString('en-US', { timeZone: amsterdam });

	let format;

	if (locale === 'en') {
		dayjs.locale('en');
		format = 'MMMM DD';
	} else {
		dayjs.locale('nl');
		format = 'DD MMMM';
	}

	const date = dayjs(d).format(format);
	return capitalize(date);
}

export const sortMatchesByTime = (matches: any, reverse: boolean = false) => {
	if (!matches) return [];
	if (!reverse) {
		matches = _.sortBy(matches, ['date', 'kick_off_time']);
	} else {
		matches = _.orderBy(matches, ['date'], ['desc']);
	}
	return matches;
};

export function groupMatchesByDate(matches: any, reverse: boolean = false): object {
	const sorted = sortMatchesByTime(matches, reverse);
	const groupedMatches = (sorted as any).reduce((groupedMatches: any, match: any) => {
		const date = match.postponed ? 'postponed' : match.date;
		if (!groupedMatches[date]) {
			groupedMatches[date] = [];
		}
		groupedMatches[date].push(match);
		return groupedMatches;
	}, {});
	if (groupedMatches['postponed']) {
		const postponed = groupedMatches['postponed'];
		delete groupedMatches['postponed'];
		groupedMatches['postponed'] = postponed;
	}
	return groupedMatches;
}

export function getLeagueTable(matches: any, leagueRegistrations: any[]): any[] {
	const rowTemplate = {
		played: 0,
		won: 0,
		lost: 0,
		drawn: 0,
		goalsScored: 0,
		goalsConceded: 0,
		goalDiff: 0,
		points: 0,
	};

	let table = matches
		// .filter((m: any) => m.home_score !== null && m.away_score !== null)
		.reduce((table: any, match: any) => {
			const {
				awayTeam: away_team,
				away_score,
				homeTeam: home_team,
				home_score,
				placeholder_home_team,
				placeholder_away_team,
			} = match;

			const result = home_score !== null && away_score !== null;

			const homeTeam = home_team ? home_team : placeholder_home_team;
			const awayTeam = away_team ? away_team : placeholder_away_team;
			const homeTeamName = homeTeam && homeTeam.name;
			const awayTeamName = awayTeam && awayTeam.name;
			const homeTeamId = homeTeam && homeTeam.id;
			const awayTeamId = awayTeam && awayTeam.id;

			const homeTeamExists = table[homeTeamName];
			const awayTeamExists = table[awayTeamName];

			const homeTeamResult = getLeagueTableMatchResultByTeam(homeTeam ? homeTeam.id : null, match);
			if (!homeTeamExists && homeTeamName) {
				table[homeTeamName] = { ...rowTemplate, name: homeTeamName, id: homeTeamId };
			}

			if (!awayTeamExists && awayTeamName) {
				table[awayTeamName] = { ...rowTemplate, name: awayTeamName, id: awayTeamId };
			}

			if (result) {
				homeTeamName && table[homeTeamName].played++;
				awayTeamName && table[awayTeamName].played++;
				if (homeTeamName) {
					table[homeTeamName].goalsScored =
						(table[homeTeamName].goalsScored || 0) + (home_score || 0);
					table[homeTeamName].goalsConceded =
						(table[homeTeamName].goalsConceded || 0) + (away_score || 0);
					table[homeTeamName].goalDiff =
						(table[homeTeamName].goalsScored || 0) - (table[homeTeamName].goalsConceded || 0);
				}
				if (awayTeamName) {
					table[awayTeamName].goalsScored =
						(table[awayTeamName].goalsScored || 0) + (away_score || 0);
					table[awayTeamName].goalsConceded =
						(table[awayTeamName].goalsConceded || 0) + (home_score || 0);
					table[awayTeamName].goalDiff =
						(table[awayTeamName].goalsScored || 0) - (table[awayTeamName].goalsConceded || 0);
				}

				if (homeTeamResult === 'W') {
					homeTeamName && table[homeTeamName].won++;
					awayTeamName && table[awayTeamName].lost++;
					if (homeTeamName) table[homeTeamName].points += 3;
				}

				if (homeTeamResult === 'L') {
					homeTeamName && table[homeTeamName].lost++;
					awayTeamName && table[awayTeamName].won++;
					if (awayTeamName) table[awayTeamName].points += 3;
				}

				if (homeTeamResult === 'D') {
					homeTeamName && table[homeTeamName].drawn++;
					homeTeamName && table[homeTeamName].points++;
					awayTeamName && table[awayTeamName].drawn++;
					awayTeamName && table[awayTeamName].points++;
				}
			}

			return table;
		}, {});
	// Convert to array
	table = Object.values(table);
	// Check to see if any points have been carried over from a parent league and add them if they have
	if (leagueRegistrations && leagueRegistrations.length) {
		table.map((tableData: any, idx: number) => {
			leagueRegistrations.map((registration: any) => {
				const teamName = registration.team.name;
				if (teamName === tableData.name) {
					table[idx].points =
						parseInt(table[idx].points) + (parseInt(registration.points_carried) || 0);
					table[idx].drawn =
						parseInt(table[idx].drawn) + (parseInt(registration.drawn_carried) || 0);
					table[idx].goalDiff =
						parseInt(table[idx].goalDiff) + (parseInt(registration.gd_carried) || 0);
					table[idx].goalsConceded =
						parseInt(table[idx].goalsConceded) + (parseInt(registration.gc_carried) || 0);
					table[idx].goalsScored =
						parseInt(table[idx].goalsScored) + (parseInt(registration.gs_carried) || 0);
					table[idx].lost = parseInt(table[idx].lost) + (parseInt(registration.lost_carried) || 0);
					table[idx].played =
						parseInt(table[idx].played) + (parseInt(registration.played_carried) || 0);
					table[idx].won = parseInt(table[idx].won) + (parseInt(registration.won_carried) || 0);
				}
			});
		});
	}

	// Sort by goal diff
	table.sort((a: any, b: any) => {
		const pointsDiff = b.points - a.points;
		const goalDiff = b.goalDiff - a.goalDiff;
		const goalsScored = b.goalsScored - a.goalsScored;
		// If tied on points
		if (pointsDiff === 0) {
			// If tied on goal difference return team with most goals scored
			if (goalDiff === 0) {
				// If still tied then sort alphabetically
				if (goalsScored === 0) {
					const nameA = a.name ? a.name.toUpperCase() : a.name; // ignore upper and lowercase
					const nameB = b.name ? b.name.toUpperCase() : b.name; // ignore upper and lowercase
					if (nameA < nameB) {
						return -1;
					}
					if (nameA > nameB) {
						return 1;
					}

					// names must be equal
					return 0;
				}
				return goalsScored;
			}
			// Else return team with better goal difference
			else return goalDiff;
		}
		return pointsDiff;
	});
	table = removeDeletedTeams(table, matches);

	table = table.reduce((teams: any, team: any, index: any) => {
		const position = index + 1;
		if (matches[0].finals_group) {
			return [
				...teams,
				{
					...team,
					position,
					group: matches[0].finals_group,
				},
			];
		} else {
			return [
				...teams,
				{
					...team,
					position,
				},
			];
		}
	}, []);
	table = table.filter((table: any) => table.name !== null);
	return table;
}

export function removeDeletedTeams(table: any, matches: any) {
	const deleteTeams: any = [];
	const filteredTable: any = [];
	matches.map((match: any) => {
		if (match.deleted_team) deleteTeams.push(match.deleted_team);
	});
	if (deleteTeams.length) {
		table.map((t: any) => {
			if (deleteTeams.includes(t.id)) return;
			filteredTable.push(t);
		});
	}
	return filteredTable.length ? filteredTable : table;
}
export function getLeagueTableMatchResultByTeam(id: any, match: any): string {
	if (!id || !match || !match.homeTeam || !match.homeTeam.id) return '';
	const isHomeTeam = match.homeTeam.id === id;
	const goalsScored = isHomeTeam ? match.home_score : match.away_score;
	const goalsConceded = isHomeTeam ? match.away_score : match.home_score;
	const hasWon = goalsScored > goalsConceded;
	const hasLost = goalsScored < goalsConceded;
	return hasWon ? 'W' : hasLost ? 'L' : 'D';
}

export function getMatchResultByTeam(id: any, match: any): string {
	const isHomeTeam = match.home_team === id;
	const goalsScored = isHomeTeam ? match.home_score : match.away_score;
	const goalsConceded = isHomeTeam ? match.away_score : match.home_score;
	const hasWon = goalsScored > goalsConceded;
	const hasLost = goalsScored < goalsConceded;
	return hasWon ? 'W' : hasLost ? 'L' : 'D';
}

export function getTeamStats(id: any, matches: any): object {
	return matches.reduce((stats: any, match: any) => {
		const result = getMatchResultByTeam(id, match);
		const hasWon = result === 'W';
		const hasLost = result === 'L';
		const hasDrawn = result === 'D';
		if (stats.hasOwnProperty('played')) {
			return {
				played: stats.played + 1,
				drawn: hasDrawn ? stats.drawn + 1 : stats.drawn,
				lost: hasLost ? stats.lost + 1 : stats.lost,
				won: hasWon ? stats.won + 1 : stats.won,
			};
		} else {
			return {
				played: 1,
				drawn: hasDrawn ? 1 : 0,
				lost: hasLost ? 1 : 0,
				won: hasWon ? 1 : 0,
			};
		}
	}, {});
}

export function groupMatchesByKnockoutStage(matches: any, reverse?: boolean): object {
	const sorted = sortMatchesByTime(matches, reverse);
	return (sorted as any).reduce((groupedMatches: any, match: any) => {
		const round = match.name.split('-')[0];
		const updatedMatch = {
			...match,
			roundName: round,
		};
		if (!groupedMatches[round]) {
			groupedMatches[round] = [];
		}
		groupedMatches[round].push(updatedMatch);
		return groupedMatches;
	}, {});
}

export function isTeamAttachedToPlayer(teamId: string): boolean {
	const playerTeamIds = store.getters.getPlayerTeamIds;
	return playerTeamIds.includes(teamId);
}
