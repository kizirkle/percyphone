//imports
import Banner from "../../components/Banner";
import ProductSection from "../../components/ProductSection";
import Carousel from 'react-bootstrap/Carousel';
//react
function Home() {

    return(
            <main className="candy">
                <div className="col-12 d-flex">
                    <div className="col-lg-6 col-12 carousel">
                        <Carousel className="">
                            <Carousel.Item>
                                <img className="carousel-image" src="public/wip.png"/>
                                <Carousel.Caption>
                                    {/*put text here if needed*/}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </div>
                    <div className="col-12 col-lg-6 carousel-header d-flex align-items-center justify-content-center">
                        <h2>
                            Creating Cute ( And Silly ) Things!
                        </h2>
                    </div>
                </div>
                <ProductSection newProducts={true} sectionTitle="New Arrivals!"/>
                <ProductSection sectionTitle="Hot Items!"/>
            </main>
    )
}
//export
export default Home;