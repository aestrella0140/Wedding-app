import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_GETRSVPS = gql`
  query GetRSVPs {
    rsvps {
      _id
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
