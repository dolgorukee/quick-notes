import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  Any: any;
  Bytes: any;
  Date: any;
  File: any;
  Object: any;
  Upload: any;
};

export type Acl = {
  __typename?: 'ACL';
  public?: Maybe<PublicAcl>;
  roles?: Maybe<Array<RoleAcl>>;
  users?: Maybe<Array<UserAcl>>;
};

export type AclInput = {
  public?: InputMaybe<PublicAclInput>;
  roles?: InputMaybe<Array<RoleAclInput>>;
  users?: InputMaybe<Array<UserAclInput>>;
};

export type ArrayResult = Element | Note | Role | User;

export type ArrayWhereInput = {
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  contains?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  equalTo?: InputMaybe<Scalars['Any']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['Any']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Any']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Any']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Any']>;
  notEqualTo?: InputMaybe<Scalars['Any']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type BooleanWhereInput = {
  equalTo?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  inQueryKey?: InputMaybe<SelectInput>;
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type BoxInput = {
  bottomLeft: GeoPointInput;
  upperRight: GeoPointInput;
};

export type BytesWhereInput = {
  equalTo?: InputMaybe<Scalars['Bytes']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['Bytes']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Bytes']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Bytes']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Bytes']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Bytes']>;
  notEqualTo?: InputMaybe<Scalars['Bytes']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Bytes']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type CenterSphereInput = {
  center: GeoPointInput;
  distance: Scalars['Float'];
};

export type Class = {
  __typename?: 'Class';
  name: Scalars['String'];
  schemaFields: Array<SchemaField>;
};

export type CreateClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};

export type CreateClassPayload = {
  __typename?: 'CreateClassPayload';
  class: Class;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateFileInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  upload: Scalars['Upload'];
};

export type CreateFilePayload = {
  __typename?: 'CreateFilePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  fileInfo: FileInfo;
};

export type CreateNoteFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  content: Scalars['String'];
};

export type CreateNoteInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<CreateNoteFieldsInput>;
};

export type CreateNotePayload = {
  __typename?: 'CreateNotePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  note: Note;
};

export type CreateRoleFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  name?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelationInput>;
  users?: InputMaybe<UserRelationInput>;
};

export type CreateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<CreateRoleFieldsInput>;
};

export type CreateRolePayload = {
  __typename?: 'CreateRolePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  role: Role;
};

export type CreateUserFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  authData?: InputMaybe<Scalars['Object']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<CreateUserFieldsInput>;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user: User;
};

export type DateWhereInput = {
  equalTo?: InputMaybe<Scalars['Date']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['Date']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Date']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  notEqualTo?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type DeleteClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DeleteClassPayload = {
  __typename?: 'DeleteClassPayload';
  class: Class;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteNoteInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteNotePayload = {
  __typename?: 'DeleteNotePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  note: Note;
};

export type DeleteRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteRolePayload = {
  __typename?: 'DeleteRolePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  role: Role;
};

export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user: User;
};

export type Element = {
  __typename?: 'Element';
  value: Scalars['Any'];
};

export type FileInfo = {
  __typename?: 'FileInfo';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type FileInput = {
  file?: InputMaybe<Scalars['File']>;
  unlink?: InputMaybe<Scalars['Boolean']>;
  upload?: InputMaybe<Scalars['Upload']>;
};

export type FileWhereInput = {
  equalTo?: InputMaybe<Scalars['File']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['File']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['File']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['File']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['File']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['File']>;
  matchesRegex?: InputMaybe<Scalars['String']>;
  notEqualTo?: InputMaybe<Scalars['File']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['File']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
  options?: InputMaybe<Scalars['String']>;
};

export type GeoIntersectsInput = {
  point?: InputMaybe<GeoPointInput>;
};

export type GeoPoint = {
  __typename?: 'GeoPoint';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type GeoPointInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type GeoPointWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  geoWithin?: InputMaybe<GeoWithinInput>;
  maxDistance?: InputMaybe<Scalars['Float']>;
  maxDistanceInKilometers?: InputMaybe<Scalars['Float']>;
  maxDistanceInMiles?: InputMaybe<Scalars['Float']>;
  maxDistanceInRadians?: InputMaybe<Scalars['Float']>;
  nearSphere?: InputMaybe<GeoPointInput>;
  within?: InputMaybe<WithinInput>;
};

export type GeoWithinInput = {
  centerSphere?: InputMaybe<CenterSphereInput>;
  polygon?: InputMaybe<Array<GeoPointInput>>;
};

export type IdWhereInput = {
  equalTo?: InputMaybe<Scalars['ID']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['ID']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['ID']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['ID']>;
  notEqualTo?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type KeyValueInput = {
  key: Scalars['String'];
  value: Scalars['Any'];
};

export type LogInInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LogInPayload = {
  __typename?: 'LogInPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  viewer: Viewer;
};

export type LogInWithInput = {
  authData: Scalars['Object'];
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<UserLoginWithInput>;
};

export type LogInWithPayload = {
  __typename?: 'LogInWithPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  viewer: Viewer;
};

export type LogOutInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type LogOutPayload = {
  __typename?: 'LogOutPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createClass?: Maybe<CreateClassPayload>;
  createFile?: Maybe<CreateFilePayload>;
  createNote?: Maybe<CreateNotePayload>;
  createRole?: Maybe<CreateRolePayload>;
  createUser?: Maybe<CreateUserPayload>;
  deleteClass?: Maybe<DeleteClassPayload>;
  deleteNote?: Maybe<DeleteNotePayload>;
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  logIn?: Maybe<LogInPayload>;
  logInWith?: Maybe<LogInWithPayload>;
  logOut?: Maybe<LogOutPayload>;
  resetPassword?: Maybe<ResetPasswordPayload>;
  sendVerificationEmail?: Maybe<SendVerificationEmailPayload>;
  signUp?: Maybe<SignUpPayload>;
  updateClass?: Maybe<UpdateClassPayload>;
  updateNote?: Maybe<UpdateNotePayload>;
  updateRole?: Maybe<UpdateRolePayload>;
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationCreateClassArgs = {
  input: CreateClassInput;
};


export type MutationCreateFileArgs = {
  input: CreateFileInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteClassArgs = {
  input: DeleteClassInput;
};


export type MutationDeleteNoteArgs = {
  input: DeleteNoteInput;
};


export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationLogInArgs = {
  input: LogInInput;
};


export type MutationLogInWithArgs = {
  input: LogInWithInput;
};


export type MutationLogOutArgs = {
  input: LogOutInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendVerificationEmailArgs = {
  input: SendVerificationEmailInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateClassArgs = {
  input: UpdateClassInput;
};


export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type Note = Node & ParseObject & {
  __typename?: 'Note';
  ACL: Acl;
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  objectId: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type NoteConnection = {
  __typename?: 'NoteConnection';
  count: Scalars['Int'];
  edges?: Maybe<Array<Maybe<NoteEdge>>>;
  pageInfo: PageInfo;
};

export type NoteEdge = {
  __typename?: 'NoteEdge';
  cursor: Scalars['String'];
  node?: Maybe<Note>;
};

export enum NoteOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NotePointerInput = {
  createAndLink?: InputMaybe<CreateNoteFieldsInput>;
  link?: InputMaybe<Scalars['ID']>;
};

export type NoteRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']>>;
  createAndAdd?: InputMaybe<Array<CreateNoteFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

export type NoteRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  have?: InputMaybe<NoteWhereInput>;
  haveNot?: InputMaybe<NoteWhereInput>;
};

export type NoteWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<NoteWhereInput>>;
  NOR?: InputMaybe<Array<NoteWhereInput>>;
  OR?: InputMaybe<Array<NoteWhereInput>>;
  content?: InputMaybe<StringWhereInput>;
  createdAt?: InputMaybe<DateWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
};

export type NumberWhereInput = {
  equalTo?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['Float']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['Float']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']>;
  notEqualTo?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type ObjectWhereInput = {
  equalTo?: InputMaybe<KeyValueInput>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<KeyValueInput>;
  greaterThanOrEqualTo?: InputMaybe<KeyValueInput>;
  in?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<KeyValueInput>;
  lessThanOrEqualTo?: InputMaybe<KeyValueInput>;
  notEqualTo?: InputMaybe<KeyValueInput>;
  notIn?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type ParseObject = {
  ACL: Acl;
  createdAt: Scalars['Date'];
  objectId: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type PointerFieldInput = {
  name: Scalars['String'];
  targetClassName: Scalars['String'];
};

export type PolygonWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  geoIntersects?: InputMaybe<GeoIntersectsInput>;
};

export type PublicAcl = {
  __typename?: 'PublicACL';
  read?: Maybe<Scalars['Boolean']>;
  write?: Maybe<Scalars['Boolean']>;
};

export type PublicAclInput = {
  read: Scalars['Boolean'];
  write: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  class: Class;
  classes: Array<Class>;
  health: Scalars['Boolean'];
  node?: Maybe<Node>;
  note: Note;
  notes: NoteConnection;
  role: Role;
  roles: RoleConnection;
  user: User;
  users: UserConnection;
  viewer: Viewer;
};


export type QueryClassArgs = {
  name: Scalars['String'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNoteArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QueryNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<NoteOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NoteWhereInput>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type ReadOptionsInput = {
  includeReadPreference?: InputMaybe<ReadPreference>;
  readPreference?: InputMaybe<ReadPreference>;
  subqueryReadPreference?: InputMaybe<ReadPreference>;
};

export enum ReadPreference {
  Nearest = 'NEAREST',
  Primary = 'PRIMARY',
  PrimaryPreferred = 'PRIMARY_PREFERRED',
  Secondary = 'SECONDARY',
  SecondaryPreferred = 'SECONDARY_PREFERRED'
}

export type RelationFieldInput = {
  name: Scalars['String'];
  targetClassName: Scalars['String'];
};

export type ResetPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Role = Node & ParseObject & {
  __typename?: 'Role';
  ACL: Acl;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  objectId: Scalars['ID'];
  roles: RoleConnection;
  updatedAt: Scalars['Date'];
  users: UserConnection;
};


export type RoleRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type RoleAcl = {
  __typename?: 'RoleACL';
  read: Scalars['Boolean'];
  roleName: Scalars['ID'];
  write: Scalars['Boolean'];
};

export type RoleAclInput = {
  read: Scalars['Boolean'];
  roleName: Scalars['String'];
  write: Scalars['Boolean'];
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  count: Scalars['Int'];
  edges?: Maybe<Array<Maybe<RoleEdge>>>;
  pageInfo: PageInfo;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor: Scalars['String'];
  node?: Maybe<Role>;
};

export enum RoleOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  RolesAsc = 'roles_ASC',
  RolesDesc = 'roles_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsersAsc = 'users_ASC',
  UsersDesc = 'users_DESC'
}

export type RolePointerInput = {
  createAndLink?: InputMaybe<CreateRoleFieldsInput>;
  link?: InputMaybe<Scalars['ID']>;
};

export type RoleRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']>>;
  createAndAdd?: InputMaybe<Array<CreateRoleFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

export type RoleRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  have?: InputMaybe<RoleWhereInput>;
  haveNot?: InputMaybe<RoleWhereInput>;
};

export type RoleWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOR?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  createdAt?: InputMaybe<DateWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  name?: InputMaybe<StringWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  roles?: InputMaybe<RoleRelationWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
  users?: InputMaybe<UserRelationWhereInput>;
};

export type SchemaAclField = SchemaField & {
  __typename?: 'SchemaACLField';
  name: Scalars['String'];
};

export type SchemaArrayField = SchemaField & {
  __typename?: 'SchemaArrayField';
  name: Scalars['String'];
};

export type SchemaArrayFieldInput = {
  name: Scalars['String'];
};

export type SchemaBooleanField = SchemaField & {
  __typename?: 'SchemaBooleanField';
  name: Scalars['String'];
};

export type SchemaBooleanFieldInput = {
  name: Scalars['String'];
};

export type SchemaBytesField = SchemaField & {
  __typename?: 'SchemaBytesField';
  name: Scalars['String'];
};

export type SchemaBytesFieldInput = {
  name: Scalars['String'];
};

export type SchemaDateField = SchemaField & {
  __typename?: 'SchemaDateField';
  name: Scalars['String'];
};

export type SchemaDateFieldInput = {
  name: Scalars['String'];
};

export type SchemaField = {
  name: Scalars['String'];
};

export type SchemaFieldInput = {
  name: Scalars['String'];
};

export type SchemaFieldsInput = {
  addArrays?: InputMaybe<Array<SchemaArrayFieldInput>>;
  addBooleans?: InputMaybe<Array<SchemaBooleanFieldInput>>;
  addBytes?: InputMaybe<Array<SchemaBytesFieldInput>>;
  addDates?: InputMaybe<Array<SchemaDateFieldInput>>;
  addFiles?: InputMaybe<Array<SchemaFileFieldInput>>;
  addGeoPoint?: InputMaybe<SchemaGeoPointFieldInput>;
  addNumbers?: InputMaybe<Array<SchemaNumberFieldInput>>;
  addObjects?: InputMaybe<Array<SchemaObjectFieldInput>>;
  addPointers?: InputMaybe<Array<PointerFieldInput>>;
  addPolygons?: InputMaybe<Array<SchemaPolygonFieldInput>>;
  addRelations?: InputMaybe<Array<RelationFieldInput>>;
  addStrings?: InputMaybe<Array<SchemaStringFieldInput>>;
  remove?: InputMaybe<Array<SchemaFieldInput>>;
};

export type SchemaFileField = SchemaField & {
  __typename?: 'SchemaFileField';
  name: Scalars['String'];
};

export type SchemaFileFieldInput = {
  name: Scalars['String'];
};

export type SchemaGeoPointField = SchemaField & {
  __typename?: 'SchemaGeoPointField';
  name: Scalars['String'];
};

export type SchemaGeoPointFieldInput = {
  name: Scalars['String'];
};

export type SchemaNumberField = SchemaField & {
  __typename?: 'SchemaNumberField';
  name: Scalars['String'];
};

export type SchemaNumberFieldInput = {
  name: Scalars['String'];
};

export type SchemaObjectField = SchemaField & {
  __typename?: 'SchemaObjectField';
  name: Scalars['String'];
};

export type SchemaObjectFieldInput = {
  name: Scalars['String'];
};

export type SchemaPointerField = SchemaField & {
  __typename?: 'SchemaPointerField';
  name: Scalars['String'];
  targetClassName: Scalars['String'];
};

export type SchemaPolygonField = SchemaField & {
  __typename?: 'SchemaPolygonField';
  name: Scalars['String'];
};

export type SchemaPolygonFieldInput = {
  name: Scalars['String'];
};

export type SchemaRelationField = SchemaField & {
  __typename?: 'SchemaRelationField';
  name: Scalars['String'];
  targetClassName: Scalars['String'];
};

export type SchemaStringField = SchemaField & {
  __typename?: 'SchemaStringField';
  name: Scalars['String'];
};

export type SchemaStringFieldInput = {
  name: Scalars['String'];
};

export type SearchInput = {
  caseSensitive?: InputMaybe<Scalars['Boolean']>;
  diacriticSensitive?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Scalars['String']>;
  term: Scalars['String'];
};

export type SelectInput = {
  key: Scalars['String'];
  query: SubqueryInput;
};

export type SendVerificationEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

export type SendVerificationEmailPayload = {
  __typename?: 'SendVerificationEmailPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SignUpInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<CreateUserFieldsInput>;
};

export type SignUpPayload = {
  __typename?: 'SignUpPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  viewer: Viewer;
};

export type StringWhereInput = {
  equalTo?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greaterThan?: InputMaybe<Scalars['String']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  inQueryKey?: InputMaybe<SelectInput>;
  lessThan?: InputMaybe<Scalars['String']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  matchesRegex?: InputMaybe<Scalars['String']>;
  notEqualTo?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notInQueryKey?: InputMaybe<SelectInput>;
  options?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<TextInput>;
};

export type SubqueryInput = {
  className: Scalars['String'];
  where: Scalars['Object'];
};

export type TextInput = {
  search: SearchInput;
};

export type UpdateClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};

export type UpdateClassPayload = {
  __typename?: 'UpdateClassPayload';
  class: Class;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateNoteFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  content?: InputMaybe<Scalars['String']>;
};

export type UpdateNoteInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<UpdateNoteFieldsInput>;
  id: Scalars['ID'];
};

export type UpdateNotePayload = {
  __typename?: 'UpdateNotePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  note: Note;
};

export type UpdateRoleFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  name?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<RoleRelationInput>;
  users?: InputMaybe<UserRelationInput>;
};

export type UpdateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<UpdateRoleFieldsInput>;
  id: Scalars['ID'];
};

export type UpdateRolePayload = {
  __typename?: 'UpdateRolePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  role: Role;
};

export type UpdateUserFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  authData?: InputMaybe<Scalars['Object']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<UpdateUserFieldsInput>;
  id: Scalars['ID'];
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user: User;
};

export type User = Node & ParseObject & {
  __typename?: 'User';
  ACL: Acl;
  authData?: Maybe<Scalars['Object']>;
  createdAt: Scalars['Date'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  objectId: Scalars['ID'];
  updatedAt: Scalars['Date'];
  username?: Maybe<Scalars['String']>;
};

export type UserAcl = {
  __typename?: 'UserACL';
  read: Scalars['Boolean'];
  userId: Scalars['ID'];
  write: Scalars['Boolean'];
};

export type UserAclInput = {
  read: Scalars['Boolean'];
  userId: Scalars['ID'];
  write: Scalars['Boolean'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  count: Scalars['Int'];
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node?: Maybe<User>;
};

export type UserLoginWithInput = {
  ACL?: InputMaybe<AclInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
};

export enum UserOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  AuthDataAsc = 'authData_ASC',
  AuthDataDesc = 'authData_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailVerifiedAsc = 'emailVerified_ASC',
  EmailVerifiedDesc = 'emailVerified_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC'
}

export type UserPointerInput = {
  createAndLink?: InputMaybe<CreateUserFieldsInput>;
  link?: InputMaybe<Scalars['ID']>;
};

export type UserRelationInput = {
  add?: InputMaybe<Array<Scalars['ID']>>;
  createAndAdd?: InputMaybe<Array<CreateUserFieldsInput>>;
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

export type UserRelationWhereInput = {
  exists?: InputMaybe<Scalars['Boolean']>;
  have?: InputMaybe<UserWhereInput>;
  haveNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  ACL?: InputMaybe<ObjectWhereInput>;
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOR?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  authData?: InputMaybe<ObjectWhereInput>;
  createdAt?: InputMaybe<DateWhereInput>;
  email?: InputMaybe<StringWhereInput>;
  emailVerified?: InputMaybe<BooleanWhereInput>;
  id?: InputMaybe<IdWhereInput>;
  objectId?: InputMaybe<IdWhereInput>;
  password?: InputMaybe<StringWhereInput>;
  updatedAt?: InputMaybe<DateWhereInput>;
  username?: InputMaybe<StringWhereInput>;
};

export type Viewer = {
  __typename?: 'Viewer';
  sessionToken: Scalars['String'];
  user: User;
};

export type WithinInput = {
  box: BoxInput;
};

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'SignUpPayload', viewer: { __typename?: 'Viewer', sessionToken: string, user: { __typename: 'User', id: string, username?: string | null } } } | null };

export type LogInMutationVariables = Exact<{
  input: LogInInput;
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn?: { __typename?: 'LogInPayload', viewer: { __typename?: 'Viewer', sessionToken: string, user: { __typename: 'User', id: string, username?: string | null } } } | null };

export type UserFieldsFragment = { __typename: 'User', id: string, username?: string | null };

export type CreateNoteMutationVariables = Exact<{
  input: CreateNoteInput;
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', createNote?: { __typename: 'CreateNotePayload', note: { __typename: 'Note', id: string, content: string } } | null };

export type UpdateNoteMutationVariables = Exact<{
  input: UpdateNoteInput;
}>;


export type UpdateNoteMutation = { __typename?: 'Mutation', updateNote?: { __typename: 'UpdateNotePayload', note: { __typename: 'Note', id: string, content: string } } | null };

export type DeleteNoteMutationVariables = Exact<{
  input: DeleteNoteInput;
}>;


export type DeleteNoteMutation = { __typename?: 'Mutation', deleteNote?: { __typename: 'DeleteNotePayload', note: { __typename: 'Note', id: string, content: string } } | null };

export type GetNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotesQuery = { __typename?: 'Query', notes: { __typename: 'NoteConnection', count: number, edges?: Array<{ __typename: 'NoteEdge', cursor: string, node?: { __typename: 'Note', id: string, content: string } | null } | null> | null } };

export type NoteFieldsFragment = { __typename: 'Note', id: string, content: string };

export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const NoteFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<NoteFieldsFragment, unknown>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}}]}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const LogInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LogInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}}]}}]}}]}},...UserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<LogInMutation, LogInMutationVariables>;
export const CreateNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},...NoteFieldsFragmentDoc.definitions]} as unknown as DocumentNode<CreateNoteMutation, CreateNoteMutationVariables>;
export const UpdateNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},...NoteFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const DeleteNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},...NoteFieldsFragmentDoc.definitions]} as unknown as DocumentNode<DeleteNoteMutation, DeleteNoteMutationVariables>;
export const GetNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},...NoteFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetNotesQuery, GetNotesQueryVariables>;