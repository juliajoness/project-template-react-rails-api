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
console.log('the current user is', user)
  const updateUser = (user) => setUser(user);

  useEffect(() => {
   fetch("/authorized")
     .then(res => {
      if(res.ok) {
        res.json()
        .then(user => {
          setUser(user)
        })
      }
    })
 }, []);


  return (
    <div>
      <Navbar />
      {!user? <Login error={"please login"} updateUser={updateUser } /> :
      <Routes>
        <Route index element={<Home/>}/>
        <Route element={<Login user={user} updateUser={updateUser}/>} path="login" />
        <Route element={<Profile />} path="profile"/>
        <Route element={<Feed />} path="feed"/>
        <Route element={<AddCategory />} path="category"/>
        <Route element={<Signup setLoggedInUser={setUser} updateUser={updateUser}/>} path="signup" />
      </Routes>
  }
    </div>
  );
}

export default App;
