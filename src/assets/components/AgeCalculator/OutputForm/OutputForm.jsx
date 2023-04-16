import React from 'react'
import styles from '/src/assets/components/AgeCalculator/AgeCalculator.module.scss'

const OutputForm = ({ calculatedAge, label }) => (
	<div className={styles.outputCalculation}>
		<h1 className={styles.calculatedAge}>{calculatedAge}</h1>
		<h1>{label}</h1>
	</div>
)

export default OutputForm
