
import './App.css';
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Inicio from './views/Inicio';
import Footer from './components/Footer';
import Login from './views/Login';
import Notfound from './views/Notfound';
//import { setState } from "react";
import { useContext } from 'react';
import UserContext from './context/UserContext';

import Contact from './views/Contact';
import Products from './views/Products';




function App() {

  //const context = useContext(UserContext)
  //const token = context.userState.token


  

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Inicio />}></Route>

          <Route path='/Products' element={<Products />}></Route>
          
          <Route path="/login" element={<Login tag="login" />} />
          

          {/* {<Route path='/Login' element={usuario ? <Inicio/> : <Login />}></Route>} */}
          <Route path='*' element={<Notfound/>}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Products' element={<Products />}></Route>
        </Routes>
      <Footer />
    </>
      

    
  );
}

export default App;
//{!token && <Route path="/signup" element={<Login tag="register" />} />}