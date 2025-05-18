import './App.css'
import Home from './components/Home';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    < BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
