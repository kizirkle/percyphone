import { useEffect, useState } from 'react';
import TagList from './TagList'

function EditTag() {
    const [selectedTag, setSelectedTag] = useState(null);
    const [formState, setFormState] = useState({tagName:'', isSection: false});
    const [message, setMessage] = useState('');
    const [refresh, setRefresh] = useState(0);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormState({
            ...formState,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    
    const onSelectTag = (tag) => {
        setSelectedTag(tag);
        setFormState({
            tagName: tag.tagName,
            isSection: tag.isSection
        });
    };

    const handleEdit = async () => {
        if (!selectedTag) {
            setMessage('Please select a tag to edit.');
            return;
        }

        try {
            const response = await fetch('/api/tag', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: selectedTag.id,
                    tagName: formState.tagName,
                    isSection: formState.isSection
                })
            });

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.message || 'Failed to edit tag.');
                return;
            }

            setMessage('Successfully edited!');

            // Refresh TagList
            setRefresh(prev => prev + 1);

            // Update selectedTag to reflect the changes
            setSelectedTag({
                ...selectedTag,
                tagName: formState.tagName,
                isSection: formState.isSection
            });

        } catch (error) {
            console.log(error);
            setMessage('Failed to edit tag.');
        }
    };


    return (
    <div className="col-12 d-flex">
        <div className="col-lg-5 col-10 d-flex justify-content-center">
            <TagList onSelectTag={onSelectTag} refresh={refresh}/>
        </div>
      
      <section className="col-lg-7 col-12 d-flex flex-column align-items-center justify-content-center">
        {!selectedTag && <p className="p-3">Choose a Tag to edit!</p>}
        {selectedTag && <p className="p-3">Edit {selectedTag.tagName}?</p> }
        {selectedTag &&
        <form className="d-flex flex-column align-items-center">
            <label className="candy m-2 d-flex flex-column col-5 justify-content-center align-items-center">
                Tag Name
                <input type="text"
                name="tagName"
                value={formState.tagName}
                onChange={handleChange}/>
            </label>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"
                name="isSection"
                checked={formState.isSection}
                onChange={handleChange}
                />
                <label className="form-check-label" for="switchCheckDefault">Should it be a section?</label>
            </div>
        </form>
        }
      
        <button className="btn"
                    onClick={handleEdit}
                    disabled={!selectedTag}>
                        Edit
        </button>
        <div>{message}</div>
    
      </section>
    </div>
  );
}

export default EditTag;