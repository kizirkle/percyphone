//imports
import Product from "./Product";
import {useState, useEffect} from 'react';


function ProductSection({sectionTitle, id, isClown, newProducts}){
    const [products, setProducts] = useState([]);
    //Fetch products from backend and display them in a flex layout
    //if productsTag is provided, display the tag.
    //if newProducts is true, display the products released in the last month.
    //if productsTag is not provided, display all products.
    const getProducts = async () => {
        let response;
        console.log("trying to get products")
        if(newProducts == true){
            response = await fetch('/api/product/new', {
                method:'GET',
            })
            
            if(!response.ok){
                console.log("failed to fetch products.");
                return;
            }
            const result = await response.json();
            console.log(result.data)
            setProducts(result.data);

        } else if (newProducts == false){
            response = await fetch('/api/tagged_product/tag', {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'tag_id': id,
                    'isClown': isClown
                })
            })

            console.log(response)

            if(!response.ok){
                console.log("failed to fetch products.");
                return;
            }
            const result = await response.json();

            setProducts(result.productData);
        }
        
        
    }

    useEffect(()=>{
        getProducts();
    }, [newProducts, id, isClown])
    
    return(
        <div>
            <h2 id={id} className="title candy m-2 py-3">
                {sectionTitle}
            </h2>
            {/* Place fetched products here */}
            <section className="d-flex flex-wrap">
                {products && products.map((product) => (
                    <Product 
                    id={product.id}
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    stock={product.stock}/>
                ))}
            </section>
            
        </div>

    );
}

export default ProductSection;