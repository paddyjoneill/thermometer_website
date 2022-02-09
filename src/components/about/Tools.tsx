import React from "react";
import { ToolsPageProps } from "../../../interfaces/interfaces";
import KeyValuePairs from "./KeyValuePairs";

interface Props extends ToolsPageProps{}

const Tools = (props: Props) => {

  const content = props.tools.map((tool, idx) => {
    return (
      <section className="main-content " key={idx}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 col-12">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                    {tool.toolName}
                  </h3>
                </div>
                <div className="col-12">
                  <KeyValuePairs {...tool} />
                </div>
                <div className="col-12 mt-1">
                  <a className="button" href={tool.downloadLink} download>
                    <span className="button-text">Download Flyer</span>
                    <span className="button-icon fa fa-download"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
              <img src={tool.pictureUrl} alt={tool.toolName}/>
            </div>
          </div>
        </div>
      </section>
    );
  })

  return <>{content}</>

};

export default Tools;
