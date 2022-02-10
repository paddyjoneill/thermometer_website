import React from "react";
import Head from 'next/head'
import { SeoProps } from "../../../interfaces/interfaces";

interface Props extends SeoProps{}

const NextHead = (props: Props) => {

    const pageTitle = props.pageTitle 
    const description = props.description 
    const url = props.url
    const openGraphPictureUrl = props.openGraphPictureUrl

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
            content={pageTitle}
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