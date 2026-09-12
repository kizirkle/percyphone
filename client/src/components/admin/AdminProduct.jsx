import { useState } from 'react';
import AddProduct from './Product/AddProduct';
import EditProduct from './Product/EditProduct';
import DeleteProduct from './Product/DeleteProduct';



function AdminProduct(){
    const productTabData = [
        {
            id: 'add',
            label: 'Add Product',
            content: <AddProduct/>
            
        },
        {
            id:'edit',
            label:'Edit Product',
            content: <EditProduct/>
        },
        {
            id:'delete',
            label:'Delete Product',
            content:<DeleteProduct/>
        }
    ];

    const [activeTab, setActiveTab] = useState('');

    return(
        <section className="col-12 d-flex flex-column align-items-center">
            <nav className="d-flex flex-row justify-content-between mx-2 col-11">
                {productTabData.map((productTab) => (
                    <button key={productTab.id} id={productTab.id} className="btn m-1 col-3"
                    onClick={() => setActiveTab(productTab.id)}>
                        {productTab.label}
                    </button>
                ))}
            </nav>
            <div className="col-lg-9 d-flex justify-content-center col-12">
                    {productTabData.find((productTab) => productTab.id === activeTab)?.content}
                </div>
        </section>
    )
}

export default AdminProduct;