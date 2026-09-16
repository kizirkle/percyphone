//import
import Sorter from '../../components/Sorter';
import GetSections from '../../components/admin/GetSections'
//react
function Shop() {
    
    const sectionArray = GetSections({isClown : false});

    return(
        <main>
            <Sorter keyword="no" 
            sectionArray={sectionArray}
            />
        </main>
    )
}

//export 
export default Shop;