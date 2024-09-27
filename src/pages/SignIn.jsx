import React, {useState} from 'react';
import { app } from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn(){
    let auth = getAuth();
    const [data, setData] = useState({});

    function getInput(event){
        let newInput = {[event.target.name]: event.target.value};
    
        setData({...data, ...newInput});
    }
    
      function handleSubmit(event){
        event.preventDefault();
        signInWithEmailAndPassword(auth, data.email, data.password).then((response) =>{
          alert("User Logged in successfully:", response.user);
          console.log(response.user)
        })
        .catch((err) =>{
          alert(err.message)
        });
      }
     

        return(
            <div>
                <div className="login-form">
                    <form>

                    <label htmlFor="uname"><b>Email</b></label>
    <input type="text" placeholder="Email" name="email" required onChange={(event) => getInput(event)}/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required onChange={(event) => getInput(event)}/>

    <button type="submit" onClick={handleSubmit}>Sign Up!</button>
                    </form>
                </div>
            </div>
        )
}