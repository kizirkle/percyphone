//imports
import Sorter from '../../components/Sorter';
import GetSections from '../../components/admin/GetSections'
//react
function Clowns() {

    const sectionArray = GetSections({isClown : true});

    return(
        <main>
            <Sorter isClown={true}
            sectionArray={sectionArray}
            />
        </main>
    )
}
//export
export default Clowns;