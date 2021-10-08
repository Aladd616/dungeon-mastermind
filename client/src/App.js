import { DMProvider } from './utils/DMContext';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <DMProvider>
        <Header />
        <Main />
      </DMProvider>
    </div>
  );
}

export default App;
