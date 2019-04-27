import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import document from './document';

export default (history) => combineReducers({
    router: connectRouter(history),
    document
});
