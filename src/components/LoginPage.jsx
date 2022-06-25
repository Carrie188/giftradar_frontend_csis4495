import React, {useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useHistory, Link} from 'react-router-dom'
import AuthService from "../services/AuthService"


const LoginPage = () => {
    
  const [user, setUser] = useState({username:"", password:""})
  const [errMsg, setErrMsg] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);  
  const { push } = useHistory();


  const handleChange = (e)=>{
      console.log(e.target);
      // get the target
      const fieldName = e.target.getAttribute('name');
      const fieldValue = e.target.value;
      // set value to the property of the object
      user[fieldName] = fieldValue;
      // print the newPerson data
      console.log(user);
  }

  const handleSubmit = async (e)=>{

     if(user.password ==""|| user.username ==""){
        setErrMsg("All the inputs can not be empty!");
      }else{
        // e.preventDefault();
        
        AuthService.login(user.username, user.password).then((response)=>{
            setLoginStatus(true);
            localStorage.setItem('status', true);
            alert("Welcome back "+ ": " +response.id);
            push('/');
        }).catch((err) => {
            setErrMsg("Oops! "+err.message);
           
            
          });
      }
     

  }



return (
  <div className="main-login">
    <div className='form-login' >
      <form>
        
          <h3 className='title-login'>Login Here</h3>
            <div className="mb-3">
            <label className='form-label' htmlFor="username">Username</label>
            <input type="text" className='form-control'  id="username" required="required" name="username" onChange={handleChange} placeholder="Username" />
            </div>
            <div className="mb-3">
            <label className='form-label'  htmlFor="password">Password</label>
            <input type="password" className='form-control' id="password" required="required" name="password" onChange={handleChange} placeholder="Password" />
            </div>
            <div className="mb-3">
            <button className="btn btn-primary" type='button' onClick={handleSubmit}>Log In</button>
            </div>
            <p className='err-msg'>{errMsg}</p>

          <div>
            <p ><i>forget password?</i></p>
            <div>
              <Link to="/register"><p>Sign Up</p></Link>
            </div>
            </div>
         
      </form>
    </div>
  </div>
  )
}

export default LoginPage