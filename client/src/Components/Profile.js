import React, { useState} from 'react'
import { Form, Button } from 'semantic-ui-react'
import StepsContainer from './StepsContainer'
import { Statistic } from 'semantic-ui-react'

function Profile ({removeStep, user, steps, onAddStep, updateUser, changeProfileState}) {
  const initialState = {
    date: "",
    step_count: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [username, setUsername] = useState ("")
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [erros, setErrors] = useState ("")
  const{date, step_count} = formData

  const handleChange = (e) => {
    const {name, value} = e.target
      setFormData((formData) => ({...formData, [name]: value}));
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUpdateStepInfo = {
      date,
      step_count,
    }
      fetch("/steps", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newUpdateStepInfo),
      }).then((r) => {
      if (r.ok){
        r.json().then((step) => {;
          onAddStep(step)
          setFormData(initialState)
        })
      } else {
        r.json().then((json) => setErrors(json.error));
      }
      });
  }

  const onUpdate = (e) => {
    e.preventDefault()

    setUsername("")
    setEmail("")
    setPassword("")

    const newProfileInfo = {
        username: username,
        email: email,
        password: password
    }

  fetch(`/users/${user.id}`, {
      method:"PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newProfileInfo)
  })
  .then(res => res.json())
  .then((info) => {
      changeProfileState(info)
  })
}


  return (
    <div>
      <Statistic.Group>
        <Statistic>
          <Statistic.Value>{user.username}</Statistic.Value>
          <Statistic.Label>username</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{user.email}</Statistic.Value>
          <Statistic.Label>email</Statistic.Label>
        </Statistic>
      </Statistic.Group>
      <h1>
       {''}
      </h1>
      <Form >
        <Form.Field required>
          <label>Username</label>
          <input placeholder="Username"value={onUpdate.username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Field>
        <Form.Field required>
          <label>Email</label>
          <input placeholder="Email"value={onUpdate.email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <input placeholder="Password" type="password "value={onUpdate.password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Field>
                
        <Button onClick={onUpdate}>Update information</Button>
        {/* <Button onClick={(e) => onDelete(user.id)}>Delete Account</Button> */}
      </Form>

        <h1>
          {''}
        </h1>
          <h2>
            Add New Step:
          </h2>
        <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Date</label>
            <input placeholder='Date' name="date"
            onChange={handleChange}
            value={formData.date}
            />
        </Form.Field>
        <Form.Field>
            <label>Step Count</label>
            <input placeholder='Step Count' name="step_count"
            onChange={handleChange}
            value={formData.step_count}
            />
        </Form.Field>
        <Button type='submit'>Post Step</Button>
        </Form>
        <div>
            <h1>
                {''}
            </h1>
            <h1>
                {''}
            </h1>
          <h3>
            My Steps:
        </h3> 
        <h4>
                {''}
        </h4>
        </div>
        <StepsContainer removeStep={removeStep} steps= {steps}/>

        </div>
    );
}

export default Profile