import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query allUsers {
    users {
      id
      firstName
      lastName
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      id
      firstName
      lastName
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      id
      firstName
      lastName
    }
  }
`;

export const GET_RSVPS = gql`
  query GetRSVPs {
    getRSVPs {
      id
      name
      email
      attending
      guests
      address
      city
      state
      zip
    }
  }
`;
