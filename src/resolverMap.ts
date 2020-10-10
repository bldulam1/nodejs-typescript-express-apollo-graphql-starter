import { createPhoto, createPhotosTable } from './resolvers/photos/photos.mutation'
import { getPhoto, getPhotos } from './resolvers/photos/photos.queries'

import { IResolvers } from 'graphql-tools'
import createUser from './resolvers/users/createUser'
import getUsers from './resolvers/users/getUsers'

const resolverMap: IResolvers = {
  Query: {
    users: getUsers,
    photos: getPhotos,
    photo: getPhoto,
  },
  Mutation: {
    createUser,
    createPhoto,
    createPhotosTable,
  },
}

export default resolverMap
