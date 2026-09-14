//imports
import Product from "../../components/Product";
import Banner from "../../components/Banner";
import ProductSection from "../../components/ProductSection";
//react
function Home() {

    return(
            <main className="candy">
                <Banner/>
                <ProductSection newProducts={true} sectionTitle="New Arrivals!"/>
                <ProductSection sectionTitle="Hot Items!"/>
            </main>
    )
}
//export
export default Home;