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

<<<<<<< HEAD
			<hr />

=======
>>>>>>> d523c47799ac16ce95d36c910a13640b96831ad9
			<pre>{JSON.stringify(form)}</pre>
		</div>
	);
};
