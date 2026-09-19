//imports
//react

function Faq() {
  return (
    <div className="d-flex flex-column align-items-center">
        <div>
            <h2 className="text-center">
                Frequently Asked Questions
            </h2>
            <p className="text-center">Some things I'd like to clear up!</p>
        </div>
        <div className="accordion col-11 m-1 py-3" id="accordionExample">
            <div className="">
                <h2 className="">
                    <button className="col-12 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Why can't I add multiple items to my cart at a time?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="">
                    <p>Unfortunately, the program I use to keep your purchases secure does not have a way to add multiple items outside of the cart. My developer is working on it!</p>
                    <p>For now, you can add more of the same item by adding the item you'd like to your cart, and adding more from there.</p>
                </div>
                </div>
            </div>
            <div className="">
                <h2 className="">
                <button className="btn col-12 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Can you ship to the EU?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="">
                    Because of the strict import laws for the EU, I am not authorized to ship there. Sorry!
                </div>
                </div>
            </div>
            <div className="">
                <h2 className="">
                <button className="btn col-12 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Can I ask for custom pieces?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="">
                    Yes! I will design custom merchandise for you. Please reach out on my instagram to get a quote!
                </div>
                </div>
            </div>
            </div>
    </div>
    
  );
}

//export
export default Faq;