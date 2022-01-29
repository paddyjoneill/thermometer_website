import React from "react";
import { HomePageProps } from "../../interfaces/interfaces";
import Hero from "../components/hero/Hero";

interface Props extends HomePageProps{ }

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
                    <Hero {...props}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage