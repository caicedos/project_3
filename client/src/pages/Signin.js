import React from "react";


function Signin() {
  return (
    <div className="container mt-5">
     <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" claclassNamesclassNames="form-check-input" id="exampleCheck1"/>
    
  </div>
  <button type="submit" className="btn-sm btn-primary">Signin</button>
  
  <button type="submit" className="btn-sm btn-secondary">Register</button>
</form>
   </div>
  );
}

export default Signin;