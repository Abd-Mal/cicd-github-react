import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1> السلام عليكم ورحمة الله وبركاته<h1/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Barebone react web app - 2022-Jul26 16:53 PST
        </p>
        <a
          className="App-link"
          href="https://github.com/gabepublic/cicd-github-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repo: cicd-github-react
        </a>
      </header>
    </div>
  );
}

export default App;
