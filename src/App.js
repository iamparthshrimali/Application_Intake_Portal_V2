
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Agent_Page from './components/agent_page/Agent_Page';
import Home from './components/home/Home';
import Navbar from './components/home/navbar/Navbar';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (

    <div className="App flex " style={{height:"100vh"}}>
      {/* <Agent_Page/>  */}
      

      <Routes>
         <Route exact  path="/" element={<Home/>} />
         <Route exact  path="/register" element={<Register/>} />
         <Route exact  path="/login" element={<Login/>} />
         <Route exact  path="/agent" element={<Agent_Page/>} />
      </Routes>
      </div>
  );
}

export default App;
