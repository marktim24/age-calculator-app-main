import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base:
		process.env.NODE_ENV === 'production' ? '/age-calculator-app-main/' : '/',
	plugins: [react()]
})
