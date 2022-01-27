import React from "react";
import Hero from "../components/hero/Hero";

interface Props { }

const HomePage = (props: Props) => {
    return (
        <div className="tab-panel_list">
            <div className="home">
                <div
                    className="container-fluid main-container container-home p-0 "
                    data-aos="fade-up"
                    data-aos-duration="1200"
                >
                    <div className="color-block d-none d-lg-block"></div>
                    <Hero />
                </div>
            </div>
        </div>
    )
}

export default HomePage