import React from 'react'

export default function Register() {

    //postavljanje podataka iz inputa
   const [formData, setFormData] = React.useState(
        {
            name: "", 
            lastname: "", 
            email: "", 
            password: "",
            rePassword: "",
        }
    )
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

    //zaustavljanje refresh stranice

  async function handleSubmit(event) {
      event.preventDefault();
    //   console.log(formData);
      console.log({...formData})
        const response = await fetch('http://localhost:8000/api/register', {
            method: "POST",
            headers:{"content-type": "application/json",
            'Accept': 'application/json'},
            body: JSON.stringify({...formData})
            
        })
        const content = await response.json();
        console.log(content)
    }



  return (
    <div><main className="form-signin">
    <form onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Please Register</h1>
  
      <div className="form-floating">
        <input onChange={handleChange} name="name" value={formData.name} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Name</label>
      </div>
      <div className="form-floating">
        <input onChange={handleChange} name="lastname" value={formData.lastname} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
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
