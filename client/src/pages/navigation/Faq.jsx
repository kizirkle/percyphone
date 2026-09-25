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
                        Is everything your art?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="">
                    <p>{"Yes! Everything on this website was drawn by me- no stock images, stolen art, or ai used :]"}</p>
                </div>
                </div>
            </div>
            <div className="">
                <h2 className="">
                <button className="btn col-12 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Why do you only ship to certain countries?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="">
                    Unfortunately, due to shipping costs and recent laws (Europe…), I’m only offering shipping to the UK, Canada and USA. I hope to open to more countries in the future, however!
                </div>
                </div>
            </div>
            <div className="">
                <h2 className="">
                <button className="btn col-12 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Do you take commissions/customs
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="">
                    I do! I have a pricing sheet available if you pop me either a message on intsagram or an email at percyphoneart@gmail.com, although I only offer no-background sketches, either coloured or uncoloured. Please contact me with any questions!
                </div>
                </div>
            </div>
            <div className="">
                <h2 className="">
                <button className="btn col-12 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    Can I use your art for a tattoo/t-shirt/anything else?
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="">
                    Please contact me! Generally, if you aren’t gaining profit and it isn’t something I sell (IE Making a t-shirt just for you), I’m okay with it: I’d just love a photo! For tattoos, the same applies, although there are a few designs that are too personal, so I'd much rather be asked first. 
                </div>
                </div>
            </div>
            <div className="">
                <h2 className="">
                <button className="btn col-12 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                    How long will my order take to ship?
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="">
                    I ship orders within 2-5 days via either tracked international or 2nd class for UK orders! If you need your order sent out quickly and/or using a first class service, please reach out BEFORE placing the order, to ensure I can accommodate it. Please remember that this is a one-man shop- during the holiday period (November/December) there are sometimes delays with dispatching and with the courier, so please allow extra time where possible.                </div>
                </div>
            </div>
            <div className="">
                <h2 className="">
                <button className="btn col-12 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                    My order isn't here yet?
                </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="">
                    Unfortunately, postal delays are out of my hands :( Please allow 5 working days after shipping for UK orders and 2 weeks for international orders. If it isn't with you by then, please reach out via instagram so I can check on my end. If your order is lost, I will have to file a claim with the postal service, but most delayed international orders are just stuck in customs!  </div>
                </div>
            </div>
            <div className="">
                <h2 className="">
                <button className="btn col-12 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                    There's an issue with my order, what can you do?
                </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="">
                    Unfortunately, postal delays are out of my hands :( Please allow 5 working days after shipping for UK orders and 2 weeks for international orders. If it isn't with you by then, please reach out via instagram so I can check on my end. If your order is lost, I will have to file a claim with the postal service, but most delayed international orders are just stuck in customs!  </div>
                </div>
            </div>
            </div>
    </div>
    
  );
}

//export
export default Faq;