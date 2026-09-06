//imports
import Sorter from '../../components/Sorter';
//react
function Clowns() {

    return(
        <main>
            <Sorter keyword="clowns"
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
export default Clowns;