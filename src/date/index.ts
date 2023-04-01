function getCurrentDate() {
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const currentDate = new Date().toLocaleString('en-US', { timeZone: timezone });
	return currentDate;
}
export default getCurrentDate;
