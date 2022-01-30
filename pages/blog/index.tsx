import { GetStaticProps } from "next";
import React from "react";
import { BasePageProps, BlogPageProps, BlogPostProps } from "../../interfaces/interfaces";
import { fetchBlogPost, fetchBlogPostList } from "../../services/dataFetching";
import BlogPage from "../../src/pages/BlogPage";

interface Props extends BlogPageProps{}

const Blog = (props: Props) => {

    return <BlogPage {...props} />
}

export default Blog

export const getStaticProps: GetStaticProps = async (context) => {
    
    const blogList = await fetchBlogPostList()

    let blogs: BlogPostProps[] = []
    // await blogList.map(async (b) => {
    //     const post = await fetchBlogPost(b.substring(0, b.length - 5))
    //     return post
    // })
    for(const blog of blogList){
        const post = await fetchBlogPost(blog.substring(0, blog.length - 5))
        blogs.push(post)
    }

    const props: BlogPageProps= {page: "Blog", blogs}

    return {
        props
    }
  }