const {ApolloServer, gql} = require('apollo-server');


const server = new ApolloServer();

const typeDefs = gql`
type Session {
    id:ID!
    title:String!,
    description:String,
    startsAt:String,
    endsAt:String,
    room:String,
    day:String,
    format:String,
    track:String,
    level:String
}`

server
    .listen({port: process.env.PORT || 4000})
    .then(({url}) => {
        console.log(`graphQL running at ${url}`);
    })

