import React from "react";
import { tagsListToString } from "../../../../helpers/helpers";
import { BlogPostProps } from "../../../../interfaces/interfaces";

interface Props extends BlogPostProps { }

const BlogContentTemplate = (props: Props) => {

  const firstParagraph = <p>{props.content[0]}</p>

  const secondParagraphOn = props.content.slice(1).map((para, idx) => <p key={idx}>{para}</p>)

  const quoteBlock = props.quote !== "" ? <div className="quotebox">
    <div className="icon">
      <img src="/img/blog/quote.svg" alt="blog quote" />
    </div>
    <p>
      {props.quote}
    </p>
  </div> : null

  const tags = tagsListToString(props.tags)

  return (
    <div className="custom-modal dark">
      <div className="box_inner blog-post">
        <article>
          <div className="title-section text-left text-sm-center">
            <h1>
              Post <span>Details</span>
            </h1>
            <span className="title-bg">posts</span>
          </div>

          <div className="meta open-sans-font">
            <span>
              <i className="fa fa-user"></i> {props.author}
            </span>
            <span className="date">
              <i className="fa fa-calendar"></i> {props.date}
            </span>
            <span>
              <i className="fa fa-tags"></i> {tags}
            </span>
          </div>

          <h1>{props.title}</h1>
          <img src={props.imageUrl} className="img-fluid" alt="Blog" />
          <div className="blog-excerpt open-sans-font pb-5">
            {firstParagraph}
            {quoteBlock}
            {secondParagraphOn}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogContentTemplate;
