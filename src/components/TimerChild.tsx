import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
	miliseconds: number;
};
export const TimerChild = ({ miliseconds }: TimerArgs) => {
	const [ seconds, setSeconds ] = useState(0);
	const ref = useRef<NodeJS.Timeout>();
	useEffect(
		() => {
			ref.current = setInterval(() => setSeconds((s) => s + 1), miliseconds);
			return () => ref.current && clearInterval(ref.current);
		},
		[ miliseconds ]
	);

	return (
		<div>
			<h4>
				Timer: <small>{seconds}</small>
			</h4>
		</div>
	);
};
