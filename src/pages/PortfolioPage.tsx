import React from 'react'
import Portfolio from '../components/portfolio/Portfolio'

const PortfolioPage = () => {
    return (
        <div className="portfolio professional">
            <div
                className="title-section text-left text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <h1>
                    my <span>portfolio</span>
                </h1>
                <span className="title-bg">works</span>
            </div>
            {/* End title */}
            <div
                className="container grid-gallery main-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
            >
                <Portfolio />
            </div>
            {/* End grid gallery */}
        </div>

    )
}

export default PortfolioPage