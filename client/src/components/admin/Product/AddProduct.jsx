//imports
import {useState, useEffect} from 'react';
import TagList from '../Tag/TagList';
import ProductForm from './ProductForm'
import ProductImages from './ProductImages';
import DescriptionMaker from './DescriptionMaker';
//react
function AddProduct() {
    var [formState, setFormState] = useState({
        name:'',
        description:[],
        price:0,
        image:'',
        stock:0,
        isClown:false
    });
    var [images, setImages] = useState([]);
    var [message, setMessage] = useState("");
    var [selectedTags, setSelectedTags] = useState([]);
    var [refresh, setRefresh] = useState("");


    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormState({
            ...formState,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const onSelectTag = (tag) => {

        setSelectedTags((prev) => {
            if (prev.includes(tag)) {
                return prev.filter((selectedTag) => selectedTag !== tag);
            }

            return [...prev, tag];
        });
    }

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
                body: JSON.stringify({
                    ...formState,
                    images
                })
            });
            console.log("Product response received:", response.status);

            const data = await response.json();
            console.log(data)
            if(!response.ok){
                setMessage(data.error || "addition failed");
                return;
            }

            console.log("About to add tags:", selectedTags);
            for(let i = 0; i < selectedTags.length; i++){
                var tagResponse = await fetch('/api/tagged_product', {
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        tag_id: selectedTags[i].id,
                        product_id: data.data.id,
                        isClown: data.data.isClown
                    })
                })
                console.log("Adding tag:", selectedTags[i]);
                const tagData = await tagResponse.json();
                if(!tagResponse.ok){
                setMessage(tagData.error || "addition failed");
                return;
            }
            }

        } catch (e) {
          setMessage("Something went wrong.");
          console.error(e);
          return;
        }

        // clear form values
        setFormState({
            name:'',
            description:[],
            price:0,
            image:'',
            stock:0,
            isClown:false
        });
        setMessage("Success!")
    };

    return(
        <div className="d-flex justify-content-around align-items-center col-12 flex-wrap">
            <div className="col-lg-5 col-10 d-flex flex-wrap justify-content-center">
                <TagList onSelectTag={onSelectTag} refresh={refresh}/>
                <DescriptionMaker formState={formState} setFormState={setFormState} edit={false}/>
                <ProductImages setImages={setImages} images={images} originalImageNum={0}/>
            </div>
            <ProductForm handleFormSubmit={handleFormSubmit} btnMessage={"Add Product"} formState={formState} selectedTags={selectedTags} handleChange={handleChange} message={message}/>
        </div>
    )
}
//export
export default AddProduct;