import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Link,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <>
    
    <Router>
    <Header />
     <Routes > 
          <Route path="/" exact component={Home} />
            
          
     </Routes>
    </Router>
    </>
  );
}

export default App;
