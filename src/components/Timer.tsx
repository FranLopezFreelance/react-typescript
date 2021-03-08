import { useState } from 'react';
import { TimerChild } from './TimerChild';

export const Timer = () => {
	const [ miliseconds, setMiliseconds ] = useState<number>(1000);

	return (
		<div>
			<span>Milisegundos: {miliseconds}</span>
			<br />
			<button className='btn btn-outline-success' onClick={() => setMiliseconds(1000)}>
				1000
			</button>
			<button className='btn btn-outline-success' onClick={() => setMiliseconds(2000)}>
				2000
			</button>
			<button className='btn btn-outline-success' onClick={() => setMiliseconds(3000)}>
				3000
			</button>
			<TimerChild miliseconds={miliseconds} />
		</div>
	);
};
