import React from "react";


function Register() {
  return (
    <div className="container mt-5">
     <form>
  <div className="form-group">
    <h6 for="exampleInputName1">Name</h6>
    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name"/>
    
  </div>
  <div className="form-group">
    <h6 for="exampleInputEmail1">Email address</h6>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <h6 for="exampleInputPassword1">Password</h6>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
   
    
  </div>
  <a type="submit" className="btn btn-sm btn-primary">Submit</a>
  

</form>
   </div>
  );
}

export default Register;