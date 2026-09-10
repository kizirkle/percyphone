import {useState} from 'react';

function AddTag(){
//change the state to the login information each time it gets changed
    var [formState, setFormState] = useState({tagName:'', isSection: false});
    var [formError, setFormError] = useState('');
    //when a value(username, email, password) is changed in the form, 
    // change the state formstate using setFormState
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormState({
            ...formState,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    //when the submit button is submitted, attempt to log in
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(formState);
            var response = await fetch('/api/tag', {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            const data = await response.json();

            if(!response.ok){
                setFormError(data.message || "addition failed");
                return;
            }

        } catch (e) {
          setFormError("Something went wrong.");
          console.error(e);
        }

        // clear form values
        setFormState({
          tagName:'',
          isSection: false
        });
        setFormError("Success!")
    };

    return(
        <section className="col-12 justify-content-center ">
            <form onSubmit={handleFormSubmit} className="d-flex flex-column col-12 align-items-center p-4 mb-4">
                <label className="candy m-2 d-flex flex-column col-5 align-items-center">
                    Tag Name
                    <input type="text"
                    name="tagName"
                    value={formState.tagName}
                    onChange={handleChange}/>
                </label>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"
                    name="isSection"
                    checked={formState.isSection}
                    onChange={handleChange}
                    />
                    <label className="form-check-label" for="switchCheckDefault">Should it be a section?</label>
                    </div>
                <button className="btn" type="submit">
                    Add Tag
                </button>
                <div>{formError}</div>
            </form>
            <div>

            </div>
        </section>
        
    )
}

export default AddTag;