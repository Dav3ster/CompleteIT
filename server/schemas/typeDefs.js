// const { gql } = require ('graphql-tag');
const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    todos: [Todo]!
  }

  type Todo {
    _id: ID
    date: Int
    title: String
    description: String
    priority: String
  }

 
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    todos(username: String): [Todo]
    todo(todoId: ID!): Todo
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTodo( date: Int, title: String, description: String, priority: String): Todo
    editTodo( date: Int, title: String, description: String, priority: String): Todo
    deleteTodo(todoId: ID!): Todo
    
  }
`;

module.exports = typeDefs;
