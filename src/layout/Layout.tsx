import React from "react";
import NextHead from "../components/head/NextHead";
import Navigation from "./Navigation";

interface Props {
    children: React.ReactNode
    page: "Home" | "About" | "Portfolio" | "Contact" | "Blog"
    // pageTitle: string
    // pageDescription: string
}

const Layout = (props: Props) => {
    return <>
        <NextHead />
        <Navigation page={props.page}>
            {props.children}
        </Navigation>
    </>
}

export default Layout