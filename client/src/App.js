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
import StepsContainer from "./Components/StepsContainer";

function App() {

  const [user, setUser] = useState(false);
console.log('the current user is', user)
  const updateUser = (user) => setUser(user);
  const [steps, setSteps] = useState([])

console.log('these are the steps', steps)

  const removeStep = doomedStepObj => {

  const newSteps = steps.filter( step => {
    return doomedStepObj.id !== step.id
})

  setSteps (newSteps)

}

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

 useEffect(() => {
  fetch("/steps")
    .then(res => {
     if(res.ok) {
       res.json()
       .then(step => {
         setSteps(step)
       })
     }
   })
}, []);
console.log(steps)

 function changeProfileState(changedProfileObj) {
  const changedUserArray = [...user];
  const index = changedUserArray.findIndex(
    (p) => p.id === changedProfileObj.profile_id
  );
  const newUserArray = changedUserArray[index].user.map((r) =>
    r.id === changedProfileObj.id ? changedProfileObj : r
  );
  changedUserArray[index].user = newUserArray;
  setUser(changedUserArray);
}


const onAddStep = (newStep) => {
  setSteps((steps) => [...steps, newStep]);
};


  return (
    <div className="app">
      <header />
      <Navbar />
      {!user? <Login error={"please login"} updateUser={updateUser } /> :
      <Routes>
        <Route index element={<Home/>}/>
        <Route element={<Login user={user} updateUser={updateUser}/>} path="login" />
        <Route element={
        <Profile 
        user={user} 
        setUser={setUser} 
        changeProfileState={changeProfileState}
        updateUser={updateUser}
        onAddStep={onAddStep}
        steps={steps}
        />} path="profile"/>
        <Route element={<Feed />} path="feed"/>
        <Route element={<AddCategory />} path="category"/>
        <Route element={<Signup setLoggedInUser={setUser} updateUser={updateUser}/>} path="signup" />
        <Route element={<StepsContainer user={user} 
        setUser={setUser} 
        changeProfileState={changeProfileState}
        updateUser={updateUser}
        onAddStep={onAddStep}
        steps={steps}
        removeStep={removeStep}
        />} path="stepscontainer" />
      </Routes>

  }
    </div>
  );
}

export default App;
