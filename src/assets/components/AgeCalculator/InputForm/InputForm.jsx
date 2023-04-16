import React from 'react'
import styles from '/src/assets/components/AgeCalculator/AgeCalculator.module.scss'

const InputForm = ({
	label,
	id,
	placeholder,
	value,
	onChange,
	error,
	labelClassName
}) => (
	<div className={`${styles.inputForm} ${error ? styles.error : ''}`}>
		<label htmlFor={id} className={labelClassName}>
			{label}
		</label>
		<input
			type='text'
			id={id}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
		{error && <div className={styles.errorMessage}>{error}</div>}
	</div>
)

export default InputForm
