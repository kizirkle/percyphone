//imports
import Product from "./Product";


function ProductSection({sectionTitle, id, productsTag, newProducts}){
    //Fetch products from backend and display them in a flex layout
    //if productsTag is provided, display the tag.
    //if newProducts is true, display the products released in the last month.
    //if productsTag is not provided, display all products.

    return(
        <div>
            <h2 id={id} className="title candy m-2">
                {sectionTitle}
            </h2>
            {/* Place fetched products here */}
            <section className="d-flex flex-wrap justify-content-around">
                <Product
                id="1"
                name="clown sticker"
                description="a small clown sticker"
                price="3"
                image="https://i.etsystatic.com/38045685/r/il/38067c/7187222684/il_600x600.7187222684_s831.jpg"
                />
                <Product
                id="4"
                name="clown sticker"
                description="a small clown sticker"
                price="3"
                image="https://i.etsystatic.com/38045685/r/il/38067c/7187222684/il_600x600.7187222684_s831.jpg"
                />
                <Product
                id="5"
                name="clown sticker"
                description="a small clown sticker"
                price="3"
                image="https://i.etsystatic.com/38045685/r/il/38067c/7187222684/il_600x600.7187222684_s831.jpg"
                />
                <Product
                    id="2"
                    name="clown sticker"
                    description="a small clown sticker"
                    price="3"
                    image="https://i.etsystatic.com/38045685/r/il/38067c/7187222684/il_600x600.7187222684_s831.jpg"
                    />
                <Product
                    id="3"
                    name="clown sticker"
                    description="a small clown sticker"
                    price="3"
                    image="https://i.etsystatic.com/38045685/r/il/38067c/7187222684/il_600x600.7187222684_s831.jpg"
                    />
                    <Product
                    id="3"
                    name="clown sticker"
                    description="a small clown sticker"
                    price="3"
                    image="https://i.etsystatic.com/38045685/r/il/38067c/7187222684/il_600x600.7187222684_s831.jpg"
                    />
                    <Product
                    id="3"
                    name="clown sticker"
                    description="a small clown sticker"
                    price="3"
                    image="https://i.etsystatic.com/38045685/r/il/38067c/7187222684/il_600x600.7187222684_s831.jpg"
                    />
                    <Product
                    id="3"
                    name="clown sticker"
                    description="a small clown sticker"
                    price="3"
                    image="https://i.etsystatic.com/38045685/r/il/38067c/7187222684/il_600x600.7187222684_s831.jpg"
                    />
                    <Product
                    id="3"
                    name="clown sticker"
                    description="a small clown sticker"
                    price="3"
                    image="https://i.etsystatic.com/38045685/r/il/38067c/7187222684/il_600x600.7187222684_s831.jpg"
                    />
            </section>
            
        </div>

    );
}

export default ProductSection;