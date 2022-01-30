import React, { useState } from "react";
import Modal from "react-modal";
import { BlogPageProps } from "../../../interfaces/interfaces";
import BlogContentTemplate from "./modal/BlogContentTemplate";

// Modal.setAppElement("#root");

interface Props extends BlogPageProps { }

const Blog = (props: Props) => {

  const [isOpen, setIsOpen] = useState<boolean[]>(props.blogs.map(b => false))

  const blogPosts = props.blogs.map((bp, idx) => {

    const toggleModal = () => {
      const newState = [...isOpen]
      newState[idx] = !newState[idx]
      setIsOpen(newState)
    }

    return <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30" key={idx}>
      <article className="post-container" onClick={toggleModal}>
        <div className="post-thumb">
          <div className="d-block position-relative overflow-hidden">
            <img
              src={bp.imageUrl}
              className="img-fluid"
              alt="Blog Post"
            />
          </div>
        </div>
        {/* End .thumb */}
        <div className="post-content">
          <div className="entry-header">
            <h3>{bp.title}</h3>
          </div>
          <div className="entry-content open-sans-font">
            <p>{bp.snippet}
            </p>
          </div>
        </div>
        {/* End .post-content */}
      </article>

      {/* Start ModalOneBlogContent */}
      <Modal
        isOpen={isOpen[idx]}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="custom-modal dark"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModal}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner blog-post">
            <BlogContentTemplate {...bp} />
          </div>
        </div>
      </Modal>
      {/* End  ModalOneBlogContent */}
    </div>
  })


  return (
    <>
      {blogPosts}
    </>
  );
};

export default Blog;
