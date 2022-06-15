import './css/reset.css';
import { Home } from './js/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    < >
    <Router>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/" element={<Navigate to={'/'} />}/> 
      </Routes>
    </Router>
  </>
  );
}

export default App;
