import React from "react";
// import {Link} from "react-router-dom";


function Signin() {
  return (
    <div className="container px-5 mt-5">

      <h1 className="text-center">SignIn</h1>

     <form>
  <div className="form-group">
    <h6 for="exampleInputEmail1">Email address</h6>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <h6 for="exampleInputPassword1">Password</h6>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
   
    
  </div>
  <a type="submit" className="btn btn-sm btn-primary">Signin</a>
  
  <a href="/register" className="btn btn-sm btn-secondary">Register</a>
</form>
   </div>
  );
}

export default Signin;