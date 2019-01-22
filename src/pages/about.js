import React from 'react'
import Layout from '../components/layout'

const style = {
    header: {
        fontFamily: "'Playfair Display', serif",
        textAlign: 'center'
    }
}

const AboutPage = () => (
    <Layout>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display:700" rel="stylesheet"/>
        <h1 style={style.header}>Welcome to my blog!</h1>
        <img src={require('../images/collage.jpg')} style={{ display:'block', margin:"auto", width:"500px", height:"500px"}}/>
    </Layout>
)

export default AboutPage;