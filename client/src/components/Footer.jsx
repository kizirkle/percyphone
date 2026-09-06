//imports

//react
function Footer() {

    return(
        <div className="footer d-flex mt-auto flex-column pt-3 justify-content-center candy">
            <p>Percyphone</p>
            <div id="social-media-links" className="d-flex flex-row justify-content-around col-12">
                <section>
                    <p>Find me Here!</p>
                    <ul className="col-1 list-unstyled">
                        <li>
                            <small>
                                <a className="link" href="https://www.instagram.com/perc.yphone/">Instagram</a>
                                
                            </small>
                        </li>
                        <li>
                            <small>
                                <a className="link" href="https://www.etsy.com/shop/percyphone">
                                    Etsy
                                </a>
                                
                            </small>
                        </li>
                        <li>
                            <small>
                                <a className="link" href="https://www.tiktok.com/@perc.yphone">
                                    Tiktok
                                </a>
                                
                            </small>
                        </li>
                    </ul>
                </section>
                <section className="col-1 flex-wrap">
                    <p>Website designed by Kurtis Zirkle</p>
                </section>
            </div>
        </div>
            
        
    )
}

export default Footer;