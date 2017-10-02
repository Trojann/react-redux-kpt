var redux = require('redux');
var mangReducer = require('./mang.js');
var isInsertReducer = require('./isInsert.js');

let reducer = redux.combineReducers({
	mang: mangReducer,
	isInsert: isInsertReducer
});

module.exports = reducer;