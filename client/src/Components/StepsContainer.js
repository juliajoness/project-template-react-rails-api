import StepCard from "./StepCard";
//import Navbar from "./Components/Navbar";

function StepsContainer({steps, onAddStep, setUser, user, changeProfileState, updateUser}){

    const stepsArray = steps.map(step => {
       return <StepCard key={step.id} {...step}/>
    });

    return (
        <div className= "steps_container">
            {stepsArray}          
        </div>
    )
}

export default StepsContainer;