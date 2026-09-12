//imports
import {useState, useEffect} from 'react';
import Product from '../../Product';
import ProductList from './ProductList';

//react
function DeleteProduct() {
    var [selectedProduct, setSelectedProduct] = useState(
        {
            name:'',
            description:'',
            price:0,
            image:'',
            stock:0,
            isClown:false
        }
    );
    var [refresh, setRefresh] = useState(0);
    var [message, setMessage] = useState("");

    const onSelectProduct = (product) => {
        setSelectedProduct(product);
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        console.log("attempting to submit...");
       if(!selectedProduct){
        setMessage("Please select a product to edit.");
        return;
       }

       try{
        const response = await fetch('/api/product', {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    id: selectedProduct.id,
            })
        });

        const data = await response.json();

        if (!response.ok) {
            setMessage(data.message || 'Failed to delete product.');
            return;
        }
         setMessage('Successfully deleted!');
         setRefresh(prev => prev + 1);
       } catch(error){
        console.log(error);
        setMessage("failed to edit product.");
       }
    }

    return(
        <div className="d-flex flex-column align-items-center col-12">
            <div className="d-flex col-12 justify-content-around">
                <ProductList onSelectProduct={onSelectProduct} refresh={refresh}/>
                <Product 
                name={selectedProduct.name || ''}
                description={selectedProduct.description || ''}
                price={selectedProduct.price || ''}
                image={selectedProduct.image || ''}
                stock={selectedProduct.stock || ''}
                />
            </div>
            <div className="col-12 d-flex flex-column align-items-center justify-content-center ">
                {!selectedProduct.image && <p className="p-2">Choose a Product to delete!</p>}
                {selectedProduct.image && <p className="p-2">Delete {selectedProduct.name}?</p> }
                <button
                    className="btn col-lg-4 mb-3"
                    onClick={handleDelete}
                    disabled={!selectedProduct}
                    >
                    Delete
                </button>
            </div>
            
            <div>{message}</div>
        </div>
    )
}

//export
export default DeleteProduct;