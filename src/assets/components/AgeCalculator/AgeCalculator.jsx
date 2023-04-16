import styles from './AgeCalculator.module.scss'
import AgeForm from './AgeForm/AgeForm'
import CalculateButton from './CalculateButton/CalculateButton'
import OutputForm from './OutputForm/OutputForm'
import useAgeCalculator from './useAgeCalculator'

const AgeCalculator = () => {
	const { inputData, errors, calculatedAge, handleChange, handleSubmit } =
		useAgeCalculator()

	return (
		<div className={styles.calculator}>
			<AgeForm
				inputData={inputData}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				errors={errors}
			/>
			<CalculateButton onClick={handleSubmit} />
			<div className={styles.output}>
				<OutputForm calculatedAge={calculatedAge.years} label='years' />
				<OutputForm calculatedAge={calculatedAge.months} label='months' />
				<OutputForm calculatedAge={calculatedAge.days} label='days' />
			</div>
		</div>
	)
}

export default AgeCalculator
