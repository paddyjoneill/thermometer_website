import { GetStaticProps } from "next";
import React from "react";
import { BasePageProps, PortfolioItem, PortfolioPageProps } from "../../interfaces/interfaces";
import { fetchPortfolioItem, fetchPortfolioItemList } from "../../services/dataFetching";
import PortfolioPage from "../../src/pages/PortfolioPage";

interface Props extends PortfolioPageProps{}

const Portfolio = (props: Props) => {

    return <PortfolioPage {...props}/>
}

export default Portfolio

export const getStaticProps: GetStaticProps = async (context) => {
    
    const portfolioItemsList = await fetchPortfolioItemList()

    let portfolioItems: PortfolioItem[] = []

    for(const item of portfolioItemsList){
        const portItem = await fetchPortfolioItem(item.substring(0, item.length - 5))
        portfolioItems.push(portItem)
    }

    const props: PortfolioPageProps= {page: "Portfolio", portfolioItems}

    return {
        props
    }
  }