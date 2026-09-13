//import
import ProductSection from "./ProductSection"
//react
function Sorter({isClown, sectionArray}) {
    const items = sectionArray.map((section) => {
        if(isClown){
            return <ProductSection isClown={true} sectionTitle={section.tagName} newProducts="true" id={section.id} key={section.id} />
        }
        else{
            return <ProductSection isClown={false} sectionTitle={section.tagName} id={section.id} key={section.id} />
        }
    })

    //if keyword is given, filter products further by keyword before giving them to product section
    return(
        <div className="sorter">
            {items}
        </div>
    )
}

export default Sorter;