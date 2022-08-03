import './css/reset.css';
import { About } from './pages/client/about'
import { Home } from './pages/client/home'
import { Products } from './pages/client/products'
import { Contact } from './pages/client/contact'
import { Login } from "./pages/client/login";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from "react";
import { AdmLogin } from './pages/adm/admLogin'
import { AdmProducts } from './pages/adm/admProducts'
import { AdmEdit } from './pages/adm/admEdit'
import { AdmCreate } from "./pages/adm/admCreate"
import { AdmHome } from "./pages/adm/admHome";
import { AdmAbout } from './pages/adm/admAbout'
import { AdmContact } from './pages/adm/admContact'
import { AdmEmails } from './pages/adm/admEmails'


function Routed({user, setUser}) {
  const [productId, setProductId] = useState(null)

  return (
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/products" element={<Products />}> </Route>
          <Route path="/sub" element={<Login />}> </Route>
          <Route path="/adm/login" element={<AdmLogin setUser={setUser} />}></Route>
          <Route path="/adm/home" element={user ? <AdmHome setUser={setUser} /> : <Navigate to={'/adm/login'} />}> </Route>
          <Route path="/adm/products" element={user ? <AdmProducts setProductId={setProductId} /> : <Navigate to={'/adm/login'} />}></Route>
          <Route path="/adm/edit" element={user ? <AdmEdit id={productId} /> : <Navigate to={'/adm/login'} />}></Route>
          <Route path="/adm/create" element={user ? <AdmCreate /> : <Navigate to={'/adm/login'} />}></Route>
          <Route path="/adm/about" element={user ? <AdmAbout /> : <Navigate to={'/adm/login'} />}></Route>
          <Route path="/adm/contact" element={user ? <AdmContact /> : <Navigate to={'/adm/login'} />}></Route>
          <Route path="/adm/emails" element={user ? <AdmEmails /> : <Navigate to={'/adm/login'} />}></Route>
          <Route path="/adm" element={<Navigate to={'/adm/login'} />} />
          <Route path="/*" element={<Navigate to={'/home'} />} />
        </Routes>
      </Router>
  )
}

export { Routed};