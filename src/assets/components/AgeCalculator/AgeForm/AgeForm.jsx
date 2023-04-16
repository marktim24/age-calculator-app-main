import React from 'react'
import InputForm from '../InputForm/InputForm'
import styles from '/src/assets/components/AgeCalculator/AgeCalculator.module.scss'

const AgeForm = ({ inputData, handleChange, handleSubmit, errors }) => (
	<form className={styles.form} onSubmit={handleSubmit}>
		<InputForm
			label='DAY'
			id='day'
			placeholder='DD'
			value={inputData.dayProperty}
			onChange={event => handleChange('dayProperty', event.target.value)}
			error={errors.dayError}
			labelClassName={errors.dayError ? styles.error : ''}
		/>
		<InputForm
			label='MONTH'
			id='month'
			placeholder='MM'
			value={inputData.monthProperty}
			onChange={event => handleChange('monthProperty', event.target.value)}
			error={errors.monthError}
			labelClassName={errors.monthError ? styles.error : ''}
		/>
		<InputForm
			label='YEAR'
			id='year'
			placeholder='YYYY'
			value={inputData.yearProperty}
			onChange={event => handleChange('yearProperty', event.target.value)}
			error={errors.yearError}
			labelClassName={errors.yearError ? styles.error : ''}
		/>
	</form>
)

export default AgeForm
