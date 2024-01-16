import React from 'react'
import Container from 'react-bootstrap/Container';


function Hero() {
    return (
        <>
            <section className="hero_sec">
            <Container className="">
                    <div className="row">
                        <div className="col-12 col-xxl-6 col-lg-6  col-md-6">
                            <div className="hero_content">
                                <h4>MODERN STUDIO</h4>
                                <h1>We`re Help To Build Your Dream Project</h1>
                                <p>Agency provides a full service range including technical skills,
                                    design, business understanding.</p>
                                <button className="btn btn_primary">HOW WE WORK</button>
                                <button className="btn btn_transparent">Contact Us</button>
                                <div className="bottom">
                                    <img
                                        alt="Logo"
                                        src="images/round.png"
                                        className=""
                                    />


                                    <div className="bott-content">
                                        <p>"Put themselves in the merchant's shoes"</p>
                                        <h5>Meta Inc.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xxl-6 col-lg-6  col-md-6">
                            <div className="hero_img">
                                <img className="img-fluid" src="images/pic.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Hero
