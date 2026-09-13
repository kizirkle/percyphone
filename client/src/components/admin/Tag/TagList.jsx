import { useEffect, useState } from 'react';

function TagList({onSelectTag, refresh, isProducts}) {
  const [tags, setTags] = useState([]);

    const getTags = async () => {
        const response = await fetch('/api/tag', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
        console.log("failed to fetch tags.");
        return
        }

        const result = await response.json();
        console.log("API result:", result);
        console.log("Tags:", result.data);

        setTags(result.data);
    };
    useEffect(() => {
        getTags();
    }, [refresh]);

  return (
    <div className="dropdown m-3 col-12">
            <button className="btn col-12 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Choose Tag
            </button>
            <ul className="dropdown-menu drop">
                {tags.map((tag) => (
                    <li className="" key={tag.id}>
                        <button className="dropdown-item dropItem" 
                        onClick={() => onSelectTag(tag)}>
                            {tag.tagName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    
  );
}

export default TagList;