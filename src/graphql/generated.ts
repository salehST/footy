export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	date: any;
	timestamptz: any;
	timetz: any;
	uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
	_eq?: Maybe<Scalars['Boolean']>;
	_gt?: Maybe<Scalars['Boolean']>;
	_gte?: Maybe<Scalars['Boolean']>;
	_in?: Maybe<Array<Scalars['Boolean']>>;
	_is_null?: Maybe<Scalars['Boolean']>;
	_lt?: Maybe<Scalars['Boolean']>;
	_lte?: Maybe<Scalars['Boolean']>;
	_neq?: Maybe<Scalars['Boolean']>;
	_nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
	_eq?: Maybe<Scalars['Int']>;
	_gt?: Maybe<Scalars['Int']>;
	_gte?: Maybe<Scalars['Int']>;
	_in?: Maybe<Array<Scalars['Int']>>;
	_is_null?: Maybe<Scalars['Boolean']>;
	_lt?: Maybe<Scalars['Int']>;
	_lte?: Maybe<Scalars['Int']>;
	_neq?: Maybe<Scalars['Int']>;
	_nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	_eq?: Maybe<Scalars['String']>;
	_gt?: Maybe<Scalars['String']>;
	_gte?: Maybe<Scalars['String']>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: Maybe<Scalars['String']>;
	_in?: Maybe<Array<Scalars['String']>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: Maybe<Scalars['String']>;
	_is_null?: Maybe<Scalars['Boolean']>;
	/** does the column match the given pattern */
	_like?: Maybe<Scalars['String']>;
	_lt?: Maybe<Scalars['String']>;
	_lte?: Maybe<Scalars['String']>;
	_neq?: Maybe<Scalars['String']>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: Maybe<Scalars['String']>;
	_nin?: Maybe<Array<Scalars['String']>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: Maybe<Scalars['String']>;
	/** does the column NOT match the given pattern */
	_nlike?: Maybe<Scalars['String']>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: Maybe<Scalars['String']>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: Maybe<Scalars['String']>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: Maybe<Scalars['String']>;
	/** does the column match the given SQL regular expression */
	_similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "admin_users" */
export type Admin_Users = {
	__typename?: 'admin_users';
	country?: Maybe<Scalars['uuid']>;
	email: Scalars['String'];
	firebase_uid?: Maybe<Scalars['String']>;
	first_name: Scalars['String'];
	id: Scalars['uuid'];
	last_name: Scalars['String'];
	/** An array relationship */
	match_comments: Array<Match_Comments>;
	/** An aggregate relationship */
	match_comments_aggregate: Match_Comments_Aggregate;
	phone_number?: Maybe<Scalars['String']>;
	role?: Maybe<Scalars['String']>;
	superAdmin?: Maybe<Scalars['Boolean']>;
};

/** columns and relationships of "admin_users" */
export type Admin_UsersMatch_CommentsArgs = {
	distinct_on?: Maybe<Array<Match_Comments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Match_Comments_Order_By>>;
	where?: Maybe<Match_Comments_Bool_Exp>;
};

/** columns and relationships of "admin_users" */
export type Admin_UsersMatch_Comments_AggregateArgs = {
	distinct_on?: Maybe<Array<Match_Comments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Match_Comments_Order_By>>;
	where?: Maybe<Match_Comments_Bool_Exp>;
};

/** aggregated selection of "admin_users" */
export type Admin_Users_Aggregate = {
	__typename?: 'admin_users_aggregate';
	aggregate?: Maybe<Admin_Users_Aggregate_Fields>;
	nodes: Array<Admin_Users>;
};

/** aggregate fields of "admin_users" */
export type Admin_Users_Aggregate_Fields = {
	__typename?: 'admin_users_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Admin_Users_Max_Fields>;
	min?: Maybe<Admin_Users_Min_Fields>;
};

/** aggregate fields of "admin_users" */
export type Admin_Users_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Admin_Users_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "admin_users". All fields are combined with a logical 'AND'. */
export type Admin_Users_Bool_Exp = {
	_and?: Maybe<Array<Admin_Users_Bool_Exp>>;
	_not?: Maybe<Admin_Users_Bool_Exp>;
	_or?: Maybe<Array<Admin_Users_Bool_Exp>>;
	country?: Maybe<Uuid_Comparison_Exp>;
	email?: Maybe<String_Comparison_Exp>;
	firebase_uid?: Maybe<String_Comparison_Exp>;
	first_name?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	last_name?: Maybe<String_Comparison_Exp>;
	match_comments?: Maybe<Match_Comments_Bool_Exp>;
	phone_number?: Maybe<String_Comparison_Exp>;
	role?: Maybe<String_Comparison_Exp>;
	superAdmin?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin_users" */
export enum Admin_Users_Constraint {
	/** unique or primary key constraint */
	UsersFirebaseUidKey = 'users_firebase_uid_key',
	/** unique or primary key constraint */
	UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "admin_users" */
export type Admin_Users_Insert_Input = {
	country?: Maybe<Scalars['uuid']>;
	email?: Maybe<Scalars['String']>;
	firebase_uid?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	match_comments?: Maybe<Match_Comments_Arr_Rel_Insert_Input>;
	phone_number?: Maybe<Scalars['String']>;
	role?: Maybe<Scalars['String']>;
	superAdmin?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Admin_Users_Max_Fields = {
	__typename?: 'admin_users_max_fields';
	country?: Maybe<Scalars['uuid']>;
	email?: Maybe<Scalars['String']>;
	firebase_uid?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
	role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Admin_Users_Min_Fields = {
	__typename?: 'admin_users_min_fields';
	country?: Maybe<Scalars['uuid']>;
	email?: Maybe<Scalars['String']>;
	firebase_uid?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
	role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "admin_users" */
export type Admin_Users_Mutation_Response = {
	__typename?: 'admin_users_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Admin_Users>;
};

/** input type for inserting object relation for remote table "admin_users" */
export type Admin_Users_Obj_Rel_Insert_Input = {
	data: Admin_Users_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Admin_Users_On_Conflict>;
};

/** on conflict condition type for table "admin_users" */
export type Admin_Users_On_Conflict = {
	constraint: Admin_Users_Constraint;
	update_columns?: Array<Admin_Users_Update_Column>;
	where?: Maybe<Admin_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "admin_users". */
export type Admin_Users_Order_By = {
	country?: Maybe<Order_By>;
	email?: Maybe<Order_By>;
	firebase_uid?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	match_comments_aggregate?: Maybe<Match_Comments_Aggregate_Order_By>;
	phone_number?: Maybe<Order_By>;
	role?: Maybe<Order_By>;
	superAdmin?: Maybe<Order_By>;
};

/** primary key columns input for table: admin_users */
export type Admin_Users_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "admin_users" */
export enum Admin_Users_Select_Column {
	/** column name */
	Country = 'country',
	/** column name */
	Email = 'email',
	/** column name */
	FirebaseUid = 'firebase_uid',
	/** column name */
	FirstName = 'first_name',
	/** column name */
	Id = 'id',
	/** column name */
	LastName = 'last_name',
	/** column name */
	PhoneNumber = 'phone_number',
	/** column name */
	Role = 'role',
	/** column name */
	SuperAdmin = 'superAdmin',
}

/** input type for updating data in table "admin_users" */
export type Admin_Users_Set_Input = {
	country?: Maybe<Scalars['uuid']>;
	email?: Maybe<Scalars['String']>;
	firebase_uid?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
	role?: Maybe<Scalars['String']>;
	superAdmin?: Maybe<Scalars['Boolean']>;
};

/** update columns of table "admin_users" */
export enum Admin_Users_Update_Column {
	/** column name */
	Country = 'country',
	/** column name */
	Email = 'email',
	/** column name */
	FirebaseUid = 'firebase_uid',
	/** column name */
	FirstName = 'first_name',
	/** column name */
	Id = 'id',
	/** column name */
	LastName = 'last_name',
	/** column name */
	PhoneNumber = 'phone_number',
	/** column name */
	Role = 'role',
	/** column name */
	SuperAdmin = 'superAdmin',
}

/** columns and relationships of "cities" */
export type Cities = {
	__typename?: 'cities';
	/** An array relationship */
	coordinators: Array<Coordinators>;
	/** An aggregate relationship */
	coordinators_aggregate: Coordinators_Aggregate;
	/** An object relationship */
	country: Countries;
	country_id: Scalars['uuid'];
	id: Scalars['uuid'];
	/** An array relationship */
	locations: Array<Locations>;
	/** An aggregate relationship */
	locations_aggregate: Locations_Aggregate;
	name: Scalars['String'];
	/** An array relationship */
	players: Array<Players>;
	/** An aggregate relationship */
	players_aggregate: Players_Aggregate;
	/** An array relationship */
	referees: Array<Referees>;
	/** An aggregate relationship */
	referees_aggregate: Referees_Aggregate;
	/** An array relationship */
	teams: Array<Teams>;
	/** An aggregate relationship */
	teams_aggregate: Teams_Aggregate;
};

/** columns and relationships of "cities" */
export type CitiesCoordinatorsArgs = {
	distinct_on?: Maybe<Array<Coordinators_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Coordinators_Order_By>>;
	where?: Maybe<Coordinators_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesCoordinators_AggregateArgs = {
	distinct_on?: Maybe<Array<Coordinators_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Coordinators_Order_By>>;
	where?: Maybe<Coordinators_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesLocationsArgs = {
	distinct_on?: Maybe<Array<Locations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Locations_Order_By>>;
	where?: Maybe<Locations_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesLocations_AggregateArgs = {
	distinct_on?: Maybe<Array<Locations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Locations_Order_By>>;
	where?: Maybe<Locations_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesPlayersArgs = {
	distinct_on?: Maybe<Array<Players_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Players_Order_By>>;
	where?: Maybe<Players_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesPlayers_AggregateArgs = {
	distinct_on?: Maybe<Array<Players_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Players_Order_By>>;
	where?: Maybe<Players_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesRefereesArgs = {
	distinct_on?: Maybe<Array<Referees_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Referees_Order_By>>;
	where?: Maybe<Referees_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesReferees_AggregateArgs = {
	distinct_on?: Maybe<Array<Referees_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Referees_Order_By>>;
	where?: Maybe<Referees_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesTeamsArgs = {
	distinct_on?: Maybe<Array<Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Teams_Order_By>>;
	where?: Maybe<Teams_Bool_Exp>;
};

/** columns and relationships of "cities" */
export type CitiesTeams_AggregateArgs = {
	distinct_on?: Maybe<Array<Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Teams_Order_By>>;
	where?: Maybe<Teams_Bool_Exp>;
};

/** aggregated selection of "cities" */
export type Cities_Aggregate = {
	__typename?: 'cities_aggregate';
	aggregate?: Maybe<Cities_Aggregate_Fields>;
	nodes: Array<Cities>;
};

/** aggregate fields of "cities" */
export type Cities_Aggregate_Fields = {
	__typename?: 'cities_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Cities_Max_Fields>;
	min?: Maybe<Cities_Min_Fields>;
};

/** aggregate fields of "cities" */
export type Cities_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Cities_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cities" */
export type Cities_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Cities_Max_Order_By>;
	min?: Maybe<Cities_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cities" */
export type Cities_Arr_Rel_Insert_Input = {
	data: Array<Cities_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Cities_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'. */
export type Cities_Bool_Exp = {
	_and?: Maybe<Array<Cities_Bool_Exp>>;
	_not?: Maybe<Cities_Bool_Exp>;
	_or?: Maybe<Array<Cities_Bool_Exp>>;
	coordinators?: Maybe<Coordinators_Bool_Exp>;
	country?: Maybe<Countries_Bool_Exp>;
	country_id?: Maybe<Uuid_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	locations?: Maybe<Locations_Bool_Exp>;
	name?: Maybe<String_Comparison_Exp>;
	players?: Maybe<Players_Bool_Exp>;
	referees?: Maybe<Referees_Bool_Exp>;
	teams?: Maybe<Teams_Bool_Exp>;
};

/** unique or primary key constraints on table "cities" */
export enum Cities_Constraint {
	/** unique or primary key constraint */
	CitiesPkey = 'cities_pkey',
}

/** input type for inserting data into table "cities" */
export type Cities_Insert_Input = {
	coordinators?: Maybe<Coordinators_Arr_Rel_Insert_Input>;
	country?: Maybe<Countries_Obj_Rel_Insert_Input>;
	country_id?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	locations?: Maybe<Locations_Arr_Rel_Insert_Input>;
	name?: Maybe<Scalars['String']>;
	players?: Maybe<Players_Arr_Rel_Insert_Input>;
	referees?: Maybe<Referees_Arr_Rel_Insert_Input>;
	teams?: Maybe<Teams_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Cities_Max_Fields = {
	__typename?: 'cities_max_fields';
	country_id?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "cities" */
export type Cities_Max_Order_By = {
	country_id?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Cities_Min_Fields = {
	__typename?: 'cities_min_fields';
	country_id?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "cities" */
export type Cities_Min_Order_By = {
	country_id?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
};

/** response of any mutation on the table "cities" */
export type Cities_Mutation_Response = {
	__typename?: 'cities_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Cities>;
};

/** input type for inserting object relation for remote table "cities" */
export type Cities_Obj_Rel_Insert_Input = {
	data: Cities_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Cities_On_Conflict>;
};

/** on conflict condition type for table "cities" */
export type Cities_On_Conflict = {
	constraint: Cities_Constraint;
	update_columns?: Array<Cities_Update_Column>;
	where?: Maybe<Cities_Bool_Exp>;
};

/** Ordering options when selecting data from "cities". */
export type Cities_Order_By = {
	coordinators_aggregate?: Maybe<Coordinators_Aggregate_Order_By>;
	country?: Maybe<Countries_Order_By>;
	country_id?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	locations_aggregate?: Maybe<Locations_Aggregate_Order_By>;
	name?: Maybe<Order_By>;
	players_aggregate?: Maybe<Players_Aggregate_Order_By>;
	referees_aggregate?: Maybe<Referees_Aggregate_Order_By>;
	teams_aggregate?: Maybe<Teams_Aggregate_Order_By>;
};

/** primary key columns input for table: cities */
export type Cities_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "cities" */
export enum Cities_Select_Column {
	/** column name */
	CountryId = 'country_id',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
}

/** input type for updating data in table "cities" */
export type Cities_Set_Input = {
	country_id?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
};

/** update columns of table "cities" */
export enum Cities_Update_Column {
	/** column name */
	CountryId = 'country_id',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
}

/** columns and relationships of "coordinators" */
export type Coordinators = {
	__typename?: 'coordinators';
	city: Scalars['uuid'];
	/** An object relationship */
	cityByCity: Cities;
	email?: Maybe<Scalars['String']>;
	first_name: Scalars['String'];
	id: Scalars['uuid'];
	last_name: Scalars['String'];
	phone_number?: Maybe<Scalars['String']>;
};

/** aggregated selection of "coordinators" */
export type Coordinators_Aggregate = {
	__typename?: 'coordinators_aggregate';
	aggregate?: Maybe<Coordinators_Aggregate_Fields>;
	nodes: Array<Coordinators>;
};

/** aggregate fields of "coordinators" */
export type Coordinators_Aggregate_Fields = {
	__typename?: 'coordinators_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Coordinators_Max_Fields>;
	min?: Maybe<Coordinators_Min_Fields>;
};

/** aggregate fields of "coordinators" */
export type Coordinators_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Coordinators_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "coordinators" */
export type Coordinators_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Coordinators_Max_Order_By>;
	min?: Maybe<Coordinators_Min_Order_By>;
};

/** input type for inserting array relation for remote table "coordinators" */
export type Coordinators_Arr_Rel_Insert_Input = {
	data: Array<Coordinators_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Coordinators_On_Conflict>;
};

/** Boolean expression to filter rows from the table "coordinators". All fields are combined with a logical 'AND'. */
export type Coordinators_Bool_Exp = {
	_and?: Maybe<Array<Coordinators_Bool_Exp>>;
	_not?: Maybe<Coordinators_Bool_Exp>;
	_or?: Maybe<Array<Coordinators_Bool_Exp>>;
	city?: Maybe<Uuid_Comparison_Exp>;
	cityByCity?: Maybe<Cities_Bool_Exp>;
	email?: Maybe<String_Comparison_Exp>;
	first_name?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	last_name?: Maybe<String_Comparison_Exp>;
	phone_number?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "coordinators" */
export enum Coordinators_Constraint {
	/** unique or primary key constraint */
	CoordinatorsPkey = 'coordinators_pkey',
}

/** input type for inserting data into table "coordinators" */
export type Coordinators_Insert_Input = {
	city?: Maybe<Scalars['uuid']>;
	cityByCity?: Maybe<Cities_Obj_Rel_Insert_Input>;
	email?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Coordinators_Max_Fields = {
	__typename?: 'coordinators_max_fields';
	city?: Maybe<Scalars['uuid']>;
	email?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "coordinators" */
export type Coordinators_Max_Order_By = {
	city?: Maybe<Order_By>;
	email?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	phone_number?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Coordinators_Min_Fields = {
	__typename?: 'coordinators_min_fields';
	city?: Maybe<Scalars['uuid']>;
	email?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "coordinators" */
export type Coordinators_Min_Order_By = {
	city?: Maybe<Order_By>;
	email?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	phone_number?: Maybe<Order_By>;
};

/** response of any mutation on the table "coordinators" */
export type Coordinators_Mutation_Response = {
	__typename?: 'coordinators_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Coordinators>;
};

/** on conflict condition type for table "coordinators" */
export type Coordinators_On_Conflict = {
	constraint: Coordinators_Constraint;
	update_columns?: Array<Coordinators_Update_Column>;
	where?: Maybe<Coordinators_Bool_Exp>;
};

/** Ordering options when selecting data from "coordinators". */
export type Coordinators_Order_By = {
	city?: Maybe<Order_By>;
	cityByCity?: Maybe<Cities_Order_By>;
	email?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	phone_number?: Maybe<Order_By>;
};

/** primary key columns input for table: coordinators */
export type Coordinators_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "coordinators" */
export enum Coordinators_Select_Column {
	/** column name */
	City = 'city',
	/** column name */
	Email = 'email',
	/** column name */
	FirstName = 'first_name',
	/** column name */
	Id = 'id',
	/** column name */
	LastName = 'last_name',
	/** column name */
	PhoneNumber = 'phone_number',
}

/** input type for updating data in table "coordinators" */
export type Coordinators_Set_Input = {
	city?: Maybe<Scalars['uuid']>;
	email?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
};

/** update columns of table "coordinators" */
export enum Coordinators_Update_Column {
	/** column name */
	City = 'city',
	/** column name */
	Email = 'email',
	/** column name */
	FirstName = 'first_name',
	/** column name */
	Id = 'id',
	/** column name */
	LastName = 'last_name',
	/** column name */
	PhoneNumber = 'phone_number',
}

/** columns and relationships of "countries" */
export type Countries = {
	__typename?: 'countries';
	/** An array relationship */
	cities: Array<Cities>;
	/** An aggregate relationship */
	cities_aggregate: Cities_Aggregate;
	code: Scalars['String'];
	id: Scalars['uuid'];
	name: Scalars['String'];
	/** An array relationship */
	players: Array<Players>;
	/** An aggregate relationship */
	players_aggregate: Players_Aggregate;
};

/** columns and relationships of "countries" */
export type CountriesCitiesArgs = {
	distinct_on?: Maybe<Array<Cities_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Cities_Order_By>>;
	where?: Maybe<Cities_Bool_Exp>;
};

/** columns and relationships of "countries" */
export type CountriesCities_AggregateArgs = {
	distinct_on?: Maybe<Array<Cities_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Cities_Order_By>>;
	where?: Maybe<Cities_Bool_Exp>;
};

/** columns and relationships of "countries" */
export type CountriesPlayersArgs = {
	distinct_on?: Maybe<Array<Players_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Players_Order_By>>;
	where?: Maybe<Players_Bool_Exp>;
};

/** columns and relationships of "countries" */
export type CountriesPlayers_AggregateArgs = {
	distinct_on?: Maybe<Array<Players_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Players_Order_By>>;
	where?: Maybe<Players_Bool_Exp>;
};

/** aggregated selection of "countries" */
export type Countries_Aggregate = {
	__typename?: 'countries_aggregate';
	aggregate?: Maybe<Countries_Aggregate_Fields>;
	nodes: Array<Countries>;
};

/** aggregate fields of "countries" */
export type Countries_Aggregate_Fields = {
	__typename?: 'countries_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Countries_Max_Fields>;
	min?: Maybe<Countries_Min_Fields>;
};

/** aggregate fields of "countries" */
export type Countries_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Countries_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export type Countries_Bool_Exp = {
	_and?: Maybe<Array<Countries_Bool_Exp>>;
	_not?: Maybe<Countries_Bool_Exp>;
	_or?: Maybe<Array<Countries_Bool_Exp>>;
	cities?: Maybe<Cities_Bool_Exp>;
	code?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	name?: Maybe<String_Comparison_Exp>;
	players?: Maybe<Players_Bool_Exp>;
};

/** unique or primary key constraints on table "countries" */
export enum Countries_Constraint {
	/** unique or primary key constraint */
	CountriesCodeKey = 'countries_code_key',
	/** unique or primary key constraint */
	CountriesPkey = 'countries_pkey',
}

/** input type for inserting data into table "countries" */
export type Countries_Insert_Input = {
	cities?: Maybe<Cities_Arr_Rel_Insert_Input>;
	code?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	players?: Maybe<Players_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Countries_Max_Fields = {
	__typename?: 'countries_max_fields';
	code?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Countries_Min_Fields = {
	__typename?: 'countries_min_fields';
	code?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "countries" */
export type Countries_Mutation_Response = {
	__typename?: 'countries_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Countries>;
};

/** input type for inserting object relation for remote table "countries" */
export type Countries_Obj_Rel_Insert_Input = {
	data: Countries_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Countries_On_Conflict>;
};

/** on conflict condition type for table "countries" */
export type Countries_On_Conflict = {
	constraint: Countries_Constraint;
	update_columns?: Array<Countries_Update_Column>;
	where?: Maybe<Countries_Bool_Exp>;
};

/** Ordering options when selecting data from "countries". */
export type Countries_Order_By = {
	cities_aggregate?: Maybe<Cities_Aggregate_Order_By>;
	code?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	players_aggregate?: Maybe<Players_Aggregate_Order_By>;
};

/** primary key columns input for table: countries */
export type Countries_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "countries" */
export enum Countries_Select_Column {
	/** column name */
	Code = 'code',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
}

/** input type for updating data in table "countries" */
export type Countries_Set_Input = {
	code?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
};

/** update columns of table "countries" */
export enum Countries_Update_Column {
	/** column name */
	Code = 'code',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
	_eq?: Maybe<Scalars['date']>;
	_gt?: Maybe<Scalars['date']>;
	_gte?: Maybe<Scalars['date']>;
	_in?: Maybe<Array<Scalars['date']>>;
	_is_null?: Maybe<Scalars['Boolean']>;
	_lt?: Maybe<Scalars['date']>;
	_lte?: Maybe<Scalars['date']>;
	_neq?: Maybe<Scalars['date']>;
	_nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "finals" */
export type Finals = {
	__typename?: 'finals';
	/** hex color code for finals */
	color?: Maybe<Scalars['String']>;
	/** Name of the color of these finals */
	color_name?: Maybe<Scalars['String']>;
	created_at: Scalars['timestamptz'];
	day_of_the_week?: Maybe<Scalars['String']>;
	display_name?: Maybe<Scalars['String']>;
	/** An array relationship */
	finals_groups: Array<Finals_Groups>;
	/** An aggregate relationship */
	finals_groups_aggregate: Finals_Groups_Aggregate;
	/** An array relationship */
	finals_knockouts: Array<Finals_Knockouts>;
	/** An aggregate relationship */
	finals_knockouts_aggregate: Finals_Knockouts_Aggregate;
	/** Do these finals have a group stage? */
	group_stage: Scalars['Boolean'];
	id: Scalars['uuid'];
	/** An array relationship */
	join_finals_leagues: Array<Join_Finals_Leagues>;
	/** An aggregate relationship */
	join_finals_leagues_aggregate: Join_Finals_Leagues_Aggregate;
	/** An array relationship */
	join_team_finals: Array<Join_Team_Finals>;
	/** An aggregate relationship */
	join_team_finals_aggregate: Join_Team_Finals_Aggregate;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	locationByLocation?: Maybe<Locations>;
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Int']>;
	/** An array relationship */
	placeholder_teams: Array<Placeholder_Teams>;
	/** An aggregate relationship */
	placeholder_teams_aggregate: Placeholder_Teams_Aggregate;
	play_off: Scalars['Boolean'];
	player_type?: Maybe<Scalars['String']>;
	published: Scalars['Boolean'];
	status: Scalars['String'];
	team_size?: Maybe<Scalars['String']>;
	updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "finals" */
export type FinalsFinals_GroupsArgs = {
	distinct_on?: Maybe<Array<Finals_Groups_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Groups_Order_By>>;
	where?: Maybe<Finals_Groups_Bool_Exp>;
};

/** columns and relationships of "finals" */
export type FinalsFinals_Groups_AggregateArgs = {
	distinct_on?: Maybe<Array<Finals_Groups_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Groups_Order_By>>;
	where?: Maybe<Finals_Groups_Bool_Exp>;
};

/** columns and relationships of "finals" */
export type FinalsFinals_KnockoutsArgs = {
	distinct_on?: Maybe<Array<Finals_Knockouts_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Knockouts_Order_By>>;
	where?: Maybe<Finals_Knockouts_Bool_Exp>;
};

/** columns and relationships of "finals" */
export type FinalsFinals_Knockouts_AggregateArgs = {
	distinct_on?: Maybe<Array<Finals_Knockouts_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Knockouts_Order_By>>;
	where?: Maybe<Finals_Knockouts_Bool_Exp>;
};

/** columns and relationships of "finals" */
export type FinalsJoin_Finals_LeaguesArgs = {
	distinct_on?: Maybe<Array<Join_Finals_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Finals_Leagues_Order_By>>;
	where?: Maybe<Join_Finals_Leagues_Bool_Exp>;
};

/** columns and relationships of "finals" */
export type FinalsJoin_Finals_Leagues_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Finals_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Finals_Leagues_Order_By>>;
	where?: Maybe<Join_Finals_Leagues_Bool_Exp>;
};

/** columns and relationships of "finals" */
export type FinalsJoin_Team_FinalsArgs = {
	distinct_on?: Maybe<Array<Join_Team_Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Team_Finals_Order_By>>;
	where?: Maybe<Join_Team_Finals_Bool_Exp>;
};

/** columns and relationships of "finals" */
export type FinalsJoin_Team_Finals_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Team_Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Team_Finals_Order_By>>;
	where?: Maybe<Join_Team_Finals_Bool_Exp>;
};

/** columns and relationships of "finals" */
export type FinalsPlaceholder_TeamsArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/** columns and relationships of "finals" */
export type FinalsPlaceholder_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/** aggregated selection of "finals" */
export type Finals_Aggregate = {
	__typename?: 'finals_aggregate';
	aggregate?: Maybe<Finals_Aggregate_Fields>;
	nodes: Array<Finals>;
};

/** aggregate fields of "finals" */
export type Finals_Aggregate_Fields = {
	__typename?: 'finals_aggregate_fields';
	avg?: Maybe<Finals_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Finals_Max_Fields>;
	min?: Maybe<Finals_Min_Fields>;
	stddev?: Maybe<Finals_Stddev_Fields>;
	stddev_pop?: Maybe<Finals_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Finals_Stddev_Samp_Fields>;
	sum?: Maybe<Finals_Sum_Fields>;
	var_pop?: Maybe<Finals_Var_Pop_Fields>;
	var_samp?: Maybe<Finals_Var_Samp_Fields>;
	variance?: Maybe<Finals_Variance_Fields>;
};

/** aggregate fields of "finals" */
export type Finals_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Finals_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "finals" */
export type Finals_Aggregate_Order_By = {
	avg?: Maybe<Finals_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<Finals_Max_Order_By>;
	min?: Maybe<Finals_Min_Order_By>;
	stddev?: Maybe<Finals_Stddev_Order_By>;
	stddev_pop?: Maybe<Finals_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<Finals_Stddev_Samp_Order_By>;
	sum?: Maybe<Finals_Sum_Order_By>;
	var_pop?: Maybe<Finals_Var_Pop_Order_By>;
	var_samp?: Maybe<Finals_Var_Samp_Order_By>;
	variance?: Maybe<Finals_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "finals" */
export type Finals_Arr_Rel_Insert_Input = {
	data: Array<Finals_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Finals_On_Conflict>;
};

/** aggregate avg on columns */
export type Finals_Avg_Fields = {
	__typename?: 'finals_avg_fields';
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "finals" */
export type Finals_Avg_Order_By = {
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "finals". All fields are combined with a logical 'AND'. */
export type Finals_Bool_Exp = {
	_and?: Maybe<Array<Finals_Bool_Exp>>;
	_not?: Maybe<Finals_Bool_Exp>;
	_or?: Maybe<Array<Finals_Bool_Exp>>;
	color?: Maybe<String_Comparison_Exp>;
	color_name?: Maybe<String_Comparison_Exp>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	day_of_the_week?: Maybe<String_Comparison_Exp>;
	display_name?: Maybe<String_Comparison_Exp>;
	finals_groups?: Maybe<Finals_Groups_Bool_Exp>;
	finals_knockouts?: Maybe<Finals_Knockouts_Bool_Exp>;
	group_stage?: Maybe<Boolean_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	join_finals_leagues?: Maybe<Join_Finals_Leagues_Bool_Exp>;
	join_team_finals?: Maybe<Join_Team_Finals_Bool_Exp>;
	kick_off_date?: Maybe<Date_Comparison_Exp>;
	location?: Maybe<Uuid_Comparison_Exp>;
	locationByLocation?: Maybe<Locations_Bool_Exp>;
	number_of_teams?: Maybe<Int_Comparison_Exp>;
	placeholder_teams?: Maybe<Placeholder_Teams_Bool_Exp>;
	play_off?: Maybe<Boolean_Comparison_Exp>;
	player_type?: Maybe<String_Comparison_Exp>;
	published?: Maybe<Boolean_Comparison_Exp>;
	status?: Maybe<String_Comparison_Exp>;
	team_size?: Maybe<String_Comparison_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "finals" */
export enum Finals_Constraint {
	/** unique or primary key constraint */
	FinalsPkey = 'finals_pkey',
}

/** columns and relationships of "finals_groups" */
export type Finals_Groups = {
	__typename?: 'finals_groups';
	created_at: Scalars['timestamptz'];
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length: Scalars['Int'];
	default_number_of_halves: Scalars['Int'];
	default_pitches?: Maybe<Scalars['String']>;
	default_time_slot: Scalars['Int'];
	/** An object relationship */
	final: Finals;
	frequency: Scalars['String'];
	id: Scalars['uuid'];
	is_completed: Scalars['Boolean'];
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	name: Scalars['String'];
	number_of_teams: Scalars['Int'];
	parent_finals: Scalars['uuid'];
	/** An array relationship */
	placeholderTeamsByParentGroup: Array<Placeholder_Teams>;
	/** An aggregate relationship */
	placeholderTeamsByParentGroup_aggregate: Placeholder_Teams_Aggregate;
	/** An array relationship */
	placeholderTeamsBySeedingGroup: Array<Placeholder_Teams>;
	/** An aggregate relationship */
	placeholderTeamsBySeedingGroup_aggregate: Placeholder_Teams_Aggregate;
	qualification_positions?: Maybe<Scalars['String']>;
	round_robin_format: Scalars['String'];
	updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "finals_groups" */
export type Finals_GroupsMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "finals_groups" */
export type Finals_GroupsMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "finals_groups" */
export type Finals_GroupsPlaceholderTeamsByParentGroupArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/** columns and relationships of "finals_groups" */
export type Finals_GroupsPlaceholderTeamsByParentGroup_AggregateArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/** columns and relationships of "finals_groups" */
export type Finals_GroupsPlaceholderTeamsBySeedingGroupArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/** columns and relationships of "finals_groups" */
export type Finals_GroupsPlaceholderTeamsBySeedingGroup_AggregateArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/** aggregated selection of "finals_groups" */
export type Finals_Groups_Aggregate = {
	__typename?: 'finals_groups_aggregate';
	aggregate?: Maybe<Finals_Groups_Aggregate_Fields>;
	nodes: Array<Finals_Groups>;
};

/** aggregate fields of "finals_groups" */
export type Finals_Groups_Aggregate_Fields = {
	__typename?: 'finals_groups_aggregate_fields';
	avg?: Maybe<Finals_Groups_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Finals_Groups_Max_Fields>;
	min?: Maybe<Finals_Groups_Min_Fields>;
	stddev?: Maybe<Finals_Groups_Stddev_Fields>;
	stddev_pop?: Maybe<Finals_Groups_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Finals_Groups_Stddev_Samp_Fields>;
	sum?: Maybe<Finals_Groups_Sum_Fields>;
	var_pop?: Maybe<Finals_Groups_Var_Pop_Fields>;
	var_samp?: Maybe<Finals_Groups_Var_Samp_Fields>;
	variance?: Maybe<Finals_Groups_Variance_Fields>;
};

/** aggregate fields of "finals_groups" */
export type Finals_Groups_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Finals_Groups_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "finals_groups" */
export type Finals_Groups_Aggregate_Order_By = {
	avg?: Maybe<Finals_Groups_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<Finals_Groups_Max_Order_By>;
	min?: Maybe<Finals_Groups_Min_Order_By>;
	stddev?: Maybe<Finals_Groups_Stddev_Order_By>;
	stddev_pop?: Maybe<Finals_Groups_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<Finals_Groups_Stddev_Samp_Order_By>;
	sum?: Maybe<Finals_Groups_Sum_Order_By>;
	var_pop?: Maybe<Finals_Groups_Var_Pop_Order_By>;
	var_samp?: Maybe<Finals_Groups_Var_Samp_Order_By>;
	variance?: Maybe<Finals_Groups_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "finals_groups" */
export type Finals_Groups_Arr_Rel_Insert_Input = {
	data: Array<Finals_Groups_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Finals_Groups_On_Conflict>;
};

/** aggregate avg on columns */
export type Finals_Groups_Avg_Fields = {
	__typename?: 'finals_groups_avg_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_time_slot?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "finals_groups" */
export type Finals_Groups_Avg_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "finals_groups". All fields are combined with a logical 'AND'. */
export type Finals_Groups_Bool_Exp = {
	_and?: Maybe<Array<Finals_Groups_Bool_Exp>>;
	_not?: Maybe<Finals_Groups_Bool_Exp>;
	_or?: Maybe<Array<Finals_Groups_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	default_game_length?: Maybe<String_Comparison_Exp>;
	default_half_length?: Maybe<Int_Comparison_Exp>;
	default_number_of_halves?: Maybe<Int_Comparison_Exp>;
	default_pitches?: Maybe<String_Comparison_Exp>;
	default_time_slot?: Maybe<Int_Comparison_Exp>;
	final?: Maybe<Finals_Bool_Exp>;
	frequency?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	is_completed?: Maybe<Boolean_Comparison_Exp>;
	matches?: Maybe<Matches_Bool_Exp>;
	name?: Maybe<String_Comparison_Exp>;
	number_of_teams?: Maybe<Int_Comparison_Exp>;
	parent_finals?: Maybe<Uuid_Comparison_Exp>;
	placeholderTeamsByParentGroup?: Maybe<Placeholder_Teams_Bool_Exp>;
	placeholderTeamsBySeedingGroup?: Maybe<Placeholder_Teams_Bool_Exp>;
	qualification_positions?: Maybe<String_Comparison_Exp>;
	round_robin_format?: Maybe<String_Comparison_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "finals_groups" */
export enum Finals_Groups_Constraint {
	/** unique or primary key constraint */
	FinalsGroupsPkey = 'finals_groups_pkey',
}

/** input type for incrementing numeric columns in table "finals_groups" */
export type Finals_Groups_Inc_Input = {
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_time_slot?: Maybe<Scalars['Int']>;
	number_of_teams?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "finals_groups" */
export type Finals_Groups_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_time_slot?: Maybe<Scalars['Int']>;
	final?: Maybe<Finals_Obj_Rel_Insert_Input>;
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	is_completed?: Maybe<Scalars['Boolean']>;
	matches?: Maybe<Matches_Arr_Rel_Insert_Input>;
	name?: Maybe<Scalars['String']>;
	number_of_teams?: Maybe<Scalars['Int']>;
	parent_finals?: Maybe<Scalars['uuid']>;
	placeholderTeamsByParentGroup?: Maybe<Placeholder_Teams_Arr_Rel_Insert_Input>;
	placeholderTeamsBySeedingGroup?: Maybe<Placeholder_Teams_Arr_Rel_Insert_Input>;
	qualification_positions?: Maybe<Scalars['String']>;
	round_robin_format?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Finals_Groups_Max_Fields = {
	__typename?: 'finals_groups_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_time_slot?: Maybe<Scalars['Int']>;
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	number_of_teams?: Maybe<Scalars['Int']>;
	parent_finals?: Maybe<Scalars['uuid']>;
	qualification_positions?: Maybe<Scalars['String']>;
	round_robin_format?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "finals_groups" */
export type Finals_Groups_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	default_game_length?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_pitches?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
	parent_finals?: Maybe<Order_By>;
	qualification_positions?: Maybe<Order_By>;
	round_robin_format?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Finals_Groups_Min_Fields = {
	__typename?: 'finals_groups_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_time_slot?: Maybe<Scalars['Int']>;
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	number_of_teams?: Maybe<Scalars['Int']>;
	parent_finals?: Maybe<Scalars['uuid']>;
	qualification_positions?: Maybe<Scalars['String']>;
	round_robin_format?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "finals_groups" */
export type Finals_Groups_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	default_game_length?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_pitches?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
	parent_finals?: Maybe<Order_By>;
	qualification_positions?: Maybe<Order_By>;
	round_robin_format?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "finals_groups" */
export type Finals_Groups_Mutation_Response = {
	__typename?: 'finals_groups_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Finals_Groups>;
};

/** input type for inserting object relation for remote table "finals_groups" */
export type Finals_Groups_Obj_Rel_Insert_Input = {
	data: Finals_Groups_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Finals_Groups_On_Conflict>;
};

/** on conflict condition type for table "finals_groups" */
export type Finals_Groups_On_Conflict = {
	constraint: Finals_Groups_Constraint;
	update_columns?: Array<Finals_Groups_Update_Column>;
	where?: Maybe<Finals_Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "finals_groups". */
export type Finals_Groups_Order_By = {
	created_at?: Maybe<Order_By>;
	default_game_length?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_pitches?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	final?: Maybe<Finals_Order_By>;
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	is_completed?: Maybe<Order_By>;
	matches_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	name?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
	parent_finals?: Maybe<Order_By>;
	placeholderTeamsByParentGroup_aggregate?: Maybe<Placeholder_Teams_Aggregate_Order_By>;
	placeholderTeamsBySeedingGroup_aggregate?: Maybe<Placeholder_Teams_Aggregate_Order_By>;
	qualification_positions?: Maybe<Order_By>;
	round_robin_format?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: finals_groups */
export type Finals_Groups_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "finals_groups" */
export enum Finals_Groups_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	DefaultGameLength = 'default_game_length',
	/** column name */
	DefaultHalfLength = 'default_half_length',
	/** column name */
	DefaultNumberOfHalves = 'default_number_of_halves',
	/** column name */
	DefaultPitches = 'default_pitches',
	/** column name */
	DefaultTimeSlot = 'default_time_slot',
	/** column name */
	Frequency = 'frequency',
	/** column name */
	Id = 'id',
	/** column name */
	IsCompleted = 'is_completed',
	/** column name */
	Name = 'name',
	/** column name */
	NumberOfTeams = 'number_of_teams',
	/** column name */
	ParentFinals = 'parent_finals',
	/** column name */
	QualificationPositions = 'qualification_positions',
	/** column name */
	RoundRobinFormat = 'round_robin_format',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "finals_groups" */
export type Finals_Groups_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_time_slot?: Maybe<Scalars['Int']>;
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	is_completed?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	number_of_teams?: Maybe<Scalars['Int']>;
	parent_finals?: Maybe<Scalars['uuid']>;
	qualification_positions?: Maybe<Scalars['String']>;
	round_robin_format?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Finals_Groups_Stddev_Fields = {
	__typename?: 'finals_groups_stddev_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_time_slot?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "finals_groups" */
export type Finals_Groups_Stddev_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Finals_Groups_Stddev_Pop_Fields = {
	__typename?: 'finals_groups_stddev_pop_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_time_slot?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "finals_groups" */
export type Finals_Groups_Stddev_Pop_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Finals_Groups_Stddev_Samp_Fields = {
	__typename?: 'finals_groups_stddev_samp_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_time_slot?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "finals_groups" */
export type Finals_Groups_Stddev_Samp_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Finals_Groups_Sum_Fields = {
	__typename?: 'finals_groups_sum_fields';
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_time_slot?: Maybe<Scalars['Int']>;
	number_of_teams?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "finals_groups" */
export type Finals_Groups_Sum_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** update columns of table "finals_groups" */
export enum Finals_Groups_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	DefaultGameLength = 'default_game_length',
	/** column name */
	DefaultHalfLength = 'default_half_length',
	/** column name */
	DefaultNumberOfHalves = 'default_number_of_halves',
	/** column name */
	DefaultPitches = 'default_pitches',
	/** column name */
	DefaultTimeSlot = 'default_time_slot',
	/** column name */
	Frequency = 'frequency',
	/** column name */
	Id = 'id',
	/** column name */
	IsCompleted = 'is_completed',
	/** column name */
	Name = 'name',
	/** column name */
	NumberOfTeams = 'number_of_teams',
	/** column name */
	ParentFinals = 'parent_finals',
	/** column name */
	QualificationPositions = 'qualification_positions',
	/** column name */
	RoundRobinFormat = 'round_robin_format',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Finals_Groups_Var_Pop_Fields = {
	__typename?: 'finals_groups_var_pop_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_time_slot?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "finals_groups" */
export type Finals_Groups_Var_Pop_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Finals_Groups_Var_Samp_Fields = {
	__typename?: 'finals_groups_var_samp_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_time_slot?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "finals_groups" */
export type Finals_Groups_Var_Samp_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Finals_Groups_Variance_Fields = {
	__typename?: 'finals_groups_variance_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_time_slot?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "finals_groups" */
export type Finals_Groups_Variance_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** input type for incrementing numeric columns in table "finals" */
export type Finals_Inc_Input = {
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "finals" */
export type Finals_Insert_Input = {
	/** hex color code for finals */
	color?: Maybe<Scalars['String']>;
	/** Name of the color of these finals */
	color_name?: Maybe<Scalars['String']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_the_week?: Maybe<Scalars['String']>;
	display_name?: Maybe<Scalars['String']>;
	finals_groups?: Maybe<Finals_Groups_Arr_Rel_Insert_Input>;
	finals_knockouts?: Maybe<Finals_Knockouts_Arr_Rel_Insert_Input>;
	/** Do these finals have a group stage? */
	group_stage?: Maybe<Scalars['Boolean']>;
	id?: Maybe<Scalars['uuid']>;
	join_finals_leagues?: Maybe<Join_Finals_Leagues_Arr_Rel_Insert_Input>;
	join_team_finals?: Maybe<Join_Team_Finals_Arr_Rel_Insert_Input>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	locationByLocation?: Maybe<Locations_Obj_Rel_Insert_Input>;
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Int']>;
	placeholder_teams?: Maybe<Placeholder_Teams_Arr_Rel_Insert_Input>;
	play_off?: Maybe<Scalars['Boolean']>;
	player_type?: Maybe<Scalars['String']>;
	published?: Maybe<Scalars['Boolean']>;
	status?: Maybe<Scalars['String']>;
	team_size?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "finals_knockouts" */
export type Finals_Knockouts = {
	__typename?: 'finals_knockouts';
	created_at: Scalars['timestamptz'];
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length: Scalars['Int'];
	default_number_of_halves: Scalars['Int'];
	default_pitches?: Maybe<Scalars['String']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	/** An object relationship */
	final: Finals;
	frequency: Scalars['String'];
	id: Scalars['uuid'];
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	number_of_teams?: Maybe<Scalars['Int']>;
	parent_finals: Scalars['uuid'];
	updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "finals_knockouts" */
export type Finals_KnockoutsMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "finals_knockouts" */
export type Finals_KnockoutsMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** aggregated selection of "finals_knockouts" */
export type Finals_Knockouts_Aggregate = {
	__typename?: 'finals_knockouts_aggregate';
	aggregate?: Maybe<Finals_Knockouts_Aggregate_Fields>;
	nodes: Array<Finals_Knockouts>;
};

/** aggregate fields of "finals_knockouts" */
export type Finals_Knockouts_Aggregate_Fields = {
	__typename?: 'finals_knockouts_aggregate_fields';
	avg?: Maybe<Finals_Knockouts_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Finals_Knockouts_Max_Fields>;
	min?: Maybe<Finals_Knockouts_Min_Fields>;
	stddev?: Maybe<Finals_Knockouts_Stddev_Fields>;
	stddev_pop?: Maybe<Finals_Knockouts_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Finals_Knockouts_Stddev_Samp_Fields>;
	sum?: Maybe<Finals_Knockouts_Sum_Fields>;
	var_pop?: Maybe<Finals_Knockouts_Var_Pop_Fields>;
	var_samp?: Maybe<Finals_Knockouts_Var_Samp_Fields>;
	variance?: Maybe<Finals_Knockouts_Variance_Fields>;
};

/** aggregate fields of "finals_knockouts" */
export type Finals_Knockouts_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Finals_Knockouts_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "finals_knockouts" */
export type Finals_Knockouts_Aggregate_Order_By = {
	avg?: Maybe<Finals_Knockouts_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<Finals_Knockouts_Max_Order_By>;
	min?: Maybe<Finals_Knockouts_Min_Order_By>;
	stddev?: Maybe<Finals_Knockouts_Stddev_Order_By>;
	stddev_pop?: Maybe<Finals_Knockouts_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<Finals_Knockouts_Stddev_Samp_Order_By>;
	sum?: Maybe<Finals_Knockouts_Sum_Order_By>;
	var_pop?: Maybe<Finals_Knockouts_Var_Pop_Order_By>;
	var_samp?: Maybe<Finals_Knockouts_Var_Samp_Order_By>;
	variance?: Maybe<Finals_Knockouts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "finals_knockouts" */
export type Finals_Knockouts_Arr_Rel_Insert_Input = {
	data: Array<Finals_Knockouts_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Finals_Knockouts_On_Conflict>;
};

/** aggregate avg on columns */
export type Finals_Knockouts_Avg_Fields = {
	__typename?: 'finals_knockouts_avg_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "finals_knockouts" */
export type Finals_Knockouts_Avg_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "finals_knockouts". All fields are combined with a logical 'AND'. */
export type Finals_Knockouts_Bool_Exp = {
	_and?: Maybe<Array<Finals_Knockouts_Bool_Exp>>;
	_not?: Maybe<Finals_Knockouts_Bool_Exp>;
	_or?: Maybe<Array<Finals_Knockouts_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	default_game_length?: Maybe<String_Comparison_Exp>;
	default_half_length?: Maybe<Int_Comparison_Exp>;
	default_number_of_halves?: Maybe<Int_Comparison_Exp>;
	default_pitches?: Maybe<String_Comparison_Exp>;
	default_slot_duration?: Maybe<Int_Comparison_Exp>;
	final?: Maybe<Finals_Bool_Exp>;
	frequency?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	matches?: Maybe<Matches_Bool_Exp>;
	number_of_teams?: Maybe<Int_Comparison_Exp>;
	parent_finals?: Maybe<Uuid_Comparison_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "finals_knockouts" */
export enum Finals_Knockouts_Constraint {
	/** unique or primary key constraint */
	FinalsKnockoutPkey = 'finals_knockout_pkey',
}

/** input type for incrementing numeric columns in table "finals_knockouts" */
export type Finals_Knockouts_Inc_Input = {
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	number_of_teams?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "finals_knockouts" */
export type Finals_Knockouts_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	final?: Maybe<Finals_Obj_Rel_Insert_Input>;
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	matches?: Maybe<Matches_Arr_Rel_Insert_Input>;
	number_of_teams?: Maybe<Scalars['Int']>;
	parent_finals?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Finals_Knockouts_Max_Fields = {
	__typename?: 'finals_knockouts_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	number_of_teams?: Maybe<Scalars['Int']>;
	parent_finals?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "finals_knockouts" */
export type Finals_Knockouts_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	default_game_length?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_pitches?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
	parent_finals?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Finals_Knockouts_Min_Fields = {
	__typename?: 'finals_knockouts_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	number_of_teams?: Maybe<Scalars['Int']>;
	parent_finals?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "finals_knockouts" */
export type Finals_Knockouts_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	default_game_length?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_pitches?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
	parent_finals?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "finals_knockouts" */
export type Finals_Knockouts_Mutation_Response = {
	__typename?: 'finals_knockouts_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Finals_Knockouts>;
};

/** input type for inserting object relation for remote table "finals_knockouts" */
export type Finals_Knockouts_Obj_Rel_Insert_Input = {
	data: Finals_Knockouts_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Finals_Knockouts_On_Conflict>;
};

/** on conflict condition type for table "finals_knockouts" */
export type Finals_Knockouts_On_Conflict = {
	constraint: Finals_Knockouts_Constraint;
	update_columns?: Array<Finals_Knockouts_Update_Column>;
	where?: Maybe<Finals_Knockouts_Bool_Exp>;
};

/** Ordering options when selecting data from "finals_knockouts". */
export type Finals_Knockouts_Order_By = {
	created_at?: Maybe<Order_By>;
	default_game_length?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_pitches?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	final?: Maybe<Finals_Order_By>;
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	matches_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	number_of_teams?: Maybe<Order_By>;
	parent_finals?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: finals_knockouts */
export type Finals_Knockouts_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "finals_knockouts" */
export enum Finals_Knockouts_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	DefaultGameLength = 'default_game_length',
	/** column name */
	DefaultHalfLength = 'default_half_length',
	/** column name */
	DefaultNumberOfHalves = 'default_number_of_halves',
	/** column name */
	DefaultPitches = 'default_pitches',
	/** column name */
	DefaultSlotDuration = 'default_slot_duration',
	/** column name */
	Frequency = 'frequency',
	/** column name */
	Id = 'id',
	/** column name */
	NumberOfTeams = 'number_of_teams',
	/** column name */
	ParentFinals = 'parent_finals',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "finals_knockouts" */
export type Finals_Knockouts_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	number_of_teams?: Maybe<Scalars['Int']>;
	parent_finals?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Finals_Knockouts_Stddev_Fields = {
	__typename?: 'finals_knockouts_stddev_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "finals_knockouts" */
export type Finals_Knockouts_Stddev_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Finals_Knockouts_Stddev_Pop_Fields = {
	__typename?: 'finals_knockouts_stddev_pop_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "finals_knockouts" */
export type Finals_Knockouts_Stddev_Pop_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Finals_Knockouts_Stddev_Samp_Fields = {
	__typename?: 'finals_knockouts_stddev_samp_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "finals_knockouts" */
export type Finals_Knockouts_Stddev_Samp_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Finals_Knockouts_Sum_Fields = {
	__typename?: 'finals_knockouts_sum_fields';
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	number_of_teams?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "finals_knockouts" */
export type Finals_Knockouts_Sum_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** update columns of table "finals_knockouts" */
export enum Finals_Knockouts_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	DefaultGameLength = 'default_game_length',
	/** column name */
	DefaultHalfLength = 'default_half_length',
	/** column name */
	DefaultNumberOfHalves = 'default_number_of_halves',
	/** column name */
	DefaultPitches = 'default_pitches',
	/** column name */
	DefaultSlotDuration = 'default_slot_duration',
	/** column name */
	Frequency = 'frequency',
	/** column name */
	Id = 'id',
	/** column name */
	NumberOfTeams = 'number_of_teams',
	/** column name */
	ParentFinals = 'parent_finals',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Finals_Knockouts_Var_Pop_Fields = {
	__typename?: 'finals_knockouts_var_pop_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "finals_knockouts" */
export type Finals_Knockouts_Var_Pop_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Finals_Knockouts_Var_Samp_Fields = {
	__typename?: 'finals_knockouts_var_samp_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "finals_knockouts" */
export type Finals_Knockouts_Var_Samp_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Finals_Knockouts_Variance_Fields = {
	__typename?: 'finals_knockouts_variance_fields';
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "finals_knockouts" */
export type Finals_Knockouts_Variance_Order_By = {
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Finals_Max_Fields = {
	__typename?: 'finals_max_fields';
	/** hex color code for finals */
	color?: Maybe<Scalars['String']>;
	/** Name of the color of these finals */
	color_name?: Maybe<Scalars['String']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_the_week?: Maybe<Scalars['String']>;
	display_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Int']>;
	player_type?: Maybe<Scalars['String']>;
	status?: Maybe<Scalars['String']>;
	team_size?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "finals" */
export type Finals_Max_Order_By = {
	/** hex color code for finals */
	color?: Maybe<Order_By>;
	/** Name of the color of these finals */
	color_name?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	day_of_the_week?: Maybe<Order_By>;
	display_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	kick_off_date?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	status?: Maybe<Order_By>;
	team_size?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Finals_Min_Fields = {
	__typename?: 'finals_min_fields';
	/** hex color code for finals */
	color?: Maybe<Scalars['String']>;
	/** Name of the color of these finals */
	color_name?: Maybe<Scalars['String']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_the_week?: Maybe<Scalars['String']>;
	display_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Int']>;
	player_type?: Maybe<Scalars['String']>;
	status?: Maybe<Scalars['String']>;
	team_size?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "finals" */
export type Finals_Min_Order_By = {
	/** hex color code for finals */
	color?: Maybe<Order_By>;
	/** Name of the color of these finals */
	color_name?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	day_of_the_week?: Maybe<Order_By>;
	display_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	kick_off_date?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	status?: Maybe<Order_By>;
	team_size?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "finals" */
export type Finals_Mutation_Response = {
	__typename?: 'finals_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Finals>;
};

/** input type for inserting object relation for remote table "finals" */
export type Finals_Obj_Rel_Insert_Input = {
	data: Finals_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Finals_On_Conflict>;
};

/** on conflict condition type for table "finals" */
export type Finals_On_Conflict = {
	constraint: Finals_Constraint;
	update_columns?: Array<Finals_Update_Column>;
	where?: Maybe<Finals_Bool_Exp>;
};

/** Ordering options when selecting data from "finals". */
export type Finals_Order_By = {
	color?: Maybe<Order_By>;
	color_name?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	day_of_the_week?: Maybe<Order_By>;
	display_name?: Maybe<Order_By>;
	finals_groups_aggregate?: Maybe<Finals_Groups_Aggregate_Order_By>;
	finals_knockouts_aggregate?: Maybe<Finals_Knockouts_Aggregate_Order_By>;
	group_stage?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	join_finals_leagues_aggregate?: Maybe<Join_Finals_Leagues_Aggregate_Order_By>;
	join_team_finals_aggregate?: Maybe<Join_Team_Finals_Aggregate_Order_By>;
	kick_off_date?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	locationByLocation?: Maybe<Locations_Order_By>;
	number_of_teams?: Maybe<Order_By>;
	placeholder_teams_aggregate?: Maybe<Placeholder_Teams_Aggregate_Order_By>;
	play_off?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	published?: Maybe<Order_By>;
	status?: Maybe<Order_By>;
	team_size?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: finals */
export type Finals_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "finals" */
export enum Finals_Select_Column {
	/** column name */
	Color = 'color',
	/** column name */
	ColorName = 'color_name',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	DayOfTheWeek = 'day_of_the_week',
	/** column name */
	DisplayName = 'display_name',
	/** column name */
	GroupStage = 'group_stage',
	/** column name */
	Id = 'id',
	/** column name */
	KickOffDate = 'kick_off_date',
	/** column name */
	Location = 'location',
	/** column name */
	NumberOfTeams = 'number_of_teams',
	/** column name */
	PlayOff = 'play_off',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	Published = 'published',
	/** column name */
	Status = 'status',
	/** column name */
	TeamSize = 'team_size',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "finals" */
export type Finals_Set_Input = {
	/** hex color code for finals */
	color?: Maybe<Scalars['String']>;
	/** Name of the color of these finals */
	color_name?: Maybe<Scalars['String']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_the_week?: Maybe<Scalars['String']>;
	display_name?: Maybe<Scalars['String']>;
	/** Do these finals have a group stage? */
	group_stage?: Maybe<Scalars['Boolean']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Int']>;
	play_off?: Maybe<Scalars['Boolean']>;
	player_type?: Maybe<Scalars['String']>;
	published?: Maybe<Scalars['Boolean']>;
	status?: Maybe<Scalars['String']>;
	team_size?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Finals_Stddev_Fields = {
	__typename?: 'finals_stddev_fields';
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "finals" */
export type Finals_Stddev_Order_By = {
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Finals_Stddev_Pop_Fields = {
	__typename?: 'finals_stddev_pop_fields';
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "finals" */
export type Finals_Stddev_Pop_Order_By = {
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Finals_Stddev_Samp_Fields = {
	__typename?: 'finals_stddev_samp_fields';
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "finals" */
export type Finals_Stddev_Samp_Order_By = {
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Finals_Sum_Fields = {
	__typename?: 'finals_sum_fields';
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "finals" */
export type Finals_Sum_Order_By = {
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Order_By>;
};

/** update columns of table "finals" */
export enum Finals_Update_Column {
	/** column name */
	Color = 'color',
	/** column name */
	ColorName = 'color_name',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	DayOfTheWeek = 'day_of_the_week',
	/** column name */
	DisplayName = 'display_name',
	/** column name */
	GroupStage = 'group_stage',
	/** column name */
	Id = 'id',
	/** column name */
	KickOffDate = 'kick_off_date',
	/** column name */
	Location = 'location',
	/** column name */
	NumberOfTeams = 'number_of_teams',
	/** column name */
	PlayOff = 'play_off',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	Published = 'published',
	/** column name */
	Status = 'status',
	/** column name */
	TeamSize = 'team_size',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Finals_Var_Pop_Fields = {
	__typename?: 'finals_var_pop_fields';
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "finals" */
export type Finals_Var_Pop_Order_By = {
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Finals_Var_Samp_Fields = {
	__typename?: 'finals_var_samp_fields';
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "finals" */
export type Finals_Var_Samp_Order_By = {
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Finals_Variance_Fields = {
	__typename?: 'finals_variance_fields';
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "finals" */
export type Finals_Variance_Order_By = {
	/** Total number of teams in finals */
	number_of_teams?: Maybe<Order_By>;
};

/**
 * Table containing all of the footy users who have registered for an account and have access to the PWA
 *
 *
 * columns and relationships of "footy_users"
 *
 */
export type Footy_Users = {
	__typename?: 'footy_users';
	created_at: Scalars['timestamptz'];
	firebase_id: Scalars['String'];
	first_name: Scalars['String'];
	id: Scalars['uuid'];
	/** An array relationship */
	join_footy_users_teams: Array<Join_Footy_Users_Teams>;
	/** An aggregate relationship */
	join_footy_users_teams_aggregate: Join_Footy_Users_Teams_Aggregate;
	last_name: Scalars['String'];
	player?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	playerByPlayer?: Maybe<Players>;
	updated_at: Scalars['timestamptz'];
};

/**
 * Table containing all of the footy users who have registered for an account and have access to the PWA
 *
 *
 * columns and relationships of "footy_users"
 *
 */
export type Footy_UsersJoin_Footy_Users_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_Footy_Users_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Footy_Users_Teams_Order_By>>;
	where?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
};

/**
 * Table containing all of the footy users who have registered for an account and have access to the PWA
 *
 *
 * columns and relationships of "footy_users"
 *
 */
export type Footy_UsersJoin_Footy_Users_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Footy_Users_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Footy_Users_Teams_Order_By>>;
	where?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
};

/** aggregated selection of "footy_users" */
export type Footy_Users_Aggregate = {
	__typename?: 'footy_users_aggregate';
	aggregate?: Maybe<Footy_Users_Aggregate_Fields>;
	nodes: Array<Footy_Users>;
};

/** aggregate fields of "footy_users" */
export type Footy_Users_Aggregate_Fields = {
	__typename?: 'footy_users_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Footy_Users_Max_Fields>;
	min?: Maybe<Footy_Users_Min_Fields>;
};

/** aggregate fields of "footy_users" */
export type Footy_Users_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Footy_Users_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "footy_users" */
export type Footy_Users_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Footy_Users_Max_Order_By>;
	min?: Maybe<Footy_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "footy_users" */
export type Footy_Users_Arr_Rel_Insert_Input = {
	data: Array<Footy_Users_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Footy_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "footy_users". All fields are combined with a logical 'AND'. */
export type Footy_Users_Bool_Exp = {
	_and?: Maybe<Array<Footy_Users_Bool_Exp>>;
	_not?: Maybe<Footy_Users_Bool_Exp>;
	_or?: Maybe<Array<Footy_Users_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	firebase_id?: Maybe<String_Comparison_Exp>;
	first_name?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	join_footy_users_teams?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
	last_name?: Maybe<String_Comparison_Exp>;
	player?: Maybe<Uuid_Comparison_Exp>;
	playerByPlayer?: Maybe<Players_Bool_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "footy_users" */
export enum Footy_Users_Constraint {
	/** unique or primary key constraint */
	FootyUsersPkey = 'footy_users_pkey',
}

/** input type for inserting data into table "footy_users" */
export type Footy_Users_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	firebase_id?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	join_footy_users_teams?: Maybe<Join_Footy_Users_Teams_Arr_Rel_Insert_Input>;
	last_name?: Maybe<Scalars['String']>;
	player?: Maybe<Scalars['uuid']>;
	playerByPlayer?: Maybe<Players_Obj_Rel_Insert_Input>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Footy_Users_Max_Fields = {
	__typename?: 'footy_users_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	firebase_id?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	player?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "footy_users" */
export type Footy_Users_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	firebase_id?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	player?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Footy_Users_Min_Fields = {
	__typename?: 'footy_users_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	firebase_id?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	player?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "footy_users" */
export type Footy_Users_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	firebase_id?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	player?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "footy_users" */
export type Footy_Users_Mutation_Response = {
	__typename?: 'footy_users_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Footy_Users>;
};

/** input type for inserting object relation for remote table "footy_users" */
export type Footy_Users_Obj_Rel_Insert_Input = {
	data: Footy_Users_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Footy_Users_On_Conflict>;
};

/** on conflict condition type for table "footy_users" */
export type Footy_Users_On_Conflict = {
	constraint: Footy_Users_Constraint;
	update_columns?: Array<Footy_Users_Update_Column>;
	where?: Maybe<Footy_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "footy_users". */
export type Footy_Users_Order_By = {
	created_at?: Maybe<Order_By>;
	firebase_id?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	join_footy_users_teams_aggregate?: Maybe<Join_Footy_Users_Teams_Aggregate_Order_By>;
	last_name?: Maybe<Order_By>;
	player?: Maybe<Order_By>;
	playerByPlayer?: Maybe<Players_Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: footy_users */
export type Footy_Users_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "footy_users" */
export enum Footy_Users_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	FirebaseId = 'firebase_id',
	/** column name */
	FirstName = 'first_name',
	/** column name */
	Id = 'id',
	/** column name */
	LastName = 'last_name',
	/** column name */
	Player = 'player',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "footy_users" */
export type Footy_Users_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	firebase_id?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	player?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "footy_users" */
export enum Footy_Users_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	FirebaseId = 'firebase_id',
	/** column name */
	FirstName = 'first_name',
	/** column name */
	Id = 'id',
	/** column name */
	LastName = 'last_name',
	/** column name */
	Player = 'player',
	/** column name */
	UpdatedAt = 'updated_at',
}

/**
 * This table ties team names to teams so that is a team changes it's name we can still keep a record of the previous ones
 *
 *
 * columns and relationships of "historic_team_names"
 *
 */
export type Historic_Team_Names = {
	__typename?: 'historic_team_names';
	created_at: Scalars['timestamptz'];
	id: Scalars['uuid'];
	name: Scalars['String'];
	team: Scalars['uuid'];
	/** An object relationship */
	teamByTeam: Teams;
	updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "historic_team_names" */
export type Historic_Team_Names_Aggregate = {
	__typename?: 'historic_team_names_aggregate';
	aggregate?: Maybe<Historic_Team_Names_Aggregate_Fields>;
	nodes: Array<Historic_Team_Names>;
};

/** aggregate fields of "historic_team_names" */
export type Historic_Team_Names_Aggregate_Fields = {
	__typename?: 'historic_team_names_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Historic_Team_Names_Max_Fields>;
	min?: Maybe<Historic_Team_Names_Min_Fields>;
};

/** aggregate fields of "historic_team_names" */
export type Historic_Team_Names_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Historic_Team_Names_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "historic_team_names" */
export type Historic_Team_Names_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Historic_Team_Names_Max_Order_By>;
	min?: Maybe<Historic_Team_Names_Min_Order_By>;
};

/** input type for inserting array relation for remote table "historic_team_names" */
export type Historic_Team_Names_Arr_Rel_Insert_Input = {
	data: Array<Historic_Team_Names_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Historic_Team_Names_On_Conflict>;
};

/** Boolean expression to filter rows from the table "historic_team_names". All fields are combined with a logical 'AND'. */
export type Historic_Team_Names_Bool_Exp = {
	_and?: Maybe<Array<Historic_Team_Names_Bool_Exp>>;
	_not?: Maybe<Historic_Team_Names_Bool_Exp>;
	_or?: Maybe<Array<Historic_Team_Names_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	name?: Maybe<String_Comparison_Exp>;
	team?: Maybe<Uuid_Comparison_Exp>;
	teamByTeam?: Maybe<Teams_Bool_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "historic_team_names" */
export enum Historic_Team_Names_Constraint {
	/** unique or primary key constraint */
	HistoricTeamNamesPkey = 'historic_team_names_pkey',
}

/** input type for inserting data into table "historic_team_names" */
export type Historic_Team_Names_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	team?: Maybe<Scalars['uuid']>;
	teamByTeam?: Maybe<Teams_Obj_Rel_Insert_Input>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Historic_Team_Names_Max_Fields = {
	__typename?: 'historic_team_names_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "historic_team_names" */
export type Historic_Team_Names_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Historic_Team_Names_Min_Fields = {
	__typename?: 'historic_team_names_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "historic_team_names" */
export type Historic_Team_Names_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "historic_team_names" */
export type Historic_Team_Names_Mutation_Response = {
	__typename?: 'historic_team_names_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Historic_Team_Names>;
};

/** on conflict condition type for table "historic_team_names" */
export type Historic_Team_Names_On_Conflict = {
	constraint: Historic_Team_Names_Constraint;
	update_columns?: Array<Historic_Team_Names_Update_Column>;
	where?: Maybe<Historic_Team_Names_Bool_Exp>;
};

/** Ordering options when selecting data from "historic_team_names". */
export type Historic_Team_Names_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	teamByTeam?: Maybe<Teams_Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: historic_team_names */
export type Historic_Team_Names_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "historic_team_names" */
export enum Historic_Team_Names_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	Team = 'team',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "historic_team_names" */
export type Historic_Team_Names_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "historic_team_names" */
export enum Historic_Team_Names_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	Team = 'team',
	/** column name */
	UpdatedAt = 'updated_at',
}

/**
 * Join table to link leagues with finals
 *
 *
 * columns and relationships of "join_finals_leagues"
 *
 */
export type Join_Finals_Leagues = {
	__typename?: 'join_finals_leagues';
	created_at: Scalars['timestamptz'];
	/** An object relationship */
	final: Finals;
	finals: Scalars['uuid'];
	id: Scalars['uuid'];
	league: Scalars['uuid'];
	/** An object relationship */
	leagueByLeague: Leagues;
	qualification_positions?: Maybe<Scalars['String']>;
	qualification_positions_ids?: Maybe<Scalars['String']>;
	updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "join_finals_leagues" */
export type Join_Finals_Leagues_Aggregate = {
	__typename?: 'join_finals_leagues_aggregate';
	aggregate?: Maybe<Join_Finals_Leagues_Aggregate_Fields>;
	nodes: Array<Join_Finals_Leagues>;
};

/** aggregate fields of "join_finals_leagues" */
export type Join_Finals_Leagues_Aggregate_Fields = {
	__typename?: 'join_finals_leagues_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Join_Finals_Leagues_Max_Fields>;
	min?: Maybe<Join_Finals_Leagues_Min_Fields>;
};

/** aggregate fields of "join_finals_leagues" */
export type Join_Finals_Leagues_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Join_Finals_Leagues_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "join_finals_leagues" */
export type Join_Finals_Leagues_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Join_Finals_Leagues_Max_Order_By>;
	min?: Maybe<Join_Finals_Leagues_Min_Order_By>;
};

/** input type for inserting array relation for remote table "join_finals_leagues" */
export type Join_Finals_Leagues_Arr_Rel_Insert_Input = {
	data: Array<Join_Finals_Leagues_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Join_Finals_Leagues_On_Conflict>;
};

/** Boolean expression to filter rows from the table "join_finals_leagues". All fields are combined with a logical 'AND'. */
export type Join_Finals_Leagues_Bool_Exp = {
	_and?: Maybe<Array<Join_Finals_Leagues_Bool_Exp>>;
	_not?: Maybe<Join_Finals_Leagues_Bool_Exp>;
	_or?: Maybe<Array<Join_Finals_Leagues_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	final?: Maybe<Finals_Bool_Exp>;
	finals?: Maybe<Uuid_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	league?: Maybe<Uuid_Comparison_Exp>;
	leagueByLeague?: Maybe<Leagues_Bool_Exp>;
	qualification_positions?: Maybe<String_Comparison_Exp>;
	qualification_positions_ids?: Maybe<String_Comparison_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "join_finals_leagues" */
export enum Join_Finals_Leagues_Constraint {
	/** unique or primary key constraint */
	FinalsLeaguesPkey = 'finals_leagues_pkey',
}

/** input type for inserting data into table "join_finals_leagues" */
export type Join_Finals_Leagues_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	final?: Maybe<Finals_Obj_Rel_Insert_Input>;
	finals?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	league?: Maybe<Scalars['uuid']>;
	leagueByLeague?: Maybe<Leagues_Obj_Rel_Insert_Input>;
	qualification_positions?: Maybe<Scalars['String']>;
	qualification_positions_ids?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Join_Finals_Leagues_Max_Fields = {
	__typename?: 'join_finals_leagues_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	finals?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	league?: Maybe<Scalars['uuid']>;
	qualification_positions?: Maybe<Scalars['String']>;
	qualification_positions_ids?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "join_finals_leagues" */
export type Join_Finals_Leagues_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	finals?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	league?: Maybe<Order_By>;
	qualification_positions?: Maybe<Order_By>;
	qualification_positions_ids?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Join_Finals_Leagues_Min_Fields = {
	__typename?: 'join_finals_leagues_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	finals?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	league?: Maybe<Scalars['uuid']>;
	qualification_positions?: Maybe<Scalars['String']>;
	qualification_positions_ids?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "join_finals_leagues" */
export type Join_Finals_Leagues_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	finals?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	league?: Maybe<Order_By>;
	qualification_positions?: Maybe<Order_By>;
	qualification_positions_ids?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "join_finals_leagues" */
export type Join_Finals_Leagues_Mutation_Response = {
	__typename?: 'join_finals_leagues_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Join_Finals_Leagues>;
};

/** on conflict condition type for table "join_finals_leagues" */
export type Join_Finals_Leagues_On_Conflict = {
	constraint: Join_Finals_Leagues_Constraint;
	update_columns?: Array<Join_Finals_Leagues_Update_Column>;
	where?: Maybe<Join_Finals_Leagues_Bool_Exp>;
};

/** Ordering options when selecting data from "join_finals_leagues". */
export type Join_Finals_Leagues_Order_By = {
	created_at?: Maybe<Order_By>;
	final?: Maybe<Finals_Order_By>;
	finals?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	league?: Maybe<Order_By>;
	leagueByLeague?: Maybe<Leagues_Order_By>;
	qualification_positions?: Maybe<Order_By>;
	qualification_positions_ids?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: join_finals_leagues */
export type Join_Finals_Leagues_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "join_finals_leagues" */
export enum Join_Finals_Leagues_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Finals = 'finals',
	/** column name */
	Id = 'id',
	/** column name */
	League = 'league',
	/** column name */
	QualificationPositions = 'qualification_positions',
	/** column name */
	QualificationPositionsIds = 'qualification_positions_ids',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "join_finals_leagues" */
export type Join_Finals_Leagues_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	finals?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	league?: Maybe<Scalars['uuid']>;
	qualification_positions?: Maybe<Scalars['String']>;
	qualification_positions_ids?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "join_finals_leagues" */
export enum Join_Finals_Leagues_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Finals = 'finals',
	/** column name */
	Id = 'id',
	/** column name */
	League = 'league',
	/** column name */
	QualificationPositions = 'qualification_positions',
	/** column name */
	QualificationPositionsIds = 'qualification_positions_ids',
	/** column name */
	UpdatedAt = 'updated_at',
}

/**
 * Table linking pwa users to the teams that they are a member of
 *
 *
 * columns and relationships of "join_footy_users_teams"
 *
 */
export type Join_Footy_Users_Teams = {
	__typename?: 'join_footy_users_teams';
	created_at: Scalars['timestamptz'];
	/** An object relationship */
	footyUserByFootyUser: Footy_Users;
	footy_user: Scalars['uuid'];
	id: Scalars['uuid'];
	team: Scalars['uuid'];
	/** An object relationship */
	teamByTeam: Teams;
	updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "join_footy_users_teams" */
export type Join_Footy_Users_Teams_Aggregate = {
	__typename?: 'join_footy_users_teams_aggregate';
	aggregate?: Maybe<Join_Footy_Users_Teams_Aggregate_Fields>;
	nodes: Array<Join_Footy_Users_Teams>;
};

/** aggregate fields of "join_footy_users_teams" */
export type Join_Footy_Users_Teams_Aggregate_Fields = {
	__typename?: 'join_footy_users_teams_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Join_Footy_Users_Teams_Max_Fields>;
	min?: Maybe<Join_Footy_Users_Teams_Min_Fields>;
};

/** aggregate fields of "join_footy_users_teams" */
export type Join_Footy_Users_Teams_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Join_Footy_Users_Teams_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "join_footy_users_teams" */
export type Join_Footy_Users_Teams_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Join_Footy_Users_Teams_Max_Order_By>;
	min?: Maybe<Join_Footy_Users_Teams_Min_Order_By>;
};

/** input type for inserting array relation for remote table "join_footy_users_teams" */
export type Join_Footy_Users_Teams_Arr_Rel_Insert_Input = {
	data: Array<Join_Footy_Users_Teams_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Join_Footy_Users_Teams_On_Conflict>;
};

/** Boolean expression to filter rows from the table "join_footy_users_teams". All fields are combined with a logical 'AND'. */
export type Join_Footy_Users_Teams_Bool_Exp = {
	_and?: Maybe<Array<Join_Footy_Users_Teams_Bool_Exp>>;
	_not?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
	_or?: Maybe<Array<Join_Footy_Users_Teams_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	footyUserByFootyUser?: Maybe<Footy_Users_Bool_Exp>;
	footy_user?: Maybe<Uuid_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	team?: Maybe<Uuid_Comparison_Exp>;
	teamByTeam?: Maybe<Teams_Bool_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "join_footy_users_teams" */
export enum Join_Footy_Users_Teams_Constraint {
	/** unique or primary key constraint */
	JoinFootyUsersTeamsPkey = 'join_footy_users_teams_pkey',
}

/** input type for inserting data into table "join_footy_users_teams" */
export type Join_Footy_Users_Teams_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	footyUserByFootyUser?: Maybe<Footy_Users_Obj_Rel_Insert_Input>;
	footy_user?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	teamByTeam?: Maybe<Teams_Obj_Rel_Insert_Input>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Join_Footy_Users_Teams_Max_Fields = {
	__typename?: 'join_footy_users_teams_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	footy_user?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "join_footy_users_teams" */
export type Join_Footy_Users_Teams_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	footy_user?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Join_Footy_Users_Teams_Min_Fields = {
	__typename?: 'join_footy_users_teams_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	footy_user?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "join_footy_users_teams" */
export type Join_Footy_Users_Teams_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	footy_user?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "join_footy_users_teams" */
export type Join_Footy_Users_Teams_Mutation_Response = {
	__typename?: 'join_footy_users_teams_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Join_Footy_Users_Teams>;
};

/** on conflict condition type for table "join_footy_users_teams" */
export type Join_Footy_Users_Teams_On_Conflict = {
	constraint: Join_Footy_Users_Teams_Constraint;
	update_columns?: Array<Join_Footy_Users_Teams_Update_Column>;
	where?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "join_footy_users_teams". */
export type Join_Footy_Users_Teams_Order_By = {
	created_at?: Maybe<Order_By>;
	footyUserByFootyUser?: Maybe<Footy_Users_Order_By>;
	footy_user?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	teamByTeam?: Maybe<Teams_Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: join_footy_users_teams */
export type Join_Footy_Users_Teams_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "join_footy_users_teams" */
export enum Join_Footy_Users_Teams_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	FootyUser = 'footy_user',
	/** column name */
	Id = 'id',
	/** column name */
	Team = 'team',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "join_footy_users_teams" */
export type Join_Footy_Users_Teams_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	footy_user?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "join_footy_users_teams" */
export enum Join_Footy_Users_Teams_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	FootyUser = 'footy_user',
	/** column name */
	Id = 'id',
	/** column name */
	Team = 'team',
	/** column name */
	UpdatedAt = 'updated_at',
}

/**
 * Registers teams or placeholder_teams to leagues
 *
 *
 * columns and relationships of "join_league_teams"
 *
 */
export type Join_League_Teams = {
	__typename?: 'join_league_teams';
	deleted_at?: Maybe<Scalars['timestamptz']>;
	drawn_carried?: Maybe<Scalars['Int']>;
	gd_carried?: Maybe<Scalars['Int']>;
	gs_carried?: Maybe<Scalars['Int']>;
	id: Scalars['uuid'];
	is_active: Scalars['Boolean'];
	/** An object relationship */
	league: Leagues;
	league_id: Scalars['uuid'];
	lost_carried?: Maybe<Scalars['Int']>;
	placeholder_id?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	placeholder_team?: Maybe<Placeholder_Teams>;
	played_carried?: Maybe<Scalars['Int']>;
	points_carried?: Maybe<Scalars['Int']>;
	/** An object relationship */
	team?: Maybe<Teams>;
	team_id?: Maybe<Scalars['uuid']>;
	won_carried?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "join_league_teams" */
export type Join_League_Teams_Aggregate = {
	__typename?: 'join_league_teams_aggregate';
	aggregate?: Maybe<Join_League_Teams_Aggregate_Fields>;
	nodes: Array<Join_League_Teams>;
};

/** aggregate fields of "join_league_teams" */
export type Join_League_Teams_Aggregate_Fields = {
	__typename?: 'join_league_teams_aggregate_fields';
	avg?: Maybe<Join_League_Teams_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Join_League_Teams_Max_Fields>;
	min?: Maybe<Join_League_Teams_Min_Fields>;
	stddev?: Maybe<Join_League_Teams_Stddev_Fields>;
	stddev_pop?: Maybe<Join_League_Teams_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Join_League_Teams_Stddev_Samp_Fields>;
	sum?: Maybe<Join_League_Teams_Sum_Fields>;
	var_pop?: Maybe<Join_League_Teams_Var_Pop_Fields>;
	var_samp?: Maybe<Join_League_Teams_Var_Samp_Fields>;
	variance?: Maybe<Join_League_Teams_Variance_Fields>;
};

/** aggregate fields of "join_league_teams" */
export type Join_League_Teams_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Join_League_Teams_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "join_league_teams" */
export type Join_League_Teams_Aggregate_Order_By = {
	avg?: Maybe<Join_League_Teams_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<Join_League_Teams_Max_Order_By>;
	min?: Maybe<Join_League_Teams_Min_Order_By>;
	stddev?: Maybe<Join_League_Teams_Stddev_Order_By>;
	stddev_pop?: Maybe<Join_League_Teams_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<Join_League_Teams_Stddev_Samp_Order_By>;
	sum?: Maybe<Join_League_Teams_Sum_Order_By>;
	var_pop?: Maybe<Join_League_Teams_Var_Pop_Order_By>;
	var_samp?: Maybe<Join_League_Teams_Var_Samp_Order_By>;
	variance?: Maybe<Join_League_Teams_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "join_league_teams" */
export type Join_League_Teams_Arr_Rel_Insert_Input = {
	data: Array<Join_League_Teams_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Join_League_Teams_On_Conflict>;
};

/** aggregate avg on columns */
export type Join_League_Teams_Avg_Fields = {
	__typename?: 'join_league_teams_avg_fields';
	drawn_carried?: Maybe<Scalars['Float']>;
	gd_carried?: Maybe<Scalars['Float']>;
	gs_carried?: Maybe<Scalars['Float']>;
	lost_carried?: Maybe<Scalars['Float']>;
	played_carried?: Maybe<Scalars['Float']>;
	points_carried?: Maybe<Scalars['Float']>;
	won_carried?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "join_league_teams" */
export type Join_League_Teams_Avg_Order_By = {
	drawn_carried?: Maybe<Order_By>;
	gd_carried?: Maybe<Order_By>;
	gs_carried?: Maybe<Order_By>;
	lost_carried?: Maybe<Order_By>;
	played_carried?: Maybe<Order_By>;
	points_carried?: Maybe<Order_By>;
	won_carried?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "join_league_teams". All fields are combined with a logical 'AND'. */
export type Join_League_Teams_Bool_Exp = {
	_and?: Maybe<Array<Join_League_Teams_Bool_Exp>>;
	_not?: Maybe<Join_League_Teams_Bool_Exp>;
	_or?: Maybe<Array<Join_League_Teams_Bool_Exp>>;
	deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
	drawn_carried?: Maybe<Int_Comparison_Exp>;
	gd_carried?: Maybe<Int_Comparison_Exp>;
	gs_carried?: Maybe<Int_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	is_active?: Maybe<Boolean_Comparison_Exp>;
	league?: Maybe<Leagues_Bool_Exp>;
	league_id?: Maybe<Uuid_Comparison_Exp>;
	lost_carried?: Maybe<Int_Comparison_Exp>;
	placeholder_id?: Maybe<Uuid_Comparison_Exp>;
	placeholder_team?: Maybe<Placeholder_Teams_Bool_Exp>;
	played_carried?: Maybe<Int_Comparison_Exp>;
	points_carried?: Maybe<Int_Comparison_Exp>;
	team?: Maybe<Teams_Bool_Exp>;
	team_id?: Maybe<Uuid_Comparison_Exp>;
	won_carried?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "join_league_teams" */
export enum Join_League_Teams_Constraint {
	/** unique or primary key constraint */
	LeagueEntriesPkey = 'league_entries_pkey',
}

/** input type for incrementing numeric columns in table "join_league_teams" */
export type Join_League_Teams_Inc_Input = {
	drawn_carried?: Maybe<Scalars['Int']>;
	gd_carried?: Maybe<Scalars['Int']>;
	gs_carried?: Maybe<Scalars['Int']>;
	lost_carried?: Maybe<Scalars['Int']>;
	played_carried?: Maybe<Scalars['Int']>;
	points_carried?: Maybe<Scalars['Int']>;
	won_carried?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "join_league_teams" */
export type Join_League_Teams_Insert_Input = {
	deleted_at?: Maybe<Scalars['timestamptz']>;
	drawn_carried?: Maybe<Scalars['Int']>;
	gd_carried?: Maybe<Scalars['Int']>;
	gs_carried?: Maybe<Scalars['Int']>;
	id?: Maybe<Scalars['uuid']>;
	is_active?: Maybe<Scalars['Boolean']>;
	league?: Maybe<Leagues_Obj_Rel_Insert_Input>;
	league_id?: Maybe<Scalars['uuid']>;
	lost_carried?: Maybe<Scalars['Int']>;
	placeholder_id?: Maybe<Scalars['uuid']>;
	placeholder_team?: Maybe<Placeholder_Teams_Obj_Rel_Insert_Input>;
	played_carried?: Maybe<Scalars['Int']>;
	points_carried?: Maybe<Scalars['Int']>;
	team?: Maybe<Teams_Obj_Rel_Insert_Input>;
	team_id?: Maybe<Scalars['uuid']>;
	won_carried?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Join_League_Teams_Max_Fields = {
	__typename?: 'join_league_teams_max_fields';
	deleted_at?: Maybe<Scalars['timestamptz']>;
	drawn_carried?: Maybe<Scalars['Int']>;
	gd_carried?: Maybe<Scalars['Int']>;
	gs_carried?: Maybe<Scalars['Int']>;
	id?: Maybe<Scalars['uuid']>;
	league_id?: Maybe<Scalars['uuid']>;
	lost_carried?: Maybe<Scalars['Int']>;
	placeholder_id?: Maybe<Scalars['uuid']>;
	played_carried?: Maybe<Scalars['Int']>;
	points_carried?: Maybe<Scalars['Int']>;
	team_id?: Maybe<Scalars['uuid']>;
	won_carried?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "join_league_teams" */
export type Join_League_Teams_Max_Order_By = {
	deleted_at?: Maybe<Order_By>;
	drawn_carried?: Maybe<Order_By>;
	gd_carried?: Maybe<Order_By>;
	gs_carried?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	league_id?: Maybe<Order_By>;
	lost_carried?: Maybe<Order_By>;
	placeholder_id?: Maybe<Order_By>;
	played_carried?: Maybe<Order_By>;
	points_carried?: Maybe<Order_By>;
	team_id?: Maybe<Order_By>;
	won_carried?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Join_League_Teams_Min_Fields = {
	__typename?: 'join_league_teams_min_fields';
	deleted_at?: Maybe<Scalars['timestamptz']>;
	drawn_carried?: Maybe<Scalars['Int']>;
	gd_carried?: Maybe<Scalars['Int']>;
	gs_carried?: Maybe<Scalars['Int']>;
	id?: Maybe<Scalars['uuid']>;
	league_id?: Maybe<Scalars['uuid']>;
	lost_carried?: Maybe<Scalars['Int']>;
	placeholder_id?: Maybe<Scalars['uuid']>;
	played_carried?: Maybe<Scalars['Int']>;
	points_carried?: Maybe<Scalars['Int']>;
	team_id?: Maybe<Scalars['uuid']>;
	won_carried?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "join_league_teams" */
export type Join_League_Teams_Min_Order_By = {
	deleted_at?: Maybe<Order_By>;
	drawn_carried?: Maybe<Order_By>;
	gd_carried?: Maybe<Order_By>;
	gs_carried?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	league_id?: Maybe<Order_By>;
	lost_carried?: Maybe<Order_By>;
	placeholder_id?: Maybe<Order_By>;
	played_carried?: Maybe<Order_By>;
	points_carried?: Maybe<Order_By>;
	team_id?: Maybe<Order_By>;
	won_carried?: Maybe<Order_By>;
};

/** response of any mutation on the table "join_league_teams" */
export type Join_League_Teams_Mutation_Response = {
	__typename?: 'join_league_teams_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Join_League_Teams>;
};

/** on conflict condition type for table "join_league_teams" */
export type Join_League_Teams_On_Conflict = {
	constraint: Join_League_Teams_Constraint;
	update_columns?: Array<Join_League_Teams_Update_Column>;
	where?: Maybe<Join_League_Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "join_league_teams". */
export type Join_League_Teams_Order_By = {
	deleted_at?: Maybe<Order_By>;
	drawn_carried?: Maybe<Order_By>;
	gd_carried?: Maybe<Order_By>;
	gs_carried?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	is_active?: Maybe<Order_By>;
	league?: Maybe<Leagues_Order_By>;
	league_id?: Maybe<Order_By>;
	lost_carried?: Maybe<Order_By>;
	placeholder_id?: Maybe<Order_By>;
	placeholder_team?: Maybe<Placeholder_Teams_Order_By>;
	played_carried?: Maybe<Order_By>;
	points_carried?: Maybe<Order_By>;
	team?: Maybe<Teams_Order_By>;
	team_id?: Maybe<Order_By>;
	won_carried?: Maybe<Order_By>;
};

/** primary key columns input for table: join_league_teams */
export type Join_League_Teams_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "join_league_teams" */
export enum Join_League_Teams_Select_Column {
	/** column name */
	DeletedAt = 'deleted_at',
	/** column name */
	DrawnCarried = 'drawn_carried',
	/** column name */
	GdCarried = 'gd_carried',
	/** column name */
	GsCarried = 'gs_carried',
	/** column name */
	Id = 'id',
	/** column name */
	IsActive = 'is_active',
	/** column name */
	LeagueId = 'league_id',
	/** column name */
	LostCarried = 'lost_carried',
	/** column name */
	PlaceholderId = 'placeholder_id',
	/** column name */
	PlayedCarried = 'played_carried',
	/** column name */
	PointsCarried = 'points_carried',
	/** column name */
	TeamId = 'team_id',
	/** column name */
	WonCarried = 'won_carried',
}

/** input type for updating data in table "join_league_teams" */
export type Join_League_Teams_Set_Input = {
	deleted_at?: Maybe<Scalars['timestamptz']>;
	drawn_carried?: Maybe<Scalars['Int']>;
	gd_carried?: Maybe<Scalars['Int']>;
	gs_carried?: Maybe<Scalars['Int']>;
	id?: Maybe<Scalars['uuid']>;
	is_active?: Maybe<Scalars['Boolean']>;
	league_id?: Maybe<Scalars['uuid']>;
	lost_carried?: Maybe<Scalars['Int']>;
	placeholder_id?: Maybe<Scalars['uuid']>;
	played_carried?: Maybe<Scalars['Int']>;
	points_carried?: Maybe<Scalars['Int']>;
	team_id?: Maybe<Scalars['uuid']>;
	won_carried?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Join_League_Teams_Stddev_Fields = {
	__typename?: 'join_league_teams_stddev_fields';
	drawn_carried?: Maybe<Scalars['Float']>;
	gd_carried?: Maybe<Scalars['Float']>;
	gs_carried?: Maybe<Scalars['Float']>;
	lost_carried?: Maybe<Scalars['Float']>;
	played_carried?: Maybe<Scalars['Float']>;
	points_carried?: Maybe<Scalars['Float']>;
	won_carried?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "join_league_teams" */
export type Join_League_Teams_Stddev_Order_By = {
	drawn_carried?: Maybe<Order_By>;
	gd_carried?: Maybe<Order_By>;
	gs_carried?: Maybe<Order_By>;
	lost_carried?: Maybe<Order_By>;
	played_carried?: Maybe<Order_By>;
	points_carried?: Maybe<Order_By>;
	won_carried?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Join_League_Teams_Stddev_Pop_Fields = {
	__typename?: 'join_league_teams_stddev_pop_fields';
	drawn_carried?: Maybe<Scalars['Float']>;
	gd_carried?: Maybe<Scalars['Float']>;
	gs_carried?: Maybe<Scalars['Float']>;
	lost_carried?: Maybe<Scalars['Float']>;
	played_carried?: Maybe<Scalars['Float']>;
	points_carried?: Maybe<Scalars['Float']>;
	won_carried?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "join_league_teams" */
export type Join_League_Teams_Stddev_Pop_Order_By = {
	drawn_carried?: Maybe<Order_By>;
	gd_carried?: Maybe<Order_By>;
	gs_carried?: Maybe<Order_By>;
	lost_carried?: Maybe<Order_By>;
	played_carried?: Maybe<Order_By>;
	points_carried?: Maybe<Order_By>;
	won_carried?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Join_League_Teams_Stddev_Samp_Fields = {
	__typename?: 'join_league_teams_stddev_samp_fields';
	drawn_carried?: Maybe<Scalars['Float']>;
	gd_carried?: Maybe<Scalars['Float']>;
	gs_carried?: Maybe<Scalars['Float']>;
	lost_carried?: Maybe<Scalars['Float']>;
	played_carried?: Maybe<Scalars['Float']>;
	points_carried?: Maybe<Scalars['Float']>;
	won_carried?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "join_league_teams" */
export type Join_League_Teams_Stddev_Samp_Order_By = {
	drawn_carried?: Maybe<Order_By>;
	gd_carried?: Maybe<Order_By>;
	gs_carried?: Maybe<Order_By>;
	lost_carried?: Maybe<Order_By>;
	played_carried?: Maybe<Order_By>;
	points_carried?: Maybe<Order_By>;
	won_carried?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Join_League_Teams_Sum_Fields = {
	__typename?: 'join_league_teams_sum_fields';
	drawn_carried?: Maybe<Scalars['Int']>;
	gd_carried?: Maybe<Scalars['Int']>;
	gs_carried?: Maybe<Scalars['Int']>;
	lost_carried?: Maybe<Scalars['Int']>;
	played_carried?: Maybe<Scalars['Int']>;
	points_carried?: Maybe<Scalars['Int']>;
	won_carried?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "join_league_teams" */
export type Join_League_Teams_Sum_Order_By = {
	drawn_carried?: Maybe<Order_By>;
	gd_carried?: Maybe<Order_By>;
	gs_carried?: Maybe<Order_By>;
	lost_carried?: Maybe<Order_By>;
	played_carried?: Maybe<Order_By>;
	points_carried?: Maybe<Order_By>;
	won_carried?: Maybe<Order_By>;
};

/** update columns of table "join_league_teams" */
export enum Join_League_Teams_Update_Column {
	/** column name */
	DeletedAt = 'deleted_at',
	/** column name */
	DrawnCarried = 'drawn_carried',
	/** column name */
	GdCarried = 'gd_carried',
	/** column name */
	GsCarried = 'gs_carried',
	/** column name */
	Id = 'id',
	/** column name */
	IsActive = 'is_active',
	/** column name */
	LeagueId = 'league_id',
	/** column name */
	LostCarried = 'lost_carried',
	/** column name */
	PlaceholderId = 'placeholder_id',
	/** column name */
	PlayedCarried = 'played_carried',
	/** column name */
	PointsCarried = 'points_carried',
	/** column name */
	TeamId = 'team_id',
	/** column name */
	WonCarried = 'won_carried',
}

/** aggregate var_pop on columns */
export type Join_League_Teams_Var_Pop_Fields = {
	__typename?: 'join_league_teams_var_pop_fields';
	drawn_carried?: Maybe<Scalars['Float']>;
	gd_carried?: Maybe<Scalars['Float']>;
	gs_carried?: Maybe<Scalars['Float']>;
	lost_carried?: Maybe<Scalars['Float']>;
	played_carried?: Maybe<Scalars['Float']>;
	points_carried?: Maybe<Scalars['Float']>;
	won_carried?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "join_league_teams" */
export type Join_League_Teams_Var_Pop_Order_By = {
	drawn_carried?: Maybe<Order_By>;
	gd_carried?: Maybe<Order_By>;
	gs_carried?: Maybe<Order_By>;
	lost_carried?: Maybe<Order_By>;
	played_carried?: Maybe<Order_By>;
	points_carried?: Maybe<Order_By>;
	won_carried?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Join_League_Teams_Var_Samp_Fields = {
	__typename?: 'join_league_teams_var_samp_fields';
	drawn_carried?: Maybe<Scalars['Float']>;
	gd_carried?: Maybe<Scalars['Float']>;
	gs_carried?: Maybe<Scalars['Float']>;
	lost_carried?: Maybe<Scalars['Float']>;
	played_carried?: Maybe<Scalars['Float']>;
	points_carried?: Maybe<Scalars['Float']>;
	won_carried?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "join_league_teams" */
export type Join_League_Teams_Var_Samp_Order_By = {
	drawn_carried?: Maybe<Order_By>;
	gd_carried?: Maybe<Order_By>;
	gs_carried?: Maybe<Order_By>;
	lost_carried?: Maybe<Order_By>;
	played_carried?: Maybe<Order_By>;
	points_carried?: Maybe<Order_By>;
	won_carried?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Join_League_Teams_Variance_Fields = {
	__typename?: 'join_league_teams_variance_fields';
	drawn_carried?: Maybe<Scalars['Float']>;
	gd_carried?: Maybe<Scalars['Float']>;
	gs_carried?: Maybe<Scalars['Float']>;
	lost_carried?: Maybe<Scalars['Float']>;
	played_carried?: Maybe<Scalars['Float']>;
	points_carried?: Maybe<Scalars['Float']>;
	won_carried?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "join_league_teams" */
export type Join_League_Teams_Variance_Order_By = {
	drawn_carried?: Maybe<Order_By>;
	gd_carried?: Maybe<Order_By>;
	gs_carried?: Maybe<Order_By>;
	lost_carried?: Maybe<Order_By>;
	played_carried?: Maybe<Order_By>;
	points_carried?: Maybe<Order_By>;
	won_carried?: Maybe<Order_By>;
};

/**
 * Joins leagues with child mini-leagues
 *
 *
 * columns and relationships of "join_leagues_mini_leagues"
 *
 */
export type Join_Leagues_Mini_Leagues = {
	__typename?: 'join_leagues_mini_leagues';
	created_at: Scalars['timestamptz'];
	id: Scalars['uuid'];
	league: Scalars['uuid'];
	/** An object relationship */
	leagueByLeague: Leagues;
	/** An object relationship */
	leagueByMiniLeague: Leagues;
	mini_league: Scalars['uuid'];
	qualification_positions: Scalars['String'];
	qualification_positions_ids?: Maybe<Scalars['String']>;
	updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "join_leagues_mini_leagues" */
export type Join_Leagues_Mini_Leagues_Aggregate = {
	__typename?: 'join_leagues_mini_leagues_aggregate';
	aggregate?: Maybe<Join_Leagues_Mini_Leagues_Aggregate_Fields>;
	nodes: Array<Join_Leagues_Mini_Leagues>;
};

/** aggregate fields of "join_leagues_mini_leagues" */
export type Join_Leagues_Mini_Leagues_Aggregate_Fields = {
	__typename?: 'join_leagues_mini_leagues_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Join_Leagues_Mini_Leagues_Max_Fields>;
	min?: Maybe<Join_Leagues_Mini_Leagues_Min_Fields>;
};

/** aggregate fields of "join_leagues_mini_leagues" */
export type Join_Leagues_Mini_Leagues_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Join_Leagues_Mini_Leagues_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "join_leagues_mini_leagues" */
export type Join_Leagues_Mini_Leagues_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Join_Leagues_Mini_Leagues_Max_Order_By>;
	min?: Maybe<Join_Leagues_Mini_Leagues_Min_Order_By>;
};

/** input type for inserting array relation for remote table "join_leagues_mini_leagues" */
export type Join_Leagues_Mini_Leagues_Arr_Rel_Insert_Input = {
	data: Array<Join_Leagues_Mini_Leagues_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Join_Leagues_Mini_Leagues_On_Conflict>;
};

/** Boolean expression to filter rows from the table "join_leagues_mini_leagues". All fields are combined with a logical 'AND'. */
export type Join_Leagues_Mini_Leagues_Bool_Exp = {
	_and?: Maybe<Array<Join_Leagues_Mini_Leagues_Bool_Exp>>;
	_not?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
	_or?: Maybe<Array<Join_Leagues_Mini_Leagues_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	league?: Maybe<Uuid_Comparison_Exp>;
	leagueByLeague?: Maybe<Leagues_Bool_Exp>;
	leagueByMiniLeague?: Maybe<Leagues_Bool_Exp>;
	mini_league?: Maybe<Uuid_Comparison_Exp>;
	qualification_positions?: Maybe<String_Comparison_Exp>;
	qualification_positions_ids?: Maybe<String_Comparison_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "join_leagues_mini_leagues" */
export enum Join_Leagues_Mini_Leagues_Constraint {
	/** unique or primary key constraint */
	JoinLeaguesMiniLeaguesPkey = 'join_leagues_mini_leagues_pkey',
}

/** input type for inserting data into table "join_leagues_mini_leagues" */
export type Join_Leagues_Mini_Leagues_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	league?: Maybe<Scalars['uuid']>;
	leagueByLeague?: Maybe<Leagues_Obj_Rel_Insert_Input>;
	leagueByMiniLeague?: Maybe<Leagues_Obj_Rel_Insert_Input>;
	mini_league?: Maybe<Scalars['uuid']>;
	qualification_positions?: Maybe<Scalars['String']>;
	qualification_positions_ids?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Join_Leagues_Mini_Leagues_Max_Fields = {
	__typename?: 'join_leagues_mini_leagues_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	league?: Maybe<Scalars['uuid']>;
	mini_league?: Maybe<Scalars['uuid']>;
	qualification_positions?: Maybe<Scalars['String']>;
	qualification_positions_ids?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "join_leagues_mini_leagues" */
export type Join_Leagues_Mini_Leagues_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	league?: Maybe<Order_By>;
	mini_league?: Maybe<Order_By>;
	qualification_positions?: Maybe<Order_By>;
	qualification_positions_ids?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Join_Leagues_Mini_Leagues_Min_Fields = {
	__typename?: 'join_leagues_mini_leagues_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	league?: Maybe<Scalars['uuid']>;
	mini_league?: Maybe<Scalars['uuid']>;
	qualification_positions?: Maybe<Scalars['String']>;
	qualification_positions_ids?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "join_leagues_mini_leagues" */
export type Join_Leagues_Mini_Leagues_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	league?: Maybe<Order_By>;
	mini_league?: Maybe<Order_By>;
	qualification_positions?: Maybe<Order_By>;
	qualification_positions_ids?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "join_leagues_mini_leagues" */
export type Join_Leagues_Mini_Leagues_Mutation_Response = {
	__typename?: 'join_leagues_mini_leagues_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Join_Leagues_Mini_Leagues>;
};

/** on conflict condition type for table "join_leagues_mini_leagues" */
export type Join_Leagues_Mini_Leagues_On_Conflict = {
	constraint: Join_Leagues_Mini_Leagues_Constraint;
	update_columns?: Array<Join_Leagues_Mini_Leagues_Update_Column>;
	where?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
};

/** Ordering options when selecting data from "join_leagues_mini_leagues". */
export type Join_Leagues_Mini_Leagues_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	league?: Maybe<Order_By>;
	leagueByLeague?: Maybe<Leagues_Order_By>;
	leagueByMiniLeague?: Maybe<Leagues_Order_By>;
	mini_league?: Maybe<Order_By>;
	qualification_positions?: Maybe<Order_By>;
	qualification_positions_ids?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: join_leagues_mini_leagues */
export type Join_Leagues_Mini_Leagues_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "join_leagues_mini_leagues" */
export enum Join_Leagues_Mini_Leagues_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	League = 'league',
	/** column name */
	MiniLeague = 'mini_league',
	/** column name */
	QualificationPositions = 'qualification_positions',
	/** column name */
	QualificationPositionsIds = 'qualification_positions_ids',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "join_leagues_mini_leagues" */
export type Join_Leagues_Mini_Leagues_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	league?: Maybe<Scalars['uuid']>;
	mini_league?: Maybe<Scalars['uuid']>;
	qualification_positions?: Maybe<Scalars['String']>;
	qualification_positions_ids?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "join_leagues_mini_leagues" */
export enum Join_Leagues_Mini_Leagues_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	League = 'league',
	/** column name */
	MiniLeague = 'mini_league',
	/** column name */
	QualificationPositions = 'qualification_positions',
	/** column name */
	QualificationPositionsIds = 'qualification_positions_ids',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** columns and relationships of "join_players_teams" */
export type Join_Players_Teams = {
	__typename?: 'join_players_teams';
	created_at: Scalars['timestamptz'];
	id: Scalars['uuid'];
	player: Scalars['uuid'];
	/** An object relationship */
	playerByPlayer: Players;
	team: Scalars['uuid'];
	/** An object relationship */
	teamByTeam: Teams;
	updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "join_players_teams" */
export type Join_Players_Teams_Aggregate = {
	__typename?: 'join_players_teams_aggregate';
	aggregate?: Maybe<Join_Players_Teams_Aggregate_Fields>;
	nodes: Array<Join_Players_Teams>;
};

/** aggregate fields of "join_players_teams" */
export type Join_Players_Teams_Aggregate_Fields = {
	__typename?: 'join_players_teams_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Join_Players_Teams_Max_Fields>;
	min?: Maybe<Join_Players_Teams_Min_Fields>;
};

/** aggregate fields of "join_players_teams" */
export type Join_Players_Teams_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Join_Players_Teams_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "join_players_teams" */
export type Join_Players_Teams_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Join_Players_Teams_Max_Order_By>;
	min?: Maybe<Join_Players_Teams_Min_Order_By>;
};

/** input type for inserting array relation for remote table "join_players_teams" */
export type Join_Players_Teams_Arr_Rel_Insert_Input = {
	data: Array<Join_Players_Teams_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Join_Players_Teams_On_Conflict>;
};

/** Boolean expression to filter rows from the table "join_players_teams". All fields are combined with a logical 'AND'. */
export type Join_Players_Teams_Bool_Exp = {
	_and?: Maybe<Array<Join_Players_Teams_Bool_Exp>>;
	_not?: Maybe<Join_Players_Teams_Bool_Exp>;
	_or?: Maybe<Array<Join_Players_Teams_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	player?: Maybe<Uuid_Comparison_Exp>;
	playerByPlayer?: Maybe<Players_Bool_Exp>;
	team?: Maybe<Uuid_Comparison_Exp>;
	teamByTeam?: Maybe<Teams_Bool_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "join_players_teams" */
export enum Join_Players_Teams_Constraint {
	/** unique or primary key constraint */
	JoinPlayersTeamsPkey = 'join_players_teams_pkey',
}

/** input type for inserting data into table "join_players_teams" */
export type Join_Players_Teams_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	player?: Maybe<Scalars['uuid']>;
	playerByPlayer?: Maybe<Players_Obj_Rel_Insert_Input>;
	team?: Maybe<Scalars['uuid']>;
	teamByTeam?: Maybe<Teams_Obj_Rel_Insert_Input>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Join_Players_Teams_Max_Fields = {
	__typename?: 'join_players_teams_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	player?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "join_players_teams" */
export type Join_Players_Teams_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	player?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Join_Players_Teams_Min_Fields = {
	__typename?: 'join_players_teams_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	player?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "join_players_teams" */
export type Join_Players_Teams_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	player?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "join_players_teams" */
export type Join_Players_Teams_Mutation_Response = {
	__typename?: 'join_players_teams_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Join_Players_Teams>;
};

/** on conflict condition type for table "join_players_teams" */
export type Join_Players_Teams_On_Conflict = {
	constraint: Join_Players_Teams_Constraint;
	update_columns?: Array<Join_Players_Teams_Update_Column>;
	where?: Maybe<Join_Players_Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "join_players_teams". */
export type Join_Players_Teams_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	player?: Maybe<Order_By>;
	playerByPlayer?: Maybe<Players_Order_By>;
	team?: Maybe<Order_By>;
	teamByTeam?: Maybe<Teams_Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: join_players_teams */
export type Join_Players_Teams_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "join_players_teams" */
export enum Join_Players_Teams_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Player = 'player',
	/** column name */
	Team = 'team',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "join_players_teams" */
export type Join_Players_Teams_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	player?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "join_players_teams" */
export enum Join_Players_Teams_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Player = 'player',
	/** column name */
	Team = 'team',
	/** column name */
	UpdatedAt = 'updated_at',
}

/**
 * finals that teams are competing in
 *
 *
 * columns and relationships of "join_team_finals"
 *
 */
export type Join_Team_Finals = {
	__typename?: 'join_team_finals';
	created_at: Scalars['timestamptz'];
	/** An object relationship */
	final: Finals;
	finals: Scalars['uuid'];
	id: Scalars['uuid'];
	team: Scalars['uuid'];
	/** An object relationship */
	teamByTeam: Teams;
	updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "join_team_finals" */
export type Join_Team_Finals_Aggregate = {
	__typename?: 'join_team_finals_aggregate';
	aggregate?: Maybe<Join_Team_Finals_Aggregate_Fields>;
	nodes: Array<Join_Team_Finals>;
};

/** aggregate fields of "join_team_finals" */
export type Join_Team_Finals_Aggregate_Fields = {
	__typename?: 'join_team_finals_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Join_Team_Finals_Max_Fields>;
	min?: Maybe<Join_Team_Finals_Min_Fields>;
};

/** aggregate fields of "join_team_finals" */
export type Join_Team_Finals_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Join_Team_Finals_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "join_team_finals" */
export type Join_Team_Finals_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Join_Team_Finals_Max_Order_By>;
	min?: Maybe<Join_Team_Finals_Min_Order_By>;
};

/** input type for inserting array relation for remote table "join_team_finals" */
export type Join_Team_Finals_Arr_Rel_Insert_Input = {
	data: Array<Join_Team_Finals_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Join_Team_Finals_On_Conflict>;
};

/** Boolean expression to filter rows from the table "join_team_finals". All fields are combined with a logical 'AND'. */
export type Join_Team_Finals_Bool_Exp = {
	_and?: Maybe<Array<Join_Team_Finals_Bool_Exp>>;
	_not?: Maybe<Join_Team_Finals_Bool_Exp>;
	_or?: Maybe<Array<Join_Team_Finals_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	final?: Maybe<Finals_Bool_Exp>;
	finals?: Maybe<Uuid_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	team?: Maybe<Uuid_Comparison_Exp>;
	teamByTeam?: Maybe<Teams_Bool_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "join_team_finals" */
export enum Join_Team_Finals_Constraint {
	/** unique or primary key constraint */
	JoinTeamsFinalsPkey = 'join_teams_finals_pkey',
}

/** input type for inserting data into table "join_team_finals" */
export type Join_Team_Finals_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	final?: Maybe<Finals_Obj_Rel_Insert_Input>;
	finals?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	teamByTeam?: Maybe<Teams_Obj_Rel_Insert_Input>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Join_Team_Finals_Max_Fields = {
	__typename?: 'join_team_finals_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	finals?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "join_team_finals" */
export type Join_Team_Finals_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	finals?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Join_Team_Finals_Min_Fields = {
	__typename?: 'join_team_finals_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	finals?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "join_team_finals" */
export type Join_Team_Finals_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	finals?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "join_team_finals" */
export type Join_Team_Finals_Mutation_Response = {
	__typename?: 'join_team_finals_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Join_Team_Finals>;
};

/** on conflict condition type for table "join_team_finals" */
export type Join_Team_Finals_On_Conflict = {
	constraint: Join_Team_Finals_Constraint;
	update_columns?: Array<Join_Team_Finals_Update_Column>;
	where?: Maybe<Join_Team_Finals_Bool_Exp>;
};

/** Ordering options when selecting data from "join_team_finals". */
export type Join_Team_Finals_Order_By = {
	created_at?: Maybe<Order_By>;
	final?: Maybe<Finals_Order_By>;
	finals?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	teamByTeam?: Maybe<Teams_Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: join_team_finals */
export type Join_Team_Finals_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "join_team_finals" */
export enum Join_Team_Finals_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Finals = 'finals',
	/** column name */
	Id = 'id',
	/** column name */
	Team = 'team',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "join_team_finals" */
export type Join_Team_Finals_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	finals?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "join_team_finals" */
export enum Join_Team_Finals_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Finals = 'finals',
	/** column name */
	Id = 'id',
	/** column name */
	Team = 'team',
	/** column name */
	UpdatedAt = 'updated_at',
}

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type Leagues = {
	__typename?: 'leagues';
	bbq_included?: Maybe<Scalars['Boolean']>;
	catchup_week?: Maybe<Scalars['Boolean']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	/** eur, usd */
	currency?: Maybe<Scalars['String']>;
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Int']>;
	/** eg. 2x20, 2x25, 2x30 */
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length: Scalars['Int'];
	default_kick_off_time: Scalars['String'];
	default_number_of_halves: Scalars['Int'];
	/** list of pitch UUIDs separated by spaces */
	default_pitches?: Maybe<Scalars['String']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Int']>;
	deposit?: Maybe<Scalars['Int']>;
	display_name?: Maybe<Scalars['String']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Int']>;
	finals?: Maybe<Scalars['Boolean']>;
	free_agents?: Maybe<Scalars['Boolean']>;
	/** eg, daily, weekly, bi-weekly */
	frequency?: Maybe<Scalars['String']>;
	id: Scalars['uuid'];
	/** An array relationship */
	joinLeaguesMiniLeaguesByMiniLeague: Array<Join_Leagues_Mini_Leagues>;
	/** An aggregate relationship */
	joinLeaguesMiniLeaguesByMiniLeague_aggregate: Join_Leagues_Mini_Leagues_Aggregate;
	/** An array relationship */
	join_finals_leagues: Array<Join_Finals_Leagues>;
	/** An aggregate relationship */
	join_finals_leagues_aggregate: Join_Finals_Leagues_Aggregate;
	/** An array relationship */
	join_leagues_mini_leagues: Array<Join_Leagues_Mini_Leagues>;
	/** An aggregate relationship */
	join_leagues_mini_leagues_aggregate: Join_Leagues_Mini_Leagues_Aggregate;
	/** eg. 2020/09/09 */
	kick_off_date?: Maybe<Scalars['date']>;
	league_information_dutch?: Maybe<Scalars['String']>;
	league_information_english?: Maybe<Scalars['String']>;
	/** An array relationship */
	league_teams: Array<Join_League_Teams>;
	/** An aggregate relationship */
	league_teams_aggregate: Join_League_Teams_Aggregate;
	/** eg. full, mini-league. A full league has no parent so is either stand alone or the beginning of a larger competition. A mini-league receives teams from an earlier stage and may pass teams down to a later stage */
	league_type?: Maybe<Scalars['String']>;
	location?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	locationByLocation?: Maybe<Locations>;
	man_of_the_match?: Maybe<Scalars['Boolean']>;
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	number_of_rounds?: Maybe<Scalars['Int']>;
	parent?: Maybe<Scalars['uuid']>;
	/** An array relationship */
	placeholderTeamsByParentLeague: Array<Placeholder_Teams>;
	/** An aggregate relationship */
	placeholderTeamsByParentLeague_aggregate: Placeholder_Teams_Aggregate;
	/** An array relationship */
	placeholder_teams: Array<Placeholder_Teams>;
	/** An aggregate relationship */
	placeholder_teams_aggregate: Placeholder_Teams_Aggregate;
	/** eg. mens, womens, students */
	player_type?: Maybe<Scalars['String']>;
	published: Scalars['Boolean'];
	regular_price?: Maybe<Scalars['Int']>;
	/** eg. single, double, triple */
	round_robin_format?: Maybe<Scalars['String']>;
	sales_tax?: Maybe<Scalars['Int']>;
	/** eg. spring, summer, autumn, winter */
	season?: Maybe<Scalars['String']>;
	/** An array relationship */
	seedings: Array<Seedings>;
	/** An array relationship */
	seedingsByParent: Array<Seedings>;
	/** An aggregate relationship */
	seedingsByParent_aggregate: Seedings_Aggregate;
	/** An aggregate relationship */
	seedings_aggregate: Seedings_Aggregate;
	/** eg. planned, active, finished */
	status?: Maybe<Scalars['String']>;
	student_price?: Maybe<Scalars['Int']>;
	/** eg. 5v5, 6v6,7v7, 8v8 */
	team_size?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesJoinLeaguesMiniLeaguesByMiniLeagueArgs = {
	distinct_on?: Maybe<Array<Join_Leagues_Mini_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Leagues_Mini_Leagues_Order_By>>;
	where?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesJoinLeaguesMiniLeaguesByMiniLeague_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Leagues_Mini_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Leagues_Mini_Leagues_Order_By>>;
	where?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesJoin_Finals_LeaguesArgs = {
	distinct_on?: Maybe<Array<Join_Finals_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Finals_Leagues_Order_By>>;
	where?: Maybe<Join_Finals_Leagues_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesJoin_Finals_Leagues_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Finals_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Finals_Leagues_Order_By>>;
	where?: Maybe<Join_Finals_Leagues_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesJoin_Leagues_Mini_LeaguesArgs = {
	distinct_on?: Maybe<Array<Join_Leagues_Mini_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Leagues_Mini_Leagues_Order_By>>;
	where?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesJoin_Leagues_Mini_Leagues_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Leagues_Mini_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Leagues_Mini_Leagues_Order_By>>;
	where?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesLeague_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_League_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_League_Teams_Order_By>>;
	where?: Maybe<Join_League_Teams_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesLeague_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_League_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_League_Teams_Order_By>>;
	where?: Maybe<Join_League_Teams_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesPlaceholderTeamsByParentLeagueArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesPlaceholderTeamsByParentLeague_AggregateArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesPlaceholder_TeamsArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesPlaceholder_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesSeedingsArgs = {
	distinct_on?: Maybe<Array<Seedings_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Seedings_Order_By>>;
	where?: Maybe<Seedings_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesSeedingsByParentArgs = {
	distinct_on?: Maybe<Array<Seedings_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Seedings_Order_By>>;
	where?: Maybe<Seedings_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesSeedingsByParent_AggregateArgs = {
	distinct_on?: Maybe<Array<Seedings_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Seedings_Order_By>>;
	where?: Maybe<Seedings_Bool_Exp>;
};

/**
 * Round-robin competition, can be stand alone or part of a larger competition. If part of a larger competition it can both receive teams from an earlier stage as well as pass teams down to later stages
 *
 *
 * columns and relationships of "leagues"
 *
 */
export type LeaguesSeedings_AggregateArgs = {
	distinct_on?: Maybe<Array<Seedings_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Seedings_Order_By>>;
	where?: Maybe<Seedings_Bool_Exp>;
};

/** aggregated selection of "leagues" */
export type Leagues_Aggregate = {
	__typename?: 'leagues_aggregate';
	aggregate?: Maybe<Leagues_Aggregate_Fields>;
	nodes: Array<Leagues>;
};

/** aggregate fields of "leagues" */
export type Leagues_Aggregate_Fields = {
	__typename?: 'leagues_aggregate_fields';
	avg?: Maybe<Leagues_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Leagues_Max_Fields>;
	min?: Maybe<Leagues_Min_Fields>;
	stddev?: Maybe<Leagues_Stddev_Fields>;
	stddev_pop?: Maybe<Leagues_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Leagues_Stddev_Samp_Fields>;
	sum?: Maybe<Leagues_Sum_Fields>;
	var_pop?: Maybe<Leagues_Var_Pop_Fields>;
	var_samp?: Maybe<Leagues_Var_Samp_Fields>;
	variance?: Maybe<Leagues_Variance_Fields>;
};

/** aggregate fields of "leagues" */
export type Leagues_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Leagues_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "leagues" */
export type Leagues_Aggregate_Order_By = {
	avg?: Maybe<Leagues_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<Leagues_Max_Order_By>;
	min?: Maybe<Leagues_Min_Order_By>;
	stddev?: Maybe<Leagues_Stddev_Order_By>;
	stddev_pop?: Maybe<Leagues_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<Leagues_Stddev_Samp_Order_By>;
	sum?: Maybe<Leagues_Sum_Order_By>;
	var_pop?: Maybe<Leagues_Var_Pop_Order_By>;
	var_samp?: Maybe<Leagues_Var_Samp_Order_By>;
	variance?: Maybe<Leagues_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "leagues" */
export type Leagues_Arr_Rel_Insert_Input = {
	data: Array<Leagues_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Leagues_On_Conflict>;
};

/** aggregate avg on columns */
export type Leagues_Avg_Fields = {
	__typename?: 'leagues_avg_fields';
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Float']>;
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Float']>;
	deposit?: Maybe<Scalars['Float']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Float']>;
	number_of_rounds?: Maybe<Scalars['Float']>;
	regular_price?: Maybe<Scalars['Float']>;
	sales_tax?: Maybe<Scalars['Float']>;
	student_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "leagues" */
export type Leagues_Avg_Order_By = {
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Order_By>;
	deposit?: Maybe<Order_By>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Order_By>;
	number_of_rounds?: Maybe<Order_By>;
	regular_price?: Maybe<Order_By>;
	sales_tax?: Maybe<Order_By>;
	student_price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "leagues". All fields are combined with a logical 'AND'. */
export type Leagues_Bool_Exp = {
	_and?: Maybe<Array<Leagues_Bool_Exp>>;
	_not?: Maybe<Leagues_Bool_Exp>;
	_or?: Maybe<Array<Leagues_Bool_Exp>>;
	bbq_included?: Maybe<Boolean_Comparison_Exp>;
	catchup_week?: Maybe<Boolean_Comparison_Exp>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	currency?: Maybe<String_Comparison_Exp>;
	day_of_week?: Maybe<Int_Comparison_Exp>;
	default_game_length?: Maybe<String_Comparison_Exp>;
	default_half_length?: Maybe<Int_Comparison_Exp>;
	default_kick_off_time?: Maybe<String_Comparison_Exp>;
	default_number_of_halves?: Maybe<Int_Comparison_Exp>;
	default_pitches?: Maybe<String_Comparison_Exp>;
	default_time_slot?: Maybe<Int_Comparison_Exp>;
	deposit?: Maybe<Int_Comparison_Exp>;
	display_name?: Maybe<String_Comparison_Exp>;
	division?: Maybe<Int_Comparison_Exp>;
	finals?: Maybe<Boolean_Comparison_Exp>;
	free_agents?: Maybe<Boolean_Comparison_Exp>;
	frequency?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	joinLeaguesMiniLeaguesByMiniLeague?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
	join_finals_leagues?: Maybe<Join_Finals_Leagues_Bool_Exp>;
	join_leagues_mini_leagues?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
	kick_off_date?: Maybe<Date_Comparison_Exp>;
	league_information_dutch?: Maybe<String_Comparison_Exp>;
	league_information_english?: Maybe<String_Comparison_Exp>;
	league_teams?: Maybe<Join_League_Teams_Bool_Exp>;
	league_type?: Maybe<String_Comparison_Exp>;
	location?: Maybe<Uuid_Comparison_Exp>;
	locationByLocation?: Maybe<Locations_Bool_Exp>;
	man_of_the_match?: Maybe<Boolean_Comparison_Exp>;
	matches?: Maybe<Matches_Bool_Exp>;
	number_of_rounds?: Maybe<Int_Comparison_Exp>;
	parent?: Maybe<Uuid_Comparison_Exp>;
	placeholderTeamsByParentLeague?: Maybe<Placeholder_Teams_Bool_Exp>;
	placeholder_teams?: Maybe<Placeholder_Teams_Bool_Exp>;
	player_type?: Maybe<String_Comparison_Exp>;
	published?: Maybe<Boolean_Comparison_Exp>;
	regular_price?: Maybe<Int_Comparison_Exp>;
	round_robin_format?: Maybe<String_Comparison_Exp>;
	sales_tax?: Maybe<Int_Comparison_Exp>;
	season?: Maybe<String_Comparison_Exp>;
	seedings?: Maybe<Seedings_Bool_Exp>;
	seedingsByParent?: Maybe<Seedings_Bool_Exp>;
	status?: Maybe<String_Comparison_Exp>;
	student_price?: Maybe<Int_Comparison_Exp>;
	team_size?: Maybe<String_Comparison_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "leagues" */
export enum Leagues_Constraint {
	/** unique or primary key constraint */
	LeaguesDisplayNameKey = 'leagues_display_name_key',
	/** unique or primary key constraint */
	LeaguesPkey = 'leagues_pkey',
}

/** input type for incrementing numeric columns in table "leagues" */
export type Leagues_Inc_Input = {
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Int']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Int']>;
	deposit?: Maybe<Scalars['Int']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Int']>;
	number_of_rounds?: Maybe<Scalars['Int']>;
	regular_price?: Maybe<Scalars['Int']>;
	sales_tax?: Maybe<Scalars['Int']>;
	student_price?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "leagues" */
export type Leagues_Insert_Input = {
	bbq_included?: Maybe<Scalars['Boolean']>;
	catchup_week?: Maybe<Scalars['Boolean']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	/** eur, usd */
	currency?: Maybe<Scalars['String']>;
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Int']>;
	/** eg. 2x20, 2x25, 2x30 */
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_kick_off_time?: Maybe<Scalars['String']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	/** list of pitch UUIDs separated by spaces */
	default_pitches?: Maybe<Scalars['String']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Int']>;
	deposit?: Maybe<Scalars['Int']>;
	display_name?: Maybe<Scalars['String']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Int']>;
	finals?: Maybe<Scalars['Boolean']>;
	free_agents?: Maybe<Scalars['Boolean']>;
	/** eg, daily, weekly, bi-weekly */
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	joinLeaguesMiniLeaguesByMiniLeague?: Maybe<Join_Leagues_Mini_Leagues_Arr_Rel_Insert_Input>;
	join_finals_leagues?: Maybe<Join_Finals_Leagues_Arr_Rel_Insert_Input>;
	join_leagues_mini_leagues?: Maybe<Join_Leagues_Mini_Leagues_Arr_Rel_Insert_Input>;
	/** eg. 2020/09/09 */
	kick_off_date?: Maybe<Scalars['date']>;
	league_information_dutch?: Maybe<Scalars['String']>;
	league_information_english?: Maybe<Scalars['String']>;
	league_teams?: Maybe<Join_League_Teams_Arr_Rel_Insert_Input>;
	/** eg. full, mini-league. A full league has no parent so is either stand alone or the beginning of a larger competition. A mini-league receives teams from an earlier stage and may pass teams down to a later stage */
	league_type?: Maybe<Scalars['String']>;
	location?: Maybe<Scalars['uuid']>;
	locationByLocation?: Maybe<Locations_Obj_Rel_Insert_Input>;
	man_of_the_match?: Maybe<Scalars['Boolean']>;
	matches?: Maybe<Matches_Arr_Rel_Insert_Input>;
	number_of_rounds?: Maybe<Scalars['Int']>;
	parent?: Maybe<Scalars['uuid']>;
	placeholderTeamsByParentLeague?: Maybe<Placeholder_Teams_Arr_Rel_Insert_Input>;
	placeholder_teams?: Maybe<Placeholder_Teams_Arr_Rel_Insert_Input>;
	/** eg. mens, womens, students */
	player_type?: Maybe<Scalars['String']>;
	published?: Maybe<Scalars['Boolean']>;
	regular_price?: Maybe<Scalars['Int']>;
	/** eg. single, double, triple */
	round_robin_format?: Maybe<Scalars['String']>;
	sales_tax?: Maybe<Scalars['Int']>;
	/** eg. spring, summer, autumn, winter */
	season?: Maybe<Scalars['String']>;
	seedings?: Maybe<Seedings_Arr_Rel_Insert_Input>;
	seedingsByParent?: Maybe<Seedings_Arr_Rel_Insert_Input>;
	/** eg. planned, active, finished */
	status?: Maybe<Scalars['String']>;
	student_price?: Maybe<Scalars['Int']>;
	/** eg. 5v5, 6v6,7v7, 8v8 */
	team_size?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Leagues_Max_Fields = {
	__typename?: 'leagues_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	/** eur, usd */
	currency?: Maybe<Scalars['String']>;
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Int']>;
	/** eg. 2x20, 2x25, 2x30 */
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_kick_off_time?: Maybe<Scalars['String']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	/** list of pitch UUIDs separated by spaces */
	default_pitches?: Maybe<Scalars['String']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Int']>;
	deposit?: Maybe<Scalars['Int']>;
	display_name?: Maybe<Scalars['String']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Int']>;
	/** eg, daily, weekly, bi-weekly */
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	/** eg. 2020/09/09 */
	kick_off_date?: Maybe<Scalars['date']>;
	league_information_dutch?: Maybe<Scalars['String']>;
	league_information_english?: Maybe<Scalars['String']>;
	/** eg. full, mini-league. A full league has no parent so is either stand alone or the beginning of a larger competition. A mini-league receives teams from an earlier stage and may pass teams down to a later stage */
	league_type?: Maybe<Scalars['String']>;
	location?: Maybe<Scalars['uuid']>;
	number_of_rounds?: Maybe<Scalars['Int']>;
	parent?: Maybe<Scalars['uuid']>;
	/** eg. mens, womens, students */
	player_type?: Maybe<Scalars['String']>;
	regular_price?: Maybe<Scalars['Int']>;
	/** eg. single, double, triple */
	round_robin_format?: Maybe<Scalars['String']>;
	sales_tax?: Maybe<Scalars['Int']>;
	/** eg. spring, summer, autumn, winter */
	season?: Maybe<Scalars['String']>;
	/** eg. planned, active, finished */
	status?: Maybe<Scalars['String']>;
	student_price?: Maybe<Scalars['Int']>;
	/** eg. 5v5, 6v6,7v7, 8v8 */
	team_size?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "leagues" */
export type Leagues_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	/** eur, usd */
	currency?: Maybe<Order_By>;
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Order_By>;
	/** eg. 2x20, 2x25, 2x30 */
	default_game_length?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_kick_off_time?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	/** list of pitch UUIDs separated by spaces */
	default_pitches?: Maybe<Order_By>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Order_By>;
	deposit?: Maybe<Order_By>;
	display_name?: Maybe<Order_By>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Order_By>;
	/** eg, daily, weekly, bi-weekly */
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	/** eg. 2020/09/09 */
	kick_off_date?: Maybe<Order_By>;
	league_information_dutch?: Maybe<Order_By>;
	league_information_english?: Maybe<Order_By>;
	/** eg. full, mini-league. A full league has no parent so is either stand alone or the beginning of a larger competition. A mini-league receives teams from an earlier stage and may pass teams down to a later stage */
	league_type?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	number_of_rounds?: Maybe<Order_By>;
	parent?: Maybe<Order_By>;
	/** eg. mens, womens, students */
	player_type?: Maybe<Order_By>;
	regular_price?: Maybe<Order_By>;
	/** eg. single, double, triple */
	round_robin_format?: Maybe<Order_By>;
	sales_tax?: Maybe<Order_By>;
	/** eg. spring, summer, autumn, winter */
	season?: Maybe<Order_By>;
	/** eg. planned, active, finished */
	status?: Maybe<Order_By>;
	student_price?: Maybe<Order_By>;
	/** eg. 5v5, 6v6,7v7, 8v8 */
	team_size?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Leagues_Min_Fields = {
	__typename?: 'leagues_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	/** eur, usd */
	currency?: Maybe<Scalars['String']>;
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Int']>;
	/** eg. 2x20, 2x25, 2x30 */
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_kick_off_time?: Maybe<Scalars['String']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	/** list of pitch UUIDs separated by spaces */
	default_pitches?: Maybe<Scalars['String']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Int']>;
	deposit?: Maybe<Scalars['Int']>;
	display_name?: Maybe<Scalars['String']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Int']>;
	/** eg, daily, weekly, bi-weekly */
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	/** eg. 2020/09/09 */
	kick_off_date?: Maybe<Scalars['date']>;
	league_information_dutch?: Maybe<Scalars['String']>;
	league_information_english?: Maybe<Scalars['String']>;
	/** eg. full, mini-league. A full league has no parent so is either stand alone or the beginning of a larger competition. A mini-league receives teams from an earlier stage and may pass teams down to a later stage */
	league_type?: Maybe<Scalars['String']>;
	location?: Maybe<Scalars['uuid']>;
	number_of_rounds?: Maybe<Scalars['Int']>;
	parent?: Maybe<Scalars['uuid']>;
	/** eg. mens, womens, students */
	player_type?: Maybe<Scalars['String']>;
	regular_price?: Maybe<Scalars['Int']>;
	/** eg. single, double, triple */
	round_robin_format?: Maybe<Scalars['String']>;
	sales_tax?: Maybe<Scalars['Int']>;
	/** eg. spring, summer, autumn, winter */
	season?: Maybe<Scalars['String']>;
	/** eg. planned, active, finished */
	status?: Maybe<Scalars['String']>;
	student_price?: Maybe<Scalars['Int']>;
	/** eg. 5v5, 6v6,7v7, 8v8 */
	team_size?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "leagues" */
export type Leagues_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	/** eur, usd */
	currency?: Maybe<Order_By>;
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Order_By>;
	/** eg. 2x20, 2x25, 2x30 */
	default_game_length?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_kick_off_time?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	/** list of pitch UUIDs separated by spaces */
	default_pitches?: Maybe<Order_By>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Order_By>;
	deposit?: Maybe<Order_By>;
	display_name?: Maybe<Order_By>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Order_By>;
	/** eg, daily, weekly, bi-weekly */
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	/** eg. 2020/09/09 */
	kick_off_date?: Maybe<Order_By>;
	league_information_dutch?: Maybe<Order_By>;
	league_information_english?: Maybe<Order_By>;
	/** eg. full, mini-league. A full league has no parent so is either stand alone or the beginning of a larger competition. A mini-league receives teams from an earlier stage and may pass teams down to a later stage */
	league_type?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	number_of_rounds?: Maybe<Order_By>;
	parent?: Maybe<Order_By>;
	/** eg. mens, womens, students */
	player_type?: Maybe<Order_By>;
	regular_price?: Maybe<Order_By>;
	/** eg. single, double, triple */
	round_robin_format?: Maybe<Order_By>;
	sales_tax?: Maybe<Order_By>;
	/** eg. spring, summer, autumn, winter */
	season?: Maybe<Order_By>;
	/** eg. planned, active, finished */
	status?: Maybe<Order_By>;
	student_price?: Maybe<Order_By>;
	/** eg. 5v5, 6v6,7v7, 8v8 */
	team_size?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "leagues" */
export type Leagues_Mutation_Response = {
	__typename?: 'leagues_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Leagues>;
};

/** input type for inserting object relation for remote table "leagues" */
export type Leagues_Obj_Rel_Insert_Input = {
	data: Leagues_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Leagues_On_Conflict>;
};

/** on conflict condition type for table "leagues" */
export type Leagues_On_Conflict = {
	constraint: Leagues_Constraint;
	update_columns?: Array<Leagues_Update_Column>;
	where?: Maybe<Leagues_Bool_Exp>;
};

/** Ordering options when selecting data from "leagues". */
export type Leagues_Order_By = {
	bbq_included?: Maybe<Order_By>;
	catchup_week?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	currency?: Maybe<Order_By>;
	day_of_week?: Maybe<Order_By>;
	default_game_length?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_kick_off_time?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	default_pitches?: Maybe<Order_By>;
	default_time_slot?: Maybe<Order_By>;
	deposit?: Maybe<Order_By>;
	display_name?: Maybe<Order_By>;
	division?: Maybe<Order_By>;
	finals?: Maybe<Order_By>;
	free_agents?: Maybe<Order_By>;
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	joinLeaguesMiniLeaguesByMiniLeague_aggregate?: Maybe<Join_Leagues_Mini_Leagues_Aggregate_Order_By>;
	join_finals_leagues_aggregate?: Maybe<Join_Finals_Leagues_Aggregate_Order_By>;
	join_leagues_mini_leagues_aggregate?: Maybe<Join_Leagues_Mini_Leagues_Aggregate_Order_By>;
	kick_off_date?: Maybe<Order_By>;
	league_information_dutch?: Maybe<Order_By>;
	league_information_english?: Maybe<Order_By>;
	league_teams_aggregate?: Maybe<Join_League_Teams_Aggregate_Order_By>;
	league_type?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	locationByLocation?: Maybe<Locations_Order_By>;
	man_of_the_match?: Maybe<Order_By>;
	matches_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	number_of_rounds?: Maybe<Order_By>;
	parent?: Maybe<Order_By>;
	placeholderTeamsByParentLeague_aggregate?: Maybe<Placeholder_Teams_Aggregate_Order_By>;
	placeholder_teams_aggregate?: Maybe<Placeholder_Teams_Aggregate_Order_By>;
	player_type?: Maybe<Order_By>;
	published?: Maybe<Order_By>;
	regular_price?: Maybe<Order_By>;
	round_robin_format?: Maybe<Order_By>;
	sales_tax?: Maybe<Order_By>;
	season?: Maybe<Order_By>;
	seedingsByParent_aggregate?: Maybe<Seedings_Aggregate_Order_By>;
	seedings_aggregate?: Maybe<Seedings_Aggregate_Order_By>;
	status?: Maybe<Order_By>;
	student_price?: Maybe<Order_By>;
	team_size?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: leagues */
export type Leagues_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "leagues" */
export enum Leagues_Select_Column {
	/** column name */
	BbqIncluded = 'bbq_included',
	/** column name */
	CatchupWeek = 'catchup_week',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Currency = 'currency',
	/** column name */
	DayOfWeek = 'day_of_week',
	/** column name */
	DefaultGameLength = 'default_game_length',
	/** column name */
	DefaultHalfLength = 'default_half_length',
	/** column name */
	DefaultKickOffTime = 'default_kick_off_time',
	/** column name */
	DefaultNumberOfHalves = 'default_number_of_halves',
	/** column name */
	DefaultPitches = 'default_pitches',
	/** column name */
	DefaultTimeSlot = 'default_time_slot',
	/** column name */
	Deposit = 'deposit',
	/** column name */
	DisplayName = 'display_name',
	/** column name */
	Division = 'division',
	/** column name */
	Finals = 'finals',
	/** column name */
	FreeAgents = 'free_agents',
	/** column name */
	Frequency = 'frequency',
	/** column name */
	Id = 'id',
	/** column name */
	KickOffDate = 'kick_off_date',
	/** column name */
	LeagueInformationDutch = 'league_information_dutch',
	/** column name */
	LeagueInformationEnglish = 'league_information_english',
	/** column name */
	LeagueType = 'league_type',
	/** column name */
	Location = 'location',
	/** column name */
	ManOfTheMatch = 'man_of_the_match',
	/** column name */
	NumberOfRounds = 'number_of_rounds',
	/** column name */
	Parent = 'parent',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	Published = 'published',
	/** column name */
	RegularPrice = 'regular_price',
	/** column name */
	RoundRobinFormat = 'round_robin_format',
	/** column name */
	SalesTax = 'sales_tax',
	/** column name */
	Season = 'season',
	/** column name */
	Status = 'status',
	/** column name */
	StudentPrice = 'student_price',
	/** column name */
	TeamSize = 'team_size',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "leagues" */
export type Leagues_Set_Input = {
	bbq_included?: Maybe<Scalars['Boolean']>;
	catchup_week?: Maybe<Scalars['Boolean']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	/** eur, usd */
	currency?: Maybe<Scalars['String']>;
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Int']>;
	/** eg. 2x20, 2x25, 2x30 */
	default_game_length?: Maybe<Scalars['String']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_kick_off_time?: Maybe<Scalars['String']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	/** list of pitch UUIDs separated by spaces */
	default_pitches?: Maybe<Scalars['String']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Int']>;
	deposit?: Maybe<Scalars['Int']>;
	display_name?: Maybe<Scalars['String']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Int']>;
	finals?: Maybe<Scalars['Boolean']>;
	free_agents?: Maybe<Scalars['Boolean']>;
	/** eg, daily, weekly, bi-weekly */
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	/** eg. 2020/09/09 */
	kick_off_date?: Maybe<Scalars['date']>;
	league_information_dutch?: Maybe<Scalars['String']>;
	league_information_english?: Maybe<Scalars['String']>;
	/** eg. full, mini-league. A full league has no parent so is either stand alone or the beginning of a larger competition. A mini-league receives teams from an earlier stage and may pass teams down to a later stage */
	league_type?: Maybe<Scalars['String']>;
	location?: Maybe<Scalars['uuid']>;
	man_of_the_match?: Maybe<Scalars['Boolean']>;
	number_of_rounds?: Maybe<Scalars['Int']>;
	parent?: Maybe<Scalars['uuid']>;
	/** eg. mens, womens, students */
	player_type?: Maybe<Scalars['String']>;
	published?: Maybe<Scalars['Boolean']>;
	regular_price?: Maybe<Scalars['Int']>;
	/** eg. single, double, triple */
	round_robin_format?: Maybe<Scalars['String']>;
	sales_tax?: Maybe<Scalars['Int']>;
	/** eg. spring, summer, autumn, winter */
	season?: Maybe<Scalars['String']>;
	/** eg. planned, active, finished */
	status?: Maybe<Scalars['String']>;
	student_price?: Maybe<Scalars['Int']>;
	/** eg. 5v5, 6v6,7v7, 8v8 */
	team_size?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Leagues_Stddev_Fields = {
	__typename?: 'leagues_stddev_fields';
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Float']>;
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Float']>;
	deposit?: Maybe<Scalars['Float']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Float']>;
	number_of_rounds?: Maybe<Scalars['Float']>;
	regular_price?: Maybe<Scalars['Float']>;
	sales_tax?: Maybe<Scalars['Float']>;
	student_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "leagues" */
export type Leagues_Stddev_Order_By = {
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Order_By>;
	deposit?: Maybe<Order_By>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Order_By>;
	number_of_rounds?: Maybe<Order_By>;
	regular_price?: Maybe<Order_By>;
	sales_tax?: Maybe<Order_By>;
	student_price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Leagues_Stddev_Pop_Fields = {
	__typename?: 'leagues_stddev_pop_fields';
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Float']>;
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Float']>;
	deposit?: Maybe<Scalars['Float']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Float']>;
	number_of_rounds?: Maybe<Scalars['Float']>;
	regular_price?: Maybe<Scalars['Float']>;
	sales_tax?: Maybe<Scalars['Float']>;
	student_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "leagues" */
export type Leagues_Stddev_Pop_Order_By = {
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Order_By>;
	deposit?: Maybe<Order_By>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Order_By>;
	number_of_rounds?: Maybe<Order_By>;
	regular_price?: Maybe<Order_By>;
	sales_tax?: Maybe<Order_By>;
	student_price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Leagues_Stddev_Samp_Fields = {
	__typename?: 'leagues_stddev_samp_fields';
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Float']>;
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Float']>;
	deposit?: Maybe<Scalars['Float']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Float']>;
	number_of_rounds?: Maybe<Scalars['Float']>;
	regular_price?: Maybe<Scalars['Float']>;
	sales_tax?: Maybe<Scalars['Float']>;
	student_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "leagues" */
export type Leagues_Stddev_Samp_Order_By = {
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Order_By>;
	deposit?: Maybe<Order_By>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Order_By>;
	number_of_rounds?: Maybe<Order_By>;
	regular_price?: Maybe<Order_By>;
	sales_tax?: Maybe<Order_By>;
	student_price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Leagues_Sum_Fields = {
	__typename?: 'leagues_sum_fields';
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Int']>;
	default_half_length?: Maybe<Scalars['Int']>;
	default_number_of_halves?: Maybe<Scalars['Int']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Int']>;
	deposit?: Maybe<Scalars['Int']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Int']>;
	number_of_rounds?: Maybe<Scalars['Int']>;
	regular_price?: Maybe<Scalars['Int']>;
	sales_tax?: Maybe<Scalars['Int']>;
	student_price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "leagues" */
export type Leagues_Sum_Order_By = {
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Order_By>;
	deposit?: Maybe<Order_By>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Order_By>;
	number_of_rounds?: Maybe<Order_By>;
	regular_price?: Maybe<Order_By>;
	sales_tax?: Maybe<Order_By>;
	student_price?: Maybe<Order_By>;
};

/** update columns of table "leagues" */
export enum Leagues_Update_Column {
	/** column name */
	BbqIncluded = 'bbq_included',
	/** column name */
	CatchupWeek = 'catchup_week',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Currency = 'currency',
	/** column name */
	DayOfWeek = 'day_of_week',
	/** column name */
	DefaultGameLength = 'default_game_length',
	/** column name */
	DefaultHalfLength = 'default_half_length',
	/** column name */
	DefaultKickOffTime = 'default_kick_off_time',
	/** column name */
	DefaultNumberOfHalves = 'default_number_of_halves',
	/** column name */
	DefaultPitches = 'default_pitches',
	/** column name */
	DefaultTimeSlot = 'default_time_slot',
	/** column name */
	Deposit = 'deposit',
	/** column name */
	DisplayName = 'display_name',
	/** column name */
	Division = 'division',
	/** column name */
	Finals = 'finals',
	/** column name */
	FreeAgents = 'free_agents',
	/** column name */
	Frequency = 'frequency',
	/** column name */
	Id = 'id',
	/** column name */
	KickOffDate = 'kick_off_date',
	/** column name */
	LeagueInformationDutch = 'league_information_dutch',
	/** column name */
	LeagueInformationEnglish = 'league_information_english',
	/** column name */
	LeagueType = 'league_type',
	/** column name */
	Location = 'location',
	/** column name */
	ManOfTheMatch = 'man_of_the_match',
	/** column name */
	NumberOfRounds = 'number_of_rounds',
	/** column name */
	Parent = 'parent',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	Published = 'published',
	/** column name */
	RegularPrice = 'regular_price',
	/** column name */
	RoundRobinFormat = 'round_robin_format',
	/** column name */
	SalesTax = 'sales_tax',
	/** column name */
	Season = 'season',
	/** column name */
	Status = 'status',
	/** column name */
	StudentPrice = 'student_price',
	/** column name */
	TeamSize = 'team_size',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Leagues_Var_Pop_Fields = {
	__typename?: 'leagues_var_pop_fields';
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Float']>;
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Float']>;
	deposit?: Maybe<Scalars['Float']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Float']>;
	number_of_rounds?: Maybe<Scalars['Float']>;
	regular_price?: Maybe<Scalars['Float']>;
	sales_tax?: Maybe<Scalars['Float']>;
	student_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "leagues" */
export type Leagues_Var_Pop_Order_By = {
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Order_By>;
	deposit?: Maybe<Order_By>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Order_By>;
	number_of_rounds?: Maybe<Order_By>;
	regular_price?: Maybe<Order_By>;
	sales_tax?: Maybe<Order_By>;
	student_price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Leagues_Var_Samp_Fields = {
	__typename?: 'leagues_var_samp_fields';
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Float']>;
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Float']>;
	deposit?: Maybe<Scalars['Float']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Float']>;
	number_of_rounds?: Maybe<Scalars['Float']>;
	regular_price?: Maybe<Scalars['Float']>;
	sales_tax?: Maybe<Scalars['Float']>;
	student_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "leagues" */
export type Leagues_Var_Samp_Order_By = {
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Order_By>;
	deposit?: Maybe<Order_By>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Order_By>;
	number_of_rounds?: Maybe<Order_By>;
	regular_price?: Maybe<Order_By>;
	sales_tax?: Maybe<Order_By>;
	student_price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Leagues_Variance_Fields = {
	__typename?: 'leagues_variance_fields';
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Scalars['Float']>;
	default_half_length?: Maybe<Scalars['Float']>;
	default_number_of_halves?: Maybe<Scalars['Float']>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Scalars['Float']>;
	deposit?: Maybe<Scalars['Float']>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Scalars['Float']>;
	number_of_rounds?: Maybe<Scalars['Float']>;
	regular_price?: Maybe<Scalars['Float']>;
	sales_tax?: Maybe<Scalars['Float']>;
	student_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "leagues" */
export type Leagues_Variance_Order_By = {
	/** eg. 0, 1, 2, 3, 4, 5, 6 */
	day_of_week?: Maybe<Order_By>;
	default_half_length?: Maybe<Order_By>;
	default_number_of_halves?: Maybe<Order_By>;
	/** eg. 50, 55, 60 */
	default_time_slot?: Maybe<Order_By>;
	deposit?: Maybe<Order_By>;
	/** eg. null, 1, 2, 3, 4 */
	division?: Maybe<Order_By>;
	number_of_rounds?: Maybe<Order_By>;
	regular_price?: Maybe<Order_By>;
	sales_tax?: Maybe<Order_By>;
	student_price?: Maybe<Order_By>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type Locations = {
	__typename?: 'locations';
	address?: Maybe<Scalars['String']>;
	/** An object relationship */
	city: Cities;
	city_id: Scalars['uuid'];
	/** An array relationship */
	finals: Array<Finals>;
	/** An aggregate relationship */
	finals_aggregate: Finals_Aggregate;
	id: Scalars['uuid'];
	/** An array relationship */
	leagues: Array<Leagues>;
	/** An aggregate relationship */
	leagues_aggregate: Leagues_Aggregate;
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	name: Scalars['String'];
	phone_number?: Maybe<Scalars['String']>;
	/** An array relationship */
	pitches: Array<Pitches>;
	/** An aggregate relationship */
	pitches_aggregate: Pitches_Aggregate;
	/** An array relationship */
	registrations: Array<Registrations>;
	/** An aggregate relationship */
	registrations_aggregate: Registrations_Aggregate;
	/** An array relationship */
	tournaments: Array<Tournaments>;
	/** An aggregate relationship */
	tournaments_aggregate: Tournaments_Aggregate;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsFinalsArgs = {
	distinct_on?: Maybe<Array<Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Order_By>>;
	where?: Maybe<Finals_Bool_Exp>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsFinals_AggregateArgs = {
	distinct_on?: Maybe<Array<Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Order_By>>;
	where?: Maybe<Finals_Bool_Exp>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsLeaguesArgs = {
	distinct_on?: Maybe<Array<Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Leagues_Order_By>>;
	where?: Maybe<Leagues_Bool_Exp>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsLeagues_AggregateArgs = {
	distinct_on?: Maybe<Array<Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Leagues_Order_By>>;
	where?: Maybe<Leagues_Bool_Exp>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsPitchesArgs = {
	distinct_on?: Maybe<Array<Pitches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Pitches_Order_By>>;
	where?: Maybe<Pitches_Bool_Exp>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsPitches_AggregateArgs = {
	distinct_on?: Maybe<Array<Pitches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Pitches_Order_By>>;
	where?: Maybe<Pitches_Bool_Exp>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsRegistrationsArgs = {
	distinct_on?: Maybe<Array<Registrations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Order_By>>;
	where?: Maybe<Registrations_Bool_Exp>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsRegistrations_AggregateArgs = {
	distinct_on?: Maybe<Array<Registrations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Order_By>>;
	where?: Maybe<Registrations_Bool_Exp>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsTournamentsArgs = {
	distinct_on?: Maybe<Array<Tournaments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Tournaments_Order_By>>;
	where?: Maybe<Tournaments_Bool_Exp>;
};

/**
 * Locations (e.g. Footy Park)
 *
 *
 * columns and relationships of "locations"
 *
 */
export type LocationsTournaments_AggregateArgs = {
	distinct_on?: Maybe<Array<Tournaments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Tournaments_Order_By>>;
	where?: Maybe<Tournaments_Bool_Exp>;
};

/** aggregated selection of "locations" */
export type Locations_Aggregate = {
	__typename?: 'locations_aggregate';
	aggregate?: Maybe<Locations_Aggregate_Fields>;
	nodes: Array<Locations>;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_Fields = {
	__typename?: 'locations_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Locations_Max_Fields>;
	min?: Maybe<Locations_Min_Fields>;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Locations_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "locations" */
export type Locations_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Locations_Max_Order_By>;
	min?: Maybe<Locations_Min_Order_By>;
};

/** input type for inserting array relation for remote table "locations" */
export type Locations_Arr_Rel_Insert_Input = {
	data: Array<Locations_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Locations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "locations". All fields are combined with a logical 'AND'. */
export type Locations_Bool_Exp = {
	_and?: Maybe<Array<Locations_Bool_Exp>>;
	_not?: Maybe<Locations_Bool_Exp>;
	_or?: Maybe<Array<Locations_Bool_Exp>>;
	address?: Maybe<String_Comparison_Exp>;
	city?: Maybe<Cities_Bool_Exp>;
	city_id?: Maybe<Uuid_Comparison_Exp>;
	finals?: Maybe<Finals_Bool_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	leagues?: Maybe<Leagues_Bool_Exp>;
	matches?: Maybe<Matches_Bool_Exp>;
	name?: Maybe<String_Comparison_Exp>;
	phone_number?: Maybe<String_Comparison_Exp>;
	pitches?: Maybe<Pitches_Bool_Exp>;
	registrations?: Maybe<Registrations_Bool_Exp>;
	tournaments?: Maybe<Tournaments_Bool_Exp>;
};

/** unique or primary key constraints on table "locations" */
export enum Locations_Constraint {
	/** unique or primary key constraint */
	LocationsPkey = 'locations_pkey',
}

/** input type for inserting data into table "locations" */
export type Locations_Insert_Input = {
	address?: Maybe<Scalars['String']>;
	city?: Maybe<Cities_Obj_Rel_Insert_Input>;
	city_id?: Maybe<Scalars['uuid']>;
	finals?: Maybe<Finals_Arr_Rel_Insert_Input>;
	id?: Maybe<Scalars['uuid']>;
	leagues?: Maybe<Leagues_Arr_Rel_Insert_Input>;
	matches?: Maybe<Matches_Arr_Rel_Insert_Input>;
	name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
	pitches?: Maybe<Pitches_Arr_Rel_Insert_Input>;
	registrations?: Maybe<Registrations_Arr_Rel_Insert_Input>;
	tournaments?: Maybe<Tournaments_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Locations_Max_Fields = {
	__typename?: 'locations_max_fields';
	address?: Maybe<Scalars['String']>;
	city_id?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "locations" */
export type Locations_Max_Order_By = {
	address?: Maybe<Order_By>;
	city_id?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	phone_number?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Locations_Min_Fields = {
	__typename?: 'locations_min_fields';
	address?: Maybe<Scalars['String']>;
	city_id?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "locations" */
export type Locations_Min_Order_By = {
	address?: Maybe<Order_By>;
	city_id?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	phone_number?: Maybe<Order_By>;
};

/** response of any mutation on the table "locations" */
export type Locations_Mutation_Response = {
	__typename?: 'locations_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Locations>;
};

/** input type for inserting object relation for remote table "locations" */
export type Locations_Obj_Rel_Insert_Input = {
	data: Locations_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Locations_On_Conflict>;
};

/** on conflict condition type for table "locations" */
export type Locations_On_Conflict = {
	constraint: Locations_Constraint;
	update_columns?: Array<Locations_Update_Column>;
	where?: Maybe<Locations_Bool_Exp>;
};

/** Ordering options when selecting data from "locations". */
export type Locations_Order_By = {
	address?: Maybe<Order_By>;
	city?: Maybe<Cities_Order_By>;
	city_id?: Maybe<Order_By>;
	finals_aggregate?: Maybe<Finals_Aggregate_Order_By>;
	id?: Maybe<Order_By>;
	leagues_aggregate?: Maybe<Leagues_Aggregate_Order_By>;
	matches_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	name?: Maybe<Order_By>;
	phone_number?: Maybe<Order_By>;
	pitches_aggregate?: Maybe<Pitches_Aggregate_Order_By>;
	registrations_aggregate?: Maybe<Registrations_Aggregate_Order_By>;
	tournaments_aggregate?: Maybe<Tournaments_Aggregate_Order_By>;
};

/** primary key columns input for table: locations */
export type Locations_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "locations" */
export enum Locations_Select_Column {
	/** column name */
	Address = 'address',
	/** column name */
	CityId = 'city_id',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	PhoneNumber = 'phone_number',
}

/** input type for updating data in table "locations" */
export type Locations_Set_Input = {
	address?: Maybe<Scalars['String']>;
	city_id?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
};

/** update columns of table "locations" */
export enum Locations_Update_Column {
	/** column name */
	Address = 'address',
	/** column name */
	CityId = 'city_id',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	PhoneNumber = 'phone_number',
}

/** columns and relationships of "match_comments" */
export type Match_Comments = {
	__typename?: 'match_comments';
	author: Scalars['uuid'];
	created_at: Scalars['timestamptz'];
	id: Scalars['uuid'];
	match: Scalars['uuid'];
	/** An object relationship */
	matchByMatch: Matches;
	private: Scalars['Boolean'];
	text: Scalars['String'];
	/** An object relationship */
	user: Admin_Users;
};

/** aggregated selection of "match_comments" */
export type Match_Comments_Aggregate = {
	__typename?: 'match_comments_aggregate';
	aggregate?: Maybe<Match_Comments_Aggregate_Fields>;
	nodes: Array<Match_Comments>;
};

/** aggregate fields of "match_comments" */
export type Match_Comments_Aggregate_Fields = {
	__typename?: 'match_comments_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Match_Comments_Max_Fields>;
	min?: Maybe<Match_Comments_Min_Fields>;
};

/** aggregate fields of "match_comments" */
export type Match_Comments_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Match_Comments_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "match_comments" */
export type Match_Comments_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Match_Comments_Max_Order_By>;
	min?: Maybe<Match_Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "match_comments" */
export type Match_Comments_Arr_Rel_Insert_Input = {
	data: Array<Match_Comments_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Match_Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "match_comments". All fields are combined with a logical 'AND'. */
export type Match_Comments_Bool_Exp = {
	_and?: Maybe<Array<Match_Comments_Bool_Exp>>;
	_not?: Maybe<Match_Comments_Bool_Exp>;
	_or?: Maybe<Array<Match_Comments_Bool_Exp>>;
	author?: Maybe<Uuid_Comparison_Exp>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	match?: Maybe<Uuid_Comparison_Exp>;
	matchByMatch?: Maybe<Matches_Bool_Exp>;
	private?: Maybe<Boolean_Comparison_Exp>;
	text?: Maybe<String_Comparison_Exp>;
	user?: Maybe<Admin_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "match_comments" */
export enum Match_Comments_Constraint {
	/** unique or primary key constraint */
	MatchCommentsPkey = 'match_comments_pkey',
}

/** input type for inserting data into table "match_comments" */
export type Match_Comments_Insert_Input = {
	author?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	match?: Maybe<Scalars['uuid']>;
	matchByMatch?: Maybe<Matches_Obj_Rel_Insert_Input>;
	private?: Maybe<Scalars['Boolean']>;
	text?: Maybe<Scalars['String']>;
	user?: Maybe<Admin_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Match_Comments_Max_Fields = {
	__typename?: 'match_comments_max_fields';
	author?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	match?: Maybe<Scalars['uuid']>;
	text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "match_comments" */
export type Match_Comments_Max_Order_By = {
	author?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	match?: Maybe<Order_By>;
	text?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Match_Comments_Min_Fields = {
	__typename?: 'match_comments_min_fields';
	author?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	match?: Maybe<Scalars['uuid']>;
	text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "match_comments" */
export type Match_Comments_Min_Order_By = {
	author?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	match?: Maybe<Order_By>;
	text?: Maybe<Order_By>;
};

/** response of any mutation on the table "match_comments" */
export type Match_Comments_Mutation_Response = {
	__typename?: 'match_comments_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Match_Comments>;
};

/** on conflict condition type for table "match_comments" */
export type Match_Comments_On_Conflict = {
	constraint: Match_Comments_Constraint;
	update_columns?: Array<Match_Comments_Update_Column>;
	where?: Maybe<Match_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "match_comments". */
export type Match_Comments_Order_By = {
	author?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	match?: Maybe<Order_By>;
	matchByMatch?: Maybe<Matches_Order_By>;
	private?: Maybe<Order_By>;
	text?: Maybe<Order_By>;
	user?: Maybe<Admin_Users_Order_By>;
};

/** primary key columns input for table: match_comments */
export type Match_Comments_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "match_comments" */
export enum Match_Comments_Select_Column {
	/** column name */
	Author = 'author',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Match = 'match',
	/** column name */
	Private = 'private',
	/** column name */
	Text = 'text',
}

/** input type for updating data in table "match_comments" */
export type Match_Comments_Set_Input = {
	author?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	match?: Maybe<Scalars['uuid']>;
	private?: Maybe<Scalars['Boolean']>;
	text?: Maybe<Scalars['String']>;
};

/** update columns of table "match_comments" */
export enum Match_Comments_Update_Column {
	/** column name */
	Author = 'author',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Match = 'match',
	/** column name */
	Private = 'private',
	/** column name */
	Text = 'text',
}

/** columns and relationships of "matches" */
export type Matches = {
	__typename?: 'matches';
	away_score?: Maybe<Scalars['Int']>;
	away_team?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	date?: Maybe<Scalars['date']>;
	/** An object relationship */
	finalsGroupByFinalsGroup?: Maybe<Finals_Groups>;
	/** An object relationship */
	finalsKnockoutByFinalsKnockout?: Maybe<Finals_Knockouts>;
	finals_group?: Maybe<Scalars['uuid']>;
	finals_knockout?: Maybe<Scalars['uuid']>;
	/** DEPRECATED length of match in form of '2x25', etc */
	game_length?: Maybe<Scalars['String']>;
	/** length of each half in minutes */
	half_length: Scalars['Int'];
	home_score?: Maybe<Scalars['Int']>;
	home_team?: Maybe<Scalars['uuid']>;
	id: Scalars['uuid'];
	is_bye: Scalars['Boolean'];
	is_friendly: Scalars['Boolean'];
	kick_off_time?: Maybe<Scalars['timetz']>;
	/** ID for the league that this match is part of */
	league?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	leagueByLeague?: Maybe<Leagues>;
	location?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	locationByLocation?: Maybe<Locations>;
	man_of_the_match?: Maybe<Scalars['uuid']>;
	/** An array relationship */
	match_comments: Array<Match_Comments>;
	/** An aggregate relationship */
	match_comments_aggregate: Match_Comments_Aggregate;
	/** name of the match if any */
	name?: Maybe<Scalars['String']>;
	/** in minutes */
	number_of_halves: Scalars['Int'];
	pitch?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	pitchByPitch?: Maybe<Pitches>;
	/** An object relationship */
	placeholderTeamByPlaceholderHomeTeam?: Maybe<Placeholder_Teams>;
	placeholder_away_team?: Maybe<Scalars['uuid']>;
	placeholder_home_team?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	placeholder_team?: Maybe<Placeholder_Teams>;
	/** An array relationship */
	placeholder_teams: Array<Placeholder_Teams>;
	/** An aggregate relationship */
	placeholder_teams_aggregate: Placeholder_Teams_Aggregate;
	/** An object relationship */
	player?: Maybe<Players>;
	player_type?: Maybe<Scalars['String']>;
	postponed: Scalars['Boolean'];
	published: Scalars['Boolean'];
	referee?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	refereeByReferee?: Maybe<Referees>;
	round?: Maybe<Scalars['Int']>;
	/** total time that the match takes up in minutes */
	slot_time: Scalars['Int'];
	/** An object relationship */
	team?: Maybe<Teams>;
	/** An object relationship */
	teamByHomeTeam?: Maybe<Teams>;
	team_size?: Maybe<Scalars['String']>;
	tournament?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	tournamentByTournament?: Maybe<Tournaments>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "matches" */
export type MatchesMatch_CommentsArgs = {
	distinct_on?: Maybe<Array<Match_Comments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Match_Comments_Order_By>>;
	where?: Maybe<Match_Comments_Bool_Exp>;
};

/** columns and relationships of "matches" */
export type MatchesMatch_Comments_AggregateArgs = {
	distinct_on?: Maybe<Array<Match_Comments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Match_Comments_Order_By>>;
	where?: Maybe<Match_Comments_Bool_Exp>;
};

/** columns and relationships of "matches" */
export type MatchesPlaceholder_TeamsArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/** columns and relationships of "matches" */
export type MatchesPlaceholder_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/** aggregated selection of "matches" */
export type Matches_Aggregate = {
	__typename?: 'matches_aggregate';
	aggregate?: Maybe<Matches_Aggregate_Fields>;
	nodes: Array<Matches>;
};

/** aggregate fields of "matches" */
export type Matches_Aggregate_Fields = {
	__typename?: 'matches_aggregate_fields';
	avg?: Maybe<Matches_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Matches_Max_Fields>;
	min?: Maybe<Matches_Min_Fields>;
	stddev?: Maybe<Matches_Stddev_Fields>;
	stddev_pop?: Maybe<Matches_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Matches_Stddev_Samp_Fields>;
	sum?: Maybe<Matches_Sum_Fields>;
	var_pop?: Maybe<Matches_Var_Pop_Fields>;
	var_samp?: Maybe<Matches_Var_Samp_Fields>;
	variance?: Maybe<Matches_Variance_Fields>;
};

/** aggregate fields of "matches" */
export type Matches_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Matches_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "matches" */
export type Matches_Aggregate_Order_By = {
	avg?: Maybe<Matches_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<Matches_Max_Order_By>;
	min?: Maybe<Matches_Min_Order_By>;
	stddev?: Maybe<Matches_Stddev_Order_By>;
	stddev_pop?: Maybe<Matches_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<Matches_Stddev_Samp_Order_By>;
	sum?: Maybe<Matches_Sum_Order_By>;
	var_pop?: Maybe<Matches_Var_Pop_Order_By>;
	var_samp?: Maybe<Matches_Var_Samp_Order_By>;
	variance?: Maybe<Matches_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "matches" */
export type Matches_Arr_Rel_Insert_Input = {
	data: Array<Matches_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Matches_On_Conflict>;
};

/** aggregate avg on columns */
export type Matches_Avg_Fields = {
	__typename?: 'matches_avg_fields';
	away_score?: Maybe<Scalars['Float']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Float']>;
	home_score?: Maybe<Scalars['Float']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Float']>;
	round?: Maybe<Scalars['Float']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "matches" */
export type Matches_Avg_Order_By = {
	away_score?: Maybe<Order_By>;
	/** length of each half in minutes */
	half_length?: Maybe<Order_By>;
	home_score?: Maybe<Order_By>;
	/** in minutes */
	number_of_halves?: Maybe<Order_By>;
	round?: Maybe<Order_By>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "matches". All fields are combined with a logical 'AND'. */
export type Matches_Bool_Exp = {
	_and?: Maybe<Array<Matches_Bool_Exp>>;
	_not?: Maybe<Matches_Bool_Exp>;
	_or?: Maybe<Array<Matches_Bool_Exp>>;
	away_score?: Maybe<Int_Comparison_Exp>;
	away_team?: Maybe<Uuid_Comparison_Exp>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	date?: Maybe<Date_Comparison_Exp>;
	finalsGroupByFinalsGroup?: Maybe<Finals_Groups_Bool_Exp>;
	finalsKnockoutByFinalsKnockout?: Maybe<Finals_Knockouts_Bool_Exp>;
	finals_group?: Maybe<Uuid_Comparison_Exp>;
	finals_knockout?: Maybe<Uuid_Comparison_Exp>;
	game_length?: Maybe<String_Comparison_Exp>;
	half_length?: Maybe<Int_Comparison_Exp>;
	home_score?: Maybe<Int_Comparison_Exp>;
	home_team?: Maybe<Uuid_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	is_bye?: Maybe<Boolean_Comparison_Exp>;
	is_friendly?: Maybe<Boolean_Comparison_Exp>;
	kick_off_time?: Maybe<Timetz_Comparison_Exp>;
	league?: Maybe<Uuid_Comparison_Exp>;
	leagueByLeague?: Maybe<Leagues_Bool_Exp>;
	location?: Maybe<Uuid_Comparison_Exp>;
	locationByLocation?: Maybe<Locations_Bool_Exp>;
	man_of_the_match?: Maybe<Uuid_Comparison_Exp>;
	match_comments?: Maybe<Match_Comments_Bool_Exp>;
	name?: Maybe<String_Comparison_Exp>;
	number_of_halves?: Maybe<Int_Comparison_Exp>;
	pitch?: Maybe<Uuid_Comparison_Exp>;
	pitchByPitch?: Maybe<Pitches_Bool_Exp>;
	placeholderTeamByPlaceholderHomeTeam?: Maybe<Placeholder_Teams_Bool_Exp>;
	placeholder_away_team?: Maybe<Uuid_Comparison_Exp>;
	placeholder_home_team?: Maybe<Uuid_Comparison_Exp>;
	placeholder_team?: Maybe<Placeholder_Teams_Bool_Exp>;
	placeholder_teams?: Maybe<Placeholder_Teams_Bool_Exp>;
	player?: Maybe<Players_Bool_Exp>;
	player_type?: Maybe<String_Comparison_Exp>;
	postponed?: Maybe<Boolean_Comparison_Exp>;
	published?: Maybe<Boolean_Comparison_Exp>;
	referee?: Maybe<Uuid_Comparison_Exp>;
	refereeByReferee?: Maybe<Referees_Bool_Exp>;
	round?: Maybe<Int_Comparison_Exp>;
	slot_time?: Maybe<Int_Comparison_Exp>;
	team?: Maybe<Teams_Bool_Exp>;
	teamByHomeTeam?: Maybe<Teams_Bool_Exp>;
	team_size?: Maybe<String_Comparison_Exp>;
	tournament?: Maybe<Uuid_Comparison_Exp>;
	tournamentByTournament?: Maybe<Tournaments_Bool_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "matches" */
export enum Matches_Constraint {
	/** unique or primary key constraint */
	MatchesPkey = 'matches_pkey',
}

/** input type for incrementing numeric columns in table "matches" */
export type Matches_Inc_Input = {
	away_score?: Maybe<Scalars['Int']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Int']>;
	home_score?: Maybe<Scalars['Int']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Int']>;
	round?: Maybe<Scalars['Int']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "matches" */
export type Matches_Insert_Input = {
	away_score?: Maybe<Scalars['Int']>;
	away_team?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	date?: Maybe<Scalars['date']>;
	finalsGroupByFinalsGroup?: Maybe<Finals_Groups_Obj_Rel_Insert_Input>;
	finalsKnockoutByFinalsKnockout?: Maybe<Finals_Knockouts_Obj_Rel_Insert_Input>;
	finals_group?: Maybe<Scalars['uuid']>;
	finals_knockout?: Maybe<Scalars['uuid']>;
	/** DEPRECATED length of match in form of '2x25', etc */
	game_length?: Maybe<Scalars['String']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Int']>;
	home_score?: Maybe<Scalars['Int']>;
	home_team?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	is_bye?: Maybe<Scalars['Boolean']>;
	is_friendly?: Maybe<Scalars['Boolean']>;
	kick_off_time?: Maybe<Scalars['timetz']>;
	/** ID for the league that this match is part of */
	league?: Maybe<Scalars['uuid']>;
	leagueByLeague?: Maybe<Leagues_Obj_Rel_Insert_Input>;
	location?: Maybe<Scalars['uuid']>;
	locationByLocation?: Maybe<Locations_Obj_Rel_Insert_Input>;
	man_of_the_match?: Maybe<Scalars['uuid']>;
	match_comments?: Maybe<Match_Comments_Arr_Rel_Insert_Input>;
	/** name of the match if any */
	name?: Maybe<Scalars['String']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Int']>;
	pitch?: Maybe<Scalars['uuid']>;
	pitchByPitch?: Maybe<Pitches_Obj_Rel_Insert_Input>;
	placeholderTeamByPlaceholderHomeTeam?: Maybe<Placeholder_Teams_Obj_Rel_Insert_Input>;
	placeholder_away_team?: Maybe<Scalars['uuid']>;
	placeholder_home_team?: Maybe<Scalars['uuid']>;
	placeholder_team?: Maybe<Placeholder_Teams_Obj_Rel_Insert_Input>;
	placeholder_teams?: Maybe<Placeholder_Teams_Arr_Rel_Insert_Input>;
	player?: Maybe<Players_Obj_Rel_Insert_Input>;
	player_type?: Maybe<Scalars['String']>;
	postponed?: Maybe<Scalars['Boolean']>;
	published?: Maybe<Scalars['Boolean']>;
	referee?: Maybe<Scalars['uuid']>;
	refereeByReferee?: Maybe<Referees_Obj_Rel_Insert_Input>;
	round?: Maybe<Scalars['Int']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Int']>;
	team?: Maybe<Teams_Obj_Rel_Insert_Input>;
	teamByHomeTeam?: Maybe<Teams_Obj_Rel_Insert_Input>;
	team_size?: Maybe<Scalars['String']>;
	tournament?: Maybe<Scalars['uuid']>;
	tournamentByTournament?: Maybe<Tournaments_Obj_Rel_Insert_Input>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Matches_Max_Fields = {
	__typename?: 'matches_max_fields';
	away_score?: Maybe<Scalars['Int']>;
	away_team?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	date?: Maybe<Scalars['date']>;
	finals_group?: Maybe<Scalars['uuid']>;
	finals_knockout?: Maybe<Scalars['uuid']>;
	/** DEPRECATED length of match in form of '2x25', etc */
	game_length?: Maybe<Scalars['String']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Int']>;
	home_score?: Maybe<Scalars['Int']>;
	home_team?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_time?: Maybe<Scalars['timetz']>;
	/** ID for the league that this match is part of */
	league?: Maybe<Scalars['uuid']>;
	location?: Maybe<Scalars['uuid']>;
	man_of_the_match?: Maybe<Scalars['uuid']>;
	/** name of the match if any */
	name?: Maybe<Scalars['String']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Int']>;
	pitch?: Maybe<Scalars['uuid']>;
	placeholder_away_team?: Maybe<Scalars['uuid']>;
	placeholder_home_team?: Maybe<Scalars['uuid']>;
	player_type?: Maybe<Scalars['String']>;
	referee?: Maybe<Scalars['uuid']>;
	round?: Maybe<Scalars['Int']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Int']>;
	team_size?: Maybe<Scalars['String']>;
	tournament?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "matches" */
export type Matches_Max_Order_By = {
	away_score?: Maybe<Order_By>;
	away_team?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	date?: Maybe<Order_By>;
	finals_group?: Maybe<Order_By>;
	finals_knockout?: Maybe<Order_By>;
	/** DEPRECATED length of match in form of '2x25', etc */
	game_length?: Maybe<Order_By>;
	/** length of each half in minutes */
	half_length?: Maybe<Order_By>;
	home_score?: Maybe<Order_By>;
	home_team?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	kick_off_time?: Maybe<Order_By>;
	/** ID for the league that this match is part of */
	league?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	man_of_the_match?: Maybe<Order_By>;
	/** name of the match if any */
	name?: Maybe<Order_By>;
	/** in minutes */
	number_of_halves?: Maybe<Order_By>;
	pitch?: Maybe<Order_By>;
	placeholder_away_team?: Maybe<Order_By>;
	placeholder_home_team?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	referee?: Maybe<Order_By>;
	round?: Maybe<Order_By>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Order_By>;
	team_size?: Maybe<Order_By>;
	tournament?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Matches_Min_Fields = {
	__typename?: 'matches_min_fields';
	away_score?: Maybe<Scalars['Int']>;
	away_team?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	date?: Maybe<Scalars['date']>;
	finals_group?: Maybe<Scalars['uuid']>;
	finals_knockout?: Maybe<Scalars['uuid']>;
	/** DEPRECATED length of match in form of '2x25', etc */
	game_length?: Maybe<Scalars['String']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Int']>;
	home_score?: Maybe<Scalars['Int']>;
	home_team?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_time?: Maybe<Scalars['timetz']>;
	/** ID for the league that this match is part of */
	league?: Maybe<Scalars['uuid']>;
	location?: Maybe<Scalars['uuid']>;
	man_of_the_match?: Maybe<Scalars['uuid']>;
	/** name of the match if any */
	name?: Maybe<Scalars['String']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Int']>;
	pitch?: Maybe<Scalars['uuid']>;
	placeholder_away_team?: Maybe<Scalars['uuid']>;
	placeholder_home_team?: Maybe<Scalars['uuid']>;
	player_type?: Maybe<Scalars['String']>;
	referee?: Maybe<Scalars['uuid']>;
	round?: Maybe<Scalars['Int']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Int']>;
	team_size?: Maybe<Scalars['String']>;
	tournament?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "matches" */
export type Matches_Min_Order_By = {
	away_score?: Maybe<Order_By>;
	away_team?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	date?: Maybe<Order_By>;
	finals_group?: Maybe<Order_By>;
	finals_knockout?: Maybe<Order_By>;
	/** DEPRECATED length of match in form of '2x25', etc */
	game_length?: Maybe<Order_By>;
	/** length of each half in minutes */
	half_length?: Maybe<Order_By>;
	home_score?: Maybe<Order_By>;
	home_team?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	kick_off_time?: Maybe<Order_By>;
	/** ID for the league that this match is part of */
	league?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	man_of_the_match?: Maybe<Order_By>;
	/** name of the match if any */
	name?: Maybe<Order_By>;
	/** in minutes */
	number_of_halves?: Maybe<Order_By>;
	pitch?: Maybe<Order_By>;
	placeholder_away_team?: Maybe<Order_By>;
	placeholder_home_team?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	referee?: Maybe<Order_By>;
	round?: Maybe<Order_By>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Order_By>;
	team_size?: Maybe<Order_By>;
	tournament?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "matches" */
export type Matches_Mutation_Response = {
	__typename?: 'matches_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Matches>;
};

/** input type for inserting object relation for remote table "matches" */
export type Matches_Obj_Rel_Insert_Input = {
	data: Matches_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Matches_On_Conflict>;
};

/** on conflict condition type for table "matches" */
export type Matches_On_Conflict = {
	constraint: Matches_Constraint;
	update_columns?: Array<Matches_Update_Column>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** Ordering options when selecting data from "matches". */
export type Matches_Order_By = {
	away_score?: Maybe<Order_By>;
	away_team?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	date?: Maybe<Order_By>;
	finalsGroupByFinalsGroup?: Maybe<Finals_Groups_Order_By>;
	finalsKnockoutByFinalsKnockout?: Maybe<Finals_Knockouts_Order_By>;
	finals_group?: Maybe<Order_By>;
	finals_knockout?: Maybe<Order_By>;
	game_length?: Maybe<Order_By>;
	half_length?: Maybe<Order_By>;
	home_score?: Maybe<Order_By>;
	home_team?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	is_bye?: Maybe<Order_By>;
	is_friendly?: Maybe<Order_By>;
	kick_off_time?: Maybe<Order_By>;
	league?: Maybe<Order_By>;
	leagueByLeague?: Maybe<Leagues_Order_By>;
	location?: Maybe<Order_By>;
	locationByLocation?: Maybe<Locations_Order_By>;
	man_of_the_match?: Maybe<Order_By>;
	match_comments_aggregate?: Maybe<Match_Comments_Aggregate_Order_By>;
	name?: Maybe<Order_By>;
	number_of_halves?: Maybe<Order_By>;
	pitch?: Maybe<Order_By>;
	pitchByPitch?: Maybe<Pitches_Order_By>;
	placeholderTeamByPlaceholderHomeTeam?: Maybe<Placeholder_Teams_Order_By>;
	placeholder_away_team?: Maybe<Order_By>;
	placeholder_home_team?: Maybe<Order_By>;
	placeholder_team?: Maybe<Placeholder_Teams_Order_By>;
	placeholder_teams_aggregate?: Maybe<Placeholder_Teams_Aggregate_Order_By>;
	player?: Maybe<Players_Order_By>;
	player_type?: Maybe<Order_By>;
	postponed?: Maybe<Order_By>;
	published?: Maybe<Order_By>;
	referee?: Maybe<Order_By>;
	refereeByReferee?: Maybe<Referees_Order_By>;
	round?: Maybe<Order_By>;
	slot_time?: Maybe<Order_By>;
	team?: Maybe<Teams_Order_By>;
	teamByHomeTeam?: Maybe<Teams_Order_By>;
	team_size?: Maybe<Order_By>;
	tournament?: Maybe<Order_By>;
	tournamentByTournament?: Maybe<Tournaments_Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: matches */
export type Matches_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "matches" */
export enum Matches_Select_Column {
	/** column name */
	AwayScore = 'away_score',
	/** column name */
	AwayTeam = 'away_team',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Date = 'date',
	/** column name */
	FinalsGroup = 'finals_group',
	/** column name */
	FinalsKnockout = 'finals_knockout',
	/** column name */
	GameLength = 'game_length',
	/** column name */
	HalfLength = 'half_length',
	/** column name */
	HomeScore = 'home_score',
	/** column name */
	HomeTeam = 'home_team',
	/** column name */
	Id = 'id',
	/** column name */
	IsBye = 'is_bye',
	/** column name */
	IsFriendly = 'is_friendly',
	/** column name */
	KickOffTime = 'kick_off_time',
	/** column name */
	League = 'league',
	/** column name */
	Location = 'location',
	/** column name */
	ManOfTheMatch = 'man_of_the_match',
	/** column name */
	Name = 'name',
	/** column name */
	NumberOfHalves = 'number_of_halves',
	/** column name */
	Pitch = 'pitch',
	/** column name */
	PlaceholderAwayTeam = 'placeholder_away_team',
	/** column name */
	PlaceholderHomeTeam = 'placeholder_home_team',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	Postponed = 'postponed',
	/** column name */
	Published = 'published',
	/** column name */
	Referee = 'referee',
	/** column name */
	Round = 'round',
	/** column name */
	SlotTime = 'slot_time',
	/** column name */
	TeamSize = 'team_size',
	/** column name */
	Tournament = 'tournament',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "matches" */
export type Matches_Set_Input = {
	away_score?: Maybe<Scalars['Int']>;
	away_team?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	date?: Maybe<Scalars['date']>;
	finals_group?: Maybe<Scalars['uuid']>;
	finals_knockout?: Maybe<Scalars['uuid']>;
	/** DEPRECATED length of match in form of '2x25', etc */
	game_length?: Maybe<Scalars['String']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Int']>;
	home_score?: Maybe<Scalars['Int']>;
	home_team?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	is_bye?: Maybe<Scalars['Boolean']>;
	is_friendly?: Maybe<Scalars['Boolean']>;
	kick_off_time?: Maybe<Scalars['timetz']>;
	/** ID for the league that this match is part of */
	league?: Maybe<Scalars['uuid']>;
	location?: Maybe<Scalars['uuid']>;
	man_of_the_match?: Maybe<Scalars['uuid']>;
	/** name of the match if any */
	name?: Maybe<Scalars['String']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Int']>;
	pitch?: Maybe<Scalars['uuid']>;
	placeholder_away_team?: Maybe<Scalars['uuid']>;
	placeholder_home_team?: Maybe<Scalars['uuid']>;
	player_type?: Maybe<Scalars['String']>;
	postponed?: Maybe<Scalars['Boolean']>;
	published?: Maybe<Scalars['Boolean']>;
	referee?: Maybe<Scalars['uuid']>;
	round?: Maybe<Scalars['Int']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Int']>;
	team_size?: Maybe<Scalars['String']>;
	tournament?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Matches_Stddev_Fields = {
	__typename?: 'matches_stddev_fields';
	away_score?: Maybe<Scalars['Float']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Float']>;
	home_score?: Maybe<Scalars['Float']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Float']>;
	round?: Maybe<Scalars['Float']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "matches" */
export type Matches_Stddev_Order_By = {
	away_score?: Maybe<Order_By>;
	/** length of each half in minutes */
	half_length?: Maybe<Order_By>;
	home_score?: Maybe<Order_By>;
	/** in minutes */
	number_of_halves?: Maybe<Order_By>;
	round?: Maybe<Order_By>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Matches_Stddev_Pop_Fields = {
	__typename?: 'matches_stddev_pop_fields';
	away_score?: Maybe<Scalars['Float']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Float']>;
	home_score?: Maybe<Scalars['Float']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Float']>;
	round?: Maybe<Scalars['Float']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "matches" */
export type Matches_Stddev_Pop_Order_By = {
	away_score?: Maybe<Order_By>;
	/** length of each half in minutes */
	half_length?: Maybe<Order_By>;
	home_score?: Maybe<Order_By>;
	/** in minutes */
	number_of_halves?: Maybe<Order_By>;
	round?: Maybe<Order_By>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Matches_Stddev_Samp_Fields = {
	__typename?: 'matches_stddev_samp_fields';
	away_score?: Maybe<Scalars['Float']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Float']>;
	home_score?: Maybe<Scalars['Float']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Float']>;
	round?: Maybe<Scalars['Float']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "matches" */
export type Matches_Stddev_Samp_Order_By = {
	away_score?: Maybe<Order_By>;
	/** length of each half in minutes */
	half_length?: Maybe<Order_By>;
	home_score?: Maybe<Order_By>;
	/** in minutes */
	number_of_halves?: Maybe<Order_By>;
	round?: Maybe<Order_By>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Matches_Sum_Fields = {
	__typename?: 'matches_sum_fields';
	away_score?: Maybe<Scalars['Int']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Int']>;
	home_score?: Maybe<Scalars['Int']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Int']>;
	round?: Maybe<Scalars['Int']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "matches" */
export type Matches_Sum_Order_By = {
	away_score?: Maybe<Order_By>;
	/** length of each half in minutes */
	half_length?: Maybe<Order_By>;
	home_score?: Maybe<Order_By>;
	/** in minutes */
	number_of_halves?: Maybe<Order_By>;
	round?: Maybe<Order_By>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Order_By>;
};

/** update columns of table "matches" */
export enum Matches_Update_Column {
	/** column name */
	AwayScore = 'away_score',
	/** column name */
	AwayTeam = 'away_team',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Date = 'date',
	/** column name */
	FinalsGroup = 'finals_group',
	/** column name */
	FinalsKnockout = 'finals_knockout',
	/** column name */
	GameLength = 'game_length',
	/** column name */
	HalfLength = 'half_length',
	/** column name */
	HomeScore = 'home_score',
	/** column name */
	HomeTeam = 'home_team',
	/** column name */
	Id = 'id',
	/** column name */
	IsBye = 'is_bye',
	/** column name */
	IsFriendly = 'is_friendly',
	/** column name */
	KickOffTime = 'kick_off_time',
	/** column name */
	League = 'league',
	/** column name */
	Location = 'location',
	/** column name */
	ManOfTheMatch = 'man_of_the_match',
	/** column name */
	Name = 'name',
	/** column name */
	NumberOfHalves = 'number_of_halves',
	/** column name */
	Pitch = 'pitch',
	/** column name */
	PlaceholderAwayTeam = 'placeholder_away_team',
	/** column name */
	PlaceholderHomeTeam = 'placeholder_home_team',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	Postponed = 'postponed',
	/** column name */
	Published = 'published',
	/** column name */
	Referee = 'referee',
	/** column name */
	Round = 'round',
	/** column name */
	SlotTime = 'slot_time',
	/** column name */
	TeamSize = 'team_size',
	/** column name */
	Tournament = 'tournament',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Matches_Var_Pop_Fields = {
	__typename?: 'matches_var_pop_fields';
	away_score?: Maybe<Scalars['Float']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Float']>;
	home_score?: Maybe<Scalars['Float']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Float']>;
	round?: Maybe<Scalars['Float']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "matches" */
export type Matches_Var_Pop_Order_By = {
	away_score?: Maybe<Order_By>;
	/** length of each half in minutes */
	half_length?: Maybe<Order_By>;
	home_score?: Maybe<Order_By>;
	/** in minutes */
	number_of_halves?: Maybe<Order_By>;
	round?: Maybe<Order_By>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Matches_Var_Samp_Fields = {
	__typename?: 'matches_var_samp_fields';
	away_score?: Maybe<Scalars['Float']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Float']>;
	home_score?: Maybe<Scalars['Float']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Float']>;
	round?: Maybe<Scalars['Float']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "matches" */
export type Matches_Var_Samp_Order_By = {
	away_score?: Maybe<Order_By>;
	/** length of each half in minutes */
	half_length?: Maybe<Order_By>;
	home_score?: Maybe<Order_By>;
	/** in minutes */
	number_of_halves?: Maybe<Order_By>;
	round?: Maybe<Order_By>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Matches_Variance_Fields = {
	__typename?: 'matches_variance_fields';
	away_score?: Maybe<Scalars['Float']>;
	/** length of each half in minutes */
	half_length?: Maybe<Scalars['Float']>;
	home_score?: Maybe<Scalars['Float']>;
	/** in minutes */
	number_of_halves?: Maybe<Scalars['Float']>;
	round?: Maybe<Scalars['Float']>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "matches" */
export type Matches_Variance_Order_By = {
	away_score?: Maybe<Order_By>;
	/** length of each half in minutes */
	half_length?: Maybe<Order_By>;
	home_score?: Maybe<Order_By>;
	/** in minutes */
	number_of_halves?: Maybe<Order_By>;
	round?: Maybe<Order_By>;
	/** total time that the match takes up in minutes */
	slot_time?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
	__typename?: 'mutation_root';
	/** delete data from the table: "admin_users" */
	delete_admin_users?: Maybe<Admin_Users_Mutation_Response>;
	/** delete single row from the table: "admin_users" */
	delete_admin_users_by_pk?: Maybe<Admin_Users>;
	/** delete data from the table: "cities" */
	delete_cities?: Maybe<Cities_Mutation_Response>;
	/** delete single row from the table: "cities" */
	delete_cities_by_pk?: Maybe<Cities>;
	/** delete data from the table: "coordinators" */
	delete_coordinators?: Maybe<Coordinators_Mutation_Response>;
	/** delete single row from the table: "coordinators" */
	delete_coordinators_by_pk?: Maybe<Coordinators>;
	/** delete data from the table: "countries" */
	delete_countries?: Maybe<Countries_Mutation_Response>;
	/** delete single row from the table: "countries" */
	delete_countries_by_pk?: Maybe<Countries>;
	/** delete data from the table: "finals" */
	delete_finals?: Maybe<Finals_Mutation_Response>;
	/** delete single row from the table: "finals" */
	delete_finals_by_pk?: Maybe<Finals>;
	/** delete data from the table: "finals_groups" */
	delete_finals_groups?: Maybe<Finals_Groups_Mutation_Response>;
	/** delete single row from the table: "finals_groups" */
	delete_finals_groups_by_pk?: Maybe<Finals_Groups>;
	/** delete data from the table: "finals_knockouts" */
	delete_finals_knockouts?: Maybe<Finals_Knockouts_Mutation_Response>;
	/** delete single row from the table: "finals_knockouts" */
	delete_finals_knockouts_by_pk?: Maybe<Finals_Knockouts>;
	/** delete data from the table: "footy_users" */
	delete_footy_users?: Maybe<Footy_Users_Mutation_Response>;
	/** delete single row from the table: "footy_users" */
	delete_footy_users_by_pk?: Maybe<Footy_Users>;
	/** delete data from the table: "historic_team_names" */
	delete_historic_team_names?: Maybe<Historic_Team_Names_Mutation_Response>;
	/** delete single row from the table: "historic_team_names" */
	delete_historic_team_names_by_pk?: Maybe<Historic_Team_Names>;
	/** delete data from the table: "join_finals_leagues" */
	delete_join_finals_leagues?: Maybe<Join_Finals_Leagues_Mutation_Response>;
	/** delete single row from the table: "join_finals_leagues" */
	delete_join_finals_leagues_by_pk?: Maybe<Join_Finals_Leagues>;
	/** delete data from the table: "join_footy_users_teams" */
	delete_join_footy_users_teams?: Maybe<Join_Footy_Users_Teams_Mutation_Response>;
	/** delete single row from the table: "join_footy_users_teams" */
	delete_join_footy_users_teams_by_pk?: Maybe<Join_Footy_Users_Teams>;
	/** delete data from the table: "join_league_teams" */
	delete_join_league_teams?: Maybe<Join_League_Teams_Mutation_Response>;
	/** delete single row from the table: "join_league_teams" */
	delete_join_league_teams_by_pk?: Maybe<Join_League_Teams>;
	/** delete data from the table: "join_leagues_mini_leagues" */
	delete_join_leagues_mini_leagues?: Maybe<Join_Leagues_Mini_Leagues_Mutation_Response>;
	/** delete single row from the table: "join_leagues_mini_leagues" */
	delete_join_leagues_mini_leagues_by_pk?: Maybe<Join_Leagues_Mini_Leagues>;
	/** delete data from the table: "join_players_teams" */
	delete_join_players_teams?: Maybe<Join_Players_Teams_Mutation_Response>;
	/** delete single row from the table: "join_players_teams" */
	delete_join_players_teams_by_pk?: Maybe<Join_Players_Teams>;
	/** delete data from the table: "join_team_finals" */
	delete_join_team_finals?: Maybe<Join_Team_Finals_Mutation_Response>;
	/** delete single row from the table: "join_team_finals" */
	delete_join_team_finals_by_pk?: Maybe<Join_Team_Finals>;
	/** delete data from the table: "leagues" */
	delete_leagues?: Maybe<Leagues_Mutation_Response>;
	/** delete single row from the table: "leagues" */
	delete_leagues_by_pk?: Maybe<Leagues>;
	/** delete data from the table: "locations" */
	delete_locations?: Maybe<Locations_Mutation_Response>;
	/** delete single row from the table: "locations" */
	delete_locations_by_pk?: Maybe<Locations>;
	/** delete data from the table: "match_comments" */
	delete_match_comments?: Maybe<Match_Comments_Mutation_Response>;
	/** delete single row from the table: "match_comments" */
	delete_match_comments_by_pk?: Maybe<Match_Comments>;
	/** delete data from the table: "matches" */
	delete_matches?: Maybe<Matches_Mutation_Response>;
	/** delete single row from the table: "matches" */
	delete_matches_by_pk?: Maybe<Matches>;
	/** delete data from the table: "pitches" */
	delete_pitches?: Maybe<Pitches_Mutation_Response>;
	/** delete single row from the table: "pitches" */
	delete_pitches_by_pk?: Maybe<Pitches>;
	/** delete data from the table: "placeholder_teams" */
	delete_placeholder_teams?: Maybe<Placeholder_Teams_Mutation_Response>;
	/** delete single row from the table: "placeholder_teams" */
	delete_placeholder_teams_by_pk?: Maybe<Placeholder_Teams>;
	/** delete data from the table: "players" */
	delete_players?: Maybe<Players_Mutation_Response>;
	/** delete single row from the table: "players" */
	delete_players_by_pk?: Maybe<Players>;
	/** delete data from the table: "referees" */
	delete_referees?: Maybe<Referees_Mutation_Response>;
	/** delete single row from the table: "referees" */
	delete_referees_by_pk?: Maybe<Referees>;
	/** delete data from the table: "registrations" */
	delete_registrations?: Maybe<Registrations_Mutation_Response>;
	/** delete single row from the table: "registrations" */
	delete_registrations_by_pk?: Maybe<Registrations>;
	/** delete data from the table: "registrations_player" */
	delete_registrations_player?: Maybe<Registrations_Player_Mutation_Response>;
	/** delete single row from the table: "registrations_player" */
	delete_registrations_player_by_pk?: Maybe<Registrations_Player>;
	/** delete data from the table: "registrations_teams" */
	delete_registrations_teams?: Maybe<Registrations_Teams_Mutation_Response>;
	/** delete single row from the table: "registrations_teams" */
	delete_registrations_teams_by_pk?: Maybe<Registrations_Teams>;
	/** delete data from the table: "seedings" */
	delete_seedings?: Maybe<Seedings_Mutation_Response>;
	/** delete single row from the table: "seedings" */
	delete_seedings_by_pk?: Maybe<Seedings>;
	/** delete data from the table: "teams" */
	delete_teams?: Maybe<Teams_Mutation_Response>;
	/** delete single row from the table: "teams" */
	delete_teams_by_pk?: Maybe<Teams>;
	/** delete data from the table: "tournaments" */
	delete_tournaments?: Maybe<Tournaments_Mutation_Response>;
	/** delete single row from the table: "tournaments" */
	delete_tournaments_by_pk?: Maybe<Tournaments>;
	/** insert data into the table: "admin_users" */
	insert_admin_users?: Maybe<Admin_Users_Mutation_Response>;
	/** insert a single row into the table: "admin_users" */
	insert_admin_users_one?: Maybe<Admin_Users>;
	/** insert data into the table: "cities" */
	insert_cities?: Maybe<Cities_Mutation_Response>;
	/** insert a single row into the table: "cities" */
	insert_cities_one?: Maybe<Cities>;
	/** insert data into the table: "coordinators" */
	insert_coordinators?: Maybe<Coordinators_Mutation_Response>;
	/** insert a single row into the table: "coordinators" */
	insert_coordinators_one?: Maybe<Coordinators>;
	/** insert data into the table: "countries" */
	insert_countries?: Maybe<Countries_Mutation_Response>;
	/** insert a single row into the table: "countries" */
	insert_countries_one?: Maybe<Countries>;
	/** insert data into the table: "finals" */
	insert_finals?: Maybe<Finals_Mutation_Response>;
	/** insert data into the table: "finals_groups" */
	insert_finals_groups?: Maybe<Finals_Groups_Mutation_Response>;
	/** insert a single row into the table: "finals_groups" */
	insert_finals_groups_one?: Maybe<Finals_Groups>;
	/** insert data into the table: "finals_knockouts" */
	insert_finals_knockouts?: Maybe<Finals_Knockouts_Mutation_Response>;
	/** insert a single row into the table: "finals_knockouts" */
	insert_finals_knockouts_one?: Maybe<Finals_Knockouts>;
	/** insert a single row into the table: "finals" */
	insert_finals_one?: Maybe<Finals>;
	/** insert data into the table: "footy_users" */
	insert_footy_users?: Maybe<Footy_Users_Mutation_Response>;
	/** insert a single row into the table: "footy_users" */
	insert_footy_users_one?: Maybe<Footy_Users>;
	/** insert data into the table: "historic_team_names" */
	insert_historic_team_names?: Maybe<Historic_Team_Names_Mutation_Response>;
	/** insert a single row into the table: "historic_team_names" */
	insert_historic_team_names_one?: Maybe<Historic_Team_Names>;
	/** insert data into the table: "join_finals_leagues" */
	insert_join_finals_leagues?: Maybe<Join_Finals_Leagues_Mutation_Response>;
	/** insert a single row into the table: "join_finals_leagues" */
	insert_join_finals_leagues_one?: Maybe<Join_Finals_Leagues>;
	/** insert data into the table: "join_footy_users_teams" */
	insert_join_footy_users_teams?: Maybe<Join_Footy_Users_Teams_Mutation_Response>;
	/** insert a single row into the table: "join_footy_users_teams" */
	insert_join_footy_users_teams_one?: Maybe<Join_Footy_Users_Teams>;
	/** insert data into the table: "join_league_teams" */
	insert_join_league_teams?: Maybe<Join_League_Teams_Mutation_Response>;
	/** insert a single row into the table: "join_league_teams" */
	insert_join_league_teams_one?: Maybe<Join_League_Teams>;
	/** insert data into the table: "join_leagues_mini_leagues" */
	insert_join_leagues_mini_leagues?: Maybe<Join_Leagues_Mini_Leagues_Mutation_Response>;
	/** insert a single row into the table: "join_leagues_mini_leagues" */
	insert_join_leagues_mini_leagues_one?: Maybe<Join_Leagues_Mini_Leagues>;
	/** insert data into the table: "join_players_teams" */
	insert_join_players_teams?: Maybe<Join_Players_Teams_Mutation_Response>;
	/** insert a single row into the table: "join_players_teams" */
	insert_join_players_teams_one?: Maybe<Join_Players_Teams>;
	/** insert data into the table: "join_team_finals" */
	insert_join_team_finals?: Maybe<Join_Team_Finals_Mutation_Response>;
	/** insert a single row into the table: "join_team_finals" */
	insert_join_team_finals_one?: Maybe<Join_Team_Finals>;
	/** insert data into the table: "leagues" */
	insert_leagues?: Maybe<Leagues_Mutation_Response>;
	/** insert a single row into the table: "leagues" */
	insert_leagues_one?: Maybe<Leagues>;
	/** insert data into the table: "locations" */
	insert_locations?: Maybe<Locations_Mutation_Response>;
	/** insert a single row into the table: "locations" */
	insert_locations_one?: Maybe<Locations>;
	/** insert data into the table: "match_comments" */
	insert_match_comments?: Maybe<Match_Comments_Mutation_Response>;
	/** insert a single row into the table: "match_comments" */
	insert_match_comments_one?: Maybe<Match_Comments>;
	/** insert data into the table: "matches" */
	insert_matches?: Maybe<Matches_Mutation_Response>;
	/** insert a single row into the table: "matches" */
	insert_matches_one?: Maybe<Matches>;
	/** insert data into the table: "pitches" */
	insert_pitches?: Maybe<Pitches_Mutation_Response>;
	/** insert a single row into the table: "pitches" */
	insert_pitches_one?: Maybe<Pitches>;
	/** insert data into the table: "placeholder_teams" */
	insert_placeholder_teams?: Maybe<Placeholder_Teams_Mutation_Response>;
	/** insert a single row into the table: "placeholder_teams" */
	insert_placeholder_teams_one?: Maybe<Placeholder_Teams>;
	/** insert data into the table: "players" */
	insert_players?: Maybe<Players_Mutation_Response>;
	/** insert a single row into the table: "players" */
	insert_players_one?: Maybe<Players>;
	/** insert data into the table: "referees" */
	insert_referees?: Maybe<Referees_Mutation_Response>;
	/** insert a single row into the table: "referees" */
	insert_referees_one?: Maybe<Referees>;
	/** insert data into the table: "registrations" */
	insert_registrations?: Maybe<Registrations_Mutation_Response>;
	/** insert a single row into the table: "registrations" */
	insert_registrations_one?: Maybe<Registrations>;
	/** insert data into the table: "registrations_player" */
	insert_registrations_player?: Maybe<Registrations_Player_Mutation_Response>;
	/** insert a single row into the table: "registrations_player" */
	insert_registrations_player_one?: Maybe<Registrations_Player>;
	/** insert data into the table: "registrations_teams" */
	insert_registrations_teams?: Maybe<Registrations_Teams_Mutation_Response>;
	/** insert a single row into the table: "registrations_teams" */
	insert_registrations_teams_one?: Maybe<Registrations_Teams>;
	/** insert data into the table: "seedings" */
	insert_seedings?: Maybe<Seedings_Mutation_Response>;
	/** insert a single row into the table: "seedings" */
	insert_seedings_one?: Maybe<Seedings>;
	/** insert data into the table: "teams" */
	insert_teams?: Maybe<Teams_Mutation_Response>;
	/** insert a single row into the table: "teams" */
	insert_teams_one?: Maybe<Teams>;
	/** insert data into the table: "tournaments" */
	insert_tournaments?: Maybe<Tournaments_Mutation_Response>;
	/** insert a single row into the table: "tournaments" */
	insert_tournaments_one?: Maybe<Tournaments>;
	/** update data of the table: "admin_users" */
	update_admin_users?: Maybe<Admin_Users_Mutation_Response>;
	/** update single row of the table: "admin_users" */
	update_admin_users_by_pk?: Maybe<Admin_Users>;
	/** update data of the table: "cities" */
	update_cities?: Maybe<Cities_Mutation_Response>;
	/** update single row of the table: "cities" */
	update_cities_by_pk?: Maybe<Cities>;
	/** update data of the table: "coordinators" */
	update_coordinators?: Maybe<Coordinators_Mutation_Response>;
	/** update single row of the table: "coordinators" */
	update_coordinators_by_pk?: Maybe<Coordinators>;
	/** update data of the table: "countries" */
	update_countries?: Maybe<Countries_Mutation_Response>;
	/** update single row of the table: "countries" */
	update_countries_by_pk?: Maybe<Countries>;
	/** update data of the table: "finals" */
	update_finals?: Maybe<Finals_Mutation_Response>;
	/** update single row of the table: "finals" */
	update_finals_by_pk?: Maybe<Finals>;
	/** update data of the table: "finals_groups" */
	update_finals_groups?: Maybe<Finals_Groups_Mutation_Response>;
	/** update single row of the table: "finals_groups" */
	update_finals_groups_by_pk?: Maybe<Finals_Groups>;
	/** update data of the table: "finals_knockouts" */
	update_finals_knockouts?: Maybe<Finals_Knockouts_Mutation_Response>;
	/** update single row of the table: "finals_knockouts" */
	update_finals_knockouts_by_pk?: Maybe<Finals_Knockouts>;
	/** update data of the table: "footy_users" */
	update_footy_users?: Maybe<Footy_Users_Mutation_Response>;
	/** update single row of the table: "footy_users" */
	update_footy_users_by_pk?: Maybe<Footy_Users>;
	/** update data of the table: "historic_team_names" */
	update_historic_team_names?: Maybe<Historic_Team_Names_Mutation_Response>;
	/** update single row of the table: "historic_team_names" */
	update_historic_team_names_by_pk?: Maybe<Historic_Team_Names>;
	/** update data of the table: "join_finals_leagues" */
	update_join_finals_leagues?: Maybe<Join_Finals_Leagues_Mutation_Response>;
	/** update single row of the table: "join_finals_leagues" */
	update_join_finals_leagues_by_pk?: Maybe<Join_Finals_Leagues>;
	/** update data of the table: "join_footy_users_teams" */
	update_join_footy_users_teams?: Maybe<Join_Footy_Users_Teams_Mutation_Response>;
	/** update single row of the table: "join_footy_users_teams" */
	update_join_footy_users_teams_by_pk?: Maybe<Join_Footy_Users_Teams>;
	/** update data of the table: "join_league_teams" */
	update_join_league_teams?: Maybe<Join_League_Teams_Mutation_Response>;
	/** update single row of the table: "join_league_teams" */
	update_join_league_teams_by_pk?: Maybe<Join_League_Teams>;
	/** update data of the table: "join_leagues_mini_leagues" */
	update_join_leagues_mini_leagues?: Maybe<Join_Leagues_Mini_Leagues_Mutation_Response>;
	/** update single row of the table: "join_leagues_mini_leagues" */
	update_join_leagues_mini_leagues_by_pk?: Maybe<Join_Leagues_Mini_Leagues>;
	/** update data of the table: "join_players_teams" */
	update_join_players_teams?: Maybe<Join_Players_Teams_Mutation_Response>;
	/** update single row of the table: "join_players_teams" */
	update_join_players_teams_by_pk?: Maybe<Join_Players_Teams>;
	/** update data of the table: "join_team_finals" */
	update_join_team_finals?: Maybe<Join_Team_Finals_Mutation_Response>;
	/** update single row of the table: "join_team_finals" */
	update_join_team_finals_by_pk?: Maybe<Join_Team_Finals>;
	/** update data of the table: "leagues" */
	update_leagues?: Maybe<Leagues_Mutation_Response>;
	/** update single row of the table: "leagues" */
	update_leagues_by_pk?: Maybe<Leagues>;
	/** update data of the table: "locations" */
	update_locations?: Maybe<Locations_Mutation_Response>;
	/** update single row of the table: "locations" */
	update_locations_by_pk?: Maybe<Locations>;
	/** update data of the table: "match_comments" */
	update_match_comments?: Maybe<Match_Comments_Mutation_Response>;
	/** update single row of the table: "match_comments" */
	update_match_comments_by_pk?: Maybe<Match_Comments>;
	/** update data of the table: "matches" */
	update_matches?: Maybe<Matches_Mutation_Response>;
	/** update single row of the table: "matches" */
	update_matches_by_pk?: Maybe<Matches>;
	/** update data of the table: "pitches" */
	update_pitches?: Maybe<Pitches_Mutation_Response>;
	/** update single row of the table: "pitches" */
	update_pitches_by_pk?: Maybe<Pitches>;
	/** update data of the table: "placeholder_teams" */
	update_placeholder_teams?: Maybe<Placeholder_Teams_Mutation_Response>;
	/** update single row of the table: "placeholder_teams" */
	update_placeholder_teams_by_pk?: Maybe<Placeholder_Teams>;
	/** update data of the table: "players" */
	update_players?: Maybe<Players_Mutation_Response>;
	/** update single row of the table: "players" */
	update_players_by_pk?: Maybe<Players>;
	/** update data of the table: "referees" */
	update_referees?: Maybe<Referees_Mutation_Response>;
	/** update single row of the table: "referees" */
	update_referees_by_pk?: Maybe<Referees>;
	/** update data of the table: "registrations" */
	update_registrations?: Maybe<Registrations_Mutation_Response>;
	/** update single row of the table: "registrations" */
	update_registrations_by_pk?: Maybe<Registrations>;
	/** update data of the table: "registrations_player" */
	update_registrations_player?: Maybe<Registrations_Player_Mutation_Response>;
	/** update single row of the table: "registrations_player" */
	update_registrations_player_by_pk?: Maybe<Registrations_Player>;
	/** update data of the table: "registrations_teams" */
	update_registrations_teams?: Maybe<Registrations_Teams_Mutation_Response>;
	/** update single row of the table: "registrations_teams" */
	update_registrations_teams_by_pk?: Maybe<Registrations_Teams>;
	/** update data of the table: "seedings" */
	update_seedings?: Maybe<Seedings_Mutation_Response>;
	/** update single row of the table: "seedings" */
	update_seedings_by_pk?: Maybe<Seedings>;
	/** update data of the table: "teams" */
	update_teams?: Maybe<Teams_Mutation_Response>;
	/** update single row of the table: "teams" */
	update_teams_by_pk?: Maybe<Teams>;
	/** update data of the table: "tournaments" */
	update_tournaments?: Maybe<Tournaments_Mutation_Response>;
	/** update single row of the table: "tournaments" */
	update_tournaments_by_pk?: Maybe<Tournaments>;
};

/** mutation root */
export type Mutation_RootDelete_Admin_UsersArgs = {
	where: Admin_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Admin_Users_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_CitiesArgs = {
	where: Cities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Cities_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_CoordinatorsArgs = {
	where: Coordinators_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Coordinators_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_CountriesArgs = {
	where: Countries_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Countries_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_FinalsArgs = {
	where: Finals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Finals_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Finals_GroupsArgs = {
	where: Finals_Groups_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Finals_Groups_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Finals_KnockoutsArgs = {
	where: Finals_Knockouts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Finals_Knockouts_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Footy_UsersArgs = {
	where: Footy_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Footy_Users_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Historic_Team_NamesArgs = {
	where: Historic_Team_Names_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Historic_Team_Names_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Join_Finals_LeaguesArgs = {
	where: Join_Finals_Leagues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Join_Finals_Leagues_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Join_Footy_Users_TeamsArgs = {
	where: Join_Footy_Users_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Join_Footy_Users_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Join_League_TeamsArgs = {
	where: Join_League_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Join_League_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Join_Leagues_Mini_LeaguesArgs = {
	where: Join_Leagues_Mini_Leagues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Join_Leagues_Mini_Leagues_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Join_Players_TeamsArgs = {
	where: Join_Players_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Join_Players_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Join_Team_FinalsArgs = {
	where: Join_Team_Finals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Join_Team_Finals_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_LeaguesArgs = {
	where: Leagues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Leagues_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_LocationsArgs = {
	where: Locations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Locations_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Match_CommentsArgs = {
	where: Match_Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Match_Comments_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_MatchesArgs = {
	where: Matches_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Matches_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_PitchesArgs = {
	where: Pitches_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Pitches_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Placeholder_TeamsArgs = {
	where: Placeholder_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Placeholder_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_PlayersArgs = {
	where: Players_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Players_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_RefereesArgs = {
	where: Referees_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Referees_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_RegistrationsArgs = {
	where: Registrations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Registrations_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Registrations_PlayerArgs = {
	where: Registrations_Player_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Registrations_Player_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Registrations_TeamsArgs = {
	where: Registrations_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Registrations_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_SeedingsArgs = {
	where: Seedings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Seedings_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_TeamsArgs = {
	where: Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_TournamentsArgs = {
	where: Tournaments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tournaments_By_PkArgs = {
	id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_Admin_UsersArgs = {
	objects: Array<Admin_Users_Insert_Input>;
	on_conflict?: Maybe<Admin_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Admin_Users_OneArgs = {
	object: Admin_Users_Insert_Input;
	on_conflict?: Maybe<Admin_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CitiesArgs = {
	objects: Array<Cities_Insert_Input>;
	on_conflict?: Maybe<Cities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Cities_OneArgs = {
	object: Cities_Insert_Input;
	on_conflict?: Maybe<Cities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CoordinatorsArgs = {
	objects: Array<Coordinators_Insert_Input>;
	on_conflict?: Maybe<Coordinators_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Coordinators_OneArgs = {
	object: Coordinators_Insert_Input;
	on_conflict?: Maybe<Coordinators_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CountriesArgs = {
	objects: Array<Countries_Insert_Input>;
	on_conflict?: Maybe<Countries_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Countries_OneArgs = {
	object: Countries_Insert_Input;
	on_conflict?: Maybe<Countries_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_FinalsArgs = {
	objects: Array<Finals_Insert_Input>;
	on_conflict?: Maybe<Finals_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Finals_GroupsArgs = {
	objects: Array<Finals_Groups_Insert_Input>;
	on_conflict?: Maybe<Finals_Groups_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Finals_Groups_OneArgs = {
	object: Finals_Groups_Insert_Input;
	on_conflict?: Maybe<Finals_Groups_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Finals_KnockoutsArgs = {
	objects: Array<Finals_Knockouts_Insert_Input>;
	on_conflict?: Maybe<Finals_Knockouts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Finals_Knockouts_OneArgs = {
	object: Finals_Knockouts_Insert_Input;
	on_conflict?: Maybe<Finals_Knockouts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Finals_OneArgs = {
	object: Finals_Insert_Input;
	on_conflict?: Maybe<Finals_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Footy_UsersArgs = {
	objects: Array<Footy_Users_Insert_Input>;
	on_conflict?: Maybe<Footy_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Footy_Users_OneArgs = {
	object: Footy_Users_Insert_Input;
	on_conflict?: Maybe<Footy_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Historic_Team_NamesArgs = {
	objects: Array<Historic_Team_Names_Insert_Input>;
	on_conflict?: Maybe<Historic_Team_Names_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Historic_Team_Names_OneArgs = {
	object: Historic_Team_Names_Insert_Input;
	on_conflict?: Maybe<Historic_Team_Names_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_Finals_LeaguesArgs = {
	objects: Array<Join_Finals_Leagues_Insert_Input>;
	on_conflict?: Maybe<Join_Finals_Leagues_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_Finals_Leagues_OneArgs = {
	object: Join_Finals_Leagues_Insert_Input;
	on_conflict?: Maybe<Join_Finals_Leagues_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_Footy_Users_TeamsArgs = {
	objects: Array<Join_Footy_Users_Teams_Insert_Input>;
	on_conflict?: Maybe<Join_Footy_Users_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_Footy_Users_Teams_OneArgs = {
	object: Join_Footy_Users_Teams_Insert_Input;
	on_conflict?: Maybe<Join_Footy_Users_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_League_TeamsArgs = {
	objects: Array<Join_League_Teams_Insert_Input>;
	on_conflict?: Maybe<Join_League_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_League_Teams_OneArgs = {
	object: Join_League_Teams_Insert_Input;
	on_conflict?: Maybe<Join_League_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_Leagues_Mini_LeaguesArgs = {
	objects: Array<Join_Leagues_Mini_Leagues_Insert_Input>;
	on_conflict?: Maybe<Join_Leagues_Mini_Leagues_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_Leagues_Mini_Leagues_OneArgs = {
	object: Join_Leagues_Mini_Leagues_Insert_Input;
	on_conflict?: Maybe<Join_Leagues_Mini_Leagues_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_Players_TeamsArgs = {
	objects: Array<Join_Players_Teams_Insert_Input>;
	on_conflict?: Maybe<Join_Players_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_Players_Teams_OneArgs = {
	object: Join_Players_Teams_Insert_Input;
	on_conflict?: Maybe<Join_Players_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_Team_FinalsArgs = {
	objects: Array<Join_Team_Finals_Insert_Input>;
	on_conflict?: Maybe<Join_Team_Finals_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Join_Team_Finals_OneArgs = {
	object: Join_Team_Finals_Insert_Input;
	on_conflict?: Maybe<Join_Team_Finals_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LeaguesArgs = {
	objects: Array<Leagues_Insert_Input>;
	on_conflict?: Maybe<Leagues_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Leagues_OneArgs = {
	object: Leagues_Insert_Input;
	on_conflict?: Maybe<Leagues_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LocationsArgs = {
	objects: Array<Locations_Insert_Input>;
	on_conflict?: Maybe<Locations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Locations_OneArgs = {
	object: Locations_Insert_Input;
	on_conflict?: Maybe<Locations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Match_CommentsArgs = {
	objects: Array<Match_Comments_Insert_Input>;
	on_conflict?: Maybe<Match_Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Match_Comments_OneArgs = {
	object: Match_Comments_Insert_Input;
	on_conflict?: Maybe<Match_Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MatchesArgs = {
	objects: Array<Matches_Insert_Input>;
	on_conflict?: Maybe<Matches_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Matches_OneArgs = {
	object: Matches_Insert_Input;
	on_conflict?: Maybe<Matches_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PitchesArgs = {
	objects: Array<Pitches_Insert_Input>;
	on_conflict?: Maybe<Pitches_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Pitches_OneArgs = {
	object: Pitches_Insert_Input;
	on_conflict?: Maybe<Pitches_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Placeholder_TeamsArgs = {
	objects: Array<Placeholder_Teams_Insert_Input>;
	on_conflict?: Maybe<Placeholder_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Placeholder_Teams_OneArgs = {
	object: Placeholder_Teams_Insert_Input;
	on_conflict?: Maybe<Placeholder_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PlayersArgs = {
	objects: Array<Players_Insert_Input>;
	on_conflict?: Maybe<Players_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Players_OneArgs = {
	object: Players_Insert_Input;
	on_conflict?: Maybe<Players_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RefereesArgs = {
	objects: Array<Referees_Insert_Input>;
	on_conflict?: Maybe<Referees_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Referees_OneArgs = {
	object: Referees_Insert_Input;
	on_conflict?: Maybe<Referees_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RegistrationsArgs = {
	objects: Array<Registrations_Insert_Input>;
	on_conflict?: Maybe<Registrations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Registrations_OneArgs = {
	object: Registrations_Insert_Input;
	on_conflict?: Maybe<Registrations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Registrations_PlayerArgs = {
	objects: Array<Registrations_Player_Insert_Input>;
	on_conflict?: Maybe<Registrations_Player_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Registrations_Player_OneArgs = {
	object: Registrations_Player_Insert_Input;
	on_conflict?: Maybe<Registrations_Player_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Registrations_TeamsArgs = {
	objects: Array<Registrations_Teams_Insert_Input>;
	on_conflict?: Maybe<Registrations_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Registrations_Teams_OneArgs = {
	object: Registrations_Teams_Insert_Input;
	on_conflict?: Maybe<Registrations_Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SeedingsArgs = {
	objects: Array<Seedings_Insert_Input>;
	on_conflict?: Maybe<Seedings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Seedings_OneArgs = {
	object: Seedings_Insert_Input;
	on_conflict?: Maybe<Seedings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TeamsArgs = {
	objects: Array<Teams_Insert_Input>;
	on_conflict?: Maybe<Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Teams_OneArgs = {
	object: Teams_Insert_Input;
	on_conflict?: Maybe<Teams_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TournamentsArgs = {
	objects: Array<Tournaments_Insert_Input>;
	on_conflict?: Maybe<Tournaments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tournaments_OneArgs = {
	object: Tournaments_Insert_Input;
	on_conflict?: Maybe<Tournaments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Admin_UsersArgs = {
	_set?: Maybe<Admin_Users_Set_Input>;
	where: Admin_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Admin_Users_By_PkArgs = {
	_set?: Maybe<Admin_Users_Set_Input>;
	pk_columns: Admin_Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CitiesArgs = {
	_set?: Maybe<Cities_Set_Input>;
	where: Cities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Cities_By_PkArgs = {
	_set?: Maybe<Cities_Set_Input>;
	pk_columns: Cities_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CoordinatorsArgs = {
	_set?: Maybe<Coordinators_Set_Input>;
	where: Coordinators_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Coordinators_By_PkArgs = {
	_set?: Maybe<Coordinators_Set_Input>;
	pk_columns: Coordinators_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CountriesArgs = {
	_set?: Maybe<Countries_Set_Input>;
	where: Countries_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Countries_By_PkArgs = {
	_set?: Maybe<Countries_Set_Input>;
	pk_columns: Countries_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_FinalsArgs = {
	_inc?: Maybe<Finals_Inc_Input>;
	_set?: Maybe<Finals_Set_Input>;
	where: Finals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Finals_By_PkArgs = {
	_inc?: Maybe<Finals_Inc_Input>;
	_set?: Maybe<Finals_Set_Input>;
	pk_columns: Finals_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Finals_GroupsArgs = {
	_inc?: Maybe<Finals_Groups_Inc_Input>;
	_set?: Maybe<Finals_Groups_Set_Input>;
	where: Finals_Groups_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Finals_Groups_By_PkArgs = {
	_inc?: Maybe<Finals_Groups_Inc_Input>;
	_set?: Maybe<Finals_Groups_Set_Input>;
	pk_columns: Finals_Groups_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Finals_KnockoutsArgs = {
	_inc?: Maybe<Finals_Knockouts_Inc_Input>;
	_set?: Maybe<Finals_Knockouts_Set_Input>;
	where: Finals_Knockouts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Finals_Knockouts_By_PkArgs = {
	_inc?: Maybe<Finals_Knockouts_Inc_Input>;
	_set?: Maybe<Finals_Knockouts_Set_Input>;
	pk_columns: Finals_Knockouts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Footy_UsersArgs = {
	_set?: Maybe<Footy_Users_Set_Input>;
	where: Footy_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Footy_Users_By_PkArgs = {
	_set?: Maybe<Footy_Users_Set_Input>;
	pk_columns: Footy_Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Historic_Team_NamesArgs = {
	_set?: Maybe<Historic_Team_Names_Set_Input>;
	where: Historic_Team_Names_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Historic_Team_Names_By_PkArgs = {
	_set?: Maybe<Historic_Team_Names_Set_Input>;
	pk_columns: Historic_Team_Names_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Join_Finals_LeaguesArgs = {
	_set?: Maybe<Join_Finals_Leagues_Set_Input>;
	where: Join_Finals_Leagues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Join_Finals_Leagues_By_PkArgs = {
	_set?: Maybe<Join_Finals_Leagues_Set_Input>;
	pk_columns: Join_Finals_Leagues_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Join_Footy_Users_TeamsArgs = {
	_set?: Maybe<Join_Footy_Users_Teams_Set_Input>;
	where: Join_Footy_Users_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Join_Footy_Users_Teams_By_PkArgs = {
	_set?: Maybe<Join_Footy_Users_Teams_Set_Input>;
	pk_columns: Join_Footy_Users_Teams_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Join_League_TeamsArgs = {
	_inc?: Maybe<Join_League_Teams_Inc_Input>;
	_set?: Maybe<Join_League_Teams_Set_Input>;
	where: Join_League_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Join_League_Teams_By_PkArgs = {
	_inc?: Maybe<Join_League_Teams_Inc_Input>;
	_set?: Maybe<Join_League_Teams_Set_Input>;
	pk_columns: Join_League_Teams_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Join_Leagues_Mini_LeaguesArgs = {
	_set?: Maybe<Join_Leagues_Mini_Leagues_Set_Input>;
	where: Join_Leagues_Mini_Leagues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Join_Leagues_Mini_Leagues_By_PkArgs = {
	_set?: Maybe<Join_Leagues_Mini_Leagues_Set_Input>;
	pk_columns: Join_Leagues_Mini_Leagues_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Join_Players_TeamsArgs = {
	_set?: Maybe<Join_Players_Teams_Set_Input>;
	where: Join_Players_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Join_Players_Teams_By_PkArgs = {
	_set?: Maybe<Join_Players_Teams_Set_Input>;
	pk_columns: Join_Players_Teams_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Join_Team_FinalsArgs = {
	_set?: Maybe<Join_Team_Finals_Set_Input>;
	where: Join_Team_Finals_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Join_Team_Finals_By_PkArgs = {
	_set?: Maybe<Join_Team_Finals_Set_Input>;
	pk_columns: Join_Team_Finals_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LeaguesArgs = {
	_inc?: Maybe<Leagues_Inc_Input>;
	_set?: Maybe<Leagues_Set_Input>;
	where: Leagues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Leagues_By_PkArgs = {
	_inc?: Maybe<Leagues_Inc_Input>;
	_set?: Maybe<Leagues_Set_Input>;
	pk_columns: Leagues_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LocationsArgs = {
	_set?: Maybe<Locations_Set_Input>;
	where: Locations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Locations_By_PkArgs = {
	_set?: Maybe<Locations_Set_Input>;
	pk_columns: Locations_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Match_CommentsArgs = {
	_set?: Maybe<Match_Comments_Set_Input>;
	where: Match_Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Match_Comments_By_PkArgs = {
	_set?: Maybe<Match_Comments_Set_Input>;
	pk_columns: Match_Comments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MatchesArgs = {
	_inc?: Maybe<Matches_Inc_Input>;
	_set?: Maybe<Matches_Set_Input>;
	where: Matches_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Matches_By_PkArgs = {
	_inc?: Maybe<Matches_Inc_Input>;
	_set?: Maybe<Matches_Set_Input>;
	pk_columns: Matches_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PitchesArgs = {
	_inc?: Maybe<Pitches_Inc_Input>;
	_set?: Maybe<Pitches_Set_Input>;
	where: Pitches_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Pitches_By_PkArgs = {
	_inc?: Maybe<Pitches_Inc_Input>;
	_set?: Maybe<Pitches_Set_Input>;
	pk_columns: Pitches_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Placeholder_TeamsArgs = {
	_inc?: Maybe<Placeholder_Teams_Inc_Input>;
	_set?: Maybe<Placeholder_Teams_Set_Input>;
	where: Placeholder_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Placeholder_Teams_By_PkArgs = {
	_inc?: Maybe<Placeholder_Teams_Inc_Input>;
	_set?: Maybe<Placeholder_Teams_Set_Input>;
	pk_columns: Placeholder_Teams_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PlayersArgs = {
	_set?: Maybe<Players_Set_Input>;
	where: Players_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Players_By_PkArgs = {
	_set?: Maybe<Players_Set_Input>;
	pk_columns: Players_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_RefereesArgs = {
	_set?: Maybe<Referees_Set_Input>;
	where: Referees_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Referees_By_PkArgs = {
	_set?: Maybe<Referees_Set_Input>;
	pk_columns: Referees_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_RegistrationsArgs = {
	_inc?: Maybe<Registrations_Inc_Input>;
	_set?: Maybe<Registrations_Set_Input>;
	where: Registrations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Registrations_By_PkArgs = {
	_inc?: Maybe<Registrations_Inc_Input>;
	_set?: Maybe<Registrations_Set_Input>;
	pk_columns: Registrations_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Registrations_PlayerArgs = {
	_set?: Maybe<Registrations_Player_Set_Input>;
	where: Registrations_Player_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Registrations_Player_By_PkArgs = {
	_set?: Maybe<Registrations_Player_Set_Input>;
	pk_columns: Registrations_Player_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Registrations_TeamsArgs = {
	_set?: Maybe<Registrations_Teams_Set_Input>;
	where: Registrations_Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Registrations_Teams_By_PkArgs = {
	_set?: Maybe<Registrations_Teams_Set_Input>;
	pk_columns: Registrations_Teams_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_SeedingsArgs = {
	_inc?: Maybe<Seedings_Inc_Input>;
	_set?: Maybe<Seedings_Set_Input>;
	where: Seedings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Seedings_By_PkArgs = {
	_inc?: Maybe<Seedings_Inc_Input>;
	_set?: Maybe<Seedings_Set_Input>;
	pk_columns: Seedings_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TeamsArgs = {
	_set?: Maybe<Teams_Set_Input>;
	where: Teams_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Teams_By_PkArgs = {
	_set?: Maybe<Teams_Set_Input>;
	pk_columns: Teams_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TournamentsArgs = {
	_inc?: Maybe<Tournaments_Inc_Input>;
	_set?: Maybe<Tournaments_Set_Input>;
	where: Tournaments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tournaments_By_PkArgs = {
	_inc?: Maybe<Tournaments_Inc_Input>;
	_set?: Maybe<Tournaments_Set_Input>;
	pk_columns: Tournaments_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
	/** in ascending order, nulls last */
	Asc = 'asc',
	/** in ascending order, nulls first */
	AscNullsFirst = 'asc_nulls_first',
	/** in ascending order, nulls last */
	AscNullsLast = 'asc_nulls_last',
	/** in descending order, nulls first */
	Desc = 'desc',
	/** in descending order, nulls first */
	DescNullsFirst = 'desc_nulls_first',
	/** in descending order, nulls last */
	DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "pitches" */
export type Pitches = {
	__typename?: 'pitches';
	id: Scalars['uuid'];
	/** An object relationship */
	location: Locations;
	location_id: Scalars['uuid'];
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	name: Scalars['Int'];
	pitch_name?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
};

/** columns and relationships of "pitches" */
export type PitchesMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "pitches" */
export type PitchesMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** aggregated selection of "pitches" */
export type Pitches_Aggregate = {
	__typename?: 'pitches_aggregate';
	aggregate?: Maybe<Pitches_Aggregate_Fields>;
	nodes: Array<Pitches>;
};

/** aggregate fields of "pitches" */
export type Pitches_Aggregate_Fields = {
	__typename?: 'pitches_aggregate_fields';
	avg?: Maybe<Pitches_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Pitches_Max_Fields>;
	min?: Maybe<Pitches_Min_Fields>;
	stddev?: Maybe<Pitches_Stddev_Fields>;
	stddev_pop?: Maybe<Pitches_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Pitches_Stddev_Samp_Fields>;
	sum?: Maybe<Pitches_Sum_Fields>;
	var_pop?: Maybe<Pitches_Var_Pop_Fields>;
	var_samp?: Maybe<Pitches_Var_Samp_Fields>;
	variance?: Maybe<Pitches_Variance_Fields>;
};

/** aggregate fields of "pitches" */
export type Pitches_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Pitches_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pitches" */
export type Pitches_Aggregate_Order_By = {
	avg?: Maybe<Pitches_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<Pitches_Max_Order_By>;
	min?: Maybe<Pitches_Min_Order_By>;
	stddev?: Maybe<Pitches_Stddev_Order_By>;
	stddev_pop?: Maybe<Pitches_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<Pitches_Stddev_Samp_Order_By>;
	sum?: Maybe<Pitches_Sum_Order_By>;
	var_pop?: Maybe<Pitches_Var_Pop_Order_By>;
	var_samp?: Maybe<Pitches_Var_Samp_Order_By>;
	variance?: Maybe<Pitches_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pitches" */
export type Pitches_Arr_Rel_Insert_Input = {
	data: Array<Pitches_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Pitches_On_Conflict>;
};

/** aggregate avg on columns */
export type Pitches_Avg_Fields = {
	__typename?: 'pitches_avg_fields';
	name?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pitches" */
export type Pitches_Avg_Order_By = {
	name?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pitches". All fields are combined with a logical 'AND'. */
export type Pitches_Bool_Exp = {
	_and?: Maybe<Array<Pitches_Bool_Exp>>;
	_not?: Maybe<Pitches_Bool_Exp>;
	_or?: Maybe<Array<Pitches_Bool_Exp>>;
	id?: Maybe<Uuid_Comparison_Exp>;
	location?: Maybe<Locations_Bool_Exp>;
	location_id?: Maybe<Uuid_Comparison_Exp>;
	matches?: Maybe<Matches_Bool_Exp>;
	name?: Maybe<Int_Comparison_Exp>;
	pitch_name?: Maybe<String_Comparison_Exp>;
	type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "pitches" */
export enum Pitches_Constraint {
	/** unique or primary key constraint */
	PitchesPkey = 'pitches_pkey',
}

/** input type for incrementing numeric columns in table "pitches" */
export type Pitches_Inc_Input = {
	name?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "pitches" */
export type Pitches_Insert_Input = {
	id?: Maybe<Scalars['uuid']>;
	location?: Maybe<Locations_Obj_Rel_Insert_Input>;
	location_id?: Maybe<Scalars['uuid']>;
	matches?: Maybe<Matches_Arr_Rel_Insert_Input>;
	name?: Maybe<Scalars['Int']>;
	pitch_name?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Pitches_Max_Fields = {
	__typename?: 'pitches_max_fields';
	id?: Maybe<Scalars['uuid']>;
	location_id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['Int']>;
	pitch_name?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "pitches" */
export type Pitches_Max_Order_By = {
	id?: Maybe<Order_By>;
	location_id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	pitch_name?: Maybe<Order_By>;
	type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Pitches_Min_Fields = {
	__typename?: 'pitches_min_fields';
	id?: Maybe<Scalars['uuid']>;
	location_id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['Int']>;
	pitch_name?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "pitches" */
export type Pitches_Min_Order_By = {
	id?: Maybe<Order_By>;
	location_id?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	pitch_name?: Maybe<Order_By>;
	type?: Maybe<Order_By>;
};

/** response of any mutation on the table "pitches" */
export type Pitches_Mutation_Response = {
	__typename?: 'pitches_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Pitches>;
};

/** input type for inserting object relation for remote table "pitches" */
export type Pitches_Obj_Rel_Insert_Input = {
	data: Pitches_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Pitches_On_Conflict>;
};

/** on conflict condition type for table "pitches" */
export type Pitches_On_Conflict = {
	constraint: Pitches_Constraint;
	update_columns?: Array<Pitches_Update_Column>;
	where?: Maybe<Pitches_Bool_Exp>;
};

/** Ordering options when selecting data from "pitches". */
export type Pitches_Order_By = {
	id?: Maybe<Order_By>;
	location?: Maybe<Locations_Order_By>;
	location_id?: Maybe<Order_By>;
	matches_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	name?: Maybe<Order_By>;
	pitch_name?: Maybe<Order_By>;
	type?: Maybe<Order_By>;
};

/** primary key columns input for table: pitches */
export type Pitches_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "pitches" */
export enum Pitches_Select_Column {
	/** column name */
	Id = 'id',
	/** column name */
	LocationId = 'location_id',
	/** column name */
	Name = 'name',
	/** column name */
	PitchName = 'pitch_name',
	/** column name */
	Type = 'type',
}

/** input type for updating data in table "pitches" */
export type Pitches_Set_Input = {
	id?: Maybe<Scalars['uuid']>;
	location_id?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['Int']>;
	pitch_name?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Pitches_Stddev_Fields = {
	__typename?: 'pitches_stddev_fields';
	name?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pitches" */
export type Pitches_Stddev_Order_By = {
	name?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pitches_Stddev_Pop_Fields = {
	__typename?: 'pitches_stddev_pop_fields';
	name?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pitches" */
export type Pitches_Stddev_Pop_Order_By = {
	name?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pitches_Stddev_Samp_Fields = {
	__typename?: 'pitches_stddev_samp_fields';
	name?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pitches" */
export type Pitches_Stddev_Samp_Order_By = {
	name?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Pitches_Sum_Fields = {
	__typename?: 'pitches_sum_fields';
	name?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "pitches" */
export type Pitches_Sum_Order_By = {
	name?: Maybe<Order_By>;
};

/** update columns of table "pitches" */
export enum Pitches_Update_Column {
	/** column name */
	Id = 'id',
	/** column name */
	LocationId = 'location_id',
	/** column name */
	Name = 'name',
	/** column name */
	PitchName = 'pitch_name',
	/** column name */
	Type = 'type',
}

/** aggregate var_pop on columns */
export type Pitches_Var_Pop_Fields = {
	__typename?: 'pitches_var_pop_fields';
	name?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pitches" */
export type Pitches_Var_Pop_Order_By = {
	name?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pitches_Var_Samp_Fields = {
	__typename?: 'pitches_var_samp_fields';
	name?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pitches" */
export type Pitches_Var_Samp_Order_By = {
	name?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Pitches_Variance_Fields = {
	__typename?: 'pitches_variance_fields';
	name?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pitches" */
export type Pitches_Variance_Order_By = {
	name?: Maybe<Order_By>;
};

/** columns and relationships of "placeholder_teams" */
export type Placeholder_Teams = {
	__typename?: 'placeholder_teams';
	carry_points: Scalars['Boolean'];
	created_at: Scalars['timestamptz'];
	/** An object relationship */
	final?: Maybe<Finals>;
	/** An object relationship */
	finalsGroupBySeedingGroup?: Maybe<Finals_Groups>;
	/** An object relationship */
	finals_group?: Maybe<Finals_Groups>;
	id: Scalars['uuid'];
	/** An object relationship */
	league?: Maybe<Leagues>;
	/** An object relationship */
	leagueBySeedingLeague?: Maybe<Leagues>;
	/** An array relationship */
	league_teams: Array<Join_League_Teams>;
	/** An aggregate relationship */
	league_teams_aggregate: Join_League_Teams_Aggregate;
	/** An object relationship */
	match?: Maybe<Matches>;
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An array relationship */
	matchesByPlaceholderHomeTeam: Array<Matches>;
	/** An aggregate relationship */
	matchesByPlaceholderHomeTeam_aggregate: Matches_Aggregate;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	/** eg. Winner of Semi Final 1 */
	name: Scalars['String'];
	/** The finals that this placeholder is part of. If these finals are deleted then this placeholder will be deleted too */
	parent_finals?: Maybe<Scalars['uuid']>;
	/** The finals group that this placeholder is part of. If this group is deleted then this placeholder will be deleted too */
	parent_group?: Maybe<Scalars['uuid']>;
	/** The league that this placeholder is part of. If this league is deleted then this placeholder will be deleted too */
	parent_league?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will come from this finals group */
	seeding_group?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will come from this league */
	seeding_league?: Maybe<Scalars['uuid']>;
	/** The winner of this match will replace this placeholder */
	seeding_match?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Int']>;
	/** 'basic' - until actual team is found by footy staff, 'bye' - used in odd number round robins, 'seed' - used as placeholder for matches that must be qualified for */
	type: Scalars['String'];
	updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "placeholder_teams" */
export type Placeholder_TeamsLeague_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_League_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_League_Teams_Order_By>>;
	where?: Maybe<Join_League_Teams_Bool_Exp>;
};

/** columns and relationships of "placeholder_teams" */
export type Placeholder_TeamsLeague_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_League_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_League_Teams_Order_By>>;
	where?: Maybe<Join_League_Teams_Bool_Exp>;
};

/** columns and relationships of "placeholder_teams" */
export type Placeholder_TeamsMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "placeholder_teams" */
export type Placeholder_TeamsMatchesByPlaceholderHomeTeamArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "placeholder_teams" */
export type Placeholder_TeamsMatchesByPlaceholderHomeTeam_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "placeholder_teams" */
export type Placeholder_TeamsMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** aggregated selection of "placeholder_teams" */
export type Placeholder_Teams_Aggregate = {
	__typename?: 'placeholder_teams_aggregate';
	aggregate?: Maybe<Placeholder_Teams_Aggregate_Fields>;
	nodes: Array<Placeholder_Teams>;
};

/** aggregate fields of "placeholder_teams" */
export type Placeholder_Teams_Aggregate_Fields = {
	__typename?: 'placeholder_teams_aggregate_fields';
	avg?: Maybe<Placeholder_Teams_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Placeholder_Teams_Max_Fields>;
	min?: Maybe<Placeholder_Teams_Min_Fields>;
	stddev?: Maybe<Placeholder_Teams_Stddev_Fields>;
	stddev_pop?: Maybe<Placeholder_Teams_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Placeholder_Teams_Stddev_Samp_Fields>;
	sum?: Maybe<Placeholder_Teams_Sum_Fields>;
	var_pop?: Maybe<Placeholder_Teams_Var_Pop_Fields>;
	var_samp?: Maybe<Placeholder_Teams_Var_Samp_Fields>;
	variance?: Maybe<Placeholder_Teams_Variance_Fields>;
};

/** aggregate fields of "placeholder_teams" */
export type Placeholder_Teams_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "placeholder_teams" */
export type Placeholder_Teams_Aggregate_Order_By = {
	avg?: Maybe<Placeholder_Teams_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<Placeholder_Teams_Max_Order_By>;
	min?: Maybe<Placeholder_Teams_Min_Order_By>;
	stddev?: Maybe<Placeholder_Teams_Stddev_Order_By>;
	stddev_pop?: Maybe<Placeholder_Teams_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<Placeholder_Teams_Stddev_Samp_Order_By>;
	sum?: Maybe<Placeholder_Teams_Sum_Order_By>;
	var_pop?: Maybe<Placeholder_Teams_Var_Pop_Order_By>;
	var_samp?: Maybe<Placeholder_Teams_Var_Samp_Order_By>;
	variance?: Maybe<Placeholder_Teams_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "placeholder_teams" */
export type Placeholder_Teams_Arr_Rel_Insert_Input = {
	data: Array<Placeholder_Teams_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Placeholder_Teams_On_Conflict>;
};

/** aggregate avg on columns */
export type Placeholder_Teams_Avg_Fields = {
	__typename?: 'placeholder_teams_avg_fields';
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "placeholder_teams" */
export type Placeholder_Teams_Avg_Order_By = {
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "placeholder_teams". All fields are combined with a logical 'AND'. */
export type Placeholder_Teams_Bool_Exp = {
	_and?: Maybe<Array<Placeholder_Teams_Bool_Exp>>;
	_not?: Maybe<Placeholder_Teams_Bool_Exp>;
	_or?: Maybe<Array<Placeholder_Teams_Bool_Exp>>;
	carry_points?: Maybe<Boolean_Comparison_Exp>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	final?: Maybe<Finals_Bool_Exp>;
	finalsGroupBySeedingGroup?: Maybe<Finals_Groups_Bool_Exp>;
	finals_group?: Maybe<Finals_Groups_Bool_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	league?: Maybe<Leagues_Bool_Exp>;
	leagueBySeedingLeague?: Maybe<Leagues_Bool_Exp>;
	league_teams?: Maybe<Join_League_Teams_Bool_Exp>;
	match?: Maybe<Matches_Bool_Exp>;
	matches?: Maybe<Matches_Bool_Exp>;
	matchesByPlaceholderHomeTeam?: Maybe<Matches_Bool_Exp>;
	name?: Maybe<String_Comparison_Exp>;
	parent_finals?: Maybe<Uuid_Comparison_Exp>;
	parent_group?: Maybe<Uuid_Comparison_Exp>;
	parent_league?: Maybe<Uuid_Comparison_Exp>;
	seeding_group?: Maybe<Uuid_Comparison_Exp>;
	seeding_league?: Maybe<Uuid_Comparison_Exp>;
	seeding_match?: Maybe<Uuid_Comparison_Exp>;
	seeding_position?: Maybe<Int_Comparison_Exp>;
	type?: Maybe<String_Comparison_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "placeholder_teams" */
export enum Placeholder_Teams_Constraint {
	/** unique or primary key constraint */
	PlaceholderTeamsPkey = 'placeholder_teams_pkey',
}

/** input type for incrementing numeric columns in table "placeholder_teams" */
export type Placeholder_Teams_Inc_Input = {
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "placeholder_teams" */
export type Placeholder_Teams_Insert_Input = {
	carry_points?: Maybe<Scalars['Boolean']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	final?: Maybe<Finals_Obj_Rel_Insert_Input>;
	finalsGroupBySeedingGroup?: Maybe<Finals_Groups_Obj_Rel_Insert_Input>;
	finals_group?: Maybe<Finals_Groups_Obj_Rel_Insert_Input>;
	id?: Maybe<Scalars['uuid']>;
	league?: Maybe<Leagues_Obj_Rel_Insert_Input>;
	leagueBySeedingLeague?: Maybe<Leagues_Obj_Rel_Insert_Input>;
	league_teams?: Maybe<Join_League_Teams_Arr_Rel_Insert_Input>;
	match?: Maybe<Matches_Obj_Rel_Insert_Input>;
	matches?: Maybe<Matches_Arr_Rel_Insert_Input>;
	matchesByPlaceholderHomeTeam?: Maybe<Matches_Arr_Rel_Insert_Input>;
	/** eg. Winner of Semi Final 1 */
	name?: Maybe<Scalars['String']>;
	/** The finals that this placeholder is part of. If these finals are deleted then this placeholder will be deleted too */
	parent_finals?: Maybe<Scalars['uuid']>;
	/** The finals group that this placeholder is part of. If this group is deleted then this placeholder will be deleted too */
	parent_group?: Maybe<Scalars['uuid']>;
	/** The league that this placeholder is part of. If this league is deleted then this placeholder will be deleted too */
	parent_league?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will come from this finals group */
	seeding_group?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will come from this league */
	seeding_league?: Maybe<Scalars['uuid']>;
	/** The winner of this match will replace this placeholder */
	seeding_match?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Int']>;
	/** 'basic' - until actual team is found by footy staff, 'bye' - used in odd number round robins, 'seed' - used as placeholder for matches that must be qualified for */
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Placeholder_Teams_Max_Fields = {
	__typename?: 'placeholder_teams_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	/** eg. Winner of Semi Final 1 */
	name?: Maybe<Scalars['String']>;
	/** The finals that this placeholder is part of. If these finals are deleted then this placeholder will be deleted too */
	parent_finals?: Maybe<Scalars['uuid']>;
	/** The finals group that this placeholder is part of. If this group is deleted then this placeholder will be deleted too */
	parent_group?: Maybe<Scalars['uuid']>;
	/** The league that this placeholder is part of. If this league is deleted then this placeholder will be deleted too */
	parent_league?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will come from this finals group */
	seeding_group?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will come from this league */
	seeding_league?: Maybe<Scalars['uuid']>;
	/** The winner of this match will replace this placeholder */
	seeding_match?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Int']>;
	/** 'basic' - until actual team is found by footy staff, 'bye' - used in odd number round robins, 'seed' - used as placeholder for matches that must be qualified for */
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "placeholder_teams" */
export type Placeholder_Teams_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	/** eg. Winner of Semi Final 1 */
	name?: Maybe<Order_By>;
	/** The finals that this placeholder is part of. If these finals are deleted then this placeholder will be deleted too */
	parent_finals?: Maybe<Order_By>;
	/** The finals group that this placeholder is part of. If this group is deleted then this placeholder will be deleted too */
	parent_group?: Maybe<Order_By>;
	/** The league that this placeholder is part of. If this league is deleted then this placeholder will be deleted too */
	parent_league?: Maybe<Order_By>;
	/** The team that will replace this placeholder will come from this finals group */
	seeding_group?: Maybe<Order_By>;
	/** The team that will replace this placeholder will come from this league */
	seeding_league?: Maybe<Order_By>;
	/** The winner of this match will replace this placeholder */
	seeding_match?: Maybe<Order_By>;
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Order_By>;
	/** 'basic' - until actual team is found by footy staff, 'bye' - used in odd number round robins, 'seed' - used as placeholder for matches that must be qualified for */
	type?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Placeholder_Teams_Min_Fields = {
	__typename?: 'placeholder_teams_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	/** eg. Winner of Semi Final 1 */
	name?: Maybe<Scalars['String']>;
	/** The finals that this placeholder is part of. If these finals are deleted then this placeholder will be deleted too */
	parent_finals?: Maybe<Scalars['uuid']>;
	/** The finals group that this placeholder is part of. If this group is deleted then this placeholder will be deleted too */
	parent_group?: Maybe<Scalars['uuid']>;
	/** The league that this placeholder is part of. If this league is deleted then this placeholder will be deleted too */
	parent_league?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will come from this finals group */
	seeding_group?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will come from this league */
	seeding_league?: Maybe<Scalars['uuid']>;
	/** The winner of this match will replace this placeholder */
	seeding_match?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Int']>;
	/** 'basic' - until actual team is found by footy staff, 'bye' - used in odd number round robins, 'seed' - used as placeholder for matches that must be qualified for */
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "placeholder_teams" */
export type Placeholder_Teams_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	/** eg. Winner of Semi Final 1 */
	name?: Maybe<Order_By>;
	/** The finals that this placeholder is part of. If these finals are deleted then this placeholder will be deleted too */
	parent_finals?: Maybe<Order_By>;
	/** The finals group that this placeholder is part of. If this group is deleted then this placeholder will be deleted too */
	parent_group?: Maybe<Order_By>;
	/** The league that this placeholder is part of. If this league is deleted then this placeholder will be deleted too */
	parent_league?: Maybe<Order_By>;
	/** The team that will replace this placeholder will come from this finals group */
	seeding_group?: Maybe<Order_By>;
	/** The team that will replace this placeholder will come from this league */
	seeding_league?: Maybe<Order_By>;
	/** The winner of this match will replace this placeholder */
	seeding_match?: Maybe<Order_By>;
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Order_By>;
	/** 'basic' - until actual team is found by footy staff, 'bye' - used in odd number round robins, 'seed' - used as placeholder for matches that must be qualified for */
	type?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "placeholder_teams" */
export type Placeholder_Teams_Mutation_Response = {
	__typename?: 'placeholder_teams_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Placeholder_Teams>;
};

/** input type for inserting object relation for remote table "placeholder_teams" */
export type Placeholder_Teams_Obj_Rel_Insert_Input = {
	data: Placeholder_Teams_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Placeholder_Teams_On_Conflict>;
};

/** on conflict condition type for table "placeholder_teams" */
export type Placeholder_Teams_On_Conflict = {
	constraint: Placeholder_Teams_Constraint;
	update_columns?: Array<Placeholder_Teams_Update_Column>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "placeholder_teams". */
export type Placeholder_Teams_Order_By = {
	carry_points?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	final?: Maybe<Finals_Order_By>;
	finalsGroupBySeedingGroup?: Maybe<Finals_Groups_Order_By>;
	finals_group?: Maybe<Finals_Groups_Order_By>;
	id?: Maybe<Order_By>;
	league?: Maybe<Leagues_Order_By>;
	leagueBySeedingLeague?: Maybe<Leagues_Order_By>;
	league_teams_aggregate?: Maybe<Join_League_Teams_Aggregate_Order_By>;
	match?: Maybe<Matches_Order_By>;
	matchesByPlaceholderHomeTeam_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	matches_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	name?: Maybe<Order_By>;
	parent_finals?: Maybe<Order_By>;
	parent_group?: Maybe<Order_By>;
	parent_league?: Maybe<Order_By>;
	seeding_group?: Maybe<Order_By>;
	seeding_league?: Maybe<Order_By>;
	seeding_match?: Maybe<Order_By>;
	seeding_position?: Maybe<Order_By>;
	type?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: placeholder_teams */
export type Placeholder_Teams_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "placeholder_teams" */
export enum Placeholder_Teams_Select_Column {
	/** column name */
	CarryPoints = 'carry_points',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	ParentFinals = 'parent_finals',
	/** column name */
	ParentGroup = 'parent_group',
	/** column name */
	ParentLeague = 'parent_league',
	/** column name */
	SeedingGroup = 'seeding_group',
	/** column name */
	SeedingLeague = 'seeding_league',
	/** column name */
	SeedingMatch = 'seeding_match',
	/** column name */
	SeedingPosition = 'seeding_position',
	/** column name */
	Type = 'type',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "placeholder_teams" */
export type Placeholder_Teams_Set_Input = {
	carry_points?: Maybe<Scalars['Boolean']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	/** eg. Winner of Semi Final 1 */
	name?: Maybe<Scalars['String']>;
	/** The finals that this placeholder is part of. If these finals are deleted then this placeholder will be deleted too */
	parent_finals?: Maybe<Scalars['uuid']>;
	/** The finals group that this placeholder is part of. If this group is deleted then this placeholder will be deleted too */
	parent_group?: Maybe<Scalars['uuid']>;
	/** The league that this placeholder is part of. If this league is deleted then this placeholder will be deleted too */
	parent_league?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will come from this finals group */
	seeding_group?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will come from this league */
	seeding_league?: Maybe<Scalars['uuid']>;
	/** The winner of this match will replace this placeholder */
	seeding_match?: Maybe<Scalars['uuid']>;
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Int']>;
	/** 'basic' - until actual team is found by footy staff, 'bye' - used in odd number round robins, 'seed' - used as placeholder for matches that must be qualified for */
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Placeholder_Teams_Stddev_Fields = {
	__typename?: 'placeholder_teams_stddev_fields';
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "placeholder_teams" */
export type Placeholder_Teams_Stddev_Order_By = {
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Placeholder_Teams_Stddev_Pop_Fields = {
	__typename?: 'placeholder_teams_stddev_pop_fields';
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "placeholder_teams" */
export type Placeholder_Teams_Stddev_Pop_Order_By = {
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Placeholder_Teams_Stddev_Samp_Fields = {
	__typename?: 'placeholder_teams_stddev_samp_fields';
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "placeholder_teams" */
export type Placeholder_Teams_Stddev_Samp_Order_By = {
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Placeholder_Teams_Sum_Fields = {
	__typename?: 'placeholder_teams_sum_fields';
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "placeholder_teams" */
export type Placeholder_Teams_Sum_Order_By = {
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Order_By>;
};

/** update columns of table "placeholder_teams" */
export enum Placeholder_Teams_Update_Column {
	/** column name */
	CarryPoints = 'carry_points',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Name = 'name',
	/** column name */
	ParentFinals = 'parent_finals',
	/** column name */
	ParentGroup = 'parent_group',
	/** column name */
	ParentLeague = 'parent_league',
	/** column name */
	SeedingGroup = 'seeding_group',
	/** column name */
	SeedingLeague = 'seeding_league',
	/** column name */
	SeedingMatch = 'seeding_match',
	/** column name */
	SeedingPosition = 'seeding_position',
	/** column name */
	Type = 'type',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Placeholder_Teams_Var_Pop_Fields = {
	__typename?: 'placeholder_teams_var_pop_fields';
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "placeholder_teams" */
export type Placeholder_Teams_Var_Pop_Order_By = {
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Placeholder_Teams_Var_Samp_Fields = {
	__typename?: 'placeholder_teams_var_samp_fields';
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "placeholder_teams" */
export type Placeholder_Teams_Var_Samp_Order_By = {
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Placeholder_Teams_Variance_Fields = {
	__typename?: 'placeholder_teams_variance_fields';
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "placeholder_teams" */
export type Placeholder_Teams_Variance_Order_By = {
	/** The team that will replace this placeholder will finish in this position */
	seeding_position?: Maybe<Order_By>;
};

/** columns and relationships of "players" */
export type Players = {
	__typename?: 'players';
	city?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	cityByCity?: Maybe<Cities>;
	/** An object relationship */
	country?: Maybe<Countries>;
	country_id?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	email?: Maybe<Scalars['String']>;
	firebase_id?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	/** An array relationship */
	footy_users: Array<Footy_Users>;
	/** An aggregate relationship */
	footy_users_aggregate: Footy_Users_Aggregate;
	gender?: Maybe<Scalars['String']>;
	id: Scalars['uuid'];
	/** An array relationship */
	join_players_teams: Array<Join_Players_Teams>;
	/** An aggregate relationship */
	join_players_teams_aggregate: Join_Players_Teams_Aggregate;
	language?: Maybe<Scalars['String']>;
	last_name?: Maybe<Scalars['String']>;
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	phone_number?: Maybe<Scalars['String']>;
	photo_url?: Maybe<Scalars['String']>;
	/** An array relationship */
	registrations_players: Array<Registrations_Player>;
	/** An aggregate relationship */
	registrations_players_aggregate: Registrations_Player_Aggregate;
	ringer?: Maybe<Scalars['Boolean']>;
	status?: Maybe<Scalars['String']>;
	/** An array relationship */
	teams: Array<Teams>;
	/** An array relationship */
	teamsByViceCaptain: Array<Teams>;
	/** An aggregate relationship */
	teamsByViceCaptain_aggregate: Teams_Aggregate;
	/** An aggregate relationship */
	teams_aggregate: Teams_Aggregate;
	updated_at?: Maybe<Scalars['timestamptz']>;
	whatsapp: Scalars['Boolean'];
	zendesk_id?: Maybe<Scalars['String']>;
};

/** columns and relationships of "players" */
export type PlayersFooty_UsersArgs = {
	distinct_on?: Maybe<Array<Footy_Users_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Footy_Users_Order_By>>;
	where?: Maybe<Footy_Users_Bool_Exp>;
};

/** columns and relationships of "players" */
export type PlayersFooty_Users_AggregateArgs = {
	distinct_on?: Maybe<Array<Footy_Users_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Footy_Users_Order_By>>;
	where?: Maybe<Footy_Users_Bool_Exp>;
};

/** columns and relationships of "players" */
export type PlayersJoin_Players_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_Players_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Players_Teams_Order_By>>;
	where?: Maybe<Join_Players_Teams_Bool_Exp>;
};

/** columns and relationships of "players" */
export type PlayersJoin_Players_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Players_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Players_Teams_Order_By>>;
	where?: Maybe<Join_Players_Teams_Bool_Exp>;
};

/** columns and relationships of "players" */
export type PlayersMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "players" */
export type PlayersMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "players" */
export type PlayersRegistrations_PlayersArgs = {
	distinct_on?: Maybe<Array<Registrations_Player_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Player_Order_By>>;
	where?: Maybe<Registrations_Player_Bool_Exp>;
};

/** columns and relationships of "players" */
export type PlayersRegistrations_Players_AggregateArgs = {
	distinct_on?: Maybe<Array<Registrations_Player_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Player_Order_By>>;
	where?: Maybe<Registrations_Player_Bool_Exp>;
};

/** columns and relationships of "players" */
export type PlayersTeamsArgs = {
	distinct_on?: Maybe<Array<Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Teams_Order_By>>;
	where?: Maybe<Teams_Bool_Exp>;
};

/** columns and relationships of "players" */
export type PlayersTeamsByViceCaptainArgs = {
	distinct_on?: Maybe<Array<Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Teams_Order_By>>;
	where?: Maybe<Teams_Bool_Exp>;
};

/** columns and relationships of "players" */
export type PlayersTeamsByViceCaptain_AggregateArgs = {
	distinct_on?: Maybe<Array<Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Teams_Order_By>>;
	where?: Maybe<Teams_Bool_Exp>;
};

/** columns and relationships of "players" */
export type PlayersTeams_AggregateArgs = {
	distinct_on?: Maybe<Array<Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Teams_Order_By>>;
	where?: Maybe<Teams_Bool_Exp>;
};

/** aggregated selection of "players" */
export type Players_Aggregate = {
	__typename?: 'players_aggregate';
	aggregate?: Maybe<Players_Aggregate_Fields>;
	nodes: Array<Players>;
};

/** aggregate fields of "players" */
export type Players_Aggregate_Fields = {
	__typename?: 'players_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Players_Max_Fields>;
	min?: Maybe<Players_Min_Fields>;
};

/** aggregate fields of "players" */
export type Players_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Players_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "players" */
export type Players_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Players_Max_Order_By>;
	min?: Maybe<Players_Min_Order_By>;
};

/** input type for inserting array relation for remote table "players" */
export type Players_Arr_Rel_Insert_Input = {
	data: Array<Players_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Players_On_Conflict>;
};

/** Boolean expression to filter rows from the table "players". All fields are combined with a logical 'AND'. */
export type Players_Bool_Exp = {
	_and?: Maybe<Array<Players_Bool_Exp>>;
	_not?: Maybe<Players_Bool_Exp>;
	_or?: Maybe<Array<Players_Bool_Exp>>;
	city?: Maybe<Uuid_Comparison_Exp>;
	cityByCity?: Maybe<Cities_Bool_Exp>;
	country?: Maybe<Countries_Bool_Exp>;
	country_id?: Maybe<Uuid_Comparison_Exp>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	email?: Maybe<String_Comparison_Exp>;
	firebase_id?: Maybe<String_Comparison_Exp>;
	first_name?: Maybe<String_Comparison_Exp>;
	footy_users?: Maybe<Footy_Users_Bool_Exp>;
	gender?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	join_players_teams?: Maybe<Join_Players_Teams_Bool_Exp>;
	language?: Maybe<String_Comparison_Exp>;
	last_name?: Maybe<String_Comparison_Exp>;
	matches?: Maybe<Matches_Bool_Exp>;
	phone_number?: Maybe<String_Comparison_Exp>;
	photo_url?: Maybe<String_Comparison_Exp>;
	registrations_players?: Maybe<Registrations_Player_Bool_Exp>;
	ringer?: Maybe<Boolean_Comparison_Exp>;
	status?: Maybe<String_Comparison_Exp>;
	teams?: Maybe<Teams_Bool_Exp>;
	teamsByViceCaptain?: Maybe<Teams_Bool_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
	whatsapp?: Maybe<Boolean_Comparison_Exp>;
	zendesk_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "players" */
export enum Players_Constraint {
	/** unique or primary key constraint */
	PlayersPkey = 'players_pkey',
}

/** input type for inserting data into table "players" */
export type Players_Insert_Input = {
	city?: Maybe<Scalars['uuid']>;
	cityByCity?: Maybe<Cities_Obj_Rel_Insert_Input>;
	country?: Maybe<Countries_Obj_Rel_Insert_Input>;
	country_id?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	email?: Maybe<Scalars['String']>;
	firebase_id?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	footy_users?: Maybe<Footy_Users_Arr_Rel_Insert_Input>;
	gender?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	join_players_teams?: Maybe<Join_Players_Teams_Arr_Rel_Insert_Input>;
	language?: Maybe<Scalars['String']>;
	last_name?: Maybe<Scalars['String']>;
	matches?: Maybe<Matches_Arr_Rel_Insert_Input>;
	phone_number?: Maybe<Scalars['String']>;
	photo_url?: Maybe<Scalars['String']>;
	registrations_players?: Maybe<Registrations_Player_Arr_Rel_Insert_Input>;
	ringer?: Maybe<Scalars['Boolean']>;
	status?: Maybe<Scalars['String']>;
	teams?: Maybe<Teams_Arr_Rel_Insert_Input>;
	teamsByViceCaptain?: Maybe<Teams_Arr_Rel_Insert_Input>;
	updated_at?: Maybe<Scalars['timestamptz']>;
	whatsapp?: Maybe<Scalars['Boolean']>;
	zendesk_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Players_Max_Fields = {
	__typename?: 'players_max_fields';
	city?: Maybe<Scalars['uuid']>;
	country_id?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	email?: Maybe<Scalars['String']>;
	firebase_id?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	gender?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	language?: Maybe<Scalars['String']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
	photo_url?: Maybe<Scalars['String']>;
	status?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
	zendesk_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "players" */
export type Players_Max_Order_By = {
	city?: Maybe<Order_By>;
	country_id?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	email?: Maybe<Order_By>;
	firebase_id?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	gender?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	language?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	phone_number?: Maybe<Order_By>;
	photo_url?: Maybe<Order_By>;
	status?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
	zendesk_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Players_Min_Fields = {
	__typename?: 'players_min_fields';
	city?: Maybe<Scalars['uuid']>;
	country_id?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	email?: Maybe<Scalars['String']>;
	firebase_id?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	gender?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	language?: Maybe<Scalars['String']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
	photo_url?: Maybe<Scalars['String']>;
	status?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
	zendesk_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "players" */
export type Players_Min_Order_By = {
	city?: Maybe<Order_By>;
	country_id?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	email?: Maybe<Order_By>;
	firebase_id?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	gender?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	language?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	phone_number?: Maybe<Order_By>;
	photo_url?: Maybe<Order_By>;
	status?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
	zendesk_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "players" */
export type Players_Mutation_Response = {
	__typename?: 'players_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Players>;
};

/** input type for inserting object relation for remote table "players" */
export type Players_Obj_Rel_Insert_Input = {
	data: Players_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Players_On_Conflict>;
};

/** on conflict condition type for table "players" */
export type Players_On_Conflict = {
	constraint: Players_Constraint;
	update_columns?: Array<Players_Update_Column>;
	where?: Maybe<Players_Bool_Exp>;
};

/** Ordering options when selecting data from "players". */
export type Players_Order_By = {
	city?: Maybe<Order_By>;
	cityByCity?: Maybe<Cities_Order_By>;
	country?: Maybe<Countries_Order_By>;
	country_id?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	email?: Maybe<Order_By>;
	firebase_id?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	footy_users_aggregate?: Maybe<Footy_Users_Aggregate_Order_By>;
	gender?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	join_players_teams_aggregate?: Maybe<Join_Players_Teams_Aggregate_Order_By>;
	language?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	matches_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	phone_number?: Maybe<Order_By>;
	photo_url?: Maybe<Order_By>;
	registrations_players_aggregate?: Maybe<Registrations_Player_Aggregate_Order_By>;
	ringer?: Maybe<Order_By>;
	status?: Maybe<Order_By>;
	teamsByViceCaptain_aggregate?: Maybe<Teams_Aggregate_Order_By>;
	teams_aggregate?: Maybe<Teams_Aggregate_Order_By>;
	updated_at?: Maybe<Order_By>;
	whatsapp?: Maybe<Order_By>;
	zendesk_id?: Maybe<Order_By>;
};

/** primary key columns input for table: players */
export type Players_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "players" */
export enum Players_Select_Column {
	/** column name */
	City = 'city',
	/** column name */
	CountryId = 'country_id',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Email = 'email',
	/** column name */
	FirebaseId = 'firebase_id',
	/** column name */
	FirstName = 'first_name',
	/** column name */
	Gender = 'gender',
	/** column name */
	Id = 'id',
	/** column name */
	Language = 'language',
	/** column name */
	LastName = 'last_name',
	/** column name */
	PhoneNumber = 'phone_number',
	/** column name */
	PhotoUrl = 'photo_url',
	/** column name */
	Ringer = 'ringer',
	/** column name */
	Status = 'status',
	/** column name */
	UpdatedAt = 'updated_at',
	/** column name */
	Whatsapp = 'whatsapp',
	/** column name */
	ZendeskId = 'zendesk_id',
}

/** input type for updating data in table "players" */
export type Players_Set_Input = {
	city?: Maybe<Scalars['uuid']>;
	country_id?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	email?: Maybe<Scalars['String']>;
	firebase_id?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	gender?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	language?: Maybe<Scalars['String']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
	photo_url?: Maybe<Scalars['String']>;
	ringer?: Maybe<Scalars['Boolean']>;
	status?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
	whatsapp?: Maybe<Scalars['Boolean']>;
	zendesk_id?: Maybe<Scalars['String']>;
};

/** update columns of table "players" */
export enum Players_Update_Column {
	/** column name */
	City = 'city',
	/** column name */
	CountryId = 'country_id',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Email = 'email',
	/** column name */
	FirebaseId = 'firebase_id',
	/** column name */
	FirstName = 'first_name',
	/** column name */
	Gender = 'gender',
	/** column name */
	Id = 'id',
	/** column name */
	Language = 'language',
	/** column name */
	LastName = 'last_name',
	/** column name */
	PhoneNumber = 'phone_number',
	/** column name */
	PhotoUrl = 'photo_url',
	/** column name */
	Ringer = 'ringer',
	/** column name */
	Status = 'status',
	/** column name */
	UpdatedAt = 'updated_at',
	/** column name */
	Whatsapp = 'whatsapp',
	/** column name */
	ZendeskId = 'zendesk_id',
}

export type Query_Root = {
	__typename?: 'query_root';
	/** fetch data from the table: "admin_users" */
	admin_users: Array<Admin_Users>;
	/** fetch aggregated fields from the table: "admin_users" */
	admin_users_aggregate: Admin_Users_Aggregate;
	/** fetch data from the table: "admin_users" using primary key columns */
	admin_users_by_pk?: Maybe<Admin_Users>;
	/** An array relationship */
	cities: Array<Cities>;
	/** An aggregate relationship */
	cities_aggregate: Cities_Aggregate;
	/** fetch data from the table: "cities" using primary key columns */
	cities_by_pk?: Maybe<Cities>;
	/** An array relationship */
	coordinators: Array<Coordinators>;
	/** An aggregate relationship */
	coordinators_aggregate: Coordinators_Aggregate;
	/** fetch data from the table: "coordinators" using primary key columns */
	coordinators_by_pk?: Maybe<Coordinators>;
	/** fetch data from the table: "countries" */
	countries: Array<Countries>;
	/** fetch aggregated fields from the table: "countries" */
	countries_aggregate: Countries_Aggregate;
	/** fetch data from the table: "countries" using primary key columns */
	countries_by_pk?: Maybe<Countries>;
	/** An array relationship */
	finals: Array<Finals>;
	/** An aggregate relationship */
	finals_aggregate: Finals_Aggregate;
	/** fetch data from the table: "finals" using primary key columns */
	finals_by_pk?: Maybe<Finals>;
	/** An array relationship */
	finals_groups: Array<Finals_Groups>;
	/** An aggregate relationship */
	finals_groups_aggregate: Finals_Groups_Aggregate;
	/** fetch data from the table: "finals_groups" using primary key columns */
	finals_groups_by_pk?: Maybe<Finals_Groups>;
	/** An array relationship */
	finals_knockouts: Array<Finals_Knockouts>;
	/** An aggregate relationship */
	finals_knockouts_aggregate: Finals_Knockouts_Aggregate;
	/** fetch data from the table: "finals_knockouts" using primary key columns */
	finals_knockouts_by_pk?: Maybe<Finals_Knockouts>;
	/** An array relationship */
	footy_users: Array<Footy_Users>;
	/** An aggregate relationship */
	footy_users_aggregate: Footy_Users_Aggregate;
	/** fetch data from the table: "footy_users" using primary key columns */
	footy_users_by_pk?: Maybe<Footy_Users>;
	/** An array relationship */
	historic_team_names: Array<Historic_Team_Names>;
	/** An aggregate relationship */
	historic_team_names_aggregate: Historic_Team_Names_Aggregate;
	/** fetch data from the table: "historic_team_names" using primary key columns */
	historic_team_names_by_pk?: Maybe<Historic_Team_Names>;
	/** An array relationship */
	join_finals_leagues: Array<Join_Finals_Leagues>;
	/** An aggregate relationship */
	join_finals_leagues_aggregate: Join_Finals_Leagues_Aggregate;
	/** fetch data from the table: "join_finals_leagues" using primary key columns */
	join_finals_leagues_by_pk?: Maybe<Join_Finals_Leagues>;
	/** An array relationship */
	join_footy_users_teams: Array<Join_Footy_Users_Teams>;
	/** An aggregate relationship */
	join_footy_users_teams_aggregate: Join_Footy_Users_Teams_Aggregate;
	/** fetch data from the table: "join_footy_users_teams" using primary key columns */
	join_footy_users_teams_by_pk?: Maybe<Join_Footy_Users_Teams>;
	/** fetch data from the table: "join_league_teams" */
	join_league_teams: Array<Join_League_Teams>;
	/** fetch aggregated fields from the table: "join_league_teams" */
	join_league_teams_aggregate: Join_League_Teams_Aggregate;
	/** fetch data from the table: "join_league_teams" using primary key columns */
	join_league_teams_by_pk?: Maybe<Join_League_Teams>;
	/** An array relationship */
	join_leagues_mini_leagues: Array<Join_Leagues_Mini_Leagues>;
	/** An aggregate relationship */
	join_leagues_mini_leagues_aggregate: Join_Leagues_Mini_Leagues_Aggregate;
	/** fetch data from the table: "join_leagues_mini_leagues" using primary key columns */
	join_leagues_mini_leagues_by_pk?: Maybe<Join_Leagues_Mini_Leagues>;
	/** An array relationship */
	join_players_teams: Array<Join_Players_Teams>;
	/** An aggregate relationship */
	join_players_teams_aggregate: Join_Players_Teams_Aggregate;
	/** fetch data from the table: "join_players_teams" using primary key columns */
	join_players_teams_by_pk?: Maybe<Join_Players_Teams>;
	/** An array relationship */
	join_team_finals: Array<Join_Team_Finals>;
	/** An aggregate relationship */
	join_team_finals_aggregate: Join_Team_Finals_Aggregate;
	/** fetch data from the table: "join_team_finals" using primary key columns */
	join_team_finals_by_pk?: Maybe<Join_Team_Finals>;
	/** An array relationship */
	leagues: Array<Leagues>;
	/** An aggregate relationship */
	leagues_aggregate: Leagues_Aggregate;
	/** fetch data from the table: "leagues" using primary key columns */
	leagues_by_pk?: Maybe<Leagues>;
	/** An array relationship */
	locations: Array<Locations>;
	/** An aggregate relationship */
	locations_aggregate: Locations_Aggregate;
	/** fetch data from the table: "locations" using primary key columns */
	locations_by_pk?: Maybe<Locations>;
	/** An array relationship */
	match_comments: Array<Match_Comments>;
	/** An aggregate relationship */
	match_comments_aggregate: Match_Comments_Aggregate;
	/** fetch data from the table: "match_comments" using primary key columns */
	match_comments_by_pk?: Maybe<Match_Comments>;
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	/** fetch data from the table: "matches" using primary key columns */
	matches_by_pk?: Maybe<Matches>;
	/** An array relationship */
	pitches: Array<Pitches>;
	/** An aggregate relationship */
	pitches_aggregate: Pitches_Aggregate;
	/** fetch data from the table: "pitches" using primary key columns */
	pitches_by_pk?: Maybe<Pitches>;
	/** An array relationship */
	placeholder_teams: Array<Placeholder_Teams>;
	/** An aggregate relationship */
	placeholder_teams_aggregate: Placeholder_Teams_Aggregate;
	/** fetch data from the table: "placeholder_teams" using primary key columns */
	placeholder_teams_by_pk?: Maybe<Placeholder_Teams>;
	/** An array relationship */
	players: Array<Players>;
	/** An aggregate relationship */
	players_aggregate: Players_Aggregate;
	/** fetch data from the table: "players" using primary key columns */
	players_by_pk?: Maybe<Players>;
	/** An array relationship */
	referees: Array<Referees>;
	/** An aggregate relationship */
	referees_aggregate: Referees_Aggregate;
	/** fetch data from the table: "referees" using primary key columns */
	referees_by_pk?: Maybe<Referees>;
	/** An array relationship */
	registrations: Array<Registrations>;
	/** An aggregate relationship */
	registrations_aggregate: Registrations_Aggregate;
	/** fetch data from the table: "registrations" using primary key columns */
	registrations_by_pk?: Maybe<Registrations>;
	/** fetch data from the table: "registrations_player" */
	registrations_player: Array<Registrations_Player>;
	/** fetch aggregated fields from the table: "registrations_player" */
	registrations_player_aggregate: Registrations_Player_Aggregate;
	/** fetch data from the table: "registrations_player" using primary key columns */
	registrations_player_by_pk?: Maybe<Registrations_Player>;
	/** An array relationship */
	registrations_teams: Array<Registrations_Teams>;
	/** An aggregate relationship */
	registrations_teams_aggregate: Registrations_Teams_Aggregate;
	/** fetch data from the table: "registrations_teams" using primary key columns */
	registrations_teams_by_pk?: Maybe<Registrations_Teams>;
	/** An array relationship */
	seedings: Array<Seedings>;
	/** An aggregate relationship */
	seedings_aggregate: Seedings_Aggregate;
	/** fetch data from the table: "seedings" using primary key columns */
	seedings_by_pk?: Maybe<Seedings>;
	/** An array relationship */
	teams: Array<Teams>;
	/** An aggregate relationship */
	teams_aggregate: Teams_Aggregate;
	/** fetch data from the table: "teams" using primary key columns */
	teams_by_pk?: Maybe<Teams>;
	/** An array relationship */
	tournaments: Array<Tournaments>;
	/** An aggregate relationship */
	tournaments_aggregate: Tournaments_Aggregate;
	/** fetch data from the table: "tournaments" using primary key columns */
	tournaments_by_pk?: Maybe<Tournaments>;
};

export type Query_RootAdmin_UsersArgs = {
	distinct_on?: Maybe<Array<Admin_Users_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Admin_Users_Order_By>>;
	where?: Maybe<Admin_Users_Bool_Exp>;
};

export type Query_RootAdmin_Users_AggregateArgs = {
	distinct_on?: Maybe<Array<Admin_Users_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Admin_Users_Order_By>>;
	where?: Maybe<Admin_Users_Bool_Exp>;
};

export type Query_RootAdmin_Users_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootCitiesArgs = {
	distinct_on?: Maybe<Array<Cities_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Cities_Order_By>>;
	where?: Maybe<Cities_Bool_Exp>;
};

export type Query_RootCities_AggregateArgs = {
	distinct_on?: Maybe<Array<Cities_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Cities_Order_By>>;
	where?: Maybe<Cities_Bool_Exp>;
};

export type Query_RootCities_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootCoordinatorsArgs = {
	distinct_on?: Maybe<Array<Coordinators_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Coordinators_Order_By>>;
	where?: Maybe<Coordinators_Bool_Exp>;
};

export type Query_RootCoordinators_AggregateArgs = {
	distinct_on?: Maybe<Array<Coordinators_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Coordinators_Order_By>>;
	where?: Maybe<Coordinators_Bool_Exp>;
};

export type Query_RootCoordinators_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootCountriesArgs = {
	distinct_on?: Maybe<Array<Countries_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Countries_Order_By>>;
	where?: Maybe<Countries_Bool_Exp>;
};

export type Query_RootCountries_AggregateArgs = {
	distinct_on?: Maybe<Array<Countries_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Countries_Order_By>>;
	where?: Maybe<Countries_Bool_Exp>;
};

export type Query_RootCountries_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootFinalsArgs = {
	distinct_on?: Maybe<Array<Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Order_By>>;
	where?: Maybe<Finals_Bool_Exp>;
};

export type Query_RootFinals_AggregateArgs = {
	distinct_on?: Maybe<Array<Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Order_By>>;
	where?: Maybe<Finals_Bool_Exp>;
};

export type Query_RootFinals_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootFinals_GroupsArgs = {
	distinct_on?: Maybe<Array<Finals_Groups_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Groups_Order_By>>;
	where?: Maybe<Finals_Groups_Bool_Exp>;
};

export type Query_RootFinals_Groups_AggregateArgs = {
	distinct_on?: Maybe<Array<Finals_Groups_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Groups_Order_By>>;
	where?: Maybe<Finals_Groups_Bool_Exp>;
};

export type Query_RootFinals_Groups_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootFinals_KnockoutsArgs = {
	distinct_on?: Maybe<Array<Finals_Knockouts_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Knockouts_Order_By>>;
	where?: Maybe<Finals_Knockouts_Bool_Exp>;
};

export type Query_RootFinals_Knockouts_AggregateArgs = {
	distinct_on?: Maybe<Array<Finals_Knockouts_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Knockouts_Order_By>>;
	where?: Maybe<Finals_Knockouts_Bool_Exp>;
};

export type Query_RootFinals_Knockouts_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootFooty_UsersArgs = {
	distinct_on?: Maybe<Array<Footy_Users_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Footy_Users_Order_By>>;
	where?: Maybe<Footy_Users_Bool_Exp>;
};

export type Query_RootFooty_Users_AggregateArgs = {
	distinct_on?: Maybe<Array<Footy_Users_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Footy_Users_Order_By>>;
	where?: Maybe<Footy_Users_Bool_Exp>;
};

export type Query_RootFooty_Users_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootHistoric_Team_NamesArgs = {
	distinct_on?: Maybe<Array<Historic_Team_Names_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Historic_Team_Names_Order_By>>;
	where?: Maybe<Historic_Team_Names_Bool_Exp>;
};

export type Query_RootHistoric_Team_Names_AggregateArgs = {
	distinct_on?: Maybe<Array<Historic_Team_Names_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Historic_Team_Names_Order_By>>;
	where?: Maybe<Historic_Team_Names_Bool_Exp>;
};

export type Query_RootHistoric_Team_Names_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootJoin_Finals_LeaguesArgs = {
	distinct_on?: Maybe<Array<Join_Finals_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Finals_Leagues_Order_By>>;
	where?: Maybe<Join_Finals_Leagues_Bool_Exp>;
};

export type Query_RootJoin_Finals_Leagues_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Finals_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Finals_Leagues_Order_By>>;
	where?: Maybe<Join_Finals_Leagues_Bool_Exp>;
};

export type Query_RootJoin_Finals_Leagues_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootJoin_Footy_Users_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_Footy_Users_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Footy_Users_Teams_Order_By>>;
	where?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
};

export type Query_RootJoin_Footy_Users_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Footy_Users_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Footy_Users_Teams_Order_By>>;
	where?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
};

export type Query_RootJoin_Footy_Users_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootJoin_League_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_League_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_League_Teams_Order_By>>;
	where?: Maybe<Join_League_Teams_Bool_Exp>;
};

export type Query_RootJoin_League_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_League_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_League_Teams_Order_By>>;
	where?: Maybe<Join_League_Teams_Bool_Exp>;
};

export type Query_RootJoin_League_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootJoin_Leagues_Mini_LeaguesArgs = {
	distinct_on?: Maybe<Array<Join_Leagues_Mini_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Leagues_Mini_Leagues_Order_By>>;
	where?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
};

export type Query_RootJoin_Leagues_Mini_Leagues_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Leagues_Mini_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Leagues_Mini_Leagues_Order_By>>;
	where?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
};

export type Query_RootJoin_Leagues_Mini_Leagues_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootJoin_Players_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_Players_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Players_Teams_Order_By>>;
	where?: Maybe<Join_Players_Teams_Bool_Exp>;
};

export type Query_RootJoin_Players_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Players_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Players_Teams_Order_By>>;
	where?: Maybe<Join_Players_Teams_Bool_Exp>;
};

export type Query_RootJoin_Players_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootJoin_Team_FinalsArgs = {
	distinct_on?: Maybe<Array<Join_Team_Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Team_Finals_Order_By>>;
	where?: Maybe<Join_Team_Finals_Bool_Exp>;
};

export type Query_RootJoin_Team_Finals_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Team_Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Team_Finals_Order_By>>;
	where?: Maybe<Join_Team_Finals_Bool_Exp>;
};

export type Query_RootJoin_Team_Finals_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootLeaguesArgs = {
	distinct_on?: Maybe<Array<Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Leagues_Order_By>>;
	where?: Maybe<Leagues_Bool_Exp>;
};

export type Query_RootLeagues_AggregateArgs = {
	distinct_on?: Maybe<Array<Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Leagues_Order_By>>;
	where?: Maybe<Leagues_Bool_Exp>;
};

export type Query_RootLeagues_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootLocationsArgs = {
	distinct_on?: Maybe<Array<Locations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Locations_Order_By>>;
	where?: Maybe<Locations_Bool_Exp>;
};

export type Query_RootLocations_AggregateArgs = {
	distinct_on?: Maybe<Array<Locations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Locations_Order_By>>;
	where?: Maybe<Locations_Bool_Exp>;
};

export type Query_RootLocations_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootMatch_CommentsArgs = {
	distinct_on?: Maybe<Array<Match_Comments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Match_Comments_Order_By>>;
	where?: Maybe<Match_Comments_Bool_Exp>;
};

export type Query_RootMatch_Comments_AggregateArgs = {
	distinct_on?: Maybe<Array<Match_Comments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Match_Comments_Order_By>>;
	where?: Maybe<Match_Comments_Bool_Exp>;
};

export type Query_RootMatch_Comments_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

export type Query_RootMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

export type Query_RootMatches_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootPitchesArgs = {
	distinct_on?: Maybe<Array<Pitches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Pitches_Order_By>>;
	where?: Maybe<Pitches_Bool_Exp>;
};

export type Query_RootPitches_AggregateArgs = {
	distinct_on?: Maybe<Array<Pitches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Pitches_Order_By>>;
	where?: Maybe<Pitches_Bool_Exp>;
};

export type Query_RootPitches_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootPlaceholder_TeamsArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

export type Query_RootPlaceholder_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

export type Query_RootPlaceholder_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootPlayersArgs = {
	distinct_on?: Maybe<Array<Players_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Players_Order_By>>;
	where?: Maybe<Players_Bool_Exp>;
};

export type Query_RootPlayers_AggregateArgs = {
	distinct_on?: Maybe<Array<Players_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Players_Order_By>>;
	where?: Maybe<Players_Bool_Exp>;
};

export type Query_RootPlayers_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootRefereesArgs = {
	distinct_on?: Maybe<Array<Referees_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Referees_Order_By>>;
	where?: Maybe<Referees_Bool_Exp>;
};

export type Query_RootReferees_AggregateArgs = {
	distinct_on?: Maybe<Array<Referees_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Referees_Order_By>>;
	where?: Maybe<Referees_Bool_Exp>;
};

export type Query_RootReferees_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootRegistrationsArgs = {
	distinct_on?: Maybe<Array<Registrations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Order_By>>;
	where?: Maybe<Registrations_Bool_Exp>;
};

export type Query_RootRegistrations_AggregateArgs = {
	distinct_on?: Maybe<Array<Registrations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Order_By>>;
	where?: Maybe<Registrations_Bool_Exp>;
};

export type Query_RootRegistrations_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootRegistrations_PlayerArgs = {
	distinct_on?: Maybe<Array<Registrations_Player_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Player_Order_By>>;
	where?: Maybe<Registrations_Player_Bool_Exp>;
};

export type Query_RootRegistrations_Player_AggregateArgs = {
	distinct_on?: Maybe<Array<Registrations_Player_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Player_Order_By>>;
	where?: Maybe<Registrations_Player_Bool_Exp>;
};

export type Query_RootRegistrations_Player_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootRegistrations_TeamsArgs = {
	distinct_on?: Maybe<Array<Registrations_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Teams_Order_By>>;
	where?: Maybe<Registrations_Teams_Bool_Exp>;
};

export type Query_RootRegistrations_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Registrations_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Teams_Order_By>>;
	where?: Maybe<Registrations_Teams_Bool_Exp>;
};

export type Query_RootRegistrations_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootSeedingsArgs = {
	distinct_on?: Maybe<Array<Seedings_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Seedings_Order_By>>;
	where?: Maybe<Seedings_Bool_Exp>;
};

export type Query_RootSeedings_AggregateArgs = {
	distinct_on?: Maybe<Array<Seedings_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Seedings_Order_By>>;
	where?: Maybe<Seedings_Bool_Exp>;
};

export type Query_RootSeedings_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootTeamsArgs = {
	distinct_on?: Maybe<Array<Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Teams_Order_By>>;
	where?: Maybe<Teams_Bool_Exp>;
};

export type Query_RootTeams_AggregateArgs = {
	distinct_on?: Maybe<Array<Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Teams_Order_By>>;
	where?: Maybe<Teams_Bool_Exp>;
};

export type Query_RootTeams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Query_RootTournamentsArgs = {
	distinct_on?: Maybe<Array<Tournaments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Tournaments_Order_By>>;
	where?: Maybe<Tournaments_Bool_Exp>;
};

export type Query_RootTournaments_AggregateArgs = {
	distinct_on?: Maybe<Array<Tournaments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Tournaments_Order_By>>;
	where?: Maybe<Tournaments_Bool_Exp>;
};

export type Query_RootTournaments_By_PkArgs = {
	id: Scalars['uuid'];
};

/** columns and relationships of "referees" */
export type Referees = {
	__typename?: 'referees';
	city?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	cityByCity?: Maybe<Cities>;
	email?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id: Scalars['uuid'];
	last_name?: Maybe<Scalars['String']>;
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	phone_number?: Maybe<Scalars['String']>;
};

/** columns and relationships of "referees" */
export type RefereesMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "referees" */
export type RefereesMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** aggregated selection of "referees" */
export type Referees_Aggregate = {
	__typename?: 'referees_aggregate';
	aggregate?: Maybe<Referees_Aggregate_Fields>;
	nodes: Array<Referees>;
};

/** aggregate fields of "referees" */
export type Referees_Aggregate_Fields = {
	__typename?: 'referees_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Referees_Max_Fields>;
	min?: Maybe<Referees_Min_Fields>;
};

/** aggregate fields of "referees" */
export type Referees_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Referees_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "referees" */
export type Referees_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Referees_Max_Order_By>;
	min?: Maybe<Referees_Min_Order_By>;
};

/** input type for inserting array relation for remote table "referees" */
export type Referees_Arr_Rel_Insert_Input = {
	data: Array<Referees_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Referees_On_Conflict>;
};

/** Boolean expression to filter rows from the table "referees". All fields are combined with a logical 'AND'. */
export type Referees_Bool_Exp = {
	_and?: Maybe<Array<Referees_Bool_Exp>>;
	_not?: Maybe<Referees_Bool_Exp>;
	_or?: Maybe<Array<Referees_Bool_Exp>>;
	city?: Maybe<Uuid_Comparison_Exp>;
	cityByCity?: Maybe<Cities_Bool_Exp>;
	email?: Maybe<String_Comparison_Exp>;
	first_name?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	last_name?: Maybe<String_Comparison_Exp>;
	matches?: Maybe<Matches_Bool_Exp>;
	phone_number?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "referees" */
export enum Referees_Constraint {
	/** unique or primary key constraint */
	RefereesPkey = 'referees_pkey',
}

/** input type for inserting data into table "referees" */
export type Referees_Insert_Input = {
	city?: Maybe<Scalars['uuid']>;
	cityByCity?: Maybe<Cities_Obj_Rel_Insert_Input>;
	email?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	matches?: Maybe<Matches_Arr_Rel_Insert_Input>;
	phone_number?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Referees_Max_Fields = {
	__typename?: 'referees_max_fields';
	city?: Maybe<Scalars['uuid']>;
	email?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "referees" */
export type Referees_Max_Order_By = {
	city?: Maybe<Order_By>;
	email?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	phone_number?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Referees_Min_Fields = {
	__typename?: 'referees_min_fields';
	city?: Maybe<Scalars['uuid']>;
	email?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "referees" */
export type Referees_Min_Order_By = {
	city?: Maybe<Order_By>;
	email?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	phone_number?: Maybe<Order_By>;
};

/** response of any mutation on the table "referees" */
export type Referees_Mutation_Response = {
	__typename?: 'referees_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Referees>;
};

/** input type for inserting object relation for remote table "referees" */
export type Referees_Obj_Rel_Insert_Input = {
	data: Referees_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Referees_On_Conflict>;
};

/** on conflict condition type for table "referees" */
export type Referees_On_Conflict = {
	constraint: Referees_Constraint;
	update_columns?: Array<Referees_Update_Column>;
	where?: Maybe<Referees_Bool_Exp>;
};

/** Ordering options when selecting data from "referees". */
export type Referees_Order_By = {
	city?: Maybe<Order_By>;
	cityByCity?: Maybe<Cities_Order_By>;
	email?: Maybe<Order_By>;
	first_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	last_name?: Maybe<Order_By>;
	matches_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	phone_number?: Maybe<Order_By>;
};

/** primary key columns input for table: referees */
export type Referees_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "referees" */
export enum Referees_Select_Column {
	/** column name */
	City = 'city',
	/** column name */
	Email = 'email',
	/** column name */
	FirstName = 'first_name',
	/** column name */
	Id = 'id',
	/** column name */
	LastName = 'last_name',
	/** column name */
	PhoneNumber = 'phone_number',
}

/** input type for updating data in table "referees" */
export type Referees_Set_Input = {
	city?: Maybe<Scalars['uuid']>;
	email?: Maybe<Scalars['String']>;
	first_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	last_name?: Maybe<Scalars['String']>;
	phone_number?: Maybe<Scalars['String']>;
};

/** update columns of table "referees" */
export enum Referees_Update_Column {
	/** column name */
	City = 'city',
	/** column name */
	Email = 'email',
	/** column name */
	FirstName = 'first_name',
	/** column name */
	Id = 'id',
	/** column name */
	LastName = 'last_name',
	/** column name */
	PhoneNumber = 'phone_number',
}

/** columns and relationships of "registrations" */
export type Registrations = {
	__typename?: 'registrations';
	created_at: Scalars['timestamptz'];
	day_of_week: Scalars['String'];
	display_name: Scalars['String'];
	id: Scalars['uuid'];
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	locationByLocation?: Maybe<Locations>;
	number_of_places?: Maybe<Scalars['Int']>;
	player_type: Scalars['String'];
	/** An array relationship */
	registrations_players: Array<Registrations_Player>;
	/** An aggregate relationship */
	registrations_players_aggregate: Registrations_Player_Aggregate;
	/** An array relationship */
	registrations_teams: Array<Registrations_Teams>;
	/** An aggregate relationship */
	registrations_teams_aggregate: Registrations_Teams_Aggregate;
	status: Scalars['String'];
	team_size: Scalars['String'];
	type?: Maybe<Scalars['String']>;
	updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "registrations" */
export type RegistrationsRegistrations_PlayersArgs = {
	distinct_on?: Maybe<Array<Registrations_Player_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Player_Order_By>>;
	where?: Maybe<Registrations_Player_Bool_Exp>;
};

/** columns and relationships of "registrations" */
export type RegistrationsRegistrations_Players_AggregateArgs = {
	distinct_on?: Maybe<Array<Registrations_Player_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Player_Order_By>>;
	where?: Maybe<Registrations_Player_Bool_Exp>;
};

/** columns and relationships of "registrations" */
export type RegistrationsRegistrations_TeamsArgs = {
	distinct_on?: Maybe<Array<Registrations_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Teams_Order_By>>;
	where?: Maybe<Registrations_Teams_Bool_Exp>;
};

/** columns and relationships of "registrations" */
export type RegistrationsRegistrations_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Registrations_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Teams_Order_By>>;
	where?: Maybe<Registrations_Teams_Bool_Exp>;
};

/** aggregated selection of "registrations" */
export type Registrations_Aggregate = {
	__typename?: 'registrations_aggregate';
	aggregate?: Maybe<Registrations_Aggregate_Fields>;
	nodes: Array<Registrations>;
};

/** aggregate fields of "registrations" */
export type Registrations_Aggregate_Fields = {
	__typename?: 'registrations_aggregate_fields';
	avg?: Maybe<Registrations_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Registrations_Max_Fields>;
	min?: Maybe<Registrations_Min_Fields>;
	stddev?: Maybe<Registrations_Stddev_Fields>;
	stddev_pop?: Maybe<Registrations_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Registrations_Stddev_Samp_Fields>;
	sum?: Maybe<Registrations_Sum_Fields>;
	var_pop?: Maybe<Registrations_Var_Pop_Fields>;
	var_samp?: Maybe<Registrations_Var_Samp_Fields>;
	variance?: Maybe<Registrations_Variance_Fields>;
};

/** aggregate fields of "registrations" */
export type Registrations_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Registrations_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "registrations" */
export type Registrations_Aggregate_Order_By = {
	avg?: Maybe<Registrations_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<Registrations_Max_Order_By>;
	min?: Maybe<Registrations_Min_Order_By>;
	stddev?: Maybe<Registrations_Stddev_Order_By>;
	stddev_pop?: Maybe<Registrations_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<Registrations_Stddev_Samp_Order_By>;
	sum?: Maybe<Registrations_Sum_Order_By>;
	var_pop?: Maybe<Registrations_Var_Pop_Order_By>;
	var_samp?: Maybe<Registrations_Var_Samp_Order_By>;
	variance?: Maybe<Registrations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "registrations" */
export type Registrations_Arr_Rel_Insert_Input = {
	data: Array<Registrations_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Registrations_On_Conflict>;
};

/** aggregate avg on columns */
export type Registrations_Avg_Fields = {
	__typename?: 'registrations_avg_fields';
	number_of_places?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "registrations" */
export type Registrations_Avg_Order_By = {
	number_of_places?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "registrations". All fields are combined with a logical 'AND'. */
export type Registrations_Bool_Exp = {
	_and?: Maybe<Array<Registrations_Bool_Exp>>;
	_not?: Maybe<Registrations_Bool_Exp>;
	_or?: Maybe<Array<Registrations_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	day_of_week?: Maybe<String_Comparison_Exp>;
	display_name?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	kick_off_date?: Maybe<Date_Comparison_Exp>;
	location?: Maybe<Uuid_Comparison_Exp>;
	locationByLocation?: Maybe<Locations_Bool_Exp>;
	number_of_places?: Maybe<Int_Comparison_Exp>;
	player_type?: Maybe<String_Comparison_Exp>;
	registrations_players?: Maybe<Registrations_Player_Bool_Exp>;
	registrations_teams?: Maybe<Registrations_Teams_Bool_Exp>;
	status?: Maybe<String_Comparison_Exp>;
	team_size?: Maybe<String_Comparison_Exp>;
	type?: Maybe<String_Comparison_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "registrations" */
export enum Registrations_Constraint {
	/** unique or primary key constraint */
	RegistrationsPkey = 'registrations_pkey',
}

/** input type for incrementing numeric columns in table "registrations" */
export type Registrations_Inc_Input = {
	number_of_places?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "registrations" */
export type Registrations_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_week?: Maybe<Scalars['String']>;
	display_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	locationByLocation?: Maybe<Locations_Obj_Rel_Insert_Input>;
	number_of_places?: Maybe<Scalars['Int']>;
	player_type?: Maybe<Scalars['String']>;
	registrations_players?: Maybe<Registrations_Player_Arr_Rel_Insert_Input>;
	registrations_teams?: Maybe<Registrations_Teams_Arr_Rel_Insert_Input>;
	status?: Maybe<Scalars['String']>;
	team_size?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Registrations_Max_Fields = {
	__typename?: 'registrations_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_week?: Maybe<Scalars['String']>;
	display_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	number_of_places?: Maybe<Scalars['Int']>;
	player_type?: Maybe<Scalars['String']>;
	status?: Maybe<Scalars['String']>;
	team_size?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "registrations" */
export type Registrations_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	day_of_week?: Maybe<Order_By>;
	display_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	kick_off_date?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	number_of_places?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	status?: Maybe<Order_By>;
	team_size?: Maybe<Order_By>;
	type?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Registrations_Min_Fields = {
	__typename?: 'registrations_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_week?: Maybe<Scalars['String']>;
	display_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	number_of_places?: Maybe<Scalars['Int']>;
	player_type?: Maybe<Scalars['String']>;
	status?: Maybe<Scalars['String']>;
	team_size?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "registrations" */
export type Registrations_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	day_of_week?: Maybe<Order_By>;
	display_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	kick_off_date?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	number_of_places?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	status?: Maybe<Order_By>;
	team_size?: Maybe<Order_By>;
	type?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "registrations" */
export type Registrations_Mutation_Response = {
	__typename?: 'registrations_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Registrations>;
};

/** input type for inserting object relation for remote table "registrations" */
export type Registrations_Obj_Rel_Insert_Input = {
	data: Registrations_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Registrations_On_Conflict>;
};

/** on conflict condition type for table "registrations" */
export type Registrations_On_Conflict = {
	constraint: Registrations_Constraint;
	update_columns?: Array<Registrations_Update_Column>;
	where?: Maybe<Registrations_Bool_Exp>;
};

/** Ordering options when selecting data from "registrations". */
export type Registrations_Order_By = {
	created_at?: Maybe<Order_By>;
	day_of_week?: Maybe<Order_By>;
	display_name?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	kick_off_date?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	locationByLocation?: Maybe<Locations_Order_By>;
	number_of_places?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	registrations_players_aggregate?: Maybe<Registrations_Player_Aggregate_Order_By>;
	registrations_teams_aggregate?: Maybe<Registrations_Teams_Aggregate_Order_By>;
	status?: Maybe<Order_By>;
	team_size?: Maybe<Order_By>;
	type?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: registrations */
export type Registrations_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** columns and relationships of "registrations_player" */
export type Registrations_Player = {
	__typename?: 'registrations_player';
	created_at: Scalars['timestamptz'];
	id: Scalars['uuid'];
	player: Scalars['uuid'];
	/** An object relationship */
	playerByPlayer: Players;
	registration: Scalars['uuid'];
	/** An object relationship */
	registrationByRegistration: Registrations;
	updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "registrations_player" */
export type Registrations_Player_Aggregate = {
	__typename?: 'registrations_player_aggregate';
	aggregate?: Maybe<Registrations_Player_Aggregate_Fields>;
	nodes: Array<Registrations_Player>;
};

/** aggregate fields of "registrations_player" */
export type Registrations_Player_Aggregate_Fields = {
	__typename?: 'registrations_player_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Registrations_Player_Max_Fields>;
	min?: Maybe<Registrations_Player_Min_Fields>;
};

/** aggregate fields of "registrations_player" */
export type Registrations_Player_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Registrations_Player_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "registrations_player" */
export type Registrations_Player_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Registrations_Player_Max_Order_By>;
	min?: Maybe<Registrations_Player_Min_Order_By>;
};

/** input type for inserting array relation for remote table "registrations_player" */
export type Registrations_Player_Arr_Rel_Insert_Input = {
	data: Array<Registrations_Player_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Registrations_Player_On_Conflict>;
};

/** Boolean expression to filter rows from the table "registrations_player". All fields are combined with a logical 'AND'. */
export type Registrations_Player_Bool_Exp = {
	_and?: Maybe<Array<Registrations_Player_Bool_Exp>>;
	_not?: Maybe<Registrations_Player_Bool_Exp>;
	_or?: Maybe<Array<Registrations_Player_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	player?: Maybe<Uuid_Comparison_Exp>;
	playerByPlayer?: Maybe<Players_Bool_Exp>;
	registration?: Maybe<Uuid_Comparison_Exp>;
	registrationByRegistration?: Maybe<Registrations_Bool_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "registrations_player" */
export enum Registrations_Player_Constraint {
	/** unique or primary key constraint */
	RegistrationsPlayerPkey = 'registrations_player_pkey',
}

/** input type for inserting data into table "registrations_player" */
export type Registrations_Player_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	player?: Maybe<Scalars['uuid']>;
	playerByPlayer?: Maybe<Players_Obj_Rel_Insert_Input>;
	registration?: Maybe<Scalars['uuid']>;
	registrationByRegistration?: Maybe<Registrations_Obj_Rel_Insert_Input>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Registrations_Player_Max_Fields = {
	__typename?: 'registrations_player_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	player?: Maybe<Scalars['uuid']>;
	registration?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "registrations_player" */
export type Registrations_Player_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	player?: Maybe<Order_By>;
	registration?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Registrations_Player_Min_Fields = {
	__typename?: 'registrations_player_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	player?: Maybe<Scalars['uuid']>;
	registration?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "registrations_player" */
export type Registrations_Player_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	player?: Maybe<Order_By>;
	registration?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "registrations_player" */
export type Registrations_Player_Mutation_Response = {
	__typename?: 'registrations_player_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Registrations_Player>;
};

/** on conflict condition type for table "registrations_player" */
export type Registrations_Player_On_Conflict = {
	constraint: Registrations_Player_Constraint;
	update_columns?: Array<Registrations_Player_Update_Column>;
	where?: Maybe<Registrations_Player_Bool_Exp>;
};

/** Ordering options when selecting data from "registrations_player". */
export type Registrations_Player_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	player?: Maybe<Order_By>;
	playerByPlayer?: Maybe<Players_Order_By>;
	registration?: Maybe<Order_By>;
	registrationByRegistration?: Maybe<Registrations_Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: registrations_player */
export type Registrations_Player_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "registrations_player" */
export enum Registrations_Player_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Player = 'player',
	/** column name */
	Registration = 'registration',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "registrations_player" */
export type Registrations_Player_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	player?: Maybe<Scalars['uuid']>;
	registration?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "registrations_player" */
export enum Registrations_Player_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Player = 'player',
	/** column name */
	Registration = 'registration',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** select columns of table "registrations" */
export enum Registrations_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	DayOfWeek = 'day_of_week',
	/** column name */
	DisplayName = 'display_name',
	/** column name */
	Id = 'id',
	/** column name */
	KickOffDate = 'kick_off_date',
	/** column name */
	Location = 'location',
	/** column name */
	NumberOfPlaces = 'number_of_places',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	Status = 'status',
	/** column name */
	TeamSize = 'team_size',
	/** column name */
	Type = 'type',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "registrations" */
export type Registrations_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_week?: Maybe<Scalars['String']>;
	display_name?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	number_of_places?: Maybe<Scalars['Int']>;
	player_type?: Maybe<Scalars['String']>;
	status?: Maybe<Scalars['String']>;
	team_size?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Registrations_Stddev_Fields = {
	__typename?: 'registrations_stddev_fields';
	number_of_places?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "registrations" */
export type Registrations_Stddev_Order_By = {
	number_of_places?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Registrations_Stddev_Pop_Fields = {
	__typename?: 'registrations_stddev_pop_fields';
	number_of_places?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "registrations" */
export type Registrations_Stddev_Pop_Order_By = {
	number_of_places?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Registrations_Stddev_Samp_Fields = {
	__typename?: 'registrations_stddev_samp_fields';
	number_of_places?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "registrations" */
export type Registrations_Stddev_Samp_Order_By = {
	number_of_places?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Registrations_Sum_Fields = {
	__typename?: 'registrations_sum_fields';
	number_of_places?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "registrations" */
export type Registrations_Sum_Order_By = {
	number_of_places?: Maybe<Order_By>;
};

/** columns and relationships of "registrations_teams" */
export type Registrations_Teams = {
	__typename?: 'registrations_teams';
	created_at: Scalars['timestamptz'];
	id: Scalars['uuid'];
	registration: Scalars['uuid'];
	/** An object relationship */
	registrationByRegistration: Registrations;
	team: Scalars['uuid'];
	/** An object relationship */
	teamByTeam: Teams;
	updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "registrations_teams" */
export type Registrations_Teams_Aggregate = {
	__typename?: 'registrations_teams_aggregate';
	aggregate?: Maybe<Registrations_Teams_Aggregate_Fields>;
	nodes: Array<Registrations_Teams>;
};

/** aggregate fields of "registrations_teams" */
export type Registrations_Teams_Aggregate_Fields = {
	__typename?: 'registrations_teams_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Registrations_Teams_Max_Fields>;
	min?: Maybe<Registrations_Teams_Min_Fields>;
};

/** aggregate fields of "registrations_teams" */
export type Registrations_Teams_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Registrations_Teams_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "registrations_teams" */
export type Registrations_Teams_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Registrations_Teams_Max_Order_By>;
	min?: Maybe<Registrations_Teams_Min_Order_By>;
};

/** input type for inserting array relation for remote table "registrations_teams" */
export type Registrations_Teams_Arr_Rel_Insert_Input = {
	data: Array<Registrations_Teams_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Registrations_Teams_On_Conflict>;
};

/** Boolean expression to filter rows from the table "registrations_teams". All fields are combined with a logical 'AND'. */
export type Registrations_Teams_Bool_Exp = {
	_and?: Maybe<Array<Registrations_Teams_Bool_Exp>>;
	_not?: Maybe<Registrations_Teams_Bool_Exp>;
	_or?: Maybe<Array<Registrations_Teams_Bool_Exp>>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	registration?: Maybe<Uuid_Comparison_Exp>;
	registrationByRegistration?: Maybe<Registrations_Bool_Exp>;
	team?: Maybe<Uuid_Comparison_Exp>;
	teamByTeam?: Maybe<Teams_Bool_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "registrations_teams" */
export enum Registrations_Teams_Constraint {
	/** unique or primary key constraint */
	RegistrationsTeamsPkey = 'registrations_teams_pkey',
}

/** input type for inserting data into table "registrations_teams" */
export type Registrations_Teams_Insert_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	registration?: Maybe<Scalars['uuid']>;
	registrationByRegistration?: Maybe<Registrations_Obj_Rel_Insert_Input>;
	team?: Maybe<Scalars['uuid']>;
	teamByTeam?: Maybe<Teams_Obj_Rel_Insert_Input>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Registrations_Teams_Max_Fields = {
	__typename?: 'registrations_teams_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	registration?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "registrations_teams" */
export type Registrations_Teams_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	registration?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Registrations_Teams_Min_Fields = {
	__typename?: 'registrations_teams_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	registration?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "registrations_teams" */
export type Registrations_Teams_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	registration?: Maybe<Order_By>;
	team?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "registrations_teams" */
export type Registrations_Teams_Mutation_Response = {
	__typename?: 'registrations_teams_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Registrations_Teams>;
};

/** on conflict condition type for table "registrations_teams" */
export type Registrations_Teams_On_Conflict = {
	constraint: Registrations_Teams_Constraint;
	update_columns?: Array<Registrations_Teams_Update_Column>;
	where?: Maybe<Registrations_Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "registrations_teams". */
export type Registrations_Teams_Order_By = {
	created_at?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	registration?: Maybe<Order_By>;
	registrationByRegistration?: Maybe<Registrations_Order_By>;
	team?: Maybe<Order_By>;
	teamByTeam?: Maybe<Teams_Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: registrations_teams */
export type Registrations_Teams_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "registrations_teams" */
export enum Registrations_Teams_Select_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Registration = 'registration',
	/** column name */
	Team = 'team',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "registrations_teams" */
export type Registrations_Teams_Set_Input = {
	created_at?: Maybe<Scalars['timestamptz']>;
	id?: Maybe<Scalars['uuid']>;
	registration?: Maybe<Scalars['uuid']>;
	team?: Maybe<Scalars['uuid']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "registrations_teams" */
export enum Registrations_Teams_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Id = 'id',
	/** column name */
	Registration = 'registration',
	/** column name */
	Team = 'team',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** update columns of table "registrations" */
export enum Registrations_Update_Column {
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	DayOfWeek = 'day_of_week',
	/** column name */
	DisplayName = 'display_name',
	/** column name */
	Id = 'id',
	/** column name */
	KickOffDate = 'kick_off_date',
	/** column name */
	Location = 'location',
	/** column name */
	NumberOfPlaces = 'number_of_places',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	Status = 'status',
	/** column name */
	TeamSize = 'team_size',
	/** column name */
	Type = 'type',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Registrations_Var_Pop_Fields = {
	__typename?: 'registrations_var_pop_fields';
	number_of_places?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "registrations" */
export type Registrations_Var_Pop_Order_By = {
	number_of_places?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Registrations_Var_Samp_Fields = {
	__typename?: 'registrations_var_samp_fields';
	number_of_places?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "registrations" */
export type Registrations_Var_Samp_Order_By = {
	number_of_places?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Registrations_Variance_Fields = {
	__typename?: 'registrations_variance_fields';
	number_of_places?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "registrations" */
export type Registrations_Variance_Order_By = {
	number_of_places?: Maybe<Order_By>;
};

/**
 * Join Table linking leagues with the leagues or tournaments they feed into
 *
 *
 * columns and relationships of "seedings"
 *
 */
export type Seedings = {
	__typename?: 'seedings';
	child_league?: Maybe<Scalars['uuid']>;
	child_tournament?: Maybe<Scalars['uuid']>;
	id: Scalars['uuid'];
	/** An object relationship */
	league?: Maybe<Leagues>;
	/** An object relationship */
	leagueByParent: Leagues;
	parent: Scalars['uuid'];
	placeholder: Scalars['uuid'];
	position: Scalars['Int'];
	/** An object relationship */
	tournament?: Maybe<Tournaments>;
};

/** aggregated selection of "seedings" */
export type Seedings_Aggregate = {
	__typename?: 'seedings_aggregate';
	aggregate?: Maybe<Seedings_Aggregate_Fields>;
	nodes: Array<Seedings>;
};

/** aggregate fields of "seedings" */
export type Seedings_Aggregate_Fields = {
	__typename?: 'seedings_aggregate_fields';
	avg?: Maybe<Seedings_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Seedings_Max_Fields>;
	min?: Maybe<Seedings_Min_Fields>;
	stddev?: Maybe<Seedings_Stddev_Fields>;
	stddev_pop?: Maybe<Seedings_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Seedings_Stddev_Samp_Fields>;
	sum?: Maybe<Seedings_Sum_Fields>;
	var_pop?: Maybe<Seedings_Var_Pop_Fields>;
	var_samp?: Maybe<Seedings_Var_Samp_Fields>;
	variance?: Maybe<Seedings_Variance_Fields>;
};

/** aggregate fields of "seedings" */
export type Seedings_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Seedings_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "seedings" */
export type Seedings_Aggregate_Order_By = {
	avg?: Maybe<Seedings_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<Seedings_Max_Order_By>;
	min?: Maybe<Seedings_Min_Order_By>;
	stddev?: Maybe<Seedings_Stddev_Order_By>;
	stddev_pop?: Maybe<Seedings_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<Seedings_Stddev_Samp_Order_By>;
	sum?: Maybe<Seedings_Sum_Order_By>;
	var_pop?: Maybe<Seedings_Var_Pop_Order_By>;
	var_samp?: Maybe<Seedings_Var_Samp_Order_By>;
	variance?: Maybe<Seedings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "seedings" */
export type Seedings_Arr_Rel_Insert_Input = {
	data: Array<Seedings_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Seedings_On_Conflict>;
};

/** aggregate avg on columns */
export type Seedings_Avg_Fields = {
	__typename?: 'seedings_avg_fields';
	position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "seedings" */
export type Seedings_Avg_Order_By = {
	position?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "seedings". All fields are combined with a logical 'AND'. */
export type Seedings_Bool_Exp = {
	_and?: Maybe<Array<Seedings_Bool_Exp>>;
	_not?: Maybe<Seedings_Bool_Exp>;
	_or?: Maybe<Array<Seedings_Bool_Exp>>;
	child_league?: Maybe<Uuid_Comparison_Exp>;
	child_tournament?: Maybe<Uuid_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	league?: Maybe<Leagues_Bool_Exp>;
	leagueByParent?: Maybe<Leagues_Bool_Exp>;
	parent?: Maybe<Uuid_Comparison_Exp>;
	placeholder?: Maybe<Uuid_Comparison_Exp>;
	position?: Maybe<Int_Comparison_Exp>;
	tournament?: Maybe<Tournaments_Bool_Exp>;
};

/** unique or primary key constraints on table "seedings" */
export enum Seedings_Constraint {
	/** unique or primary key constraint */
	SeedingsPkey = 'seedings_pkey',
}

/** input type for incrementing numeric columns in table "seedings" */
export type Seedings_Inc_Input = {
	position?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "seedings" */
export type Seedings_Insert_Input = {
	child_league?: Maybe<Scalars['uuid']>;
	child_tournament?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	league?: Maybe<Leagues_Obj_Rel_Insert_Input>;
	leagueByParent?: Maybe<Leagues_Obj_Rel_Insert_Input>;
	parent?: Maybe<Scalars['uuid']>;
	placeholder?: Maybe<Scalars['uuid']>;
	position?: Maybe<Scalars['Int']>;
	tournament?: Maybe<Tournaments_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Seedings_Max_Fields = {
	__typename?: 'seedings_max_fields';
	child_league?: Maybe<Scalars['uuid']>;
	child_tournament?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	parent?: Maybe<Scalars['uuid']>;
	placeholder?: Maybe<Scalars['uuid']>;
	position?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "seedings" */
export type Seedings_Max_Order_By = {
	child_league?: Maybe<Order_By>;
	child_tournament?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	parent?: Maybe<Order_By>;
	placeholder?: Maybe<Order_By>;
	position?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Seedings_Min_Fields = {
	__typename?: 'seedings_min_fields';
	child_league?: Maybe<Scalars['uuid']>;
	child_tournament?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	parent?: Maybe<Scalars['uuid']>;
	placeholder?: Maybe<Scalars['uuid']>;
	position?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "seedings" */
export type Seedings_Min_Order_By = {
	child_league?: Maybe<Order_By>;
	child_tournament?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	parent?: Maybe<Order_By>;
	placeholder?: Maybe<Order_By>;
	position?: Maybe<Order_By>;
};

/** response of any mutation on the table "seedings" */
export type Seedings_Mutation_Response = {
	__typename?: 'seedings_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Seedings>;
};

/** on conflict condition type for table "seedings" */
export type Seedings_On_Conflict = {
	constraint: Seedings_Constraint;
	update_columns?: Array<Seedings_Update_Column>;
	where?: Maybe<Seedings_Bool_Exp>;
};

/** Ordering options when selecting data from "seedings". */
export type Seedings_Order_By = {
	child_league?: Maybe<Order_By>;
	child_tournament?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	league?: Maybe<Leagues_Order_By>;
	leagueByParent?: Maybe<Leagues_Order_By>;
	parent?: Maybe<Order_By>;
	placeholder?: Maybe<Order_By>;
	position?: Maybe<Order_By>;
	tournament?: Maybe<Tournaments_Order_By>;
};

/** primary key columns input for table: seedings */
export type Seedings_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "seedings" */
export enum Seedings_Select_Column {
	/** column name */
	ChildLeague = 'child_league',
	/** column name */
	ChildTournament = 'child_tournament',
	/** column name */
	Id = 'id',
	/** column name */
	Parent = 'parent',
	/** column name */
	Placeholder = 'placeholder',
	/** column name */
	Position = 'position',
}

/** input type for updating data in table "seedings" */
export type Seedings_Set_Input = {
	child_league?: Maybe<Scalars['uuid']>;
	child_tournament?: Maybe<Scalars['uuid']>;
	id?: Maybe<Scalars['uuid']>;
	parent?: Maybe<Scalars['uuid']>;
	placeholder?: Maybe<Scalars['uuid']>;
	position?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Seedings_Stddev_Fields = {
	__typename?: 'seedings_stddev_fields';
	position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "seedings" */
export type Seedings_Stddev_Order_By = {
	position?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Seedings_Stddev_Pop_Fields = {
	__typename?: 'seedings_stddev_pop_fields';
	position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "seedings" */
export type Seedings_Stddev_Pop_Order_By = {
	position?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Seedings_Stddev_Samp_Fields = {
	__typename?: 'seedings_stddev_samp_fields';
	position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "seedings" */
export type Seedings_Stddev_Samp_Order_By = {
	position?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Seedings_Sum_Fields = {
	__typename?: 'seedings_sum_fields';
	position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "seedings" */
export type Seedings_Sum_Order_By = {
	position?: Maybe<Order_By>;
};

/** update columns of table "seedings" */
export enum Seedings_Update_Column {
	/** column name */
	ChildLeague = 'child_league',
	/** column name */
	ChildTournament = 'child_tournament',
	/** column name */
	Id = 'id',
	/** column name */
	Parent = 'parent',
	/** column name */
	Placeholder = 'placeholder',
	/** column name */
	Position = 'position',
}

/** aggregate var_pop on columns */
export type Seedings_Var_Pop_Fields = {
	__typename?: 'seedings_var_pop_fields';
	position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "seedings" */
export type Seedings_Var_Pop_Order_By = {
	position?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Seedings_Var_Samp_Fields = {
	__typename?: 'seedings_var_samp_fields';
	position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "seedings" */
export type Seedings_Var_Samp_Order_By = {
	position?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Seedings_Variance_Fields = {
	__typename?: 'seedings_variance_fields';
	position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "seedings" */
export type Seedings_Variance_Order_By = {
	position?: Maybe<Order_By>;
};

export type Subscription_Root = {
	__typename?: 'subscription_root';
	/** fetch data from the table: "admin_users" */
	admin_users: Array<Admin_Users>;
	/** fetch aggregated fields from the table: "admin_users" */
	admin_users_aggregate: Admin_Users_Aggregate;
	/** fetch data from the table: "admin_users" using primary key columns */
	admin_users_by_pk?: Maybe<Admin_Users>;
	/** An array relationship */
	cities: Array<Cities>;
	/** An aggregate relationship */
	cities_aggregate: Cities_Aggregate;
	/** fetch data from the table: "cities" using primary key columns */
	cities_by_pk?: Maybe<Cities>;
	/** An array relationship */
	coordinators: Array<Coordinators>;
	/** An aggregate relationship */
	coordinators_aggregate: Coordinators_Aggregate;
	/** fetch data from the table: "coordinators" using primary key columns */
	coordinators_by_pk?: Maybe<Coordinators>;
	/** fetch data from the table: "countries" */
	countries: Array<Countries>;
	/** fetch aggregated fields from the table: "countries" */
	countries_aggregate: Countries_Aggregate;
	/** fetch data from the table: "countries" using primary key columns */
	countries_by_pk?: Maybe<Countries>;
	/** An array relationship */
	finals: Array<Finals>;
	/** An aggregate relationship */
	finals_aggregate: Finals_Aggregate;
	/** fetch data from the table: "finals" using primary key columns */
	finals_by_pk?: Maybe<Finals>;
	/** An array relationship */
	finals_groups: Array<Finals_Groups>;
	/** An aggregate relationship */
	finals_groups_aggregate: Finals_Groups_Aggregate;
	/** fetch data from the table: "finals_groups" using primary key columns */
	finals_groups_by_pk?: Maybe<Finals_Groups>;
	/** An array relationship */
	finals_knockouts: Array<Finals_Knockouts>;
	/** An aggregate relationship */
	finals_knockouts_aggregate: Finals_Knockouts_Aggregate;
	/** fetch data from the table: "finals_knockouts" using primary key columns */
	finals_knockouts_by_pk?: Maybe<Finals_Knockouts>;
	/** An array relationship */
	footy_users: Array<Footy_Users>;
	/** An aggregate relationship */
	footy_users_aggregate: Footy_Users_Aggregate;
	/** fetch data from the table: "footy_users" using primary key columns */
	footy_users_by_pk?: Maybe<Footy_Users>;
	/** An array relationship */
	historic_team_names: Array<Historic_Team_Names>;
	/** An aggregate relationship */
	historic_team_names_aggregate: Historic_Team_Names_Aggregate;
	/** fetch data from the table: "historic_team_names" using primary key columns */
	historic_team_names_by_pk?: Maybe<Historic_Team_Names>;
	/** An array relationship */
	join_finals_leagues: Array<Join_Finals_Leagues>;
	/** An aggregate relationship */
	join_finals_leagues_aggregate: Join_Finals_Leagues_Aggregate;
	/** fetch data from the table: "join_finals_leagues" using primary key columns */
	join_finals_leagues_by_pk?: Maybe<Join_Finals_Leagues>;
	/** An array relationship */
	join_footy_users_teams: Array<Join_Footy_Users_Teams>;
	/** An aggregate relationship */
	join_footy_users_teams_aggregate: Join_Footy_Users_Teams_Aggregate;
	/** fetch data from the table: "join_footy_users_teams" using primary key columns */
	join_footy_users_teams_by_pk?: Maybe<Join_Footy_Users_Teams>;
	/** fetch data from the table: "join_league_teams" */
	join_league_teams: Array<Join_League_Teams>;
	/** fetch aggregated fields from the table: "join_league_teams" */
	join_league_teams_aggregate: Join_League_Teams_Aggregate;
	/** fetch data from the table: "join_league_teams" using primary key columns */
	join_league_teams_by_pk?: Maybe<Join_League_Teams>;
	/** An array relationship */
	join_leagues_mini_leagues: Array<Join_Leagues_Mini_Leagues>;
	/** An aggregate relationship */
	join_leagues_mini_leagues_aggregate: Join_Leagues_Mini_Leagues_Aggregate;
	/** fetch data from the table: "join_leagues_mini_leagues" using primary key columns */
	join_leagues_mini_leagues_by_pk?: Maybe<Join_Leagues_Mini_Leagues>;
	/** An array relationship */
	join_players_teams: Array<Join_Players_Teams>;
	/** An aggregate relationship */
	join_players_teams_aggregate: Join_Players_Teams_Aggregate;
	/** fetch data from the table: "join_players_teams" using primary key columns */
	join_players_teams_by_pk?: Maybe<Join_Players_Teams>;
	/** An array relationship */
	join_team_finals: Array<Join_Team_Finals>;
	/** An aggregate relationship */
	join_team_finals_aggregate: Join_Team_Finals_Aggregate;
	/** fetch data from the table: "join_team_finals" using primary key columns */
	join_team_finals_by_pk?: Maybe<Join_Team_Finals>;
	/** An array relationship */
	leagues: Array<Leagues>;
	/** An aggregate relationship */
	leagues_aggregate: Leagues_Aggregate;
	/** fetch data from the table: "leagues" using primary key columns */
	leagues_by_pk?: Maybe<Leagues>;
	/** An array relationship */
	locations: Array<Locations>;
	/** An aggregate relationship */
	locations_aggregate: Locations_Aggregate;
	/** fetch data from the table: "locations" using primary key columns */
	locations_by_pk?: Maybe<Locations>;
	/** An array relationship */
	match_comments: Array<Match_Comments>;
	/** An aggregate relationship */
	match_comments_aggregate: Match_Comments_Aggregate;
	/** fetch data from the table: "match_comments" using primary key columns */
	match_comments_by_pk?: Maybe<Match_Comments>;
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	/** fetch data from the table: "matches" using primary key columns */
	matches_by_pk?: Maybe<Matches>;
	/** An array relationship */
	pitches: Array<Pitches>;
	/** An aggregate relationship */
	pitches_aggregate: Pitches_Aggregate;
	/** fetch data from the table: "pitches" using primary key columns */
	pitches_by_pk?: Maybe<Pitches>;
	/** An array relationship */
	placeholder_teams: Array<Placeholder_Teams>;
	/** An aggregate relationship */
	placeholder_teams_aggregate: Placeholder_Teams_Aggregate;
	/** fetch data from the table: "placeholder_teams" using primary key columns */
	placeholder_teams_by_pk?: Maybe<Placeholder_Teams>;
	/** An array relationship */
	players: Array<Players>;
	/** An aggregate relationship */
	players_aggregate: Players_Aggregate;
	/** fetch data from the table: "players" using primary key columns */
	players_by_pk?: Maybe<Players>;
	/** An array relationship */
	referees: Array<Referees>;
	/** An aggregate relationship */
	referees_aggregate: Referees_Aggregate;
	/** fetch data from the table: "referees" using primary key columns */
	referees_by_pk?: Maybe<Referees>;
	/** An array relationship */
	registrations: Array<Registrations>;
	/** An aggregate relationship */
	registrations_aggregate: Registrations_Aggregate;
	/** fetch data from the table: "registrations" using primary key columns */
	registrations_by_pk?: Maybe<Registrations>;
	/** fetch data from the table: "registrations_player" */
	registrations_player: Array<Registrations_Player>;
	/** fetch aggregated fields from the table: "registrations_player" */
	registrations_player_aggregate: Registrations_Player_Aggregate;
	/** fetch data from the table: "registrations_player" using primary key columns */
	registrations_player_by_pk?: Maybe<Registrations_Player>;
	/** An array relationship */
	registrations_teams: Array<Registrations_Teams>;
	/** An aggregate relationship */
	registrations_teams_aggregate: Registrations_Teams_Aggregate;
	/** fetch data from the table: "registrations_teams" using primary key columns */
	registrations_teams_by_pk?: Maybe<Registrations_Teams>;
	/** An array relationship */
	seedings: Array<Seedings>;
	/** An aggregate relationship */
	seedings_aggregate: Seedings_Aggregate;
	/** fetch data from the table: "seedings" using primary key columns */
	seedings_by_pk?: Maybe<Seedings>;
	/** An array relationship */
	teams: Array<Teams>;
	/** An aggregate relationship */
	teams_aggregate: Teams_Aggregate;
	/** fetch data from the table: "teams" using primary key columns */
	teams_by_pk?: Maybe<Teams>;
	/** An array relationship */
	tournaments: Array<Tournaments>;
	/** An aggregate relationship */
	tournaments_aggregate: Tournaments_Aggregate;
	/** fetch data from the table: "tournaments" using primary key columns */
	tournaments_by_pk?: Maybe<Tournaments>;
};

export type Subscription_RootAdmin_UsersArgs = {
	distinct_on?: Maybe<Array<Admin_Users_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Admin_Users_Order_By>>;
	where?: Maybe<Admin_Users_Bool_Exp>;
};

export type Subscription_RootAdmin_Users_AggregateArgs = {
	distinct_on?: Maybe<Array<Admin_Users_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Admin_Users_Order_By>>;
	where?: Maybe<Admin_Users_Bool_Exp>;
};

export type Subscription_RootAdmin_Users_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootCitiesArgs = {
	distinct_on?: Maybe<Array<Cities_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Cities_Order_By>>;
	where?: Maybe<Cities_Bool_Exp>;
};

export type Subscription_RootCities_AggregateArgs = {
	distinct_on?: Maybe<Array<Cities_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Cities_Order_By>>;
	where?: Maybe<Cities_Bool_Exp>;
};

export type Subscription_RootCities_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootCoordinatorsArgs = {
	distinct_on?: Maybe<Array<Coordinators_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Coordinators_Order_By>>;
	where?: Maybe<Coordinators_Bool_Exp>;
};

export type Subscription_RootCoordinators_AggregateArgs = {
	distinct_on?: Maybe<Array<Coordinators_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Coordinators_Order_By>>;
	where?: Maybe<Coordinators_Bool_Exp>;
};

export type Subscription_RootCoordinators_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootCountriesArgs = {
	distinct_on?: Maybe<Array<Countries_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Countries_Order_By>>;
	where?: Maybe<Countries_Bool_Exp>;
};

export type Subscription_RootCountries_AggregateArgs = {
	distinct_on?: Maybe<Array<Countries_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Countries_Order_By>>;
	where?: Maybe<Countries_Bool_Exp>;
};

export type Subscription_RootCountries_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootFinalsArgs = {
	distinct_on?: Maybe<Array<Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Order_By>>;
	where?: Maybe<Finals_Bool_Exp>;
};

export type Subscription_RootFinals_AggregateArgs = {
	distinct_on?: Maybe<Array<Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Order_By>>;
	where?: Maybe<Finals_Bool_Exp>;
};

export type Subscription_RootFinals_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootFinals_GroupsArgs = {
	distinct_on?: Maybe<Array<Finals_Groups_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Groups_Order_By>>;
	where?: Maybe<Finals_Groups_Bool_Exp>;
};

export type Subscription_RootFinals_Groups_AggregateArgs = {
	distinct_on?: Maybe<Array<Finals_Groups_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Groups_Order_By>>;
	where?: Maybe<Finals_Groups_Bool_Exp>;
};

export type Subscription_RootFinals_Groups_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootFinals_KnockoutsArgs = {
	distinct_on?: Maybe<Array<Finals_Knockouts_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Knockouts_Order_By>>;
	where?: Maybe<Finals_Knockouts_Bool_Exp>;
};

export type Subscription_RootFinals_Knockouts_AggregateArgs = {
	distinct_on?: Maybe<Array<Finals_Knockouts_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Finals_Knockouts_Order_By>>;
	where?: Maybe<Finals_Knockouts_Bool_Exp>;
};

export type Subscription_RootFinals_Knockouts_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootFooty_UsersArgs = {
	distinct_on?: Maybe<Array<Footy_Users_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Footy_Users_Order_By>>;
	where?: Maybe<Footy_Users_Bool_Exp>;
};

export type Subscription_RootFooty_Users_AggregateArgs = {
	distinct_on?: Maybe<Array<Footy_Users_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Footy_Users_Order_By>>;
	where?: Maybe<Footy_Users_Bool_Exp>;
};

export type Subscription_RootFooty_Users_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootHistoric_Team_NamesArgs = {
	distinct_on?: Maybe<Array<Historic_Team_Names_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Historic_Team_Names_Order_By>>;
	where?: Maybe<Historic_Team_Names_Bool_Exp>;
};

export type Subscription_RootHistoric_Team_Names_AggregateArgs = {
	distinct_on?: Maybe<Array<Historic_Team_Names_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Historic_Team_Names_Order_By>>;
	where?: Maybe<Historic_Team_Names_Bool_Exp>;
};

export type Subscription_RootHistoric_Team_Names_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootJoin_Finals_LeaguesArgs = {
	distinct_on?: Maybe<Array<Join_Finals_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Finals_Leagues_Order_By>>;
	where?: Maybe<Join_Finals_Leagues_Bool_Exp>;
};

export type Subscription_RootJoin_Finals_Leagues_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Finals_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Finals_Leagues_Order_By>>;
	where?: Maybe<Join_Finals_Leagues_Bool_Exp>;
};

export type Subscription_RootJoin_Finals_Leagues_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootJoin_Footy_Users_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_Footy_Users_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Footy_Users_Teams_Order_By>>;
	where?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
};

export type Subscription_RootJoin_Footy_Users_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Footy_Users_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Footy_Users_Teams_Order_By>>;
	where?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
};

export type Subscription_RootJoin_Footy_Users_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootJoin_League_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_League_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_League_Teams_Order_By>>;
	where?: Maybe<Join_League_Teams_Bool_Exp>;
};

export type Subscription_RootJoin_League_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_League_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_League_Teams_Order_By>>;
	where?: Maybe<Join_League_Teams_Bool_Exp>;
};

export type Subscription_RootJoin_League_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootJoin_Leagues_Mini_LeaguesArgs = {
	distinct_on?: Maybe<Array<Join_Leagues_Mini_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Leagues_Mini_Leagues_Order_By>>;
	where?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
};

export type Subscription_RootJoin_Leagues_Mini_Leagues_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Leagues_Mini_Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Leagues_Mini_Leagues_Order_By>>;
	where?: Maybe<Join_Leagues_Mini_Leagues_Bool_Exp>;
};

export type Subscription_RootJoin_Leagues_Mini_Leagues_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootJoin_Players_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_Players_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Players_Teams_Order_By>>;
	where?: Maybe<Join_Players_Teams_Bool_Exp>;
};

export type Subscription_RootJoin_Players_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Players_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Players_Teams_Order_By>>;
	where?: Maybe<Join_Players_Teams_Bool_Exp>;
};

export type Subscription_RootJoin_Players_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootJoin_Team_FinalsArgs = {
	distinct_on?: Maybe<Array<Join_Team_Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Team_Finals_Order_By>>;
	where?: Maybe<Join_Team_Finals_Bool_Exp>;
};

export type Subscription_RootJoin_Team_Finals_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Team_Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Team_Finals_Order_By>>;
	where?: Maybe<Join_Team_Finals_Bool_Exp>;
};

export type Subscription_RootJoin_Team_Finals_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootLeaguesArgs = {
	distinct_on?: Maybe<Array<Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Leagues_Order_By>>;
	where?: Maybe<Leagues_Bool_Exp>;
};

export type Subscription_RootLeagues_AggregateArgs = {
	distinct_on?: Maybe<Array<Leagues_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Leagues_Order_By>>;
	where?: Maybe<Leagues_Bool_Exp>;
};

export type Subscription_RootLeagues_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootLocationsArgs = {
	distinct_on?: Maybe<Array<Locations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Locations_Order_By>>;
	where?: Maybe<Locations_Bool_Exp>;
};

export type Subscription_RootLocations_AggregateArgs = {
	distinct_on?: Maybe<Array<Locations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Locations_Order_By>>;
	where?: Maybe<Locations_Bool_Exp>;
};

export type Subscription_RootLocations_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootMatch_CommentsArgs = {
	distinct_on?: Maybe<Array<Match_Comments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Match_Comments_Order_By>>;
	where?: Maybe<Match_Comments_Bool_Exp>;
};

export type Subscription_RootMatch_Comments_AggregateArgs = {
	distinct_on?: Maybe<Array<Match_Comments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Match_Comments_Order_By>>;
	where?: Maybe<Match_Comments_Bool_Exp>;
};

export type Subscription_RootMatch_Comments_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

export type Subscription_RootMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

export type Subscription_RootMatches_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootPitchesArgs = {
	distinct_on?: Maybe<Array<Pitches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Pitches_Order_By>>;
	where?: Maybe<Pitches_Bool_Exp>;
};

export type Subscription_RootPitches_AggregateArgs = {
	distinct_on?: Maybe<Array<Pitches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Pitches_Order_By>>;
	where?: Maybe<Pitches_Bool_Exp>;
};

export type Subscription_RootPitches_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootPlaceholder_TeamsArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

export type Subscription_RootPlaceholder_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Placeholder_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Placeholder_Teams_Order_By>>;
	where?: Maybe<Placeholder_Teams_Bool_Exp>;
};

export type Subscription_RootPlaceholder_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootPlayersArgs = {
	distinct_on?: Maybe<Array<Players_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Players_Order_By>>;
	where?: Maybe<Players_Bool_Exp>;
};

export type Subscription_RootPlayers_AggregateArgs = {
	distinct_on?: Maybe<Array<Players_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Players_Order_By>>;
	where?: Maybe<Players_Bool_Exp>;
};

export type Subscription_RootPlayers_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootRefereesArgs = {
	distinct_on?: Maybe<Array<Referees_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Referees_Order_By>>;
	where?: Maybe<Referees_Bool_Exp>;
};

export type Subscription_RootReferees_AggregateArgs = {
	distinct_on?: Maybe<Array<Referees_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Referees_Order_By>>;
	where?: Maybe<Referees_Bool_Exp>;
};

export type Subscription_RootReferees_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootRegistrationsArgs = {
	distinct_on?: Maybe<Array<Registrations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Order_By>>;
	where?: Maybe<Registrations_Bool_Exp>;
};

export type Subscription_RootRegistrations_AggregateArgs = {
	distinct_on?: Maybe<Array<Registrations_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Order_By>>;
	where?: Maybe<Registrations_Bool_Exp>;
};

export type Subscription_RootRegistrations_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootRegistrations_PlayerArgs = {
	distinct_on?: Maybe<Array<Registrations_Player_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Player_Order_By>>;
	where?: Maybe<Registrations_Player_Bool_Exp>;
};

export type Subscription_RootRegistrations_Player_AggregateArgs = {
	distinct_on?: Maybe<Array<Registrations_Player_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Player_Order_By>>;
	where?: Maybe<Registrations_Player_Bool_Exp>;
};

export type Subscription_RootRegistrations_Player_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootRegistrations_TeamsArgs = {
	distinct_on?: Maybe<Array<Registrations_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Teams_Order_By>>;
	where?: Maybe<Registrations_Teams_Bool_Exp>;
};

export type Subscription_RootRegistrations_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Registrations_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Teams_Order_By>>;
	where?: Maybe<Registrations_Teams_Bool_Exp>;
};

export type Subscription_RootRegistrations_Teams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootSeedingsArgs = {
	distinct_on?: Maybe<Array<Seedings_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Seedings_Order_By>>;
	where?: Maybe<Seedings_Bool_Exp>;
};

export type Subscription_RootSeedings_AggregateArgs = {
	distinct_on?: Maybe<Array<Seedings_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Seedings_Order_By>>;
	where?: Maybe<Seedings_Bool_Exp>;
};

export type Subscription_RootSeedings_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootTeamsArgs = {
	distinct_on?: Maybe<Array<Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Teams_Order_By>>;
	where?: Maybe<Teams_Bool_Exp>;
};

export type Subscription_RootTeams_AggregateArgs = {
	distinct_on?: Maybe<Array<Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Teams_Order_By>>;
	where?: Maybe<Teams_Bool_Exp>;
};

export type Subscription_RootTeams_By_PkArgs = {
	id: Scalars['uuid'];
};

export type Subscription_RootTournamentsArgs = {
	distinct_on?: Maybe<Array<Tournaments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Tournaments_Order_By>>;
	where?: Maybe<Tournaments_Bool_Exp>;
};

export type Subscription_RootTournaments_AggregateArgs = {
	distinct_on?: Maybe<Array<Tournaments_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Tournaments_Order_By>>;
	where?: Maybe<Tournaments_Bool_Exp>;
};

export type Subscription_RootTournaments_By_PkArgs = {
	id: Scalars['uuid'];
};

/** columns and relationships of "teams" */
export type Teams = {
	__typename?: 'teams';
	captain?: Maybe<Scalars['uuid']>;
	city?: Maybe<Scalars['uuid']>;
	/** An object relationship */
	cityByCity?: Maybe<Cities>;
	created_at: Scalars['timestamptz'];
	/** 1989, September 2010, etc */
	founded?: Maybe<Scalars['String']>;
	/** An array relationship */
	historic_team_names: Array<Historic_Team_Names>;
	/** An aggregate relationship */
	historic_team_names_aggregate: Historic_Team_Names_Aggregate;
	id: Scalars['uuid'];
	is_active: Scalars['Boolean'];
	is_blacklisted: Scalars['Boolean'];
	/** An array relationship */
	join_footy_users_teams: Array<Join_Footy_Users_Teams>;
	/** An aggregate relationship */
	join_footy_users_teams_aggregate: Join_Footy_Users_Teams_Aggregate;
	/** An array relationship */
	join_players_teams: Array<Join_Players_Teams>;
	/** An aggregate relationship */
	join_players_teams_aggregate: Join_Players_Teams_Aggregate;
	/** An array relationship */
	join_team_finals: Array<Join_Team_Finals>;
	/** An aggregate relationship */
	join_team_finals_aggregate: Join_Team_Finals_Aggregate;
	/** An array relationship */
	league_teams: Array<Join_League_Teams>;
	/** An aggregate relationship */
	league_teams_aggregate: Join_League_Teams_Aggregate;
	logo_url?: Maybe<Scalars['String']>;
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An array relationship */
	matchesByAwayTeam: Array<Matches>;
	/** An aggregate relationship */
	matchesByAwayTeam_aggregate: Matches_Aggregate;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	name: Scalars['String'];
	normalized_name?: Maybe<Scalars['String']>;
	/** If team is either a placeholder or BYE */
	placeholder?: Maybe<Scalars['Boolean']>;
	/** An object relationship */
	player?: Maybe<Players>;
	/** An object relationship */
	playerByViceCaptain?: Maybe<Players>;
	player_type?: Maybe<Scalars['String']>;
	preferred_kick_off_times?: Maybe<Scalars['String']>;
	/** An array relationship */
	registrations_teams: Array<Registrations_Teams>;
	/** An aggregate relationship */
	registrations_teams_aggregate: Registrations_Teams_Aggregate;
	team_size?: Maybe<Scalars['String']>;
	type: Scalars['String'];
	updated_at: Scalars['timestamptz'];
	vice_captain?: Maybe<Scalars['uuid']>;
	/** This is the key which ties the team to the entry in zendesk. It is generated by zendesk */
	zendesk_id?: Maybe<Scalars['String']>;
};

/** columns and relationships of "teams" */
export type TeamsHistoric_Team_NamesArgs = {
	distinct_on?: Maybe<Array<Historic_Team_Names_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Historic_Team_Names_Order_By>>;
	where?: Maybe<Historic_Team_Names_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsHistoric_Team_Names_AggregateArgs = {
	distinct_on?: Maybe<Array<Historic_Team_Names_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Historic_Team_Names_Order_By>>;
	where?: Maybe<Historic_Team_Names_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsJoin_Footy_Users_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_Footy_Users_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Footy_Users_Teams_Order_By>>;
	where?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsJoin_Footy_Users_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Footy_Users_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Footy_Users_Teams_Order_By>>;
	where?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsJoin_Players_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_Players_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Players_Teams_Order_By>>;
	where?: Maybe<Join_Players_Teams_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsJoin_Players_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Players_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Players_Teams_Order_By>>;
	where?: Maybe<Join_Players_Teams_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsJoin_Team_FinalsArgs = {
	distinct_on?: Maybe<Array<Join_Team_Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Team_Finals_Order_By>>;
	where?: Maybe<Join_Team_Finals_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsJoin_Team_Finals_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_Team_Finals_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_Team_Finals_Order_By>>;
	where?: Maybe<Join_Team_Finals_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsLeague_TeamsArgs = {
	distinct_on?: Maybe<Array<Join_League_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_League_Teams_Order_By>>;
	where?: Maybe<Join_League_Teams_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsLeague_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Join_League_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Join_League_Teams_Order_By>>;
	where?: Maybe<Join_League_Teams_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsMatchesByAwayTeamArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsMatchesByAwayTeam_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsRegistrations_TeamsArgs = {
	distinct_on?: Maybe<Array<Registrations_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Teams_Order_By>>;
	where?: Maybe<Registrations_Teams_Bool_Exp>;
};

/** columns and relationships of "teams" */
export type TeamsRegistrations_Teams_AggregateArgs = {
	distinct_on?: Maybe<Array<Registrations_Teams_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Registrations_Teams_Order_By>>;
	where?: Maybe<Registrations_Teams_Bool_Exp>;
};

/** aggregated selection of "teams" */
export type Teams_Aggregate = {
	__typename?: 'teams_aggregate';
	aggregate?: Maybe<Teams_Aggregate_Fields>;
	nodes: Array<Teams>;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_Fields = {
	__typename?: 'teams_aggregate_fields';
	count: Scalars['Int'];
	max?: Maybe<Teams_Max_Fields>;
	min?: Maybe<Teams_Min_Fields>;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Teams_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teams" */
export type Teams_Aggregate_Order_By = {
	count?: Maybe<Order_By>;
	max?: Maybe<Teams_Max_Order_By>;
	min?: Maybe<Teams_Min_Order_By>;
};

/** input type for inserting array relation for remote table "teams" */
export type Teams_Arr_Rel_Insert_Input = {
	data: Array<Teams_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Teams_On_Conflict>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
	_and?: Maybe<Array<Teams_Bool_Exp>>;
	_not?: Maybe<Teams_Bool_Exp>;
	_or?: Maybe<Array<Teams_Bool_Exp>>;
	captain?: Maybe<Uuid_Comparison_Exp>;
	city?: Maybe<Uuid_Comparison_Exp>;
	cityByCity?: Maybe<Cities_Bool_Exp>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	founded?: Maybe<String_Comparison_Exp>;
	historic_team_names?: Maybe<Historic_Team_Names_Bool_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	is_active?: Maybe<Boolean_Comparison_Exp>;
	is_blacklisted?: Maybe<Boolean_Comparison_Exp>;
	join_footy_users_teams?: Maybe<Join_Footy_Users_Teams_Bool_Exp>;
	join_players_teams?: Maybe<Join_Players_Teams_Bool_Exp>;
	join_team_finals?: Maybe<Join_Team_Finals_Bool_Exp>;
	league_teams?: Maybe<Join_League_Teams_Bool_Exp>;
	logo_url?: Maybe<String_Comparison_Exp>;
	matches?: Maybe<Matches_Bool_Exp>;
	matchesByAwayTeam?: Maybe<Matches_Bool_Exp>;
	name?: Maybe<String_Comparison_Exp>;
	normalized_name?: Maybe<String_Comparison_Exp>;
	placeholder?: Maybe<Boolean_Comparison_Exp>;
	player?: Maybe<Players_Bool_Exp>;
	playerByViceCaptain?: Maybe<Players_Bool_Exp>;
	player_type?: Maybe<String_Comparison_Exp>;
	preferred_kick_off_times?: Maybe<String_Comparison_Exp>;
	registrations_teams?: Maybe<Registrations_Teams_Bool_Exp>;
	team_size?: Maybe<String_Comparison_Exp>;
	type?: Maybe<String_Comparison_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
	vice_captain?: Maybe<Uuid_Comparison_Exp>;
	zendesk_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "teams" */
export enum Teams_Constraint {
	/** unique or primary key constraint */
	TeamsNormalizedNameKey = 'teams_normalized_name_key',
	/** unique or primary key constraint */
	TeamsPkey = 'teams_pkey',
}

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
	captain?: Maybe<Scalars['uuid']>;
	city?: Maybe<Scalars['uuid']>;
	cityByCity?: Maybe<Cities_Obj_Rel_Insert_Input>;
	created_at?: Maybe<Scalars['timestamptz']>;
	/** 1989, September 2010, etc */
	founded?: Maybe<Scalars['String']>;
	historic_team_names?: Maybe<Historic_Team_Names_Arr_Rel_Insert_Input>;
	id?: Maybe<Scalars['uuid']>;
	is_active?: Maybe<Scalars['Boolean']>;
	is_blacklisted?: Maybe<Scalars['Boolean']>;
	join_footy_users_teams?: Maybe<Join_Footy_Users_Teams_Arr_Rel_Insert_Input>;
	join_players_teams?: Maybe<Join_Players_Teams_Arr_Rel_Insert_Input>;
	join_team_finals?: Maybe<Join_Team_Finals_Arr_Rel_Insert_Input>;
	league_teams?: Maybe<Join_League_Teams_Arr_Rel_Insert_Input>;
	logo_url?: Maybe<Scalars['String']>;
	matches?: Maybe<Matches_Arr_Rel_Insert_Input>;
	matchesByAwayTeam?: Maybe<Matches_Arr_Rel_Insert_Input>;
	name?: Maybe<Scalars['String']>;
	normalized_name?: Maybe<Scalars['String']>;
	/** If team is either a placeholder or BYE */
	placeholder?: Maybe<Scalars['Boolean']>;
	player?: Maybe<Players_Obj_Rel_Insert_Input>;
	playerByViceCaptain?: Maybe<Players_Obj_Rel_Insert_Input>;
	player_type?: Maybe<Scalars['String']>;
	preferred_kick_off_times?: Maybe<Scalars['String']>;
	registrations_teams?: Maybe<Registrations_Teams_Arr_Rel_Insert_Input>;
	team_size?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
	vice_captain?: Maybe<Scalars['uuid']>;
	/** This is the key which ties the team to the entry in zendesk. It is generated by zendesk */
	zendesk_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
	__typename?: 'teams_max_fields';
	captain?: Maybe<Scalars['uuid']>;
	city?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	/** 1989, September 2010, etc */
	founded?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	logo_url?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	normalized_name?: Maybe<Scalars['String']>;
	player_type?: Maybe<Scalars['String']>;
	preferred_kick_off_times?: Maybe<Scalars['String']>;
	team_size?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
	vice_captain?: Maybe<Scalars['uuid']>;
	/** This is the key which ties the team to the entry in zendesk. It is generated by zendesk */
	zendesk_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "teams" */
export type Teams_Max_Order_By = {
	captain?: Maybe<Order_By>;
	city?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	/** 1989, September 2010, etc */
	founded?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	logo_url?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	normalized_name?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	preferred_kick_off_times?: Maybe<Order_By>;
	team_size?: Maybe<Order_By>;
	type?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
	vice_captain?: Maybe<Order_By>;
	/** This is the key which ties the team to the entry in zendesk. It is generated by zendesk */
	zendesk_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
	__typename?: 'teams_min_fields';
	captain?: Maybe<Scalars['uuid']>;
	city?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	/** 1989, September 2010, etc */
	founded?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	logo_url?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	normalized_name?: Maybe<Scalars['String']>;
	player_type?: Maybe<Scalars['String']>;
	preferred_kick_off_times?: Maybe<Scalars['String']>;
	team_size?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
	vice_captain?: Maybe<Scalars['uuid']>;
	/** This is the key which ties the team to the entry in zendesk. It is generated by zendesk */
	zendesk_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
	captain?: Maybe<Order_By>;
	city?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	/** 1989, September 2010, etc */
	founded?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	logo_url?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	normalized_name?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	preferred_kick_off_times?: Maybe<Order_By>;
	team_size?: Maybe<Order_By>;
	type?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
	vice_captain?: Maybe<Order_By>;
	/** This is the key which ties the team to the entry in zendesk. It is generated by zendesk */
	zendesk_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "teams" */
export type Teams_Mutation_Response = {
	__typename?: 'teams_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type Teams_Obj_Rel_Insert_Input = {
	data: Teams_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Teams_On_Conflict>;
};

/** on conflict condition type for table "teams" */
export type Teams_On_Conflict = {
	constraint: Teams_Constraint;
	update_columns?: Array<Teams_Update_Column>;
	where?: Maybe<Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "teams". */
export type Teams_Order_By = {
	captain?: Maybe<Order_By>;
	city?: Maybe<Order_By>;
	cityByCity?: Maybe<Cities_Order_By>;
	created_at?: Maybe<Order_By>;
	founded?: Maybe<Order_By>;
	historic_team_names_aggregate?: Maybe<Historic_Team_Names_Aggregate_Order_By>;
	id?: Maybe<Order_By>;
	is_active?: Maybe<Order_By>;
	is_blacklisted?: Maybe<Order_By>;
	join_footy_users_teams_aggregate?: Maybe<Join_Footy_Users_Teams_Aggregate_Order_By>;
	join_players_teams_aggregate?: Maybe<Join_Players_Teams_Aggregate_Order_By>;
	join_team_finals_aggregate?: Maybe<Join_Team_Finals_Aggregate_Order_By>;
	league_teams_aggregate?: Maybe<Join_League_Teams_Aggregate_Order_By>;
	logo_url?: Maybe<Order_By>;
	matchesByAwayTeam_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	matches_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	name?: Maybe<Order_By>;
	normalized_name?: Maybe<Order_By>;
	placeholder?: Maybe<Order_By>;
	player?: Maybe<Players_Order_By>;
	playerByViceCaptain?: Maybe<Players_Order_By>;
	player_type?: Maybe<Order_By>;
	preferred_kick_off_times?: Maybe<Order_By>;
	registrations_teams_aggregate?: Maybe<Registrations_Teams_Aggregate_Order_By>;
	team_size?: Maybe<Order_By>;
	type?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
	vice_captain?: Maybe<Order_By>;
	zendesk_id?: Maybe<Order_By>;
};

/** primary key columns input for table: teams */
export type Teams_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
	/** column name */
	Captain = 'captain',
	/** column name */
	City = 'city',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Founded = 'founded',
	/** column name */
	Id = 'id',
	/** column name */
	IsActive = 'is_active',
	/** column name */
	IsBlacklisted = 'is_blacklisted',
	/** column name */
	LogoUrl = 'logo_url',
	/** column name */
	Name = 'name',
	/** column name */
	NormalizedName = 'normalized_name',
	/** column name */
	Placeholder = 'placeholder',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	PreferredKickOffTimes = 'preferred_kick_off_times',
	/** column name */
	TeamSize = 'team_size',
	/** column name */
	Type = 'type',
	/** column name */
	UpdatedAt = 'updated_at',
	/** column name */
	ViceCaptain = 'vice_captain',
	/** column name */
	ZendeskId = 'zendesk_id',
}

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
	captain?: Maybe<Scalars['uuid']>;
	city?: Maybe<Scalars['uuid']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	/** 1989, September 2010, etc */
	founded?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	is_active?: Maybe<Scalars['Boolean']>;
	is_blacklisted?: Maybe<Scalars['Boolean']>;
	logo_url?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	normalized_name?: Maybe<Scalars['String']>;
	/** If team is either a placeholder or BYE */
	placeholder?: Maybe<Scalars['Boolean']>;
	player_type?: Maybe<Scalars['String']>;
	preferred_kick_off_times?: Maybe<Scalars['String']>;
	team_size?: Maybe<Scalars['String']>;
	type?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
	vice_captain?: Maybe<Scalars['uuid']>;
	/** This is the key which ties the team to the entry in zendesk. It is generated by zendesk */
	zendesk_id?: Maybe<Scalars['String']>;
};

/** update columns of table "teams" */
export enum Teams_Update_Column {
	/** column name */
	Captain = 'captain',
	/** column name */
	City = 'city',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	Founded = 'founded',
	/** column name */
	Id = 'id',
	/** column name */
	IsActive = 'is_active',
	/** column name */
	IsBlacklisted = 'is_blacklisted',
	/** column name */
	LogoUrl = 'logo_url',
	/** column name */
	Name = 'name',
	/** column name */
	NormalizedName = 'normalized_name',
	/** column name */
	Placeholder = 'placeholder',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	PreferredKickOffTimes = 'preferred_kick_off_times',
	/** column name */
	TeamSize = 'team_size',
	/** column name */
	Type = 'type',
	/** column name */
	UpdatedAt = 'updated_at',
	/** column name */
	ViceCaptain = 'vice_captain',
	/** column name */
	ZendeskId = 'zendesk_id',
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
	_eq?: Maybe<Scalars['timestamptz']>;
	_gt?: Maybe<Scalars['timestamptz']>;
	_gte?: Maybe<Scalars['timestamptz']>;
	_in?: Maybe<Array<Scalars['timestamptz']>>;
	_is_null?: Maybe<Scalars['Boolean']>;
	_lt?: Maybe<Scalars['timestamptz']>;
	_lte?: Maybe<Scalars['timestamptz']>;
	_neq?: Maybe<Scalars['timestamptz']>;
	_nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
	_eq?: Maybe<Scalars['timetz']>;
	_gt?: Maybe<Scalars['timetz']>;
	_gte?: Maybe<Scalars['timetz']>;
	_in?: Maybe<Array<Scalars['timetz']>>;
	_is_null?: Maybe<Scalars['Boolean']>;
	_lt?: Maybe<Scalars['timetz']>;
	_lte?: Maybe<Scalars['timetz']>;
	_neq?: Maybe<Scalars['timetz']>;
	_nin?: Maybe<Array<Scalars['timetz']>>;
};

/**
 * Knockout tournament, can be stand alone or the final part of a larger competition
 *
 *
 * columns and relationships of "tournaments"
 *
 */
export type Tournaments = {
	__typename?: 'tournaments';
	bbq_included?: Maybe<Scalars['Boolean']>;
	corporate_event?: Maybe<Scalars['Boolean']>;
	created_at: Scalars['timestamptz'];
	day_of_week?: Maybe<Scalars['Int']>;
	default_game_length: Scalars['String'];
	default_pitches?: Maybe<Scalars['String']>;
	default_slot_duration: Scalars['Int'];
	free_agents?: Maybe<Scalars['Boolean']>;
	/** eg. 'same day', 'weekly', 'every other week' */
	frequency: Scalars['String'];
	id: Scalars['uuid'];
	kick_off_date: Scalars['date'];
	location: Scalars['uuid'];
	/** An object relationship */
	locationByLocation: Locations;
	man_of_the_match: Scalars['Boolean'];
	/** fetch data from the table: "matches" */
	matches: Array<Matches>;
	/** An aggregate relationship */
	matches_aggregate: Matches_Aggregate;
	name?: Maybe<Scalars['String']>;
	number_of_teams: Scalars['Int'];
	player_type?: Maybe<Scalars['String']>;
	/** An array relationship */
	seedings: Array<Seedings>;
	/** An aggregate relationship */
	seedings_aggregate: Seedings_Aggregate;
	status: Scalars['String'];
	updated_at: Scalars['timestamptz'];
};

/**
 * Knockout tournament, can be stand alone or the final part of a larger competition
 *
 *
 * columns and relationships of "tournaments"
 *
 */
export type TournamentsMatchesArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/**
 * Knockout tournament, can be stand alone or the final part of a larger competition
 *
 *
 * columns and relationships of "tournaments"
 *
 */
export type TournamentsMatches_AggregateArgs = {
	distinct_on?: Maybe<Array<Matches_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Matches_Order_By>>;
	where?: Maybe<Matches_Bool_Exp>;
};

/**
 * Knockout tournament, can be stand alone or the final part of a larger competition
 *
 *
 * columns and relationships of "tournaments"
 *
 */
export type TournamentsSeedingsArgs = {
	distinct_on?: Maybe<Array<Seedings_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Seedings_Order_By>>;
	where?: Maybe<Seedings_Bool_Exp>;
};

/**
 * Knockout tournament, can be stand alone or the final part of a larger competition
 *
 *
 * columns and relationships of "tournaments"
 *
 */
export type TournamentsSeedings_AggregateArgs = {
	distinct_on?: Maybe<Array<Seedings_Select_Column>>;
	limit?: Maybe<Scalars['Int']>;
	offset?: Maybe<Scalars['Int']>;
	order_by?: Maybe<Array<Seedings_Order_By>>;
	where?: Maybe<Seedings_Bool_Exp>;
};

/** aggregated selection of "tournaments" */
export type Tournaments_Aggregate = {
	__typename?: 'tournaments_aggregate';
	aggregate?: Maybe<Tournaments_Aggregate_Fields>;
	nodes: Array<Tournaments>;
};

/** aggregate fields of "tournaments" */
export type Tournaments_Aggregate_Fields = {
	__typename?: 'tournaments_aggregate_fields';
	avg?: Maybe<Tournaments_Avg_Fields>;
	count: Scalars['Int'];
	max?: Maybe<Tournaments_Max_Fields>;
	min?: Maybe<Tournaments_Min_Fields>;
	stddev?: Maybe<Tournaments_Stddev_Fields>;
	stddev_pop?: Maybe<Tournaments_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Tournaments_Stddev_Samp_Fields>;
	sum?: Maybe<Tournaments_Sum_Fields>;
	var_pop?: Maybe<Tournaments_Var_Pop_Fields>;
	var_samp?: Maybe<Tournaments_Var_Samp_Fields>;
	variance?: Maybe<Tournaments_Variance_Fields>;
};

/** aggregate fields of "tournaments" */
export type Tournaments_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<Tournaments_Select_Column>>;
	distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tournaments" */
export type Tournaments_Aggregate_Order_By = {
	avg?: Maybe<Tournaments_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<Tournaments_Max_Order_By>;
	min?: Maybe<Tournaments_Min_Order_By>;
	stddev?: Maybe<Tournaments_Stddev_Order_By>;
	stddev_pop?: Maybe<Tournaments_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<Tournaments_Stddev_Samp_Order_By>;
	sum?: Maybe<Tournaments_Sum_Order_By>;
	var_pop?: Maybe<Tournaments_Var_Pop_Order_By>;
	var_samp?: Maybe<Tournaments_Var_Samp_Order_By>;
	variance?: Maybe<Tournaments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tournaments" */
export type Tournaments_Arr_Rel_Insert_Input = {
	data: Array<Tournaments_Insert_Input>;
	/** on conflict condition */
	on_conflict?: Maybe<Tournaments_On_Conflict>;
};

/** aggregate avg on columns */
export type Tournaments_Avg_Fields = {
	__typename?: 'tournaments_avg_fields';
	day_of_week?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tournaments" */
export type Tournaments_Avg_Order_By = {
	day_of_week?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tournaments". All fields are combined with a logical 'AND'. */
export type Tournaments_Bool_Exp = {
	_and?: Maybe<Array<Tournaments_Bool_Exp>>;
	_not?: Maybe<Tournaments_Bool_Exp>;
	_or?: Maybe<Array<Tournaments_Bool_Exp>>;
	bbq_included?: Maybe<Boolean_Comparison_Exp>;
	corporate_event?: Maybe<Boolean_Comparison_Exp>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	day_of_week?: Maybe<Int_Comparison_Exp>;
	default_game_length?: Maybe<String_Comparison_Exp>;
	default_pitches?: Maybe<String_Comparison_Exp>;
	default_slot_duration?: Maybe<Int_Comparison_Exp>;
	free_agents?: Maybe<Boolean_Comparison_Exp>;
	frequency?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	kick_off_date?: Maybe<Date_Comparison_Exp>;
	location?: Maybe<Uuid_Comparison_Exp>;
	locationByLocation?: Maybe<Locations_Bool_Exp>;
	man_of_the_match?: Maybe<Boolean_Comparison_Exp>;
	matches?: Maybe<Matches_Bool_Exp>;
	name?: Maybe<String_Comparison_Exp>;
	number_of_teams?: Maybe<Int_Comparison_Exp>;
	player_type?: Maybe<String_Comparison_Exp>;
	seedings?: Maybe<Seedings_Bool_Exp>;
	status?: Maybe<String_Comparison_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tournaments" */
export enum Tournaments_Constraint {
	/** unique or primary key constraint */
	TournamentsPkey = 'tournaments_pkey',
}

/** input type for incrementing numeric columns in table "tournaments" */
export type Tournaments_Inc_Input = {
	day_of_week?: Maybe<Scalars['Int']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	number_of_teams?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tournaments" */
export type Tournaments_Insert_Input = {
	bbq_included?: Maybe<Scalars['Boolean']>;
	corporate_event?: Maybe<Scalars['Boolean']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_week?: Maybe<Scalars['Int']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	free_agents?: Maybe<Scalars['Boolean']>;
	/** eg. 'same day', 'weekly', 'every other week' */
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	locationByLocation?: Maybe<Locations_Obj_Rel_Insert_Input>;
	man_of_the_match?: Maybe<Scalars['Boolean']>;
	matches?: Maybe<Matches_Arr_Rel_Insert_Input>;
	name?: Maybe<Scalars['String']>;
	number_of_teams?: Maybe<Scalars['Int']>;
	player_type?: Maybe<Scalars['String']>;
	seedings?: Maybe<Seedings_Arr_Rel_Insert_Input>;
	status?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tournaments_Max_Fields = {
	__typename?: 'tournaments_max_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_week?: Maybe<Scalars['Int']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	/** eg. 'same day', 'weekly', 'every other week' */
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	number_of_teams?: Maybe<Scalars['Int']>;
	player_type?: Maybe<Scalars['String']>;
	status?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "tournaments" */
export type Tournaments_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	day_of_week?: Maybe<Order_By>;
	default_game_length?: Maybe<Order_By>;
	default_pitches?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	/** eg. 'same day', 'weekly', 'every other week' */
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	kick_off_date?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	status?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tournaments_Min_Fields = {
	__typename?: 'tournaments_min_fields';
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_week?: Maybe<Scalars['Int']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	/** eg. 'same day', 'weekly', 'every other week' */
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	name?: Maybe<Scalars['String']>;
	number_of_teams?: Maybe<Scalars['Int']>;
	player_type?: Maybe<Scalars['String']>;
	status?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "tournaments" */
export type Tournaments_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	day_of_week?: Maybe<Order_By>;
	default_game_length?: Maybe<Order_By>;
	default_pitches?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	/** eg. 'same day', 'weekly', 'every other week' */
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	kick_off_date?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	name?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	status?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "tournaments" */
export type Tournaments_Mutation_Response = {
	__typename?: 'tournaments_mutation_response';
	/** number of rows affected by the mutation */
	affected_rows: Scalars['Int'];
	/** data from the rows affected by the mutation */
	returning: Array<Tournaments>;
};

/** input type for inserting object relation for remote table "tournaments" */
export type Tournaments_Obj_Rel_Insert_Input = {
	data: Tournaments_Insert_Input;
	/** on conflict condition */
	on_conflict?: Maybe<Tournaments_On_Conflict>;
};

/** on conflict condition type for table "tournaments" */
export type Tournaments_On_Conflict = {
	constraint: Tournaments_Constraint;
	update_columns?: Array<Tournaments_Update_Column>;
	where?: Maybe<Tournaments_Bool_Exp>;
};

/** Ordering options when selecting data from "tournaments". */
export type Tournaments_Order_By = {
	bbq_included?: Maybe<Order_By>;
	corporate_event?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	day_of_week?: Maybe<Order_By>;
	default_game_length?: Maybe<Order_By>;
	default_pitches?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	free_agents?: Maybe<Order_By>;
	frequency?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	kick_off_date?: Maybe<Order_By>;
	location?: Maybe<Order_By>;
	locationByLocation?: Maybe<Locations_Order_By>;
	man_of_the_match?: Maybe<Order_By>;
	matches_aggregate?: Maybe<Matches_Aggregate_Order_By>;
	name?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
	player_type?: Maybe<Order_By>;
	seedings_aggregate?: Maybe<Seedings_Aggregate_Order_By>;
	status?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: tournaments */
export type Tournaments_Pk_Columns_Input = {
	id: Scalars['uuid'];
};

/** select columns of table "tournaments" */
export enum Tournaments_Select_Column {
	/** column name */
	BbqIncluded = 'bbq_included',
	/** column name */
	CorporateEvent = 'corporate_event',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	DayOfWeek = 'day_of_week',
	/** column name */
	DefaultGameLength = 'default_game_length',
	/** column name */
	DefaultPitches = 'default_pitches',
	/** column name */
	DefaultSlotDuration = 'default_slot_duration',
	/** column name */
	FreeAgents = 'free_agents',
	/** column name */
	Frequency = 'frequency',
	/** column name */
	Id = 'id',
	/** column name */
	KickOffDate = 'kick_off_date',
	/** column name */
	Location = 'location',
	/** column name */
	ManOfTheMatch = 'man_of_the_match',
	/** column name */
	Name = 'name',
	/** column name */
	NumberOfTeams = 'number_of_teams',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	Status = 'status',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** input type for updating data in table "tournaments" */
export type Tournaments_Set_Input = {
	bbq_included?: Maybe<Scalars['Boolean']>;
	corporate_event?: Maybe<Scalars['Boolean']>;
	created_at?: Maybe<Scalars['timestamptz']>;
	day_of_week?: Maybe<Scalars['Int']>;
	default_game_length?: Maybe<Scalars['String']>;
	default_pitches?: Maybe<Scalars['String']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	free_agents?: Maybe<Scalars['Boolean']>;
	/** eg. 'same day', 'weekly', 'every other week' */
	frequency?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['uuid']>;
	kick_off_date?: Maybe<Scalars['date']>;
	location?: Maybe<Scalars['uuid']>;
	man_of_the_match?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	number_of_teams?: Maybe<Scalars['Int']>;
	player_type?: Maybe<Scalars['String']>;
	status?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Tournaments_Stddev_Fields = {
	__typename?: 'tournaments_stddev_fields';
	day_of_week?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tournaments" */
export type Tournaments_Stddev_Order_By = {
	day_of_week?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tournaments_Stddev_Pop_Fields = {
	__typename?: 'tournaments_stddev_pop_fields';
	day_of_week?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tournaments" */
export type Tournaments_Stddev_Pop_Order_By = {
	day_of_week?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tournaments_Stddev_Samp_Fields = {
	__typename?: 'tournaments_stddev_samp_fields';
	day_of_week?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tournaments" */
export type Tournaments_Stddev_Samp_Order_By = {
	day_of_week?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tournaments_Sum_Fields = {
	__typename?: 'tournaments_sum_fields';
	day_of_week?: Maybe<Scalars['Int']>;
	default_slot_duration?: Maybe<Scalars['Int']>;
	number_of_teams?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tournaments" */
export type Tournaments_Sum_Order_By = {
	day_of_week?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** update columns of table "tournaments" */
export enum Tournaments_Update_Column {
	/** column name */
	BbqIncluded = 'bbq_included',
	/** column name */
	CorporateEvent = 'corporate_event',
	/** column name */
	CreatedAt = 'created_at',
	/** column name */
	DayOfWeek = 'day_of_week',
	/** column name */
	DefaultGameLength = 'default_game_length',
	/** column name */
	DefaultPitches = 'default_pitches',
	/** column name */
	DefaultSlotDuration = 'default_slot_duration',
	/** column name */
	FreeAgents = 'free_agents',
	/** column name */
	Frequency = 'frequency',
	/** column name */
	Id = 'id',
	/** column name */
	KickOffDate = 'kick_off_date',
	/** column name */
	Location = 'location',
	/** column name */
	ManOfTheMatch = 'man_of_the_match',
	/** column name */
	Name = 'name',
	/** column name */
	NumberOfTeams = 'number_of_teams',
	/** column name */
	PlayerType = 'player_type',
	/** column name */
	Status = 'status',
	/** column name */
	UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Tournaments_Var_Pop_Fields = {
	__typename?: 'tournaments_var_pop_fields';
	day_of_week?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tournaments" */
export type Tournaments_Var_Pop_Order_By = {
	day_of_week?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tournaments_Var_Samp_Fields = {
	__typename?: 'tournaments_var_samp_fields';
	day_of_week?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tournaments" */
export type Tournaments_Var_Samp_Order_By = {
	day_of_week?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tournaments_Variance_Fields = {
	__typename?: 'tournaments_variance_fields';
	day_of_week?: Maybe<Scalars['Float']>;
	default_slot_duration?: Maybe<Scalars['Float']>;
	number_of_teams?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tournaments" */
export type Tournaments_Variance_Order_By = {
	day_of_week?: Maybe<Order_By>;
	default_slot_duration?: Maybe<Order_By>;
	number_of_teams?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
	_eq?: Maybe<Scalars['uuid']>;
	_gt?: Maybe<Scalars['uuid']>;
	_gte?: Maybe<Scalars['uuid']>;
	_in?: Maybe<Array<Scalars['uuid']>>;
	_is_null?: Maybe<Scalars['Boolean']>;
	_lt?: Maybe<Scalars['uuid']>;
	_lte?: Maybe<Scalars['uuid']>;
	_neq?: Maybe<Scalars['uuid']>;
	_nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetCarriedPointsQueryVariables = Exact<{
	id: Scalars['uuid'];
}>;

export type GetCarriedPointsQuery = {
	__typename?: 'query_root';
	points: Array<{
		__typename?: 'join_league_teams';
		played_carried?: number | null | undefined;
		points_carried?: number | null | undefined;
		won_carried?: number | null | undefined;
		lost_carried?: number | null | undefined;
		drawn_carried?: number | null | undefined;
		gd_carried?: number | null | undefined;
		gs_carried?: number | null | undefined;
		name?: { __typename?: 'teams'; name: string } | null | undefined;
	}>;
};

export type GetSignupCitiesQueryVariables = Exact<{ [key: string]: never }>;

export type GetSignupCitiesQuery = {
	__typename?: 'query_root';
	cities: Array<{
		__typename?: 'cities';
		id: any;
		name: string;
		country: { __typename?: 'countries'; id: any; name: string; code: string };
	}>;
};

export type GetFixtureFinalsQueryVariables = Exact<{
	finalId: Scalars['uuid'];
	teamId: Scalars['uuid'];
}>;

export type GetFixtureFinalsQuery = {
	__typename?: 'query_root';
	finals: Array<{
		__typename?: 'finals';
		group_stage: boolean;
		finals_groups: Array<{
			__typename?: 'finals_groups';
			matches: Array<{
				__typename?: 'matches';
				id: any;
				home_score?: number | null | undefined;
				away_score?: number | null | undefined;
				date?: any | null | undefined;
				kick_off_time?: any | null | undefined;
				postponed: boolean;
				league?:
					| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
					| null
					| undefined;
				match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
				away_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				home_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				referee?:
					| {
							__typename?: 'referees';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
				pitch?:
					| {
							__typename?: 'pitches';
							name: number;
							pitch_name?: string | null | undefined;
							location: { __typename?: 'locations'; name: string };
					  }
					| null
					| undefined;
			}>;
		}>;
		finals_knockouts: Array<{
			__typename?: 'finals_knockouts';
			matches: Array<{
				__typename?: 'matches';
				id: any;
				name?: string | null | undefined;
				date?: any | null | undefined;
				kick_off_time?: any | null | undefined;
				postponed: boolean;
				league?:
					| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
					| null
					| undefined;
				match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
				away_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				home_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				placeholder_home_team?:
					| { __typename?: 'placeholder_teams'; id: any; name: string }
					| null
					| undefined;
				placeholder_away_team?:
					| { __typename?: 'placeholder_teams'; id: any; name: string }
					| null
					| undefined;
				placeholder_team?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
				referee?:
					| {
							__typename?: 'referees';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
				pitch?:
					| {
							__typename?: 'pitches';
							name: number;
							pitch_name?: string | null | undefined;
							location: { __typename?: 'locations'; name: string };
					  }
					| null
					| undefined;
			}>;
		}>;
	}>;
};

export type GetFixtureLeaguesQueryVariables = Exact<{
	teamId: Scalars['uuid'];
}>;

export type GetFixtureLeaguesQuery = {
	__typename?: 'query_root';
	leagues: Array<{
		__typename?: 'leagues';
		id: any;
		name?: string | null | undefined;
		type: 'leagues';
	}>;
	finals: Array<{
		__typename?: 'finals';
		id: any;
		name?: string | null | undefined;
		type: 'finals';
	}>;
};

export type GetLeagueFixturesQueryVariables = Exact<{
	leagueId: Scalars['uuid'];
	teamId?: Maybe<Scalars['uuid']>;
}>;

export type GetLeagueFixturesQuery = {
	__typename?: 'query_root';
	matches: Array<{
		__typename?: 'matches';
		id: any;
		date?: any | null | undefined;
		kick_off_time?: any | null | undefined;
		league?:
			| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
			| null
			| undefined;
		match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
		away_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		home_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		referee?:
			| {
					__typename?: 'referees';
					first_name?: string | null | undefined;
					last_name?: string | null | undefined;
			  }
			| null
			| undefined;
		pitch?:
			| {
					__typename?: 'pitches';
					name: number;
					pitch_name?: string | null | undefined;
					location: { __typename?: 'locations'; name: string };
			  }
			| null
			| undefined;
	}>;
};

export type GetAllFixtureFinalsQueryVariables = Exact<{
	finalId: Scalars['uuid'];
}>;

export type GetAllFixtureFinalsQuery = {
	__typename?: 'query_root';
	finals: Array<{
		__typename?: 'finals';
		group_stage: boolean;
		finals_groups: Array<{
			__typename?: 'finals_groups';
			matches: Array<{
				__typename?: 'matches';
				id: any;
				home_score?: number | null | undefined;
				away_score?: number | null | undefined;
				date?: any | null | undefined;
				kick_off_time?: any | null | undefined;
				postponed: boolean;
				league?:
					| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
					| null
					| undefined;
				match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
				away_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				home_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				referee?:
					| {
							__typename?: 'referees';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
				pitch?:
					| {
							__typename?: 'pitches';
							name: number;
							pitch_name?: string | null | undefined;
							location: { __typename?: 'locations'; name: string };
					  }
					| null
					| undefined;
			}>;
		}>;
		finals_knockouts: Array<{
			__typename?: 'finals_knockouts';
			matches: Array<{
				__typename?: 'matches';
				id: any;
				name?: string | null | undefined;
				date?: any | null | undefined;
				kick_off_time?: any | null | undefined;
				postponed: boolean;
				league?:
					| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
					| null
					| undefined;
				match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
				away_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				home_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				referee?:
					| {
							__typename?: 'referees';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
				pitch?:
					| {
							__typename?: 'pitches';
							name: number;
							pitch_name?: string | null | undefined;
							location: { __typename?: 'locations'; name: string };
					  }
					| null
					| undefined;
			}>;
		}>;
	}>;
};

export type GetAllLeagueFixturesQueryVariables = Exact<{
	leagueId: Scalars['uuid'];
}>;

export type GetAllLeagueFixturesQuery = {
	__typename?: 'query_root';
	matches: Array<{
		__typename?: 'matches';
		id: any;
		date?: any | null | undefined;
		kick_off_time?: any | null | undefined;
		league?:
			| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
			| null
			| undefined;
		match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
		away_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		home_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		referee?:
			| {
					__typename?: 'referees';
					first_name?: string | null | undefined;
					last_name?: string | null | undefined;
			  }
			| null
			| undefined;
		pitch?:
			| {
					__typename?: 'pitches';
					name: number;
					pitch_name?: string | null | undefined;
					location: { __typename?: 'locations'; name: string };
			  }
			| null
			| undefined;
	}>;
};

export type GetFixturesLeaguesQueryVariables = Exact<{
	teamId: Array<Scalars['uuid']> | Scalars['uuid'];
}>;

export type GetFixturesLeaguesQuery = {
	__typename?: 'query_root';
	leagues: Array<{
		__typename?: 'leagues';
		id: any;
		name?: string | null | undefined;
		type: 'leagues';
	}>;
	finals: Array<{
		__typename?: 'finals';
		id: any;
		name?: string | null | undefined;
		type: 'finals';
	}>;
};

export type GetClubhouseMatchesQueryVariables = Exact<{
	ids: Array<Scalars['uuid']> | Scalars['uuid'];
}>;

export type GetClubhouseMatchesQuery = {
	__typename?: 'query_root';
	upcomingMatches: Array<{
		__typename?: 'matches';
		id: any;
		date?: any | null | undefined;
		kick_off_time?: any | null | undefined;
		is_friendly: boolean;
		league?:
			| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
			| null
			| undefined;
		finals_group?:
			| {
					__typename?: 'finals_groups';
					final: {
						__typename?: 'finals';
						id: any;
						display_name?: string | null | undefined;
						type: 'finals';
					};
			  }
			| null
			| undefined;
		finals_knockout?:
			| {
					__typename?: 'finals_knockouts';
					final: {
						__typename?: 'finals';
						id: any;
						display_name?: string | null | undefined;
						type: 'finals';
					};
			  }
			| null
			| undefined;
		match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
		away_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		home_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		referee?:
			| {
					__typename?: 'referees';
					first_name?: string | null | undefined;
					last_name?: string | null | undefined;
			  }
			| null
			| undefined;
		pitch?:
			| {
					__typename?: 'pitches';
					name: number;
					pitch_name?: string | null | undefined;
					location: { __typename?: 'locations'; name: string };
			  }
			| null
			| undefined;
		man_of_the_match?:
			| {
					__typename?: 'players';
					first_name?: string | null | undefined;
					last_name?: string | null | undefined;
			  }
			| null
			| undefined;
	}>;
	pastMatches: Array<{
		__typename?: 'matches';
		id: any;
		name?: string | null | undefined;
		date?: any | null | undefined;
		kick_off_time?: any | null | undefined;
		home_score?: number | null | undefined;
		away_score?: number | null | undefined;
		is_friendly: boolean;
		match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
		league?:
			| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
			| null
			| undefined;
		finals_group?:
			| {
					__typename?: 'finals_groups';
					final: {
						__typename?: 'finals';
						id: any;
						display_name?: string | null | undefined;
						type: 'finals';
					};
			  }
			| null
			| undefined;
		finals_knockout?:
			| {
					__typename?: 'finals_knockouts';
					final: {
						__typename?: 'finals';
						id: any;
						display_name?: string | null | undefined;
						type: 'finals';
					};
			  }
			| null
			| undefined;
		away_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		home_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		referee?:
			| {
					__typename?: 'referees';
					first_name?: string | null | undefined;
					last_name?: string | null | undefined;
			  }
			| null
			| undefined;
		pitch?:
			| {
					__typename?: 'pitches';
					name: number;
					pitch_name?: string | null | undefined;
					location: { __typename?: 'locations'; name: string };
			  }
			| null
			| undefined;
		man_of_the_match?:
			| {
					__typename?: 'players';
					first_name?: string | null | undefined;
					last_name?: string | null | undefined;
			  }
			| null
			| undefined;
	}>;
};

export type CreateNewPlayerMutationVariables = Exact<{
	player: Array<Players_Insert_Input> | Players_Insert_Input;
}>;

export type CreateNewPlayerMutation = {
	__typename?: 'mutation_root';
	insert_players?:
		| {
				__typename?: 'players_mutation_response';
				returning: Array<{
					__typename?: 'players';
					id: any;
					city?: any | null | undefined;
					email?: string | null | undefined;
					firebase_id?: string | null | undefined;
					first_name?: string | null | undefined;
					gender?: string | null | undefined;
					language?: string | null | undefined;
					last_name?: string | null | undefined;
					phone_number?: string | null | undefined;
					ringer?: boolean | null | undefined;
					status?: string | null | undefined;
					whatsapp: boolean;
					zendesk_id?: string | null | undefined;
					photo_url?: string | null | undefined;
					join_players_teams: Array<{
						__typename?: 'join_players_teams';
						teamObj: {
							__typename?: 'teams';
							id: any;
							name: string;
							finals: Array<{ __typename?: 'join_team_finals'; id: any }>;
							leagues: Array<{ __typename?: 'join_league_teams'; id: any }>;
						};
					}>;
				}>;
		  }
		| null
		| undefined;
};

export type GetPlayerByEmailQueryVariables = Exact<{
	email: Scalars['String'];
}>;

export type GetPlayerByEmailQuery = {
	__typename?: 'query_root';
	players: Array<{
		__typename?: 'players';
		city?: any | null | undefined;
		email?: string | null | undefined;
		firebase_id?: string | null | undefined;
		first_name?: string | null | undefined;
		gender?: string | null | undefined;
		id: any;
		language?: string | null | undefined;
		last_name?: string | null | undefined;
		phone_number?: string | null | undefined;
		ringer?: boolean | null | undefined;
		status?: string | null | undefined;
		whatsapp: boolean;
		zendesk_id?: string | null | undefined;
		photo_url?: string | null | undefined;
		join_players_teams: Array<{
			__typename?: 'join_players_teams';
			teamObj: {
				__typename?: 'teams';
				id: any;
				name: string;
				finals: Array<{ __typename?: 'join_team_finals'; id: any }>;
				leagues: Array<{ __typename?: 'join_league_teams'; id: any }>;
			};
		}>;
	}>;
};

export type PlayersByTeamQueryVariables = Exact<{
	teamId: Scalars['uuid'];
}>;

export type PlayersByTeamQuery = {
	__typename?: 'query_root';
	players: Array<{
		__typename?: 'players';
		id: any;
		first_name?: string | null | undefined;
		last_name?: string | null | undefined;
		photo_url?: string | null | undefined;
	}>;
};

export type GetPlayerInfoQueryVariables = Exact<{
	firebaseId: Scalars['String'];
}>;

export type GetPlayerInfoQuery = {
	__typename?: 'query_root';
	players: Array<{
		__typename?: 'players';
		id: any;
		first_name?: string | null | undefined;
		last_name?: string | null | undefined;
		phone_number?: string | null | undefined;
		gender?: string | null | undefined;
		photo_url?: string | null | undefined;
		email?: string | null | undefined;
		language?: string | null | undefined;
		ringer?: boolean | null | undefined;
		city?: { __typename?: 'cities'; id: any; name: string } | null | undefined;
		join_players_teams: Array<{
			__typename?: 'join_players_teams';
			team: { __typename?: 'teams'; id: any; name: string; badge?: string | null | undefined };
		}>;
	}>;
};

export type RegisterPlayerWithTeamMutationVariables = Exact<{
	player: Scalars['uuid'];
	team: Scalars['uuid'];
}>;

export type RegisterPlayerWithTeamMutation = {
	__typename?: 'mutation_root';
	insert_join_players_teams?:
		| {
				__typename?: 'join_players_teams_mutation_response';
				returning: Array<{ __typename?: 'join_players_teams'; id: any }>;
		  }
		| null
		| undefined;
};

export type UpdatePlayerMutationVariables = Exact<{
	id: Scalars['uuid'];
	object?: Maybe<Players_Set_Input>;
}>;

export type UpdatePlayerMutation = {
	__typename?: 'mutation_root';
	update_players?:
		| {
				__typename?: 'players_mutation_response';
				returning: Array<{
					__typename?: 'players';
					id: any;
					city?: any | null | undefined;
					email?: string | null | undefined;
					firebase_id?: string | null | undefined;
					first_name?: string | null | undefined;
					gender?: string | null | undefined;
					language?: string | null | undefined;
					last_name?: string | null | undefined;
					phone_number?: string | null | undefined;
					ringer?: boolean | null | undefined;
					status?: string | null | undefined;
					whatsapp: boolean;
					zendesk_id?: string | null | undefined;
					photo_url?: string | null | undefined;
					join_players_teams: Array<{
						__typename?: 'join_players_teams';
						teamObj: {
							__typename?: 'teams';
							id: any;
							name: string;
							finals: Array<{ __typename?: 'join_team_finals'; id: any }>;
							leagues: Array<{ __typename?: 'join_league_teams'; id: any }>;
						};
					}>;
				}>;
		  }
		| null
		| undefined;
};

export type UpdatePlayerLanguageMutationVariables = Exact<{
	userId: Scalars['uuid'];
	language: Scalars['String'];
}>;

export type UpdatePlayerLanguageMutation = {
	__typename?: 'mutation_root';
	update_players?:
		| { __typename?: 'players_mutation_response'; affected_rows: number }
		| null
		| undefined;
};

export type UpdateRingerStatusMutationVariables = Exact<{
	userId: Scalars['uuid'];
	status?: Maybe<Scalars['Boolean']>;
}>;

export type UpdateRingerStatusMutation = {
	__typename?: 'mutation_root';
	update_players?:
		| {
				__typename?: 'players_mutation_response';
				returning: Array<{ __typename?: 'players'; id: any }>;
		  }
		| null
		| undefined;
};

export type GetResultFinalsQueryVariables = Exact<{
	finalId: Scalars['uuid'];
	teamId: Scalars['uuid'];
}>;

export type GetResultFinalsQuery = {
	__typename?: 'query_root';
	finals: Array<{
		__typename?: 'finals';
		group_stage: boolean;
		finals_groups: Array<{
			__typename?: 'finals_groups';
			matches: Array<{
				__typename?: 'matches';
				id: any;
				date?: any | null | undefined;
				kick_off_time?: any | null | undefined;
				postponed: boolean;
				home_score?: number | null | undefined;
				away_score?: number | null | undefined;
				league?:
					| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
					| null
					| undefined;
				match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
				away_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				home_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				referee?:
					| {
							__typename?: 'referees';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
				man_of_the_match?:
					| {
							__typename?: 'players';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
			}>;
		}>;
		finals_knockouts: Array<{
			__typename?: 'finals_knockouts';
			matches: Array<{
				__typename?: 'matches';
				id: any;
				name?: string | null | undefined;
				date?: any | null | undefined;
				kick_off_time?: any | null | undefined;
				postponed: boolean;
				home_score?: number | null | undefined;
				away_score?: number | null | undefined;
				league?:
					| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
					| null
					| undefined;
				match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
				away_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				home_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				referee?:
					| {
							__typename?: 'referees';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
				man_of_the_match?:
					| {
							__typename?: 'players';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
			}>;
		}>;
	}>;
};

export type GetResultFixturesQueryVariables = Exact<{
	leagueId: Scalars['uuid'];
	teamId: Scalars['uuid'];
}>;

export type GetResultFixturesQuery = {
	__typename?: 'query_root';
	matches: Array<{
		__typename?: 'matches';
		id: any;
		date?: any | null | undefined;
		kick_off_time?: any | null | undefined;
		away_score?: number | null | undefined;
		home_score?: number | null | undefined;
		league?:
			| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
			| null
			| undefined;
		match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
		away_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		home_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		referee?:
			| {
					__typename?: 'referees';
					first_name?: string | null | undefined;
					last_name?: string | null | undefined;
			  }
			| null
			| undefined;
		man_of_the_match?:
			| {
					__typename?: 'players';
					first_name?: string | null | undefined;
					last_name?: string | null | undefined;
			  }
			| null
			| undefined;
	}>;
};

export type GetResultLeaguesQueryVariables = Exact<{
	teamId: Scalars['uuid'];
}>;

export type GetResultLeaguesQuery = {
	__typename?: 'query_root';
	leagues: Array<{
		__typename?: 'leagues';
		id: any;
		name?: string | null | undefined;
		type: 'leagues';
	}>;
	finals: Array<{
		__typename?: 'finals';
		id: any;
		name?: string | null | undefined;
		type: 'finals';
	}>;
};

export type GetAllResultFinalsQueryVariables = Exact<{
	finalId: Scalars['uuid'];
}>;

export type GetAllResultFinalsQuery = {
	__typename?: 'query_root';
	finals: Array<{
		__typename?: 'finals';
		group_stage: boolean;
		finals_groups: Array<{
			__typename?: 'finals_groups';
			matches: Array<{
				__typename?: 'matches';
				id: any;
				date?: any | null | undefined;
				kick_off_time?: any | null | undefined;
				postponed: boolean;
				home_score?: number | null | undefined;
				away_score?: number | null | undefined;
				league?:
					| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
					| null
					| undefined;
				match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
				away_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				home_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				referee?:
					| {
							__typename?: 'referees';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
				man_of_the_match?:
					| {
							__typename?: 'players';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
			}>;
		}>;
		finals_knockouts: Array<{
			__typename?: 'finals_knockouts';
			matches: Array<{
				__typename?: 'matches';
				id: any;
				name?: string | null | undefined;
				date?: any | null | undefined;
				kick_off_time?: any | null | undefined;
				postponed: boolean;
				home_score?: number | null | undefined;
				away_score?: number | null | undefined;
				league?:
					| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
					| null
					| undefined;
				match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
				away_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				home_team?:
					| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
					| null
					| undefined;
				referee?:
					| {
							__typename?: 'referees';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
				man_of_the_match?:
					| {
							__typename?: 'players';
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
			}>;
		}>;
	}>;
};

export type GetAllResultFixturesQueryVariables = Exact<{
	leagueId: Scalars['uuid'];
}>;

export type GetAllResultFixturesQuery = {
	__typename?: 'query_root';
	matches: Array<{
		__typename?: 'matches';
		id: any;
		date?: any | null | undefined;
		kick_off_time?: any | null | undefined;
		away_score?: number | null | undefined;
		home_score?: number | null | undefined;
		league?:
			| { __typename?: 'leagues'; id: any; display_name?: string | null | undefined }
			| null
			| undefined;
		match_comments: Array<{ __typename?: 'match_comments'; text: string }>;
		away_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		home_team?:
			| { __typename?: 'teams'; id: any; name: string; logo_url?: string | null | undefined }
			| null
			| undefined;
		referee?:
			| {
					__typename?: 'referees';
					first_name?: string | null | undefined;
					last_name?: string | null | undefined;
			  }
			| null
			| undefined;
		man_of_the_match?:
			| {
					__typename?: 'players';
					first_name?: string | null | undefined;
					last_name?: string | null | undefined;
			  }
			| null
			| undefined;
	}>;
};

export type GetResultLeagueForAllTeamsQueryVariables = Exact<{
	teamId: Array<Scalars['uuid']> | Scalars['uuid'];
}>;

export type GetResultLeagueForAllTeamsQuery = {
	__typename?: 'query_root';
	leagues: Array<{
		__typename?: 'leagues';
		id: any;
		name?: string | null | undefined;
		type: 'leagues';
	}>;
	finals: Array<{
		__typename?: 'finals';
		id: any;
		name?: string | null | undefined;
		type: 'finals';
	}>;
};

export type GetAttachedFinalAndMiniLeaguesQueryVariables = Exact<{
	leagueId: Scalars['uuid'];
}>;

export type GetAttachedFinalAndMiniLeaguesQuery = {
	__typename?: 'query_root';
	attachedFinals: Array<{
		__typename?: 'join_finals_leagues';
		final: {
			__typename?: 'finals';
			id: any;
			display_name?: string | null | undefined;
			color?: string | null | undefined;
			color_name?: string | null | undefined;
			kick_off_date?: any | null | undefined;
			join_finals_leagues: Array<{
				__typename?: 'join_finals_leagues';
				id: any;
				qualification_positions?: string | null | undefined;
			}>;
		};
	}>;
	attachedMiniLeagues: Array<{
		__typename?: 'join_leagues_mini_leagues';
		qualification_positions: string;
		mini_league: {
			__typename?: 'leagues';
			id: any;
			display_name?: string | null | undefined;
			kick_off_date?: any | null | undefined;
		};
	}>;
};

export type GetParentLeagueDataQueryVariables = Exact<{
	leagueId: Scalars['uuid'];
}>;

export type GetParentLeagueDataQuery = {
	__typename?: 'query_root';
	join_leagues_mini_leagues: Array<{
		__typename?: 'join_leagues_mini_leagues';
		id: any;
		league: {
			__typename?: 'leagues';
			display_name?: string | null | undefined;
			matches: Array<{
				__typename?: 'matches';
				id: any;
				name?: string | null | undefined;
				home_score?: number | null | undefined;
				away_score?: number | null | undefined;
				man_of_the_match?:
					| {
							__typename?: 'players';
							id: any;
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
				homeTeam?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
				awayTeam?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
			}>;
		};
	}>;
};

export type GetStandingLeaguesQueryVariables = Exact<{
	teamId: Scalars['uuid'];
}>;

export type GetStandingLeaguesQuery = {
	__typename?: 'query_root';
	leagues: Array<{
		__typename?: 'leagues';
		id: any;
		status?: string | null | undefined;
		league_type?: string | null | undefined;
		name?: string | null | undefined;
		type: 'leagues';
	}>;
	finals: Array<{
		__typename?: 'finals';
		id: any;
		status: string;
		name?: string | null | undefined;
		type: 'finals';
	}>;
};

export type GetStandingLeaguesForAllTeamsQueryVariables = Exact<{
	teamId: Array<Scalars['uuid']> | Scalars['uuid'];
}>;

export type GetStandingLeaguesForAllTeamsQuery = {
	__typename?: 'query_root';
	leagues: Array<{
		__typename?: 'leagues';
		id: any;
		name?: string | null | undefined;
		type: 'leagues';
	}>;
	finals: Array<{
		__typename?: 'finals';
		id: any;
		name?: string | null | undefined;
		type: 'finals';
	}>;
};

export type GetDeletedTeamsQueryVariables = Exact<{
	leagueId: Scalars['uuid'];
}>;

export type GetDeletedTeamsQuery = {
	__typename?: 'query_root';
	join_league_teams: Array<{
		__typename?: 'join_league_teams';
		id: any;
		deleted_at?: any | null | undefined;
		team?: { __typename?: 'teams'; id: any } | null | undefined;
	}>;
};

export type GetStandingsDataQueryVariables = Exact<{
	leagueId: Scalars['uuid'];
}>;

export type GetStandingsDataQuery = {
	__typename?: 'query_root';
	points: Array<{
		__typename?: 'join_league_teams';
		played_carried?: number | null | undefined;
		won_carried?: number | null | undefined;
		lost_carried?: number | null | undefined;
		drawn_carried?: number | null | undefined;
		gs_carried?: number | null | undefined;
		gd_carried?: number | null | undefined;
		points_carried?: number | null | undefined;
		team?: { __typename?: 'teams'; name: string } | null | undefined;
	}>;
	matches: Array<{
		__typename?: 'matches';
		id: any;
		name?: string | null | undefined;
		home_score?: number | null | undefined;
		away_score?: number | null | undefined;
		finals_group?: any | null | undefined;
		man_of_the_match?:
			| {
					__typename?: 'players';
					id: any;
					first_name?: string | null | undefined;
					last_name?: string | null | undefined;
			  }
			| null
			| undefined;
		homeTeam?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
		awayTeam?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
	}>;
	finals: Array<{
		__typename?: 'finals';
		finals_knockouts: Array<{
			__typename?: 'finals_knockouts';
			matches: Array<{
				__typename?: 'matches';
				id: any;
				name?: string | null | undefined;
				home_score?: number | null | undefined;
				away_score?: number | null | undefined;
				finals_group?: any | null | undefined;
				man_of_the_match?:
					| {
							__typename?: 'players';
							id: any;
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
				homeTeam?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
				awayTeam?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
			}>;
		}>;
		finals_groups: Array<{
			__typename?: 'finals_groups';
			matches: Array<{
				__typename?: 'matches';
				id: any;
				name?: string | null | undefined;
				home_score?: number | null | undefined;
				away_score?: number | null | undefined;
				finals_group?: any | null | undefined;
				man_of_the_match?:
					| {
							__typename?: 'players';
							id: any;
							first_name?: string | null | undefined;
							last_name?: string | null | undefined;
					  }
					| null
					| undefined;
				homeTeam?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
				awayTeam?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
			}>;
		}>;
	}>;
};

export type GetOtherFinalTeamsQueryVariables = Exact<{
	leagueId: Scalars['uuid'];
	playerTeams: Array<Scalars['uuid']> | Scalars['uuid'];
}>;

export type GetOtherFinalTeamsQuery = {
	__typename?: 'query_root';
	teams: Array<{
		__typename?: 'join_team_finals';
		team: { __typename?: 'teams'; id: any; name: string };
	}>;
};

export type GetOtherLeagueTeamsQueryVariables = Exact<{
	leagueId: Scalars['uuid'];
	playerTeams: Array<Scalars['uuid']> | Scalars['uuid'];
}>;

export type GetOtherLeagueTeamsQuery = {
	__typename?: 'query_root';
	teams: Array<{
		__typename?: 'join_league_teams';
		team?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
	}>;
};

export type GetSearchTeamsQueryVariables = Exact<{
	searchTerm: Scalars['String'];
}>;

export type GetSearchTeamsQuery = {
	__typename?: 'query_root';
	teams: Array<{ __typename?: 'teams'; id: any; name: string }>;
};

export type GetTeamByIdQueryVariables = Exact<{
	id: Scalars['uuid'];
}>;

export type GetTeamByIdQuery = {
	__typename?: 'query_root';
	teams: Array<{
		__typename?: 'teams';
		id: any;
		name: string;
		logo_url?: string | null | undefined;
	}>;
};

export type GetTeamCountryCodeQueryVariables = Exact<{
	id: Scalars['uuid'];
}>;

export type GetTeamCountryCodeQuery = {
	__typename?: 'query_root';
	teams: Array<{
		__typename?: 'teams';
		id: any;
		name: string;
		zendesk_id?: string | null | undefined;
		city?:
			| {
					__typename?: 'cities';
					country: { __typename?: 'countries'; id: any; name: string; code: string };
			  }
			| null
			| undefined;
	}>;
};

export type TeamViewQueryVariables = Exact<{
	teamId: Scalars['uuid'];
}>;

export type TeamViewQuery = {
	__typename?: 'query_root';
	teams: Array<{
		__typename?: 'teams';
		captain?: any | null | undefined;
		created_at: any;
		vice_captain?: any | null | undefined;
		logo_url?: string | null | undefined;
		name: string;
		player_type?: string | null | undefined;
		matchesByHomeTeam: Array<{
			__typename?: 'matches';
			away_score?: number | null | undefined;
			away_team?: any | null | undefined;
			date?: any | null | undefined;
			finals_group?: any | null | undefined;
			finals_knockout?: any | null | undefined;
			home_score?: number | null | undefined;
			home_team?: any | null | undefined;
			id: any;
			is_friendly: boolean;
			kick_off_time?: any | null | undefined;
			league?: any | null | undefined;
			man_of_the_match?: any | null | undefined;
			name?: string | null | undefined;
			pitchByPitch?:
				| {
						__typename?: 'pitches';
						id: any;
						name: number;
						pitch_name?: string | null | undefined;
						location: { __typename?: 'locations'; id: any; name: string };
				  }
				| null
				| undefined;
			referee?:
				| {
						__typename?: 'referees';
						id: any;
						first_name?: string | null | undefined;
						last_name?: string | null | undefined;
				  }
				| null
				| undefined;
		}>;
		matchesByAwayTeam: Array<{
			__typename?: 'matches';
			away_score?: number | null | undefined;
			away_team?: any | null | undefined;
			date?: any | null | undefined;
			finals_group?: any | null | undefined;
			finals_knockout?: any | null | undefined;
			home_score?: number | null | undefined;
			home_team?: any | null | undefined;
			id: any;
			is_friendly: boolean;
			kick_off_time?: any | null | undefined;
			league?: any | null | undefined;
			man_of_the_match?: any | null | undefined;
			name?: string | null | undefined;
			pitchByPitch?:
				| {
						__typename?: 'pitches';
						id: any;
						name: number;
						pitch_name?: string | null | undefined;
						location: { __typename?: 'locations'; id: any; name: string };
				  }
				| null
				| undefined;
			referee?:
				| {
						__typename?: 'referees';
						id: any;
						first_name?: string | null | undefined;
						last_name?: string | null | undefined;
				  }
				| null
				| undefined;
		}>;
		league_teams: Array<{
			__typename?: 'join_league_teams';
			id: any;
			points_carried?: number | null | undefined;
			gd_carried?: number | null | undefined;
			gs_carried?: number | null | undefined;
			played_carried?: number | null | undefined;
			drawn_carried?: number | null | undefined;
			lost_carried?: number | null | undefined;
			won_carried?: number | null | undefined;
			league: {
				__typename?: 'leagues';
				id: any;
				status?: string | null | undefined;
				display_name?: string | null | undefined;
				kick_off_date?: any | null | undefined;
				matches: Array<{
					__typename?: 'matches';
					id: any;
					home_team?: any | null | undefined;
					away_team?: any | null | undefined;
					home_score?: number | null | undefined;
					away_score?: number | null | undefined;
					homeTeam?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
					awayTeam?: { __typename?: 'teams'; id: any; name: string } | null | undefined;
				}>;
			};
		}>;
	}>;
};

export type GetUpcomingLeagueQueryVariables = Exact<{
	teamId: Array<Scalars['uuid']> | Scalars['uuid'];
	query: Date_Comparison_Exp;
}>;

export type GetUpcomingLeagueQuery = {
	__typename?: 'query_root';
	matches: Array<{
		__typename?: 'matches';
		home_team?: any | null | undefined;
		away_team?: any | null | undefined;
		league?:
			| { __typename?: 'leagues'; id: any; name?: string | null | undefined; type: 'leagues' }
			| null
			| undefined;
	}>;
};

export interface PossibleTypesResultData {
	possibleTypes: {
		[key: string]: string[];
	};
}
const result: PossibleTypesResultData = {
	possibleTypes: {},
};
export default result;
