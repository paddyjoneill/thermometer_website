import React from "react";
import { ToolInfo } from "../../../interfaces/interfaces";

interface Props extends ToolInfo {}

const KeyValuePairs = (props: Props) => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {props.toolMetadata.map((val, i) => (
        <li key={i}>
          <span className="title">{val.name}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.value}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default KeyValuePairs;
