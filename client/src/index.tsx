import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {Provider} from 'react-redux';
import store from '@/app/store';

const client = new ApolloClient({
    uri: "https://techlife-api.herokuapp.com/graphql/v1",
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store} >
        <ApolloProvider client={client}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
