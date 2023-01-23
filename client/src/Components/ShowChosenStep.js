import StepCard from "./StepCard";
import React, { useState, useEffect } from "react";
function ShowChosenStep ({date, step_count, id, step, steps}) {
// steps/:id
// list all categories with buttons that add to step 
// const oneStep = () => {
//     fetch(`/steps/${id}`, {method: "GET",});
//     removeStep(step)
// }
console.log(step)
    return (
        <div>
            <StepCard/>
        </div>
    )
}

export default ShowChosenStep;