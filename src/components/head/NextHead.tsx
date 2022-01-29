import React from "react";
import Head from 'next/head'
import { getStaticProps } from "../../../pages";

interface Props {
    pageTitle?: string
    description?: string
    url?: string
    openGraphPictureUrl?: string
}

const NextHead = (props: Props) => {

    const pageTitle = props.pageTitle ?? "AccSensum Thermometers"
    const description = props.description ?? "Downhole Thermometers"
    const url = props.url ?? "https://thermometer-site.netlify.app"
    const openGraphPictureUrl = props.openGraphPictureUrl ?? "http://patsstats.co.uk/images/facebook/patsstats-facebook-og.jpg"

    return <Head>
        <title>{pageTitle}</title>

        <meta name="Description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />


        {/* facebook open graph stuff */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta
            property="og:title"
            content="Pat's Stats"
        />
        <meta name="twitter:card" content={description} />
        <meta
            property="og:description"
            content={description}
        />
        <meta property="og:image" content={openGraphPictureUrl} />


        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
    </Head>

}

export default NextHead