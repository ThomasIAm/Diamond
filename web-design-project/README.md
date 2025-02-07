# Web Design Project

This project is a web application that showcases a 3D rendered diamond using modern JavaScript technologies. The application is built with React and utilizes Three.js for rendering the diamond in 3D.

## Project Structure

```
web-design-project
├── .devcontainer
│   ├── devcontainer.json  # Configuration for the development container
│   └── Dockerfile         # Docker image definition for the development environment
├── public
│   ├── index.html          # Main HTML document
│   └── assets
│       └── styles.css      # CSS styles for the application
├── src
│   ├── components
│   │   ├── Diamond.js      # 3D diamond component
│   │   └── Details.js      # Component for displaying diamond details
│   ├── pages
│   │   ├── Home.js         # Landing page component
│   │   └── DetailsPage.js   # Detailed information page
│   ├── App.js              # Main application component with routing
│   └── index.js            # Entry point for the React application
├── package.json             # npm configuration file
├── .babelrc                # Babel configuration file
├── .eslintrc.json          # ESLint configuration file
└── README.md               # Project documentation
```

## Features

- 3D rendering of a diamond using Three.js.
- Interactive elements that navigate to detailed information pages.
- Responsive design with CSS styling.

## Setup Instructions

To get started with this project, you can open it in GitHub Codespaces or locally. The development environment will be set up automatically based on the configuration files provided.

### Local-only

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd web-design-project
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Click on the diamond to navigate to the details page.
- Explore the details of the diamond on the details page.

## License

This project is licensed under the MIT License.