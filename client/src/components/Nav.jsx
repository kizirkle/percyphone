//imports
import Drop from "./Dropdown";
import { useState, useEffect } from 'react';
import GetSections from '../components/admin/GetSections';

// react
function Nav() {
    const sectionArray = GetSections();

    useEffect(() => {

    });

    const checkAdmin = () => {
        if(localStorage.adminId){
            return({
                title: 'Return to Admin',
                link:'/admin/dashboard'
            })
        } else{
            return({
                title: 'Login',
                link: '/login'
            })
        }
    }
    
    return(
            <nav className="nav candy justify-content-around align-items-center d-flex flex-wrap col-12 p-3">
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
                <div className="logo">

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
                            checkAdmin()
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