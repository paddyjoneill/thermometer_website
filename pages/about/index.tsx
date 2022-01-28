import { GetStaticProps } from "next";
import React from "react";
import { BasePageProps } from "../../interfaces/interfaces";
import AboutPage from "../../src/pages/AboutPage";

interface Props extends BasePageProps {}

const About = (props: Props) => {
    return (
            <AboutPage />
         )
}

export default About

export const getStaticProps: GetStaticProps = async (context) => {
    
    const props: BasePageProps= {page: "About"}

    return {
        props
    }
  }