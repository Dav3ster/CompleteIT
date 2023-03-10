import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      todos {
        _id
        date
        title
        description
        priority
      
      }
    }
  }
`;
export const QUERY_ALL_TODOS = gql`
query getAllTodos 
todos {
  _id
  date
  title
  description
  priority
}
`

export const QUERY_TODOS = gql`
  query getTodos {$username: ID!}
   todos (username: $username) {
      _id
      date
      title
      description
      priority
      
    }
  }
`;

export const QUERY_SINGLE_TODO = gql`
  query getSingleTodo($todoId: ID!) {
    todo(todoId: $todoId) {
      _id
      date
      title
      description
      priority
      
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      todos {
        _id
        date
        title
        description
        priority
      }
    }
  }
`;
