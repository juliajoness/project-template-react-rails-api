import { Form, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate } from'react-router-dom'

function Signup ({setLoggedInUser, updateUser}) {
console.log("the signup component is the signup component")
    const [newUserSignup, setNewUserSignup] = useState(
        {
            username: '',
            email: '',
            password: '',}
    )
    console.log(newUserSignup)

    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    
    const {username, email, password} = newUserSignup

    function handleSignupSubmit (e){
        e.preventDefault()
        const user = {
            username,
            email,
            password
        }
        fetch("/users", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setLoggedInUser(user)
                    navigate(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    const handleOnChangeSignup =(sythE)=>{
        setNewUserSignup({ ...newUserSignup ,[sythE.target.name]: sythE.target.value })
    }
    return (
        <div>
        <Form onSubmit={handleSignupSubmit}>
        <Form.Field>
            <label>Username</label>
            <input placeholder='Username' name="username"
            onChange={handleOnChangeSignup}
            />
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input placeholder='Email' name="email"
            onChange={handleOnChangeSignup}
            />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type="password" name="password"
            onChange={handleOnChangeSignup}
            />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        </Form>

        </div>
    )
}

export default Signup