import { useState, useEffect } from 'react';


function GetSections() {

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

                const result = await response.json();
                console.log(result.data)
                if (!response.ok) {
                    console.log(result.message || 'Failed to get sections');
                    return;
                }

                setSectionArray(result.data);

            } catch (error) {
                console.log(error.message);
            }
        };

        getSections();
    }, []);

    return sectionArray;
}

export default GetSections;