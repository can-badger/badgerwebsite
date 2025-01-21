import logo from './white_main_clean.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className="color1">Badger House</h1>
          <p>
         Digital Agency
        </p>
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We're renewing
        </p>
        <a>
          Visit us from old<a
          className="App-link"
          href="https://www.thebadger.house/"
          target="_blank"
          rel="noopener noreferrer"
        >
           site
        </a>
        </a>
        
      </header>
    </div>
  );
}

export default App;
