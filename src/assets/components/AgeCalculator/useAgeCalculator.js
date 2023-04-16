import { useState } from 'react'

const useAgeCalculator = () => {
	const [inputData, setInputData] = useState({
		dayProperty: '',
		monthProperty: '',
		yearProperty: ''
	})

	const [calculatedAge, setCalculatedAge] = useState({
		years: '--',
		months: '--',
		days: '--'
	})

	const [errors, setErrors] = useState({
		dayError: '',
		monthError: '',
		yearError: ''
	})

	const validateDate = (day, month, year) => {
		let dayError = ''
		let monthError = ''
		let yearError = ''

		if (year < 1) {
			yearError = 'Please enter a valid year.'
		}
		if (month < 1 || month > 12) {
			monthError = 'Please enter a valid month.'
		}
		if (day < 1 || day > 31) {
			dayError = 'Please enter a valid day.'
		} else {
			const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

			if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
				monthLengths[1] = 29 // Leap year
			}

			if (day > monthLengths[month - 1]) {
				dayError = 'Please enter a valid day for the given month.'
			}
		}

		setErrors({ dayError, monthError, yearError })

		return dayError === '' && monthError === '' && yearError === ''
	}

	const handleChange = (property, value) => {
		setInputData(prevState => ({
			...prevState,
			[property]: value
		}))
	}

	const handleSubmit = event => {
		event.preventDefault()

		const { dayProperty, monthProperty, yearProperty } = inputData
		if (!validateDate(dayProperty, monthProperty, yearProperty)) {
			return
		}
		const birthday = new Date(yearProperty, monthProperty - 1, dayProperty)
		const currentDate = new Date()

		let years = currentDate.getFullYear() - birthday.getFullYear()
		let months = currentDate.getMonth() - birthday.getMonth()
		let days = currentDate.getDate() - birthday.getDate()

		if (months < 0 || (months === 0 && days < 0)) {
			years -= 1
			months += 12
		}
		if (days < 0) {
			months -= 1
			const prevMonth = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth() - 1,
				1
			)
			days += new Date(
				prevMonth.getFullYear(),
				prevMonth.getMonth() + 1,
				0
			).getDate()
		}
		setCalculatedAge({ years, months, days })
	}
	return {
		inputData,
		errors,
		calculatedAge,
		handleChange,
		handleSubmit
	}
}

export default useAgeCalculator
