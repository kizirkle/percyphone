//import
import Sorter from '../../components/Sorter';

//react
function Shop() {

    return(
        <main>
            <Sorter keyword="no" 
            sectionArray={[
                {
                    title: "New Arrivals!",
                    id: "new"
                },
                {
                    title: "Keychains",
                    id: "keychains"
                },
                {
                    title: "Charms",
                    id: "charms"
                },
                {
                    title: "Badges",
                    id: "badges"
                }
            ]}
            />
        </main>
    )
}

//export 
export default Shop;