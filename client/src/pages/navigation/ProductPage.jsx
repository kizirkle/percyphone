//imports
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

//react
function ProductPage() {
    const [product, setProduct] = useState(null);
    const [focalImage, setFocalImage] = useState(null);
    const { id } = useParams();

    const getProduct = async () => {
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
        setFocalImage(data.data.image);
    }


    const handleImageChange = (image) => {
        setFocalImage(image);
    }

    useEffect(() => {
        getProduct()
    }, [])

    return(
        <div className="d-flex justify-content-center align-items-center">
            {product && (
                <div className="d-flex flex-row m-2 p-3 flex-wrap justify-content-between col-11">
                    
                    {/* Add images As a column of previews*/}
                    <div className="d-flex flex-wrap col-8">
                        <div className="d-flex flex-column">
                            <div>
                                <img value={product.image} onClick={() => (handleImageChange(product.image))} className="image-preview" src={product.image} />
                            </div>
                            {product.images.map((image, index) => (
                                <div key={index}>
                                    <img value={image} onClick={() => (handleImageChange(image))} className="image-preview" src={image} />
                                </div>
                            ))}
                        </div>
                        
                        {/* WHEN I click on image, it gets pulled up as the main image */}
                        <div className="d-flex align-items-center">
                            <div>
                                <i class="fa-solid fa-circle-arrow-left"></i>
                            </div>
                            <div className="d-flex justify-content-center align-items-center focal-image">
                                <img className="focal-image" src={focalImage} />
                            </div>
                            
                            <div>
                                <i class="fa-solid fa-rotate-180 fa-circle-arrow-left"></i>
                            </div>
                        </div>
                    </div>
                    <div className="candy col-4 d-flex flex-column">
                        <p className="h3">£{product.price}</p>
                        <p className="h5">{product.name}</p>
                        
                        {(product.stock > 0) && (
                            <button className="btn my-2 snipcart-add-item"
                            data-item-id={product.id}
                            data-item-price={product.price}
                            data-item-description={product.description}
                            data-item-image={product.image}
                            data-item-name={product.name}
                            data-item-url={window.location.href}
                        >add to cart</button>
                        )}
                        {(product.stock <= 0) && (
                            <button className="my-2 btn-disabled">
                                out of stock
                            </button>
                        )}
                        <p>{product.description}</p>

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