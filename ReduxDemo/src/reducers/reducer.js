import * as actionTypes from "../constants/actionTypes";

const initialState= {
	counter: 0
}

export default function stateReducer(state= initialState, action){
	switch(action.type){
		case actionTypes.INCREMENT_COUNTER:
			console.log(1/0);
			return Object.assign({}, ...state, {counter: state.counter + 1});

		case actionTypes.DECREMENT_COUNTER:
			console.log(state);
			return Object.assign({}, ...state, {counter: state.counter - 1});

		case actionTypes.RESET_COUNTER:
			console.log(state);
			return Object.assign({}, ...state, {counter: 0});
		
		default:
			return state;
	}
}