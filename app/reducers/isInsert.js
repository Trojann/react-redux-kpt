let isInsertReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_IS_ADDED':
			return !state	
		default:
			return state
	}
}

module.exports = isInsertReducer;