//import
import React, { useState } from 'react';

//react
function Login() {
    //change the state to the login information each time it gets changed
    var [formState, setFormState] = useState({username:'', email:'', password:''});

    //when a value(username, email, password) is changed in the form, 
    // change the state formstate using setFormState
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
        ...formState,
        [name]: value,
        });
    };

    //when the submit button is submitted, attempt to log in
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {

        } catch (e) {
          setFormError(true);
          console.error(e);
        }
    
        // clear form values
        setFormState({
          username: '',
          email:'',
          password: '',
        });
    };

    return(
        <main className="d-flex col-12 flex-column align-items-center">
            <h2 className="candy m-4">Please Login:</h2>

            <form className="d-flex flex-column col-12 align-items-center p-4 mb-4">
                <label className=" candy m-2 d-flex flex-column col-5 align-items-center">
                    Username
                    <input 
                        type="text"
                        name="username"
                        value={formState.username}
                        onChange={handleChange}
                    />
                </label>
                <label className="candy m-2 d-flex flex-column col-5 align-items-center">
                    Email
                    <input 
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </label>
                <label className="candy m-2 d-flex flex-column col-5 align-items-center">
                    Password
                    <input 
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                </label>

                <span id="message"></span>

                <button type="submit" onClick={handleFormSubmit} className="btn m-2">Login</button>
            </form>
        </main>
    )
}
//export
export default Login;