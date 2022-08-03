import './css/reset.css';
import { useEffect, useState } from "react";
import { AdmToolbar } from "./components/adm/admToolbar";
import { AdmFooter } from "./components/adm/admFooter";
import { Toolbar } from "./components/client/toolbar";
import { Footer } from "./components/client/footer";
import { Routed } from "./routes";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userToken");
    if (loggedInUser) {
      const foundUser = JSON.parse(JSON.stringify(loggedInUser))
      setUser(foundUser);
    }
  }, []);

  return user ?
    <>
      <AdmToolbar />
      <Routed user={user} setUser={setUser}/>
      <AdmFooter />
    </>
    :
    <>
      <Toolbar />
      <Routed user={user} setUser={setUser}/>
      <Footer />
    </>
}

export default App;
