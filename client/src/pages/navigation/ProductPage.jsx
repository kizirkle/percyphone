//imports
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
//react
function ProductPage() {
    const [product, setProduct] = useState(null);
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

    useEffect(() => {
        getProduct()
    }, [])

    return(
        <div>
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <div>
                        <p>{product.description}</p>
                    </div>
                </div>
            )}
            
        </div>
    )
}
//export
export default ProductPage;