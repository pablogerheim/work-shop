import './css/reset.css';
import { AdmToolbar } from "./components/adm/admToolbar";
import { AdmFooter } from "./components/adm/admFooter";
import { Toolbar } from "./components/client/toolbar";
import { Footer } from "./components/client/footer";
import { Routed } from "./routes";

import { StoreProvider, useStore } from './helper/store'
import { ChakraProvider } from '@chakra-ui/react';

function Router() {
  const [store] = useStore();

  if (!store.rehydrated) {
    return <p> Loading...</p>;
  }
  
  return store.auth ?
    <>
      <AdmToolbar />
      <Routed onLine={store.auth} />
      <AdmFooter />
    </>
    :
    <>
      <Toolbar />
      <Routed onLine={store.auth} />
      <Footer />
    </>;
}

function App() {
  return (
    <StoreProvider>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </StoreProvider>
  )

}

export default App;
