import { useState } from 'react';

interface IUser {
	id: number;
	name: string;
}

export const User = () => {
	const [ user, setUser ] = useState<IUser>();
	const login = () => {
		setUser({ id: 123, name: 'Francisco López' });
	};

	return (
		<div className='mt-4'>
			<h3>Usuario</h3>
			<pre>{JSON.stringify(user)}</pre>
			<button className='btn btn-outline-primary' onClick={login}>
				Login
			</button>
		</div>
	);
};
