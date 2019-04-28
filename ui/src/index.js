import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import getStore from "./util/store";
import history from "./util/history";
import { ConnectedRouter } from 'connected-react-router'
import App from "./layout/App";
import moment from "moment";


moment.locale('ru');
moment.defaultFormat = "yyyy-MM-DDTHH:mm:ss";

const rootElement = document.getElementById("app");
const store = getStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
           <App/>
        </ConnectedRouter>
    </Provider>,
    rootElement
);

