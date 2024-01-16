import React from 'react'
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function FEATURES() {
    return (
        <>
            <section id='feature' className="Features">
                <Container className="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="feature-content" data-aos="fade-right" data-aos-duration="1000">
                                <h4>FEATURES</h4>
                                <h2>Give Your Site A New Look</h2>
                                <p>Service range including technical skills, design, business understanding.</p>
                                <div className="icon-main">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>


                                    </div>
                                    <div className="icon-content">
                                        <span>Range including technical skills</span>
                                    </div>
                                </div>
                                <div className="icon-main">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="icon-content">
                                        <span>Range including technical skills</span>
                                    </div>
                                </div>
                                <div className="icon-main">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="icon-content">
                                        <span>Range including technical skills</span>
                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left" data-aos-duration="1000">
                            <div className="feature-img">
                                <img className="img-fluid" src="images/Feature-image.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default FEATURES
