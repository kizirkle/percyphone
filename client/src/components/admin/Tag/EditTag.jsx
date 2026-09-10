import { useEffect, useState } from 'react';

function EditTag() {
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
    }, []);

  return (
    <div>
      {tags.map(tag => (
        <div className="candy" key={tag.id}>{tag.tagName}</div>
      ))}
    </div>
  );
}

export default EditTag;