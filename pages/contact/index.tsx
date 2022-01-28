import { GetStaticProps } from "next";
import React from "react";
import { BasePageProps } from "../../interfaces/interfaces";
import ContactPage from "../../src/pages/ContactPage";

interface Props extends BasePageProps{}

const Contact = (props: Props) => {

    const addressProps = {
        streetAddress: "123 Test Street",
        city: "Aberdeen",
        postcode: "AB12 3FR",
        phoneNumber: "+44 8456454564",
        email: "hello@hello.com"
      }
    return <ContactPage {...addressProps}/>
    
}

export default Contact

export const getStaticProps: GetStaticProps = async (context) => {
    
    const props: BasePageProps= {page: "Contact"}

    return {
        props
    }
  }