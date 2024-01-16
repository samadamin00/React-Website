import React from 'react'
import Container from 'react-bootstrap/Container';


function Portfolio() {
    return (
        <>
            <section id='portfolio' className="portfolio">
                <Container className="" data-aos="fade-up" data-aos-duration="2000">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center">PORTFOLIO</h4>
                            <h2 className="text-center">Latest Work</h2>
                        </div>

                        <div className="col-md-12">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="btn-act active" id="show-tab-btn" data-bs-toggle="pill"
                                        data-bs-target="#show-tab" type="button" role="tab" aria-selected="true">Show All
                                        <span>14</span></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="btn-force" id="design-tab-btn" data-bs-toggle="pill"
                                        data-bs-target="#design-tab" type="button" role="tab" aria-selected="false">Design
                                        <span>14</span></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="btn-force" id="branding-tab-btn" data-bs-toggle="pill"
                                        data-bs-target="#branding-tab" type="button" role="tab" aria-selected="false">Branding
                                        <span>14</span></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="btn-force" id="illustration-tab-btn" data-bs-toggle="pill"
                                        data-bs-target="#illustration-tab" type="button" role="tab"
                                        aria-selected="false">Illustration
                                        <span>14</span></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="btn-force" id="motion-tab-btn" data-bs-toggle="pill"
                                        data-bs-target="#motion-tab" type="button" role="tab" aria-selected="false">Motion
                                        <span>14</span></button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="show-tab" role="tabpanel"
                                    aria-labelledby="show-tab-btn" tabindex="0">
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-5">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/port-1.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Design</button>
                                                    <h3>SOFA</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-7">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/port-2.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Development</button>
                                                    <h3>Keyboard</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-7">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/portfolio-3.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Illustration</button>
                                                    <h3>Work Media</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-5">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/portfolio-4.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Motion</button>
                                                    <h3>Graphics</h3>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="design-tab" role="tabpanel" aria-labelledby="design-tab-btn"
                                    tabindex="0">
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-5">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/port-1.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Design</button>
                                                    <h3>SOFA</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-7">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/port-2.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Development</button>
                                                    <h3>Keyboard</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="branding-tab" role="tabpanel"
                                    aria-labelledby="branding-tab-btn" tabindex="0">
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-5">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/port-2.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Development</button>
                                                    <h3>Keyboard</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-7">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/portfolio-3.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Illustration</button>
                                                    <h3>Work Media</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="illustration-tab" role="tabpanel"
                                    aria-labelledby="illustration-tab-btn" tabindex="0">
                                    <div className="row">

                                        <div className="col-12 col-md-6 col-lg-7">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/portfolio-3.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Illustration</button>
                                                    <h3>Work Media</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-5">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/portfolio-4.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Motion</button>
                                                    <h3>Graphics</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="motion-tab" role="tabpanel" aria-labelledby="motion-tab-btn"
                                    tabindex="0">
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-5">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/portfolio-4.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Motion</button>
                                                    <h3>Graphics</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-7">
                                            <div className="port-box">
                                                <img className="img-fluid" src="images/port-1.png"
                                                    alt="Portfolio-img-one" />
                                                <div className="port-text">
                                                    <button className="btn btn-radius">Design</button>
                                                    <h3>SOFA</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="down-btn">
                                    <button className="btn btn_primary_outline">Exlore More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Portfolio
