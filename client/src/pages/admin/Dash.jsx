//imports



//react
function Dash() {
    

    //logout admin
    function adminLogout(){
        console.log("logging out...");
        localStorage.removeItem('adminId');
    }

    return(
        <main className="d-flex flex-column align-items-center justify-content-around candy">
            <h1>Welcome, Percy!</h1>
            {/* Buttons Section */}
            <section className="d-flex col-12  flex-wrap">
                <div className="d-flex flex-column col-4">
                    <button className="btn m-1 col-12">Create/Edit a Product</button>
                    <button className="btn m-1 col-12">Create/Edit a Tag</button>
                    <button className="btn m-1 col-12">Create/Edit an Event</button>
                    <a href="/">
                        <button className="btn m-1 col-12" onClick={adminLogout} >Logout</button>
                    </a>
                </div>
                
            </section>
            
        </main>
    )
}
//export
export default Dash;