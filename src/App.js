import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    
    <Router>
    <Header />
     <Routes >
          {/* <Route path="/about">
            <About />
          </Route> */}
     </Routes>
    </Router>
    </>
  );
}

export default App;
