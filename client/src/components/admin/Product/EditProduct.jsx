//imports
import {useState, useEffect} from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import TagList from '../Tag/TagList'

//react
function EditProduct() {
    var [selectedProduct, setSelectedProduct] = useState(null);
    var [refresh, setRefresh] = useState(0);
    var [selectedTags, setSelectedTags] = useState([]);
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

    const onSelectTag = (tag) => {

        setSelectedTags((prev) => {
            if (prev.includes(tag)) {
                return prev.filter((selectedTag) => selectedTag !== tag);
            }

            return [...prev, tag];
        });
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

        for(let i = 0; i < selectedTags.length; i++){
                var tagResponse = await fetch('/api/tagged_product', {
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        tag_id: selectedTags[i].id,
                        product_id: selectedProduct.id
                    })
                })
                const tagData = await tagResponse.json();
                if(!tagResponse.ok){
                setMessage(tagData.error || "addition failed");
                return;
            }
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
        <div className="d-flex justify-content-around col-12 flex-wrap">
            <TagList onSelectTag={onSelectTag} refresh={refresh} isProducts={true}/>
            <ProductList onSelectProduct={onSelectProduct} refresh={refresh}/>
            <ProductForm formState={formState} selectedTags={selectedTags} message={message} handleChange={handleChange} handleFormSubmit={handleFormSubmit}/>

        </div>
    )
}

//export
export default EditProduct;