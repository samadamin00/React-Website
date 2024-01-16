import React from 'react'
import Container from 'react-bootstrap/Container';


const About = () => {
  return (
    <>
      <section id='about' className="aboutus_sec ">
        <Container className="">
          <div className="row">
            <div className="col-md-6 col-xxl-6 col-12" data-aos="fade-right" data-aos-duration="2000">
              <div className="aboutus_img">
                <img className="img-fluid" src="images/about-image.png" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-xxl-6 col-12" data-aos="fade-left" data-aos-duration="2000">
              <div className="aboutus_content">
                <h4>ABOUT</h4>
                <h2>An Experience
                  Design Agency </h2>
                <h5>Provides a full service range</h5>
                <p>Ability to put
                  themselves in the merchant's
                  shoes. It is meant to partner on the long run,
                  and work as an extension of the merchant's team.</p>
                <button type="button" className="btn btn_white">ABOUT US</button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default About
