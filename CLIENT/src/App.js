
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './COMPONENTS/navbar/navbar';
function App() {
  return (
   
    <div className="App">
      <header className="App-header">
      <Navigation/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
