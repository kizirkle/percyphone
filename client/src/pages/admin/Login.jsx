//import
import React, { useState } from 'react';

//react
function Login() {
    //change the state to the login information each time it gets changed
    var [formState, setFormState] = useState({username:'', email:'', password:''});
    var [formError, setFormError] = useState('');
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
            var response = await fetch('/api/admin', {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            const data = await response.json();

            if(!response.ok){
                setFormError(data.message || "login failed");
                return;
            }

            localStorage.setItem('adminId', data.admin.id);
            window.location.href = '/admin/dashboard';
        } catch (e) {
          setFormError("Something went wrong.");
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

            <form onSubmit={handleFormSubmit} className="d-flex flex-column col-12 align-items-center p-4 mb-4">
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

                <span id="message">{formError}</span>

                <button type="submit" className="btn m-2">Login</button>
            </form>
        </main>
    )
}
//export
export default Login;