import React from 'react'

const FAQ = () => {
  return (
    <>
      <section className="faq">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="faq-ans">
                        <h4>FAQ</h4>
                        <h3>Frequently Asked
                            Questions</h3>
                        <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead
                            of handling in-house.</p>
                        <button className="btn btn_transparent text-black">Contact Us</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="faq-content">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        A digital agency is a business
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Digital marketing efforts, instead of handling
                                        in-house.
                                        They can provide your business with a variety of digital solutions to promote
                                        your product or service online and help you hit your marketing goals and grow
                                        your business.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Hire to outsource your digital
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Digital marketing efforts, instead of handling
                                        in-house.
                                        They can provide your business with a variety of digital solutions to promote
                                        your product or service online and help you hit your marketing goals and grow
                                        your business.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                        aria-expanded="false" aria-controls="flush-collapseThree">
                                        Marketing efforts
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Digital marketing efforts, instead of handling
                                        in-house.
                                        They can provide your business with a variety of digital solutions to promote
                                        your product or service online and help you hit your marketing goals and grow
                                        your business.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                        aria-expanded="false" aria-controls="flush-collapseFour">
                                        Can provide your business
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Digital marketing efforts, instead of handling
                                        in-house.
                                        They can provide your business with a variety of digital solutions to promote
                                        your product or service online and help you hit your marketing goals and grow
                                        your business. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default FAQ
