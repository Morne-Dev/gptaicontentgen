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
        
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/product-description" element={<product-description/>} />
          <Route path="/cold-emails" element={<ColdEmails/>} />
          <Route path="/tweets" element={<Tweets/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
