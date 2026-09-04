//imports



function ProductSection({sectionTitle, productsTag, newProducts}){
    //Fetch products from backend and display them in a flex layout
    //if productsTag is provided, display the tag.
    //if newProducts is true, display the products released in the last month.
    //if productsTag is not provided, display all products.

    return(
        <div>
            <h2 className="title m-2">
                {sectionTitle}
            </h2>
            {/* Place fetched products here */}
        </div>

    );
}

export default ProductSection;