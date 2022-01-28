import React from "react";
import Blog from "../components/blog/Blog";

const BlogPage = () => {

    return (
        <div className="blog">
            <div
                className="title-section text-left text-sm-center "
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <h1>
                    case <span>studies</span>
                </h1>
                <span className="title-bg">posts</span>
            </div>
            <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                {/*  Articles Starts  */}
                <div className="row pb-50">
                    <Blog />
                </div>
                {/* Articles Ends */}
            </div>
        </div>
    )

}

export default BlogPage