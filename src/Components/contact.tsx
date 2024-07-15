import React from 'react'

export default function contact() {
  return (
    <div>

<section className="abt-01">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="head-se-01">
                       <h3>CONTACT US</h3>
                       <ol>
                           <li>Home<i className="fas fa-angle-double-right"></i></li>
                           <li>Contact Us</li>
                       </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-02-b contact-01">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="head-001">
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi.</p>
                    </div>
                </div>
            </div>
            <div className="row my_row_y mar-01">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                           <input type="name" name="name" placeholder="Enter Your Name" className="form-control"/> 
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                           <input type="email" name="email" placeholder="Enter Your Email" className="form-control"/> 
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                           <input type="phone" name="phone" placeholder="Phone Number" className="form-control"/> 
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                           <input type="text" name="text" placeholder="Subject" className="form-control"/> 
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="form-group">
                            <textarea name="message"  required data-error="Write your message" placeholder="Case Description" className="form-control"></textarea>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="btn-001">
                            <a href="#">Submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="mab-01">
        <iframe style={{width:"100%" }}src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107" height="450" frameBorder="0" ></iframe>
    </section>
    </div>
  )
}
