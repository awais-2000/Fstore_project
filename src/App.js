import './App.css';
import Home from './screen/home';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Login from './screen/login';
// import Signup from './screen/signup';
// import Signup from '../mernapp/src/screen/signup';
import Signup from './screen/signup';
function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/newUser" element={<Signup/>} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;

























// import './App.css';
// import Home from './Screen/Home'; // Note the corrected import path

// function App() {
//   return (
//     <>
//       <div>
//         <Home></Home>
//       </div>
//     </>
//   );
// }

// export default App;

