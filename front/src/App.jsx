import './css/reset.css';
import './css/App.css'
import { Home } from './js/Home.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/" element={<Navigate to={'/'} />}/> 
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;