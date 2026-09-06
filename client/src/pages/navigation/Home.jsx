//imports
import Banner from "../../components/Banner";
import ProductSection from "../../components/ProductSection";
//react
function Home() {

    return(
            <main className="candy">
                <Banner/>
                <ProductSection sectionTitle="New Arrivals!"/>
            </main>
    )
}
//export
export default Home;