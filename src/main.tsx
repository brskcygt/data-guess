import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  ApolloClient,InMemoryCache,ApolloProvider,
} from "@apollo/client";
import './index.css';

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql", //Specifies the URL of our GraphQL server.
  cache: new InMemoryCache(), //Apollo Client uses to cache query results after fetching them.
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
