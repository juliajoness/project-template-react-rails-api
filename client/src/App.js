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
import ShowChosenStep from './Components/ShowChosenStep';

function App() {

  const [user, setUser] = useState(false);

    console.log('the current user is', user)

  const updateUser = (user) => setUser(user);
  const [steps, setSteps] = useState([])

    // console.log('these are the steps', steps)

    const removeStep = doomedStepObj => {
      const newSteps = steps.filter( step => {
        return doomedStepObj.id !== step.id
      })
      setSteps (newSteps)
    }

    const showChosenStep = chosenStepObj => {
      const chosenStep = steps.filter( step => {
        return chosenStepObj.id !== step.id
    })
    setSteps (chosenStep)
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

  // console.log(steps)

  function changeProfileState(changedProfileObj) {
    setUser(changedProfileObj)
  }

  const onAddStep = (newStep) => {
    setSteps((steps) => [...steps, newStep]);
  };

  console.log(user)
  return (
    <div className="app">
      <header />
        <Navbar />
          {/* <Login error={"please login"} updateUser={updateUser } />  */}
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login user={user} updateUser={updateUser}/>} />
            <Route path="profile" element={
              <Profile 
              removeStep={removeStep}
              user={user} 
              setUser={setUser} 
              changeProfileState={changeProfileState}
              updateUser={updateUser}
              onAddStep={onAddStep}
              steps={steps}
            />}/>
            <Route path="feed" element={<Feed />}/>
            <Route path="chosenstep" element={<ShowChosenStep
            steps={steps} 
            showChosenStep={showChosenStep}
            />}/>
            <Route path="category" element={<AddCategory />} />
            <Route path="signup" element={<Signup setLoggedInUser={setUser} updateUser={updateUser}/>} />
            <Route path="stepscontainer" element={
              <StepsContainer 
              user={user} 
              setUser={setUser} 
              changeProfileState={changeProfileState}
              updateUser={updateUser}
              onAddStep={onAddStep}
              steps={steps}
              removeStep={removeStep}
              showChosenStep={showChosenStep}
            />}/>
          </Routes>
    </div>
  );
}

export default App;
