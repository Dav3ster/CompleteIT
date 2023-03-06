import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TODO = gql`
  mutation addToDo($toDoText: String!) {
    addToDo(toDoText: $toDoText) {
      _id
      date
      toDoAuthor
      title
      description
      priority
    }
  }
`;

export const EDIT_TODO = gql`
  mutation editToDo($toDoText: String!) {
    editToDo(toDoText: $toDoText) {
      _id
      date
      toDoAuthor
      title
      description
      priority
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteToDo($toDoText: String!) {
    deleteToDo(toDoText: $toDoText) {
      _id
      date
      toDoAuthor
      title
      description
      priority
    }
  }
`;
