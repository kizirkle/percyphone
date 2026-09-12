//imports
import {useState, useEffect} from 'react';
import Product from '../../Product';
import ProductForm from './ProductForm'
//react
function AddProduct() {
    var [formState, setFormState] = useState({
        name:'',
        description:'',
        price:0,
        image:'',
        stock:0,
        isClown:false
    });
    var [message, setMessage] = useState("");

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
        console.log("attempting to submit...")
        try {
            console.log(formState);
            var response = await fetch('/api/product', {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            const data = await response.json();

            if(!response.ok){
                setMessage(data.error || "addition failed");
                return;
            }

        } catch (e) {
          setMessage("Something went wrong.");
          console.error(e);
          return;
        }

        // clear form values
        setFormState({
            name:'',
            description:'',
            price:0,
            image:'',
            stock:0,
            isClown:false
        });
        setMessage("Success!")
    };

    return(
        <ProductForm handleFormSubmit={handleFormSubmit} formState={formState} handleChange={handleChange} message={message}/>
    )
}
//export
export default AddProduct;