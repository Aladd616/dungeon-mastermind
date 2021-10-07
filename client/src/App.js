import { DMProvider} from "./utils/DMContext";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div className="App">
      <DMProvider>
        <Header />
        <TestComponent />
      </DMProvider>
    </div>
  );
}

export default App;
