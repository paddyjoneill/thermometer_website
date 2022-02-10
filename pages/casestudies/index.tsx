import { GetStaticProps } from "next";
import React from "react";
import { BlogPageProps, BlogPostProps } from "../../interfaces/interfaces";
import { fetchBlogPage, fetchBlogPost, fetchBlogPostList } from "../../services/dataFetching";
import BlogPage from "../../src/pages/BlogPage";

interface Props extends BlogPageProps{}

const Blog = (props: Props) => {

    return <BlogPage {...props} />
}

export default Blog

export const getStaticProps: GetStaticProps = async (context) => {
    
    const props = await fetchBlogPage()

    const blogList = await fetchBlogPostList()

    let blogs: BlogPostProps[] = []

    for(const blog of blogList){
        const post = await fetchBlogPost(blog.substring(0, blog.length - 5))
        blogs.push(post)
    }

    props.blogs = blogs

    return {
        props
    }
  }