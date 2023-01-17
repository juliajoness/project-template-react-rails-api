import './App.css';
import "semantic-ui-css/semantic.min.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AddCategory from "./Components/AddCategory";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";

function App() {

  const [user, setUser] = useState(false);

  const updateUser = (user) => setUser(user);


  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route element={<Login />} path="login" user={user} updateUser={updateUser} />
        <Route element={<Profile />} path="profile"/>
        <Route element={<Feed />} path="feed"/>
        <Route element={<AddCategory />} path="category"/>
        <Route element={<Signup />} path="signup" setLoggedInUser={setUser} updateUser={updateUser} />
      </Routes>
    </div>
  );
}

export default App;
