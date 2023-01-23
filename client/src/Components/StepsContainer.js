import StepCard from "./StepCard";
//import Navbar from "./Components/Navbar";

function StepsContainer({ steps, removeStep, showChosenStep}){

    const stepsArray = steps.map(step => {
       return <StepCard showChosenStep={showChosenStep} removeStep={removeStep} key={step.id} {...step} step={step}/>
    });

    return (
        <div className= "steps_container">
            {stepsArray}          
        </div>
    )
}

export default StepsContainer;