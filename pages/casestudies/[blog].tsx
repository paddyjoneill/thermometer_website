import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import { BlogPostProps } from "../../interfaces/interfaces";
import { fetchBlogPost, fetchBlogPostList } from "../../services/dataFetching";
import BlogContentTemplate from "../../src/components/blog/modal/BlogContentTemplate";

interface Props extends BlogPostProps{}

const BlogPost = (props: Props) => {
    return <BlogContentTemplate {...props} />
}

export default BlogPost

export const getStaticPaths: GetStaticPaths = async () => {

    const fileNames = await fetchBlogPostList()

    const paths = fileNames.map(file => ({ params: { blog: file.substring(0, file.length - 5) } }))

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {

    const blogFileName = context.params!.blog as string

    const props = await fetchBlogPost(blogFileName)
    props.page = "Blog"

    return {
      props
    }
  }