import React from 'react'
import Layout from '../components/layout'

const style = {
    header: {
        fontFamily: "'Playfair Display', serif",
        textAlign: "center"
    }, 
    paragraph: {
        textAlign: "center" 
    }
}

const ServiesPage = () => (
   <Layout>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display:700" rel="stylesheet"/>
        <h1 style={style.header}>Contact</h1>
        <p style={style.paragraph}>
        rcastroj@edu.uwaterloo.ca
        +1 (647) 906 8085
        </p>
        <h1 style={style.header}>GitHub:</h1>
        <p style={style.paragraph}>
        https://github.com/rcastroj9
        </p>
        <h1 style={style.header}>LinkedIn:</h1>
        <p style={style.paragraph}>
        https://www.linkedin.com/in/danicastro81/
        </p>
        <h1 style={style.header}>Instagram:</h1>
        <p style={style.paragraph}>
        https://www.instagram.com/latina_codes/
        </p>
    </Layout>
)

export default ServiesPage;