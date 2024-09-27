import React, {useState} from 'react';
import { app } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function CreateUser(){
    let auth = getAuth();
    const [data, setData] = useState({});

    function getInput(event){
        let newInput = {[event.target.name]: event.target.value};
    
        setData({...data, ...newInput});
    }
    
      function handleSubmit(event){
        event.preventDefault();
        createUserWithEmailAndPassword(auth, data.email, data.password).then((response) =>{
          console.log("User successfully created:", response.user);
        //   console.log(response.user)
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