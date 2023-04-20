# Age Calculator

The Age Calculator is a simple web application that calculates a person's age based on their birth date. Users can input their birth date, and the app will display their age in years, months, and days.

## Technologies Used

This project was built using the following technologies:

1. **React** - A popular JavaScript library for building user interfaces.
2. **Vite** - A build tool and development server for web applications, used for faster development and optimized production builds.
3. **Sass** - A preprocessor scripting language that extends CSS, allowing for more advanced features and better code organization.
4. **GitHub Pages** - A platform for hosting static websites directly from GitHub repositories.

The site is live at https://marktim24.github.io/age-calculator-app-main/

## React Components and Functions

The Age Calculator application consists of several React components, as well as custom hooks for handling form input and validation:

- **InputForm**: A reusable component for rendering form inputs with labels and error messages.
- **AgeForm**: A component that uses the InputForm component to create a form for entering the user's birth date (day, month, and year).
- **CalculateButton**: A component for rendering a button to calculate the user's age.
- **OutputForm**: A component for displaying the calculated age in years, months, and days.
- **AgeCalculator**: The main component that combines all other components and manages the state and logic of the application.
- **useAgeCalculator**: A custom hook that handles form input, validation, and age calculation.

## Features

- **useState hook:**
  The Age Calculator App utilizes React's useState hook to manage component state, allowing the app to respond to user input and update the user interface accordingly.

- **Custom hook:**
  The app implements a custom hook, useAgeCalculator.js, which encapsulates the age calculation logic and state management. This custom hook makes the code more modular and easier to maintain.

- **Responsive design:**
  The app's layout and styling are optimized for various screen sizes using media queries in SCSS. This ensures a consistent and user-friendly experience across different devices.

- **Form validation:**
  The app includes input validation to ensure that users provide valid date values for their date of birth. Error messages are displayed to guide users in correcting any input mistakes.

- **SCSS structure:**
  The SCSS files are organized in a modular fashion, with separate files for variables and each component. This structure allows for better maintainability and ease of customization.

- **Vite:**
  The project uses Vite as the build tool and development server, providing a fast and efficient development experience.

## Project Setup and Development

To set up the project locally and start the development server, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/<username>/<repository>.git
   cd <repository>

   Install the dependencies:
   ```

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
This will open the application in your default web browser at http://localhost:3000.

Building and Deploying to GitHub Pages
To build the project for production and deploy it to GitHub Pages, follow these steps:

Build the project for production:

bash
Copy code
npm run build
This will generate the production build in the dist folder.

Deploy the build to GitHub Pages:

bash
Copy code
npm run deploy
This command will push the contents of the dist folder to the gh-pages branch of your repository.
