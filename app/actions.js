function addItem(item) {
	return {
		type: 'ADD_ITEM',
		item
	}
}

function removeItem(index) {
	return {
		type: 'REMOVE_ITEM',
		index
	}
}
function toggle() {
	return {type: 'TOGGLE_IS_ADDED'}
}
module.exports = {addItem, removeItem, toggle};