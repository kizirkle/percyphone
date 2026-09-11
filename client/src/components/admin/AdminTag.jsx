import { useState } from 'react';
import AddTag from './Tag/AddTag';
import EditTag from './Tag/EditTag';
import DeleteTag from './Tag/DeleteTag';



function AdminTag(){
    const tagTabData = [
        {
            id: 'add',
            label: 'Add Tag',
            content: <AddTag/>
            
        },
        {
            id:'edit',
            label:'Edit Tag',
            content: <EditTag/>
        },
        {
            id:'delete',
            label:'Delete Tag',
            content:<DeleteTag/>
        }
    ];

    const [activeTab, setActiveTab] = useState('');

    return(
        <section className="col-12 d-flex flex-column align-items-center">
            <nav className="d-flex flex-row justify-content-between mx-2 col-11">
                {tagTabData.map((tagTab) => (
                    <button key={tagTab.id} id={tagTab.id} className="btn m-1 col-3"
                    onClick={() => setActiveTab(tagTab.id)}>
                        {tagTab.label}
                    </button>
                ))}
            </nav>
            <div className="col-lg-9 d-flex justify-content-center col-12">
                    {tagTabData.find((tagTab) => tagTab.id === activeTab)?.content}
                </div>
        </section>
    )
}

export default AdminTag