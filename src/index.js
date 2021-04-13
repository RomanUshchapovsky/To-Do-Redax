import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./store/rootStore";
import {ContextContainer} from "./Context/ContextContainer";


ReactDOM.render(
    <Provider store={store}>
        <ContextContainer>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </ContextContainer>
    </Provider>,
    document.getElementById('root')
);
