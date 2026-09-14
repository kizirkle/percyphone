//imports
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

//react
function ProductPage() {
    const [product, setProduct] = useState(null);
    const [focalImage, setFocalImage] = useState(null);
    const { id } = useParams();

    const getProduct = async () => {
        console.log(id, "going to grab specific product...");
        const response = await fetch(`/api/product/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })

        console.log("Product response received:", response.status);

        const data = await response.json();
        console.log(data)
        if(!response.ok){
            console.log(data.error)
            return;
        }
        setProduct(data.data);
    }


    const handleImageChange = (image) => {
        setFocalImage(image);
    }

    useEffect(() => {
        getProduct()
    }, [])

    return(
        <div>
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    {/* Add images As a column of previews*/}
                    <div className="d-flex flex-wrap">
                        <div className="d-flex flex-column">
                            {product.images.map((image, index) => (
                                <div key={index}>
                                    <img value={image} onClick={() => (handleImageChange(image))} className="image-preview" src={image} />
                                </div>
                            ))}
                        </div>
                        
                        {/* WHEN I click on image, it gets pulled up as the main image */}
                        <div>
                            <img className="focal-image" src={focalImage} />
                        </div>
                    </div>
                    
                    {/* To the side, placed beneath the images on mobile, will be the name, price, and add to cart button. 
                    Beneath that is the description. */}

                    {/* FUTURE DEVELOPMENT: Place a 'more from this tag' section where it will show more items with the same tags.*/}
                </div>
            )}
            
        </div>
    )
}
//export
export default ProductPage;