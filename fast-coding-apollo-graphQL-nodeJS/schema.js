import resolvers from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = [`
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
  type Query {
    allCourses: [Course]
	course(id:Int!): Course
  }
`]

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

export default schema;
