import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Admin, Resource, ListGuesser } from 'react-admin';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from "@apollo/client/link/context";


import './App.css';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {

  return (
    <ApolloProvider client={client}>
      <div>
        <Outlet />
      </div>
      <Footer />
    </ApolloProvider>
  )
}

export default App;
