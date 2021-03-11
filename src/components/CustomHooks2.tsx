import { useForm } from '../hooks/useForm';

type FormState = {
	email: '';
	name: '';
};

export const CustomHooks2 = (): JSX.Element => {
	const { email, name, form, handleInputChange } = useForm<FormState>({
		email: '',
		name: ''
	});

	return (
		<div>
			<form autoComplete='off'>
				<div className='mb-3'>
					<label className='form-label'>E-Mail</label>
					<input
						type='email'
						className='form-control'
						name='email'
						onChange={handleInputChange}
						value={email}
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'>Nombre</label>
					<input type='text' className='form-control' name='name' onChange={handleInputChange} value={name} />
				</div>
			</form>

			<p>Form info</p>

			<pre>{JSON.stringify(form)}</pre>
		</div>
	);
};
