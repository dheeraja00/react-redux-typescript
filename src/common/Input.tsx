/*
Common input component, so whenever required input field this can be called
*/

import * as React from 'react';

const Input = ({
	label,
	value,
	onInput,
	placeholder,
	id,
	inputType
}: {
	label: string,
	value: string,
	onInput: any,
	id: string,
	placeholder: string,
	inputType: string
}) => {
	return (
		<div className="input-field">
			<input
				type={inputType}
				placeholder={placeholder}
				value={value}
				id={id}
				onChange={onInput}/>
				
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export { Input };