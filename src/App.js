// import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import SignUp from './component/Signup';
 import {Routes,Route} from 'react-router-dom'  
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';
import ModalPopup from './component/Modal';





function App() {
  return (
    <div className="App">
     {/* <Login/> */}
<Routes>

<Route exact path="/" element={<Dashboard></Dashboard>}></Route>
<Route exact path="/login" element={<Login></Login>}></Route>
<Route exact path="/signup" element={<SignUp></SignUp>}></Route>

</Routes>






     
    </div>
  );
}

export default App;
