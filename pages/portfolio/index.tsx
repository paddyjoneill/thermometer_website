import { GetStaticProps } from "next";
import React from "react";
import { BasePageProps } from "../../interfaces/interfaces";
import PortfolioPage from "../../src/pages/PortfolioPage";

interface Props extends BasePageProps{}

const Portfolio = (props: Props) => {

    return <PortfolioPage />
}

export default Portfolio

export const getStaticProps: GetStaticProps = async (context) => {
    
    const props: BasePageProps= {page: "Portfolio"}

    return {
        props
    }
  }