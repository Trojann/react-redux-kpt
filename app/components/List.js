import React from 'react';
import Note from './Note'
import NoteForm from './NoteForm'
import {connect} from 'react-redux'
class List extends React.Component{
	addNote(note) {
		let {mang} = this.state
		mang.push(note)
		this.setState({mang})
	}
	remove(index) {
		let {mang} = this.state
		mang.splice(index,1)
		this.setState({mang})
	}
  	render(){
	    return (
	    	<div>
	    		<NoteForm />
	    		{this.props.mang.map((e,i) => <Note
	    			index={i} 
	    			key={i}>{e}</Note>)}
	    	</div>
	    )
  	}
}

module.exports = connect(state => {
	return{mang: state.mang}
})(List);
