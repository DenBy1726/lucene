import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import moment from "moment"
import getStore from "./util/store";
import {App} from "./layout/App";

moment.locale('ru');
moment.defaultFormat = "yyyy-MM-DDTHH:mm:ss";

const rootElement = document.getElementById("app");
const store = getStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
           <App/>
        </BrowserRouter>
    </Provider>,
    rootElement
);

