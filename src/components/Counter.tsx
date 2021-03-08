import { useState } from 'react';

export const Counter = () => {
	const [ counter, setCounter ] = useState(0);

	const increment = (f: number = 1): void => {
		setCounter(counter + f);
	};

	return (
		<div className='mt-4'>
			<p>Counter: {counter}</p>
			<button className='btn btn-outline-primary mr-2' onClick={() => increment()}>
				+1
			</button>
			<button className='btn btn-outline-primary mr-2' onClick={() => increment(2)}>
				+2
			</button>
			<button className='btn btn-outline-danger mr-2' onClick={() => setCounter(0)}>
				reset
			</button>
		</div>
	);
};
