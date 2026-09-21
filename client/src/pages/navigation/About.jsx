//imports

//react
function About() {

    return(
        <main className="d-flex flex-column flex-wrap col-12">
            <div className=" m-3 d-flex justify-content-center">
                <h2 className="candy">About Me</h2>
            </div>
            <section className="d-flex col-12 align-items-center flex-wrap">
                <aside className="d-flex flex-column product-info col-lg-6 m-5 mt-3 p-5 col-10 align-items-center">
                    <p className="d-flex align-items-center h5 col-12"><i className="fa-solid m-2 fa-heart fa-float"></i><span>from the UK</span></p>
                    <p className="d-flex align-items-center h5 col-12"><i className="fa-solid m-2 fa-heart fa-float "></i><span>loves clowns</span></p>
                    <p className="d-flex align-items-center h5 col-12"><i className="fa-solid m-2 fa-heart fa-float"></i><span>fan artist who attends local cons</span></p>

                </aside>
                <div className=" col-lg-4 m-5 col-12 about-image">

                </div>
            </section>
        </main>
    )
}
//export
export default About;