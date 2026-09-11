import { useEffect, useState } from 'react';

function TagList({onSelectTag, refresh}) {
  const [tags, setTags] = useState([]);

    const getTags = async () => {
        const response = await fetch('/api/tag', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
        console.log("failed to fetch tags.");
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
    <div className="col-lg-5 col-12 d-flex flex-wrap justify-content-center align-items-center">
      {tags.map(tag => (
        <div className="candy btn m-1 col-5" 
        key={tag.id}
        onClick={() => onSelectTag(tag)}
        >{tag.tagName}</div>
      ))}
    </div>
  );
}

export default TagList;