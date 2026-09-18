//imports
import {useState, useEffect} from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import TagList from '../Tag/TagList'
import ProductImages from './ProductImages'
import DescriptionMaker from './DescriptionMaker';

//react
function EditProduct() {
    //state variables
    var [selectedProduct, setSelectedProduct] = useState(null);
    var [refresh, setRefresh] = useState(0);
    var [selectedTags, setSelectedTags] = useState([]);
    var [originalTags, setOriginalTags] = useState([]);
    var [images, setImages] = useState([]);
    var [formState, setFormState] = useState({
        name:'',
        description:[],
        price:0,
        image:'',
        stock:0,
        isClown:false
    });
    var [message, setMessage] = useState("");
    var [originalImageNum, setOriginalImageNum] = useState(0);

    //when a change happens to the edit form, change the formState
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        //change the formState. 
        // If it's a checkbox, change it to checked or unchecked. 
        // If it's a value, place the value.
        setFormState({
            ...formState,
            [name]: type == 'checkbox' ? checked: value
        })
    }

    //when a product is selected, populate it's data into the form
    const onSelectProduct = (product) => {
        //save the product for requests later down the line
        setSelectedProduct(product);
        //populate the data of product into the form to edit
        setFormState({
            name: product.name,
            description: product.description,
            price: product.price,
            image:product.image,
            stock:product.stock,
            isClown:product.isClown
        })
        setImages(product.images);
        setOriginalImageNum(product.images.length);
        getTagsFromProduct(product.id);
    }

    //grab all necessary tags for the product that is already in the database.
    const getTagsFromProduct = async (id) => {
        const response = await fetch('/api/tagged_product/product',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                product_id: id
            })
        })
        console.log(response)
        if(!response.ok){
            console.log("failed to fetch products.");
            return;
        }
        const result = await response.json();

        console.log("TAG RESULT:", result);
        console.log("TAG DATA:", result.tagData);

        const tags = result.tagData || [];

        setSelectedTags(tags);
        setOriginalTags(tags);
    }

    //save any selected tags in an array to be added in the fetch request.
    const onSelectTag = (tag) => {

        setSelectedTags((prev) => {
            //if the tag is already included, delete it from the array.
            if (prev.some((selectedTag) => selectedTag.id === tag.id)) {
            return prev.filter((selectedTag) => selectedTag.id !== tag.id);
        }

        return [...prev, tag];
        });
    }

    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("attempting to submit...");
        //if a product was not chosen to edit, don't let them query
        //the database at all.
       if(!selectedProduct){
        setMessage("Please select a product to edit.");
        return;
       }
       
       const tagsToAdd = selectedTags.filter(
            tag => !originalTags.some(original => original.id === tag.id)
        );

        const tagsToDelete = originalTags.filter(
            original => !selectedTags.some(tag => tag.id === original.id)
        );
        
       //update the database with the necessary fetch requests.
       try{
        //update the product itself
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
                    isClown: formState.isClown,
                    images: images
            })
        });
        //product data, and if product has no data, return.
        const data = await response.json();

        if (!response.ok) {
            setMessage(data.message || 'Failed to edit tag.');
            return;
        }
        //add any necessary tags
        if(tagsToAdd.length > 0){
            for(let i = 0; i < tagsToAdd.length; i++){
                var tagAdditions = await fetch('/api/tagged_product', {
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        tag_id: tagsToAdd[i].id,
                        product_id: selectedProduct.id
                    })
                })
                const tagAdditionData = await tagAdditions.json();
                if(!tagAdditions.ok){
                    setMessage(tagAdditionData.error || "addition failed");
                    return;
                }
            }
        }

        //now, delete any necessary tags
        if(tagsToDelete.length > 0){
            for(let i = 0; i < tagsToDelete.length; i++){
                var tagDeletions = await fetch('/api/tagged_product', {
                    method:"DELETE",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        tag_id: tagsToDelete[i].id,
                        product_id: selectedProduct.id
                    })
                })
                const tagDeletionData = await tagDeletions.json();
                if(!tagDeletions.ok){
                    setMessage(tagDeletionData.error || "Deletion failed");
                    return;
                }
            }
        }

         setMessage('Successfully edited!');
         setOriginalTags(selectedTags);
         setRefresh(prev => prev + 1);

         setSelectedProduct({
            ...selectedProduct,
            name:formState.name,
            description: formState.description,
            price: formState.price,
            image: formState.image,
            stock: formState.stock,
            isClown: formState.isClown,
            images: images
         })
       } catch(error){
        console.log(error);
        setMessage("failed to edit product.");
       }
    }

    return(
        <div className="d-flex justify-content-around col-12 flex-wrap">
            <div className=" d-flex flex-column justify-content-around align-items-center col-lg-3 col-12">
                <TagList onSelectTag={onSelectTag} refresh={refresh} isProducts={true}/>
                <ProductList onSelectProduct={onSelectProduct} refresh={refresh}/>
                <ProductImages images={images} refresh={refresh} setImages={setImages} originalImageNum={originalImageNum}/>
                <DescriptionMaker formState={formState} setFormState={setFormState} edit={true}/>
            </div>
            
            <ProductForm formState={formState} onSelectTag={onSelectTag} selectedTags={selectedTags} message={message} handleChange={handleChange} btnMessage={"Edit Product"} handleFormSubmit={handleFormSubmit}/>

        </div>
    )
}

//export
export default EditProduct;