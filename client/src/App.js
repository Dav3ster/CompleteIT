import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// commented out pages & components for now - david
import Header from "./components/header";
import Home from "./pages/Home.js";
// import Login from './pages/Log';
import Footer from "./components/footer";
// import MyToDo from "./components/myToDo";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

import "./reset.css"

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
    <div>
      <Router>
        <ApolloProvider client={client}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </ApolloProvider>
      </Router>
    </div>
  );
}

export default App;
