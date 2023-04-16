import { useState } from 'react'
import AgeCalculator from './assets/components/AgeCalculator/AgeCalculator'
import '/src/scss/main.scss'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='center-container'>
			<AgeCalculator />
		</div>
	)
}

export default App
