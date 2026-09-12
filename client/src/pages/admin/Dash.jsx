//imports
import AdminProduct from '../../components/admin/AdminProduct';
import AdminTag from '../../components/admin/AdminTag';
import AdminEvent from '../../components/admin/AdminEvent';

import { useState } from 'react';

//react
function Dash() {
    //tab data
    const tab_data = [
        {
            id: 'admin_product',
            label: 'Create/Edit a Product',
            content: <AdminProduct/>
        },
        {
            id: 'admin_tag',
            label: 'Create/Edit a Tag',
            content: <AdminTag/>
        },
        {
            id: 'admin_event',
            label: 'Create/Edit an Event',
            content: <AdminEvent/>
        },
    ]
    var [activeTab, setActiveTab] = useState('admin_product');

    //logout admin
    function adminLogout(){
        console.log("logging out...");
        localStorage.removeItem('adminId');
    }

    return(
        <main className="d-flex flex-column align-items-center justify-content-between candy">
            <h1>Welcome, Percy!</h1>
            
            <section className="d-flex col-12 justify-content-between mt-2 flex-wrap">
                {/* Buttons Section */}
                <div className="d-flex flex-column justify-content-between col-lg-3 col-12">
                    {
                        tab_data.map((tab) => (
                            <button
                            className="btn m-1 mx-3"
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))
                    }
                    <a href="/" className="btn m-1 mx-3" onClick={adminLogout} >
                        Logout
                    </a>
                </div>
                {/* Tab Section */}
                <div className="col-lg-9 d-flex justify-content-center col-12" style={{'minHeight': '50vh'}}>
                    {tab_data.find((tab) => tab.id === activeTab)?.content}
                </div>
                
            </section>
            
        </main>
    )
}
//export
export default Dash;