import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const REMOVE_USER = gql`
mutation removeUser {
  removeUser {
    _id
    firstName
    lastName
  }
}
`;

export const CREATE_RSVP = gql`
mutation CreateRSVP($name: String!, $email: String!, $attending: Boolean!, $guests: Int!, $address: String!) {
  createRSVP(name: $name, email: $email, attending: $attending, guests: $guests, address: $address) {
  id
  name
  email
  attending
  guests
  address
  }
}
`;