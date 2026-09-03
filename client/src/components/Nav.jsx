//imports
import Dropdown from "./Dropdown";
// react
function Nav() {

    return(
        <>
            <nav className="nav candy">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                        <button>
                            <Dropdown />
                        </button>
                    </li>
                    <li>
                        <a className="snipcart-checkout">
                            <i className="fa-solid fa-basket-shopping"></i>
                            <span>Basket</span>
                        </a>
                    </li>
                </ul>
                {/* PLACE DROPDOWN 1 HERE */}
                {/* PLACE DROPDOWN 2 HERE */}
                {/* PLACE LOGO HERE */}
                {/* PLACE DROPDOWN 3 HERE */}
                {/* PLACE CART HERE */}

            </nav>
        </>
    )
}

export default Nav;