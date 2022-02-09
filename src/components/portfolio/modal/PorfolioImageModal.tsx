import React from "react";

interface Props {
    title: string
    mediaUrl: string
    mediaDescription: string
}

const PortfolioImageModal = (props: Props) => {

    return (
        <div className="slideshow">
          <figure>

            {/* <figcaption>
              <h3>{props.title}</h3>

              <div className="row open-sans-font">
                <div className="col-12 col-sm-6 mb-2">
                  <i className="fa fa-file-text-o pr-2"></i>
                  <span className="project-label">Project </span>:{" "}
                  <span className="ft-wt-600 uppercase">Website</span>
                </div>
    
                <div className="col-12 col-sm-6 mb-2">
                  <i className="fa fa-user-o pr-2"></i>
                  <span className="project-label">Client </span>:{" "}
                  <span className="ft-wt-600 uppercase">Envato</span>
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
              </div>
            </figcaption> */}

            {/* Project Details Ends */}
    
            {/*  Main Project Content Starts */}
            <img src={props.mediaUrl} alt={props.mediaDescription} />
            {/* Main Project Content Ends */}
          </figure>
        </div>
        //  End .slideshow
      );
    
}

export default PortfolioImageModal