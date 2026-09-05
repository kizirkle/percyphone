//imports
import Drop from "./Dropdown";
// react
function Nav() {

    return(
            <nav className="nav candy justify-content-around d-flex flex-wrap col-12 p-5">
                <div className="col-12 col-md-4 col-lg-1 my-1">
                    <Drop
                    dropTitle="Clowns"
                    link1="/clowns#new"
                    title1="new!"
                    link2="/clowns#stickers"
                    title2="stickers"
                    link3="/clowns#more"
                    title3="more"/>
                </div>
                
                <div className="col-12 col-md-4 col-lg-1 my-1">
                    <Drop
                    dropTitle="Items"
                    link1="/shop#new"
                    title1="new!"
                    link2="/shop#stickers"
                    title2="stickers"
                    link3="/shop#more"
                    title3="more"/>
                </div>
                <div className="col-12 col-md-4 col-lg-1 my-1">
                    <Drop 
                    dropTitle="Options"
                    link1="/"
                    title1="home"
                    link2="/faq"
                    title2="faq"
                    link3="/about"
                    title3="about"
                    link4="/events"
                    title4="events"
                    link5="/login"
                    title5="admin"/>
                </div>
                


                <button className="snipcart-checkout btn col-12 col-md-4 col-lg-1 my-1">
                    <i className="fa-solid fa-basket-shopping"></i>
                    <span></span>
                </button>

</nav>
        
    )
}

export default Nav;