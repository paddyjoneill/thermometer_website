import React from "react";
import { SeoProps } from "../../interfaces/interfaces";
import NextHead from "../components/head/NextHead";
import Navigation from "./Navigation";

interface Props {
    children: React.ReactNode
    page: "Home" | "Tools" | "Media" | "Contact" | "CaseStudies"
    seo: SeoProps
}

const Layout = (props: Props) => {
    return <>
        <NextHead {...props.seo}/>
        <Navigation page={props.page}>
            {props.children}
        </Navigation>
    </>
}

export default Layout