import './css/reset.css';
import './css/App.css'
import { About } from './pages/about'
import { Home } from './pages/home'
import { Products } from './pages/products'
import { Contact } from './pages/contact'
import { Test } from "./js/Test";
import { Login } from "./pages/login";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from "react";
import {AdmLogin} from './pages/adm/admLogin'
import { AdmProducts } from './pages/adm/admProducts'

function App() {
  const [user, setUser] = useState(true);


  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/products" element={<Products />}> </Route>
          <Route path="/test" element={<Test />}> </Route>
          <Route path="/sub" element={<Login />}> </Route>
          <Route path="/adm/login" element={<AdmLogin />}></Route>
          <Route path="/adm/product" element={user ? <AdmProducts /> : <Navigate to={'/adm/login'} />}></Route>
          <Route path="/adm" element={<Navigate to={'/adm/login'} />} />
          <Route path="/*" element={<Navigate to={'/home'} />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;