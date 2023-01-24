import StepCard from "./StepCard";
import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
function ShowChosenStep ({date, step_count}) {
    const {id} = useParams()
    console.log(id)
    const [selectedStep, setSelectedStep] = useState("")

// steps/:id
// list all categories with buttons that add to step
    useEffect(() => {
        fetch(`/steps/${id}`)
            .then (r => {
                if(r.ok) {
                    r.json()
                    .then(selectedStep => {
                    setSelectedStep(selectedStep)
                        })
                    }
                })
        }, []);
//console.log(step)
    return (
        <div>
            <h1>{selectedStep.step_count} {selectedStep.date} </h1>
            {/* <StepCard/> */}
        </div>
    )
}

export default ShowChosenStep;