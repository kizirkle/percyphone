//import
import ProductSection from "./ProductSection"
//react
function Sorter({keyword}) {

    //if keyword is given, filter products further by keyword before giving them to product section
    return(
        <div className="sorter">
            <ProductSection sectionTitle="New Arrivals!" newProducts="true" sectionId="new" id="new"/>
            <ProductSection sectionTitle="Stickers!" sectionId="stickers" id="stickers"/>
            <ProductSection sectionTitle="More!" sectionId="more" id="more"/>
        </div>
    )
}

export default Sorter;