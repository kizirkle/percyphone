//imports
import Sorter from '../../components/Sorter';
import { useState, useEffect } from 'react';
//react
function Clowns() {
    const [sectionArray, setSectionArray] = useState([]);

    useEffect(() => {
        const getSections = async () => {
            try {
                console.log("GETTING SECTIONS");
                const response = await fetch('/api/tag/sections', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const {data, error} = await response.json();
                console.log(data)
                if (!response.ok) {
                    console.log(data.message || 'Failed to get sections');
                    return;
                }

                setSectionArray(data);

            } catch (error) {
                console.log(error.message);
            }
        };

        getSections();
    }, []);


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