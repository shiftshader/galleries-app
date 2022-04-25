import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Login() {
  const [redirect, setRedirect] = React.useState(false)
  const [formData, setFormData] = React.useState(
    {
        email: "", 
        password: "",
    }
)

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
      const response = await fetch('http://localhost:8000/api/login', {
          method: "POST",
          headers:{"content-type": "application/json",
          credentials: 'include',
          'Accept': 'application/json'},
          body: JSON.stringify({...formData})
          
      })

      const content = await response.json();

      //redirect
      if(content.message !== "Invalid credentials"){

        setRedirect(true)
      }else{
        alert('invalid credentials')
      }
  }
    //redirect
    if(redirect){
      return <Redirect to="/" />
    }






  return (
    <div><main className="form-signin">
    <form onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  
      <div className="form-floating">
      <input onChange={handleChange} name="email" value={formData.email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
      <input onChange={handleChange} name="password" value={formData.password} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Password</label>
      </div>
  
     
     
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
  </main></div>
  )
}
