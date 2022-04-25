import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Register() {

    //postavljanje podataka iz inputa
   const [formData, setFormData] = React.useState(
        {
            first_name: "", 
            last_name: "", 
            email: "", 
            password: "",
            rePassword: "",
        }
    )

    //redirect
      const [redirect, setRedirect] = React.useState(false)
    //handle podataka iz inputa
    function handleChange(event) {
        const {name, value,} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:  value
            }
        })
    }

    async function handleSubmit(event) {
    //zaustavljanje refresh stranice
      event.preventDefault();
    //   console.log(formData);
      console.log({...formData})
        const response = await fetch('http://localhost:8000/api/register', {
            method: "POST",
            headers:{"content-type": "application/json",
            'Accept': 'application/json'},
            body: JSON.stringify({...formData})
            
        })
        //redirect
       setRedirect(prev=> prev = true)
    }
      //redirect
      if(redirect){
        return <Redirect to="/login" />
      }

  return (
    <div><main className="form-signin">
    <form onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Please Register</h1>
  
      <div className="form-floating">
        <input onChange={handleChange} name="first_name" value={formData.first_name} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Name</label>
      </div>
      <div className="form-floating">
        <input onChange={handleChange} name="last_name" value={formData.last_name} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Last Name</label>
      </div>
      <div className="form-floating">
        <input onChange={handleChange} name="email" value={formData.email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input onChange={handleChange} name="password" value={formData.password} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Password</label>
      </div>
      <div className="form-floating">
        <input onChange={handleChange} name="rePassword" value={formData.rePassword} type="password" className="form-control" id="floatingPassword" placeholder="Repeat Password" />
        <label for="floatingPassword">Confirm Password</label>
      </div>
  
     
     
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
  </main></div>
  )
}
