import React from "react";
import Navigation from "./Navigation";

interface Props {
    children: React.ReactNode
    page: "Home" | "About" | "Portfolio" | "Contact" | "Blog"
}

const Layout = (props: Props) => {
    return <Navigation page={props.page}>
        {props.children}
    </Navigation>
}

export default Layout