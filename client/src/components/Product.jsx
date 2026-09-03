//imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useEffect} from 'react';
// react
function Product({name, price, image, description, id}) {
  useEffect(() => {
    // Check if the Snipcart API is globally available on the window object
    if (window.Snipcart) {
      // Force Snipcart to re-scan the DOM for new .snipcart-add-item buttons
      window.Snipcart.refresh();
    }
  }, []);
    return (
    <Card className="product" style={{ width: '18rem' }}>
      <Card.Img className="product-img" variant="top" src={image} />
      <Card.Body className="justify-content-center d-flex flex-column">
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className="text-center">
          £{price}
        </Card.Text>
        <Button
            className="snipcart-add-item"
            data-item-id={id}
            data-item-price={price}
            data-item-description={description}
            data-item-image={image}
            data-item-name={name}
            data-item-url={window.location.href}>
            Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;