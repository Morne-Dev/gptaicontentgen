import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import ColdEmails from './components/ColdEmails'
import ProductDescription from './components/ProductDescription'
import Tweets from './components/Tweets'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Home/>
        <ColdEmails/>
        <ProductDescription/>
        <Tweets/>
      </div>
    </Router>
  );
}

export default App;
