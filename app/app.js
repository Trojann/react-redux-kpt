var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List');
var {Provider} = require('react-redux');
var store = require('./store.js');
ReactDOM.render(
    <Provider store={store}>
    	<List/>
    </Provider>,
  document.getElementById('root')
);
