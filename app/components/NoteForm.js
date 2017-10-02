import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem} from '../actions.js';

class NoteForm extends React.Component{
  	handleSubmit(e){
  		e.preventDefault()
  		let {dispatch} = this.props;
  		dispatch(addItem(this.refs.txt.value));
  		dispatch(toggle());
  	}

  	toggle(){
  		let {dispatch} = this.props
  		dispatch(toggle())
  	}

  	render(){
  		if(this.props.isAdded)
		    return (
		    	<form onSubmit={this.handleSubmit.bind(this)}>
		    		<input type="text" ref='txt' />
		    		<button>Add</button>
		    	</form>
		    )

		return <button onClick={this.toggle.bind(this)}>+</button>
  	}
}


module.exports = connect(state => {
	return{isAdded: state.isInsert}
})(NoteForm);
