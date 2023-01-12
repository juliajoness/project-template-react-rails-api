import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AddCategory from "./Components/AddCategory";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route element={<Login />} path="login"/>
        <Route element={<Profile />} path="profile"/>
        <Route element={<Feed />} path="feed"/>
        <Route element={<AddCategory />} path="category"/>
      </Routes>
    </div>
  );
}

export default App;
