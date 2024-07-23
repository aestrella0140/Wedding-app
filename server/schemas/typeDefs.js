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

type Query {
users: [User]!
user(userId: ID!): User
me: User
}

type Mutation {
addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
updateUser(firstName: String, lastName: String, email: String, password: String): User
login(email: String!, password: String!): Auth
removeUser(userId: ID!): User
}
`;

module.exports = typeDefs;
