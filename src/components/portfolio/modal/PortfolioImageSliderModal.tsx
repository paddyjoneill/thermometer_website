import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getStaticProps } from "../../../../pages";

interface Props {
    title: string
    mediaUrl: string[]
    mediaDescription: string[]
}

const PortfolioImageSliderModal = (props: Props) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
    };

    const images = props.mediaUrl.map((url, idx) => {
        return <div className="slide_item">
            <img src={url} alt={props.mediaDescription[idx]} />
        </div>
    })

    return (
        <div className="slideshow">
            <figure>
                {/* Project Details Starts */}
                <figcaption>
                    <h3>{props.title}</h3>
                    {/* <div className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-file-text-o pr-2"></i>
                            <span className="project-label">Project </span>:{" "}
                            <span className="ft-wt-600 uppercase">Website</span>
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-user-o pr-2"></i>
                            <span className="project-label">Client </span>:{" "}
                            <span className="ft-wt-600 uppercase">Themeforest</span>
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-code pr-2"></i>
                            <span className="project-label">Langages </span>:{" "}
                            <span className="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-external-link pr-2"></i>
                            <span className="project-label">Preview </span>:{" "}
                            <span className="ft-wt-600 uppercase">
                                <a
                                    href="https://themeforest.net/item/edina-personal-portfolio-react-template/34082686"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    www.envato.com
                                </a>
                            </span>
                        </div>
                    </div> */}
                </figcaption>
                {/* Project Details Ends */}

                {/*  Main Project Content Starts */}
                <Slider {...settings}>
                    {images}
                </Slider>
                {/* Main Project Content Ends */}
            </figure>
        </div>
        //  End .slideshow
    );
}

export default PortfolioImageSliderModal