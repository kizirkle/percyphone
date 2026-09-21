//imports
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import DescriptionRenderer from "../../components/DescriptionRenderer";
import Sorter from "../../components/Sorter";
//react
function ProductPage() {
    const [product, setProduct] = useState(null);
    const [focalImage, setFocalImage] = useState(null);
    const [tags, setTags] = useState([]);
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

        setTags(tags);
    }

    const handleImageChange = (image) => {
        setFocalImage(image);
    }

    useEffect(() => {
        getProduct()
    }, [])

    useEffect(() => {
        if (!product) return;

        getTagsFromProduct(product.id);
    }, [product]);

    return(
        <div className="d-flex justify-content-center align-items-center">
            
            {product && (
                <div className="d-flex flex-row m-2 p-3 flex-wrap justify-content-center col-11">
                    
                    {/* Add images As a column of previews*/}
                    <div className="d-flex flex-wrap col-lg-7 col-12">
                        <div className="d-flex flex-column col-12 col-lg-2">
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
                        <div className="d-flex col-lg-9 col-12 justify-content-center align-items-center">
                            <div className="d-flex justify-content-center col-12 align-items-center focal-image">
                                <div className="focal-image col-12 rounded" style={{ backgroundImage: `url(${focalImage})` }}>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-12 col-lg-5 product-info d-flex flex-column">
                        <p className="h3 candy">£{product.price}</p>
                        <p className="h5 candy">{product.name}</p>
                        
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
                        <DescriptionRenderer value={product.description}/>

                    </div>
                    
                    {/* To the side, placed beneath the images on mobile, will be the name, price, and add to cart button. 
                    Beneath that is the description. */}

                    {/* FUTURE DEVELOPMENT: Place a 'more from this tag' section where it will show more items with the same tags.*/}
                    <div className="product-info m-3 col-12">
                        <h2 className="candy m-3 ">More Like This:</h2>
                        <Sorter sectionArray={tags} isClown={product.isClown}/>
                    </div>
                    
                </div>
            )}
            
        </div>
    )
}
//export
export default ProductPage;