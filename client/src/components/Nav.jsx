//imports
import Drop from "./Dropdown";
// react
function Nav() {

    return(
            <nav className="nav candy justify-content-around d-flex flex-wrap col-12 p-5">
                <div className="col-12 col-md-4 col-lg-1 my-1">
                    <Drop
                    dropTitle="Clowns"
                    dropArray={
                        [
                            {
                                title: "New Arrivals!",
                                link: "/clowns#new"
                            },
                            {
                                title: "Keychains",
                                link: "/clowns#keychains"
                            },
                            {
                                title: "Charms",
                                link: "/clowns#charms"
                            },
                            {
                                title: "Badges",
                                link: "/clowns#badges"
                            },
                        ]
                    }
                    />
                </div>
                
                <div className="col-12 col-md-4 col-lg-1 my-1">
                    <Drop
                    dropTitle="Items"
                    dropArray={
                        [
                            {
                                title: "New Arrivals!",
                                link: "/shop#new"
                            },
                            {
                                title: "Keychains",
                                link: "/shop#keychains"
                            },
                            {
                                title: "Charms",
                                link: "/shop#charms"
                            },
                            {
                                title: "Badges",
                                link: "/shop#badges"
                            },
                        ]
                    }/>
                </div>
                <div className="col-12 col-md-4 col-lg-1 my-1">
                    <Drop 
                    dropTitle="Options"
                    dropArray={
                        [
                            {
                                title: "home",
                                link: "/"
                            },
                            {
                                title: "faq",
                                link: "/faq"
                            },
                            {
                                title: "about",
                                link: "/about"
                            },
                            {
                                title: "events",
                                link: "/events"
                            },
                            {
                                title: "admin",
                                link: "/login"
                            },
                        ]
                    }
                    />
                </div>
                


                <button className="snipcart-checkout btn col-12 col-md-4 col-lg-1 my-1">
                    <i className="fa-solid fa-basket-shopping"></i>
                    <span></span>
                </button>

</nav>
        
    )
}

export default Nav;