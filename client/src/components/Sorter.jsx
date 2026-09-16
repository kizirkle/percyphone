//import
import ProductSection from "./ProductSection"
//react
function Sorter({isClown, sectionArray}) {
    const items = sectionArray.map((section) => {
        if(isClown && section.isClown_num > 0){
            return <ProductSection isClown={true} newProducts={false} sectionTitle={section.tagName} id={section.id} key={section.id} />
        }
        else if (!isClown && section.product_num > 0){
            return <ProductSection isClown={false} newProducts={false} sectionTitle={section.tagName} id={section.id} key={section.id} />
        }
        else{
            console.log("skip: ", section.tagName);
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