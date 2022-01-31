import { useRouter } from "next/router";
import React from "react";
import { HomePageProps } from "../../../interfaces/interfaces";


const heroContent = {
  heroImage: "img/hero/dark.jpg",
  heroMobileImage: "img-mobile",
  heroTitleName: "AccSensum",
  heroDesignation: "Downhole Thermometers",
  heroDescriptions: `The best thermometers in the world, 
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente fugiat velit dolor asperiores quia in veniam impedit facilis beatae sit dicta officia tempora eius, nam, harum mollitia quidem esse. Tenetur perspiciatis doloribus ex cum delectus assumenda molestias iusto veniam, quo consectetur magni. A corporis illo aliquam libero deserunt beatae.`,
  heroBtn: "learn more",
};

interface Props extends HomePageProps {}

const Hero = (props: Props) => {
  const router = useRouter()

  const goToAbout = () => router.push('/about')

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
