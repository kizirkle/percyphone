//imports
import Sorter from '../../components/Sorter';
import GetSections from '../../components/admin/GetSections'
//react
function Clowns() {

    const sectionArray = GetSections();

    return(
        <main>
            <Sorter keyword="clowns"
            sectionArray={sectionArray}
            />
        </main>
    )
}
//export
export default Clowns;