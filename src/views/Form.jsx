import { useState } from "react";
import { validation } from "../helpers/validate";

const Form = ({login})=>{
const [userData, setUserData] = useState({
    email: "",
    password: ""
})
const [errors, setErrors] = useState({
    email: "Email requerido",
    password: "Password requerido"
})



const handleChange = (event) =>{
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })
    setErrors(
        validation({
            ...userData,
        [event.target.name]: event.target.value
    }))
}

function handleSubmit (event){
    event.preventDefault();
    login(userData);
}
function diseableHandler() {
    let disabled;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled
}

    return(
        <form onSubmit={handleSubmit} > 
            <label>Email:</label>
            <input 
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="ingresa Email" 
            />

          <span>{errors.email}</span>
            <label>Password:</label>
            <input 
            type="password"
            name="password"
            value={userData.password}
            placeholder="ingresa tu Password"
            onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
            {errors.password && <span>{errors.password}</span>}
        {/* {errors.password || errors.email ? null : (
          <button type="submit">SUBMIT</button>
        )}  */}
        <button disabled={diseableHandler()} type="submit">
          SUBMIT
        </button>

        </form>  
    )
}
export default Form;