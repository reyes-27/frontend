import React from "react";
import { useState } from "react";

const MyForm = () => {
    const [inputs, setInputs] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`The name you entered was ${inputs.username} and your password was ${inputs.password}`)
    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({...values, [name]: value}))
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input 
                type="text" 
                name="username"
                onChange={handleChange}
                />
            </label>
            <input 
            type="text" 
            name="password"
            onChange={handleChange}
            />
            <input type="submit" value="Enter" />
        </form>
    )
}

export default MyForm;