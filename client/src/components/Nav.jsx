//imports
import Drop from "./Dropdown";
// react
function Nav() {

    return(
            <nav className="nav candy justify-content-around d-flex flex-wrap col-12">
                <div className="col-12 col-md-4 col-lg-1">
                    <Drop
                    dropTitle="Clowns"
                    link1="/new"
                    title1="new!"
                    link2="/stickers"
                    title2="stickers"
                    link3="/more"
                    title3="more"/>
                </div>
                
                <div className="col-12 col-md-4 col-lg-1">
                    <Drop
                    dropTitle="Clowns"
                    link1="/new"
                    title1="new!"
                    link2="/stickers"
                    title2="stickers"
                    link3="/more"
                    title3="more"/>
                </div>
                <div className="col-12 col-md-4 col-lg-1">
                    <Drop 
                    dropTitle="Options"
                    link1="/faq"
                    title1="faq"
                    link2="/about"
                    title2="about"
                    link3="/events"
                    title3="events"
                    link4="/"
                    title4="home"
                    link5="/login"
                    title5="admin"/>
                </div>
                


                <button className="snipcart-checkout btn col-12 col-md-4 col-lg-1">
                    <i className="fa-solid fa-basket-shopping"></i>
                    <span>Basket</span>
                </button>

</nav>
        
    )
}

export default Nav;