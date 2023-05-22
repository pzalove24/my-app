import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World This is my first_DevOps App
        </p>
        <p>
          This is just a test to confirm that CI/CD is successful
        </p>
        <p>
          the application for DevOps CI/CD integration and deployment on AWS s3
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in a practical way
        </a>
        <p>
          <Button variant="contained"><code>src/App.js</code></Button>
          &nbsp;&nbsp;<Button 
            variant="contained" 
            href='https://github.com/pzalove24' 
            target='blank'
            >
            Github
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;
