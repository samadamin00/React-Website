import React from 'react'
import Container from 'react-bootstrap/Container';


function Footer() {
    return (
        <>
            <footer>
                <Container className="">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">

                                <div className="col-sm-12 col-lg-3 col-md-6 col-md-12">
                                    <h5 className="text-uppercase">Agency</h5>
                                </div>
                                <div className="col-sm-12 col-lg-3 col-md-6 col-md-12 menu">
                                    <h4 className="text-uppercase">Menu</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="nav-link">About</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="nav-link">Services</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="nav-link">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="nav-link">Contact</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-sm-12 col-lg-3 col-md-6 col-md-12">
                                    <h4 className="text-uppercase">Service</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="nav-link">Design</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="nav-link">Developmet</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="nav-link">Maketing</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="nav-link">See More</a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="col-sm-12 col-lg-3 col-md-6 col-md-12 social-icon">


                                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.facebook.com"
                                      target="_blank"  role="button" data-mdb-ripple-color="dark"><img src="images/icon-1.png" alt="" /></a><a>


                                    </a><a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.twitter.com"
                                       target="_blank" role="button" data-mdb-ripple-color="dark"><img src="images/icon-2.png" alt="" /> </a>

                                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.google.com"
                                        target="_blank" role="button" data-mdb-ripple-color="light"><img
                                            src="images/icon-3.png" alt="" /></a>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12">
                            <div className="copy-right">
                                <div className="copy">
                                    Copyright © 2024 Abdul Samad. All Rights Reserved.
                                </div>
                                <div className="Privacy">
                                    <a className=" nav-link" href="https://mdbootstrap.com/">Terms of Use</a>
                                    <a className="nav-link" href="https://mdbootstrap.com/">Privacy Policy</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </Container>

            </footer>
        </>
    )
}

export default Footer
