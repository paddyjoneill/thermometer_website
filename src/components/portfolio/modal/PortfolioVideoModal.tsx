import React from 'react';

interface Props {
    title: string
    mediaUrl: string
    mediaDescription: string
    pictureUrl: string
}

const PortfolioVideoModal = (props: Props) => {
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
                            <span className="ft-wt-600 uppercase">Video</span>
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-user-o pr-2"></i>
                            <span className="project-label">Client </span>:{" "}
                            <span className="ft-wt-600 uppercase">Videohive</span>
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-code pr-2"></i>
                            <span className="project-label">Software </span>:{" "}
                            <span className="ft-wt-600 uppercase">Adobe After Effects</span>
                        </div>

                        <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-external-link pr-2"></i>
                            <span className="project-label">Preview </span>:{" "}
                            <span className="ft-wt-600 uppercase">
                                <a
                                    href="https://videohive.net/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    www.videohive.net
                                </a>
                            </span>
                        </div>
                    </div> */}
                </figcaption>

                {/*  Main Project Content Starts */}
                <div className="videocontainer">
                    <video
                        id="video"
                        className="responsive-video"
                        controls
                        poster={props.pictureUrl}
                    >
                        <source src={props.mediaUrl} type="video/mp4" />
                    </video>
                </div>
                {/* Main Project Content Ends */}
            </figure>
        </div>
        //  End .slideshow
    );
}

export default PortfolioVideoModal