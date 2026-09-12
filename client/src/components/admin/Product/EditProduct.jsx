//imports
import {useState, useEffect} from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

//react
function EditProduct() {
    var [selectedProduct, setSelectedProduct] = useState(null);
    var [refresh, setRefresh] = useState(0);

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
            [name]: type == 'checkbox' ? checked: value
        })
    }

    const onSelectProduct = (product) => {
        setSelectedProduct(product);
        setFormState({
            name: product.name,
            description: product.description,
            price: product.price,
            image:product.image,
            stock:product.stock,
            isClown:product.isClown
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("attempting to submit...");
       if(!selectedProduct){
        setMessage("Please select a product to edit.");
        return;
       }

       try{
        const response = await fetch('/api/product', {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    id: selectedProduct.id,
                    name: formState.name,
                    description: formState.description,
                    price: formState.price,
                    image: formState.image,
                    stock: formState.stock,
                    isClown: formState.isClown
            })
        });

        const data = await response.json();

        if (!response.ok) {
            setMessage(data.message || 'Failed to edit tag.');
            return;
        }
         setMessage('Successfully edited!');

         setRefresh(prev => prev + 1);

         setSelectedProduct({
            ...selectedProduct,
            name:formState.name,
            description: formState.description,
            price: formState.price,
            image: formState.image,
            stock: formState.stock,
            isClown: formState.isClown
         })
       } catch(error){
        console.log(error);
        setMessage("failed to edit product.");
       }
    }

    return(
        <div>
            <ProductList onSelectProduct={onSelectProduct} refresh={refresh}/>
            <ProductForm formState={formState} message={message} handleChange={handleChange} handleFormSubmit={handleFormSubmit}/>

        </div>
    )
}

//export
export default EditProduct;