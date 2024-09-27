const typeDefs = `
type User {
_id: ID
firstName: String
lastName: String
email: String
}

type Auth {
token: ID!
type: String
}

type Error {
path: Sting!
message: String!
}

type RSVP {
id: ID!
name: String!
email: String!
attending: Boolean!
guests: Int!
address: String!
city: String!
state: String!
zip: Number!
}

type Query {
users: [User]!
user(userId: ID!): User
me: User
getRSVP: [RSVP]
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    addRSVP(name: String!, email: String!, attending: Boolean!, guest: Int!, address: String!, city: String!,
    state: String!, zip: Int!): RSVP
}
`;

module.exports = typeDefs;
