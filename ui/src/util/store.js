import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import reducer from '../reducers';
import history from './history';

export default function configureStore() {
  const store = createStore(
        reducer(history),
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
            ),
        ),
  )

  return store;
}