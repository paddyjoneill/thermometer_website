import { useRouter } from "next/router";
import React from "react";
import { HomePageProps } from "../../../interfaces/interfaces";

interface Props extends HomePageProps {}

const Hero = (props: Props) => {
  const router = useRouter()

  const goToAbout = () => router.push('/tools')

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              props.imageUrl
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={props.mobileImageUrl}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              {props.title}
              {/* <img src='img/hero/logo.png' /> */}
              <span>{props.subTitle}</span>
            </h1>
            <p className="open-sans-font">{props.descriptions}</p>
            <button className="button" onClick={goToAbout}>
              <span className="button-text">{props.buttonText}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
