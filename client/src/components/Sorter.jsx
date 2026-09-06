//import
import ProductSection from "./ProductSection"
//react
function Sorter({keyword, sectionArray}) {
    const items = sectionArray.map((section) => {
        if(section.id == "new"){
            return <ProductSection sectionTitle={section.title} newProducts="true" id={section.id} key={section.id} />

        }
        else{
            return <ProductSection sectionTitle={section.title} id={section.id} key={section.id} />
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