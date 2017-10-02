var redux = require('redux');
import reducer from './reducers';

let store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension? window.devToolsExtension(): f => f
))

module.exports = store;