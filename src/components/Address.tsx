import { prependOnceListener } from "process";
import React from "react";

interface Props{
  streetAddress: string
  city: string
  postcode: string
  phoneNumber: string
  email: string
}

const Address = (props: Props) => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address</span>{props.streetAddress}, 
        {props.city}, {props.postcode}.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail</span>{" "}
        <a href={`mailto:${props.email}`}>{props.email}</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">phone</span>{" "}
        <a href={`Tel ${props.phoneNumber}`}>{props.phoneNumber}</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
