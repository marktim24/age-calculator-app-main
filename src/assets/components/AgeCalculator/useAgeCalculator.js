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

		const currentYear = new Date().getFullYear()

		year = parseInt(year, 10)

		if (year >= 0 && year <= currentYear % 100) {
			year += 2000
		} else if (year > currentYear % 100 && year <= 99) {
			year += 1900
		}

		if (isNaN(year) || year < 1 || year >= currentYear) {
			yearError = 'Please enter a valid year in the past.'
		}
		if (isNaN(month) || month < 1 || month > 12) {
			monthError = 'Please enter a valid month.'
		}
		if (isNaN(day) || day < 1 || day > 31) {
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

		return {
			isValid: dayError === '' && monthError === '' && yearError === '',
			updatedYear: year
		}
	}

	const handleChange = (property, value) => {
		setInputData(prevState => ({
			...prevState,
			[property]: value
		}))
	}

	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			event.preventDefault()

			const inputs = ['day', 'month', 'year']
			const currentInputIndex = inputs.indexOf(event.target.id)

			if (currentInputIndex !== -1 && currentInputIndex < inputs.length - 1) {
				const nextInput = document.getElementById(inputs[currentInputIndex + 1])
				nextInput.focus()
			} else {
				handleSubmit(event)
			}
		}
	}

	const handleSubmit = event => {
		event.preventDefault()

		const { dayProperty, monthProperty, yearProperty } = inputData
		const validation = validateDate(dayProperty, monthProperty, yearProperty)
		if (!validation.isValid) {
			return
		}

		const birthday = new Date(
			validation.updatedYear,
			monthProperty - 1,
			dayProperty
		)
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
		handleSubmit,
		handleKeyDown
	}
}

export default useAgeCalculator
