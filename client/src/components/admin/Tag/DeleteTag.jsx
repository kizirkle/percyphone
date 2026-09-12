//imports
import TagList from './TagList';
import {useState} from 'react';

//react
function DeleteTag(){
    const [selectedTag, setSelectedTag] = useState(null);
    const [message, setMessage] = useState('');
    const [refresh, setRefresh] = useState(0);
    
    const onSelectTag = (tag) => {
        setSelectedTag(tag);
    };

    const handleDelete = async () =>{
        if (!selectedTag){
            setMessage('Failed to select a Tag to delete.');
            return;
        }

        try{
            const response = await fetch('/api/tag', {
                method: 'DELETE',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({id: selectedTag.id})
            });

            const data = await response.json();

            if(!response.ok){
                setMessage(data.message || "deletion failed");
                return;
            }

        } catch (error) {
            setMessage("Failed to Delete Tag.")
        }

        setRefresh(prev => prev + 1);
        setMessage("Successfully deleted!")
    }
    return(
        <section className="col-12 d-flex justify-content-between flex-wrap">
            <TagList onSelectTag={onSelectTag} refresh={refresh}/>
            <div className="col-lg-7 col-12 d-flex flex-column align-items-center justify-content-center">
                {!selectedTag && <p className="p-3">Choose a Tag to delete!</p>}
                {selectedTag && <p className="p-3">Delete {selectedTag.tagName}?</p> }
                <button className="btn"
                onClick={handleDelete}
                disabled={!selectedTag}>Delete</button>
                <div>{message}</div>
            </div>
        </section>
    )
}
//export
export default DeleteTag;