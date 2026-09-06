//imports
import Product from "../../components/Product";
import ProductSection from "../../components/ProductSection";
//react
function Home() {

    return(
            <main className="candy">
                <ProductSection sectionTitle="New Arrivals!"/>
                <ProductSection sectionTitle="Hot Items!"/>
            </main>
    )
}
//export
export default Home;