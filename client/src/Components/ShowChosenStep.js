import StepCard from "./StepCard";
import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import { Label } from 'semantic-ui-react'
function ShowChosenStep ({date, step_count}) {
    const {id} = useParams()
    console.log(id)
    const [selectedStep, setSelectedStep] = useState({categories: []})
    const [categories, setCategories] = useState([])
    const [erros, setErrors] = useState ([])

    const onAddCategory = (newCategory) => {
        setSelectedStep((selectedStep) => {
            return {...selectedStep, categories: [...selectedStep.categories, newCategory]}
        });
    }
// steps/:id
// list all categories with buttons that add to step
    useEffect(() => {
        fetch(`/steps/${id}`)
            .then (r => {
                if(r.ok) {
                    r.json().then(selectedStep => setSelectedStep(selectedStep))
                }
            })
        }, []);
        console.log(selectedStep)

    useEffect(() => {
        fetch("/categories")
            .then(res => {
                if(res.ok) {
                    res.json().then(setCategories)
                }
            })
    }, []);

    const addCategoryToStep = (category) => {
        console.log(category, selectedStep)
        fetch("/step_categories", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                step_id: selectedStep.id,
                category_id: category.id
            })
        })
        .then (r => {
            if(r.ok) {
                r.json().then((goodResponse) => {
                    onAddCategory(goodResponse)
                })
            }else{
                r.json().then((json) => {
                    setErrors(json.errors)
                })
            }
        })
    }
    

        const categoriesArray = categories.map(category => {
            return <Label onClick={() => addCategoryToStep(category)} as='a' >{category.category_tag}</Label>
         });

         

//console.log(step)
    return (
        <div>
            <h1> date: {selectedStep.date} steps: {selectedStep.step_count}</h1>
            {categoriesArray}
            <div>
                Current Categories: 
                <ul>
                    {selectedStep.categories.map(category => <li>{category.category_tag}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default ShowChosenStep;