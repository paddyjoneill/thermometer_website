import React from "react";
import { ToolsPageProps } from "../../interfaces/interfaces";
import Index from "../components/about/index"
import Tools from "../components/about/Tools";

interface Props extends ToolsPageProps{ }

const AboutPage = (props: Props) => {

    return (
        <div className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
                <div className="title-section text-left text-sm-center">
                    <h1>
                        {/* ABOUT <span>ME</span> */}
                        TOOLS
                    </h1>
                    <span className="title-bg">PRODUCTS</span>
                </div>
                <Tools {...props}/>
            </div>
        </div>
    )
}

export default AboutPage