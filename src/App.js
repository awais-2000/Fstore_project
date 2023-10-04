import './App.css';
import Home from './screen/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screen/login';
import Signup from './screen/signup';
import { CartProvider } from './components/contexReducer';
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/newUser" element={<Signup />} />

          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

