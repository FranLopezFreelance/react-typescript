import { ChangeEvent, useState } from 'react';

// export function useForm<T>(initState: T) {
export const useForm = <T extends Object>(initState: T) => {
	const [ form, setForm ] = useState(initState);

	const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setForm({
			...form,
			[name]: value
		});
	};

	return {
		form,
		handleInputChange,
		...form
	};
};