import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display:700" rel="stylesheet"/>
      <h1 style={{  textAlign: 'center', fontFamily: "'Playfair Display', serif" }} >Welcome to my website</h1>
      <img src={require('../images/collage.jpg')} style={{ display:'block', margin:"auto", width:"500px", height:"500px"}}>
      </img>
    </div>
  </Layout>
)

export default IndexPage