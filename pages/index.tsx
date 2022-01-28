import { GetStaticProps } from 'next'
import React from 'react'
import { BasePageProps } from '../interfaces/interfaces'
import HomePage from '../src/pages/HomePage'

interface Props extends BasePageProps{}

const Index = (props: Props) => {
    return  <HomePage />
    
}

export default Index

export const getStaticProps: GetStaticProps = async (context) => {
    
    const props: BasePageProps= {page: "Home"}

    return {
        props
    }
  }