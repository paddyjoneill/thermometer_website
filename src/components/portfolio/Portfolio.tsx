import React, { useCallback, useMemo, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import { PortfolioImageItem, PortfolioItem, PortfolioSliderItem, PortfolioVideoItem, PortfolioYoutubeItem } from "../../../interfaces/interfaces";
import PortfolioImageModal from "./modal/PorfolioImageModal";
import PortfolioImageSliderModal from "./modal/PortfolioImageSliderModal";
import PortfolioYoutubeModal from "./modal/PortfolioYoutubeModal";
import PortfolioVideoModal from "./modal/PortfolioVideoModal";

interface Props {
  portfolioItems: PortfolioItem[]
}

const Portfolio = (props: Props) => {

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<React.ReactNode>()

  const closeModal = () => setModalOpen(false)

  const modal = <Modal
    isOpen={modalOpen}
    onRequestClose={closeModal}
    contentLabel="My dialog"
    className="custom-modal dark"
    overlayClassName="custom-overlay dark"
    closeTimeoutMS={500}
    ariaHideApp={false}
  >
    {modalContent}
  </Modal>

  const createListOfItems = useCallback((items: PortfolioItem[]) => items.map((item, idx) => {
    if (item.type == "Image") {
      const portfolioItem = item as PortfolioImageItem

      const toggleModal = () => {
        if (!modalOpen) {
          setModalContent(modalContent)
          setModalOpen(true)
        } else {
          setModalOpen(false)
        }
      }

      const modalContent = <div>
        <button className="close-modal" onClick={closeModal}>
          <img src="/img/cancel.svg" alt="close icon" />
        </button>
        {/* End close icon */}
        <div className="box_inner portfolio">
          <PortfolioImageModal {...portfolioItem} />
        </div>
      </div>

      return <li
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="0"
        key={3000 + idx}
      >
        <figure onClick={toggleModal}>
          <img src={portfolioItem.mediaUrl} alt={portfolioItem.mediaAltText} />
          <div className=" hover-content-wrapper">
            <span className="content-title">{portfolioItem.title}</span>
          </div>
        </figure>
      </li>
    }
    else if (item.type === "Slider") {
      const portfolioItem = item as PortfolioSliderItem

      const toggleModal = () => {
        if (!modalOpen) {
          setModalContent(modalContent)
          setModalOpen(true)
        } else {
          setModalOpen(false)
        }
      }

      const modalContent = <div>
        <button className="close-modal" onClick={closeModal}>
          <img src="/img/cancel.svg" alt="close icon" />
        </button>
        <div className="box_inner portfolio">
          <PortfolioImageSliderModal {...portfolioItem} />
        </div>
      </div>

      return <li
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="200"
        key={3000 + idx}
      >
        <figure onClick={toggleModal}>
          <img src={portfolioItem.images[0].mediaUrl} alt={portfolioItem.images[0].mediaAltText} />
          <div className=" hover-content-wrapper">
            <span className="content-title">{portfolioItem.title}</span>
          </div>
        </figure>
      </li>
    }
    else if (item.type === "Youtube") {
      const portfolioItem = item as PortfolioYoutubeItem

      const toggleModal = () => {
        if (!modalOpen) {
          setModalContent(modalContent)
          setModalOpen(true)
        } else {
          setModalOpen(false)
        }
      }

      const modalContent = <div>
        <button className="close-modal" onClick={closeModal}>
          <img src="/img/cancel.svg" alt="close icon" />
        </button>
        <div className="box_inner portfolio">
          <PortfolioYoutubeModal {...portfolioItem} />
        </div>
      </div>

      return <li
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="100"
        key={3000 + idx}
      >
        <figure onClick={toggleModal}>
          <img src={portfolioItem.pictureUrl} alt={portfolioItem.mediaAltText} />
          <div className=" hover-content-wrapper">
            <span className="content-title">{portfolioItem.title}</span>
          </div>
        </figure>
      </li>
    }
    else if (item.type === "Video") {
      const portfolioItem = item as PortfolioVideoItem

      const toggleModal = () => {
        if (!modalOpen) {
          setModalContent(modalContent)
          setModalOpen(true)
        } else {
          setModalOpen(false)
        }
      }

      const modalContent = <div>
        <button className="close-modal" onClick={closeModal}>
          <img src="/img/cancel.svg" alt="close icon" />
        </button>
        <div className="box_inner portfolio">
          <PortfolioVideoModal {...portfolioItem} />
        </div>
      </div>

      return <li
        className="direction-reveal"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="0"
        key={3000 + idx}
      >
        <figure
          className="direction-reveal__card"
          onClick={toggleModal}
        >
          <img src={portfolioItem.pictureUrl} alt={portfolioItem.mediaAltText} />
          <div className=" hover-content-wrapper">
            <span className="content-title">{portfolioItem.title}</span>
          </div>
        </figure>
      </li>
    }
  }),[modalOpen])

  const allItems = useMemo(() => createListOfItems(props.portfolioItems),[props.portfolioItems, createListOfItems])
  
  const videoItems = useMemo(() => createListOfItems(props.portfolioItems.filter(item => item.type === "Video" || item.type === "Youtube")),[props.portfolioItems, createListOfItems])
  
  const imageItems = useMemo(() => createListOfItems(props.portfolioItems.filter(item => item.type === "Image" || item.type === "Slider")),[props.portfolioItems, createListOfItems])

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>ALL</Tab>
        <Tab>IMAGES</Tab>
        <Tab>VIDEO</Tab>
      </TabList>

      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* {listOfItems} */}
            {allItems}
          </ul>
          {modal}
        </TabPanel>
        <TabPanel>
          <ul className="row grid justify-content-center">
            {imageItems}
          </ul>
          {modal}
        </TabPanel>
        <TabPanel>
          <ul className="row grid justify-content-center">
            {videoItems}
          </ul>
          {modal}
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Portfolio;
