//imports
import {useState, useEffect} from 'react';
//react
function ProductList({onSelectProduct, refresh}){
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        console.log("made it to fetch");
        const response = await fetch('/api/product', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });

        console.log(response);

        if(!response.ok){
            console.log("failed to fetch products.");
            return;
        }

        const result = await response.json();
        console.log("API result: ", result);
        console.log("Products: ", result.data);

        setProducts(result.data);
    }

    useEffect(() => {
        getProducts();
    }, [refresh]);

    return(
        <div className="col-4">
            {products.map((product) => (
                <div className="candy btn m-1 col-12"
                key={product.id}
                onClick={() => onSelectProduct(product)}>
                    {product.name}
                </div>
            ))}
        </div>
    )
}
//export
export default ProductList;