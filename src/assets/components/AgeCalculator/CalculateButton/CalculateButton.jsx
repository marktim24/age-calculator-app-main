import styles from '/src/assets/components/AgeCalculator/AgeCalculator.module.scss'

const CalculateButton = ({ onClick }) => (
	<div className={styles.calculateButton}>
		<button type='button' onClick={onClick}>
			<img src='icon-arrow.svg' alt='Submit Button' />
		</button>
	</div>
)

export default CalculateButton
