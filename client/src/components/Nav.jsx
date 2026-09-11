//imports
import Drop from "./Dropdown";
import { useState, useEffect } from 'react';
import GetSections from '../components/admin/GetSections';

// react
function Nav() {
    const sectionArray = GetSections();

    useEffect(() => {

    });
    
    return(
            <nav className="nav candy justify-content-around d-flex flex-wrap col-12 p-5">
                <div className="col-12 col-md-4 col-lg-1 my-1">
                    <Drop
                    dropTitle="Clowns"
                    dropArray={
                        sectionArray.map((section) => ({
                            title: section.tagName,
                            link: `/clowns#${section.id}`
                        }))
                    }
                    />
                </div>
                
                <div className="col-12 col-md-4 col-lg-1 my-1">
                    <Drop
                    dropTitle="Items"
                    dropArray={
                        sectionArray.map((section) => ({
                            title: section.tagName,
                            link: `/shop#${section.id}`
                        }))
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