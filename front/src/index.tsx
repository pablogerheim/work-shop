import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ChakraProvider>
    <App />
    </ChakraProvider>,
  document.getElementById('root')
);

reportWebVitals();

