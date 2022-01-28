import { GetStaticProps } from "next";
import React from "react";
import { BasePageProps } from "../../interfaces/interfaces";
import BlogPage from "../../src/pages/BlogPage";

interface Props extends BasePageProps{}

const Blog = (props: Props) => {
    return <BlogPage />
}

export default Blog

export const getStaticProps: GetStaticProps = async (context) => {
    
    const props: BasePageProps= {page: "Blog"}

    return {
        props
    }
  }