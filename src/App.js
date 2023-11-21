import './App.css';
import Home from './screen/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screen/login';
import Signup from './screen/signup';
import About from './screen/about';
import { CartProvider } from './components/contexReducer';
import MyOrder from './screen/MyOrder';
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/newUser" element={<Signup />} />
            <Route exact path="/MyOrder" element={<MyOrder />} />  
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

