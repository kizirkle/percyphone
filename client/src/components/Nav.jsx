//imports
import Drop from "./Dropdown";
// react
function Nav() {

    return(
        <>
            <nav className="nav candy">
                <ul className="nav-list d-flex justify-content-around flex-wrap col-12">
                    <li>
                        <button>
                            <Drop 
                            dropTitle="Clowns"
                            link1="/new"
                            title1="new!"
                            link2="/stickers"
                            title2="stickers"
                            link3="/more"
                            title3="more"/>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Drop 
                            dropTitle="Clowns"
                            link1="/new"
                            title1="new!"
                            link2="/stickers"
                            title2="stickers"
                            link3="/more"
                            title3="more"/>
                        </button>
                    </li>
                    <li></li>
                    <li>
                        <button>
                            <Drop 
                            dropTitle="Options"
                            link1="/faq"
                            title1="faq"
                            link2="/about"
                            title2="about"
                            link3="/events"
                            title3="events"/>
                        </button>
                    </li>
                    <li>
                        <button className="snipcart-checkout">
                            <i className="fa-solid fa-basket-shopping"></i>
                            <span>Basket</span>
                        </button>
                    </li>
                </ul>


            </nav>
        </>
    )
}

export default Nav;