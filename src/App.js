import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name: Peeratchai Kleebbua
        </p>
        <p>
          <Button 
            variant="contained"
            href="https://www.linkedin.com/in/peeratchai-kleebbua-380131198/"
            target='blank'
            rel="noopener noreferrer"
          >
            <code>Linkedin</code>
          </Button>
          &nbsp;&nbsp;
          <Button 
            variant="contained" 
            href='https://github.com/pzalove24' 
            target='blank'
            rel="noopener noreferrer"
            >
            Github
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;
