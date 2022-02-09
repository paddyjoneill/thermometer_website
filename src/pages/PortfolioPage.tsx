import React from 'react'
import { PortfolioPageProps } from '../../interfaces/interfaces'
import Portfolio from '../components/portfolio/Portfolio'

interface Props extends PortfolioPageProps{}

const PortfolioPage = (props: Props) => {
    return (
        <div className="portfolio professional">
            <div
                className="title-section text-left text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <h1>
                    <span>Products</span>
                </h1>
                <span className="title-bg">Tools</span>
            </div>
            {/* End title */}
            <div
                className="container grid-gallery main-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
            >
                <Portfolio {...props}/>
            </div>
            {/* End grid gallery */}
        </div>

    )
}

export default PortfolioPage