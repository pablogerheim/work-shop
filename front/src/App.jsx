import './css/reset.css';
import './css/App.css'
import { About } from './pages/about'
import { Home } from './pages/home'
import { Products } from './pages/products'
import { Contact } from './pages/contact'
import { Test } from "./js/Test";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<About />}> </Route>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/products" element={<Products />}> </Route>
          <Route path="/test" element={<Test />}> </Route>
        <Route path="/" element={<Navigate to={'/home'} />}/> 
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;