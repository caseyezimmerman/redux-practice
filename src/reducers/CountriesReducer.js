export default function(state=[],action){
	if(action.type === 'ADD_COUNTRY'){
		var newState = [...state]
		console.log(newState)
		newState.push(action.payload)
		// console.log(newState)
		return newState
	}else{
		return state;
	}
}