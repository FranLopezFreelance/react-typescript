import { ChangeEvent, useState } from 'react';

type FormState = {
	email: string;
	name: string;
};

export const CustomHooks = (): JSX.Element => {
	const [ form, setForm ] = useState<FormState>({
		email: '',
		name: ''
	});

	const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setForm({
			...form,
			[name]: value
		});
	};

	return (
		<div>
			<form autoComplete='off'>
				<div className='mb-3'>
					<label className='form-label'>E-Mail</label>
					<input type='email' className='form-control' name='email' onChange={handleInputChange} />
				</div>
				<div className='mb-3'>
					<label className='form-label'>Nombre</label>
					<input type='text' className='form-control' name='name' onChange={handleInputChange} />
				</div>
			</form>

			<p>Form info</p>

			<pre>{JSON.stringify(form)}</pre>
		</div>
	);
};
