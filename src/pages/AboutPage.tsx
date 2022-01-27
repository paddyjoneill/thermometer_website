import React from "react";
import Index from "../components/about/index"

interface Props { }

const AboutPage = (props: Props) => {

    return (
        <div className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
                <div className="title-section text-left text-sm-center">
                    <h1>
                        ABOUT <span>ME</span>
                    </h1>
                    <span className="title-bg">Resume</span>
                </div>
                <Index />
            </div>
        </div>
    )
}

export default AboutPage