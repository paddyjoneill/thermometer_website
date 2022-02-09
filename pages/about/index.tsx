import { GetStaticProps } from "next";
import React from "react";
import { BasePageProps, ToolsPageProps } from "../../interfaces/interfaces";
import { fetchToolsPage } from "../../services/dataFetching";
import AboutPage from "../../src/pages/AboutPage";

interface Props extends ToolsPageProps {}

const About = (props: Props) => {
    return (
            <AboutPage {...props}/>
         )
}

export default About

export const getStaticProps: GetStaticProps = async (context) => {
    
    let props = await fetchToolsPage()
    props.page = "About"

    return {
        props
    }
  }