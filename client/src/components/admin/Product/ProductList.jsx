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
        <div className="dropdown m-3 col-12">
            <button className="btn col-12 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Choose Product
            </button>
            <ul className="dropdown-menu drop">
                {products.map((product) => (
                    <li className="" key={product.id}>
                        <button className="dropdown-item dropItem" 
                        onClick={() => onSelectProduct(product)}>
                            {product.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}
//export
export default ProductList;