import React from "react";
import Address from "../components/Address";
import Contact from "../components/Contact";
import Social from "../components/Social";

interface Props{
    streetAddress: string
    city: string
    postcode: string
    phoneNumber: string
    email: string
  }

const ContactPage = (props: Props) => {
    return (
           <div className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row"> 
                {/*  Left Side Starts */}
                 <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Don't be shy !
                  </h3>
                  <p className="open-sans-font mb-4">
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <Address {...props}/> 
                  {/* End Address */}

                   <Social /> 
                  {/* End Social */}
                 </div> 
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                 <div className="col-12 col-lg-8">
                  <Contact />
                </div> 
                {/*  Contact Form Ends */}
               </div>
            </div> 
            {/* End .container */}
          </div> 

    )
}

export default ContactPage