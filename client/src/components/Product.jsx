//internal imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//external imports
import {useEffect} from 'react';

// react
function Product({id, name, description, price, image, stock }) {

    //useEffect refreshes Snipcart when the component is mounted to make sure
    //that the price of snipcart gets saved when adding to cart.
  

    //returns the Product component.
    //used in: home, clowns, ProductSection
    return (
        //bootstrap card
        <a href={`/product/${id}`} className="text-decoration-none">

        
        <Card className="product">

            {/* Product Image */}
            {/* TODO: MAKE PRODUCT LINK */}
            
                <Card.Img className="product-img" variant="top" src={image || null} />
            

            {/* Product Card */}
            <Card.Body className="justify-content-center d-flex flex-column">
                <Card.Title className="text-center my-0 text-decoration-none">{name}</Card.Title>
                <Card.Text className="text-center my-0">
                £{price}
                </Card.Text>
                {/* Add to Cart Snipcart Button */}
                {(stock > 0) && (
                            <Button className="btn my-2 snipcart-add-item"
                            data-item-id={id}
                            data-item-price={price}
                            data-item-description={description}
                            data-item-image={image}
                            data-item-name={name}
                            data-item-url={window.location.href}
                        >add to cart</Button>
                        )}
                        {(stock <= 0) && (
                            <Button className="my-2 btn-disabled">
                                out of stock
                            </Button>
                        )}
            </Card.Body>
        </Card>
        </a>
  );
}

export default Product;