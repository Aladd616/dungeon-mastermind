import { DMProvider} from "./utils/DMContext";
import logo from './logo.svg';
import './App.css';
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div className="App">
      <DMProvider>
        <TestComponent />
      </DMProvider>
    </div>
  );
}

export default App;
