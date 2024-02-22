import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import LandingPage from './views/LandingPage';
import SignIn from "./views/SignIn";
import SignOut from "./views/SignOut";
import NoPage from "./views/NoPage";

function App() {

  const user = useSelector(s => s.user.user)

  if ((user) && (user.isAuthenticated)) {
    return (<Routes>       
      <Route path="/home" element={<SignOut />} />
      <Route path="*" element={<Navigate to="/home"/>} />
    </Routes>)
  }

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />        
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}

export default App;
