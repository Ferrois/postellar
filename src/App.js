
import "./App.css";
import Header from "./Components/Header/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useEffect, useContext } from "react";
import { LoginContext } from "./Context/LoginContext";
import HomePage from "./Components/HomePage/HomePage";
import Chat from "./Components/Chat/Chat";
import Footer from "./Components/Footer/Footer";

function App() {
  const [login, setLogin] = useContext(LoginContext);
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) return
    let accessToken = localStorage.getItem("accessToken")
    setLogin({...login,accessToken})
  }, []);
  

  return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={login.loggedIn ? <HomePage/>:<Login/>}/>
            <Route path="/chat" element={login.loggedIn ? <Chat/>:<Login/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
