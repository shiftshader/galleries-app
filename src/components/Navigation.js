import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

const Navigation=()=> {

  // const [user, setUser] = React.useState(false);
  // const [formData, setFormData] = React.useState('')


  // useEffect(()=>{
  //    (
  //      async () => {
  //   const response = await fetch('http://localhost:8000/api/user', {
  //         headers:{"content-type": "application/json",
  //         'Accept': 'application/json'},
  //         credentials: 'include',
          
  //       });
  //       console.log('from request')
  //       const content = await response.json();
  //       console.log()
  //     setUser(content)

  //      }
  //    )()
  // },[]);



  return (
    
   
   
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div className="container">
    <Link className="navbar-brand" to="/">Galleries</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navigation;