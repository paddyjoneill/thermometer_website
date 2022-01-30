import { GetStaticProps } from 'next'
import React from 'react'
import { BasePageProps, HomePageProps } from '../interfaces/interfaces'
import { fetchHomePage } from '../services/dataFetching'
import HomePage from '../src/pages/HomePage'

interface Props extends HomePageProps{}

const Index = (props: Props) => {
    return  <HomePage {...props}/>
}

export default Index

export const getStaticProps: GetStaticProps = async (context) => {

    const homePageProps = await fetchHomePage()
    homePageProps.page = "Home"

    return {
        props: homePageProps
    }
  }