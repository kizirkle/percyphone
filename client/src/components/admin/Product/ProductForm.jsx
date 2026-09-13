import Product from '../../Product';

function ProductForm({handleFormSubmit, formState, handleChange, message, selectedTags, onSelectTag}){

    return(
    <aside className="d-flex flex-row-reverse flex-wrap justify-content-between">
            <div className=" d-flex align-items-center flex-column justify-content-center col-lg-6 col-12">
                <Product 
                    name={formState.name}
                    price={formState.price}
                    image={formState.image}
                />
                <p>Selected Tags:</p>
                <div className="d-flex col-10 mb-2 justify-content-center flex-wrap">
                    {selectedTags && selectedTags.map((tag) => (
                        <button className="btn m-1" key={tag.id}
                        onClick={() => onSelectTag(tag)}>
                            {tag.tagName}
                        </button>
                    ))}
                </div>
                
            </div>
            
            <form onSubmit={handleFormSubmit} className="d-flex flex-column col-12 col-lg-6 align-items-center p-4 mb-4">
                <div className="d-flex flex-column m-1 justify-content-center">
                    <label>Product Name</label>
                    <input type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}/>
                </div>
                <div className="d-flex flex-column m-1 justify-content-center">
                    <label>Product Description</label>
                    <input type="text"
                    name="description"
                    value={formState.description}
                    onChange={handleChange}/>
                </div>
                <div className="d-flex flex-column m-1 justify-content-center">
                    <label>Product Price</label>
                    <input type="integer"
                    name="price"
                    value={formState.price}
                    onChange={handleChange}/>
                </div>
                <div className="d-flex flex-column m-1 justify-content-center">
                    <label>Product Thumbnail Link</label>
                    <input type="text"
                    name="image"
                    value={formState.image}
                    onChange={handleChange}/>
                </div>
                
                <div className="d-flex flex-column m-1 justify-content-center">
                    <label>Product's Initial Stock</label>
                    <input type="integer"
                    name="stock"
                    value={formState.stock}
                    onChange={handleChange}/>
                </div>
                <div className="d-flex m-1 justify-content-center">
                    <label>Is this product a Clown?</label>
                    <input className="form-check-input mx-1" type="checkbox" role="switch" id="switchCheckDefault"
                    name="isClown"
                    checked={formState.isClown}
                    onChange={handleChange}
                    />
                </div>
                <button className="btn m-1">Add Product</button>
                <div>{message}</div>
            </form>
        </aside>
 )
}

export default ProductForm;