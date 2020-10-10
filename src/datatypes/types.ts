export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  createPhoto: Photo;
};


export type MutationCreateUserArgs = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  location: Scalars['String'];
  department: Scalars['String'];
  is_admin: Scalars['Boolean'];
  register_date: Scalars['Date'];
};


export type MutationCreatePhotoArgs = {
  albumId: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};

export type Photo = {
  __typename?: 'Photo';
  id?: Maybe<Scalars['Int']>;
  albumId: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<Maybe<User>>;
  photos: Array<Maybe<Photo>>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  location: Scalars['String'];
  department: Scalars['String'];
  is_admin: Scalars['Boolean'];
  register_date: Scalars['Date'];
};
