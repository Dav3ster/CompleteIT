import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// commented out pages & components for now - david
import Header from "./components/header";
import Home from "./pages/Home";
import loginSignup from "./pages/LoginSignup";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
     <ApolloProvider client={client}>
       <Header />
     <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/LoginSignup" element={<LoginSignup />} /> */}
        </Routes>
    </Router>
     </ApolloProvider>
  );
}

export default App;
