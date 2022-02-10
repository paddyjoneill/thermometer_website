import { GetStaticProps } from "next";
import React from "react";
import { ContactPageProps } from "../../interfaces/interfaces";
import { fetchContactPage } from "../../services/dataFetching";
import ContactPage from "../../src/pages/ContactPage";

interface Props extends ContactPageProps { }

const Contact = (props: Props) => {

  return <ContactPage {...props} />

}

export default Contact

export const getStaticProps: GetStaticProps = async (context) => {

  const props = await fetchContactPage() as ContactPageProps

  return {
    props
  }
}