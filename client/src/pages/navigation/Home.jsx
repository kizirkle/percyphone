//imports
import Product from "../../components/Product";
import ProductSection from "../../components/ProductSection";
//react
function Home() {

    return(
            <main className="candy">
                <ProductSection  title="hi"/>
                <p> hi im homepage</p>
                <Product
                id="1"
                name="clown sticker"
                description="a small clown sticker"
                price="3"
                image="https://i.etsystatic.com/38045685/r/il/38067c/7187222684/il_600x600.7187222684_s831.jpg"
                />
            </main>
    )
}
//export
export default Home;