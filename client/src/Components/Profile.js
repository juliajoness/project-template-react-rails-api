import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Form, Input, Container, Button } from 'semantic-ui-react'


function Profile ({user, steps, onAddStep}) {

    const initialState = {
        step_count: "",
        date: "",
      };

      const [formData, setFormData] = useState(initialState);

      const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((formData) => ({...formData, [name]: value}));
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        };

        fetch("/steps", configObj)
        .then( r => r.json())
        .then((step) => {
          onAddStep(step)
          setFormData(initialState)
      });

    }
    

    return (
        <div>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
        <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Step Count</label>
            <input placeholder='Step Count' name="step_count"
            onChange={handleChange}
            />
        </Form.Field>
        <Form.Field>
            <label>Date</label>
            <input placeholder='Date' name="date"
            onChange={handleChange}
            />
        </Form.Field>
        <Button type='submit'>Post Step</Button>
        </Form>

        </div>
    );
}

export default Profile