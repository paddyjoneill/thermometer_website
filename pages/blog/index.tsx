import React from "react";
import Layout from "../../src/layout/Layout";
import BlogPage from "../../src/pages/BlogPage";


const Blog = () => {
    return (
        <Layout page={"Blog"}>
            <BlogPage />
        </Layout>
    )
}

export default Blog