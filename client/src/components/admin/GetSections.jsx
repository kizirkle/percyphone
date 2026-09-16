import { useState, useEffect } from 'react';

function GetSections({ isClown }) {
    const [sections, setSections] = useState([]);

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

                if (!response.ok) {
                    console.log(result.message || 'Failed to get sections');
                    return;
                }

                console.log(result.data);

                setSections(result.data);

            } catch (error) {
                console.log(error.message);
            }
        };

        getSections();
    }, []);

    if (isClown) {
        return sections.filter(section => section.isClown_num > 0);
    }

    return sections.filter(section => section.product_num > 0);
}

export default GetSections;
