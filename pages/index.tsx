import React from 'react'
import Layout from '../src/layout/Layout'
import HomePage from '../src/pages/HomePage'

const Index = () => {
    return <>
        <Layout page={"Home"}>
            <HomePage />
        </Layout>
    </>
}

export default Index