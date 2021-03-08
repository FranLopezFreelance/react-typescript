import { useReducer } from 'react';

const initialState = {
	counter: 10
};

type counterActions =
	| {
			type: 'INCREMENT';
		}
	| {
			type: 'DECREMENT';
		}
	| {
			type: 'RESET';
			payload: number;
		};

const counterReducer = (state: typeof initialState, action: counterActions) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + 1
			};
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1
			};
		case 'RESET':
			return {
				...state,
				counter: action.payload
			};
		default:
			return state;
	}
};

export const CounterRed = () => {
	const [ { counter }, dispatch ] = useReducer(counterReducer, initialState);
	return (
		<div>
			<h3>Contador: {counter}</h3>

			<button className='btn btn-outline-warning' onClick={() => dispatch({ type: 'INCREMENT' })}>
				+1
			</button>

			<button className='btn btn-outline-warning' onClick={() => dispatch({ type: 'DECREMENT' })}>
				-1
			</button>
			<button
				className='btn btn-outline-danger'
				onClick={() => dispatch({ type: 'RESET', payload: initialState.counter })}
			>
				Reset (10)
			</button>
		</div>
	);
};
