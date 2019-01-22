import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Menu from './menu';
import { StaticQuery, graphql } from 'gatsby'

import { Layout as AntLayout } from 'antd';
const { Header, Footer, Sider, Content } = AntLayout;

const styles = {
  layout: {
    overflow: 'auto', 
    height: '100vh',
    backgroundColor: '#f4f7f6',
    color: '#305f72'
  }, 
  sider: {
    marginTop: '65px',
    overflow: 'auto', 
    height: '100vh', 
    position: 'fixed', 
    left: 0
  },
  header: {
    fontFamily: "'Playfair Display', serif",
    backgroundColor: '#48c5b6',
    // color: '#202121',
    color: '#fffff',
    paddingTop: '0.3vh',
    textAlign: 'center',
    width: '100%',
    height: '10vh',
    display: 'block',
    position: 'fixed',
    fontSize: '5vh',
  }, 
  content: {
    marginTop: '18vh',
    marginLeft: '5vh',
    fontFamily: "'Open Sans', sans-serif"
  },
  footer: {
    backgroundColor: '#f4f7f6'
  }
}
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'This is a sample website for the Gatsby Crash Course' },
            { name: 'keywords', content: 'gatsby, react, blog, web development, latina_codes, latina codes' },
          ]}
        >
          <html lang="en" />
        </Helmet>



        <AntLayout style={ styles.layout }>
            <Header style={ styles.header}> 
              <link href="https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display:700" rel="stylesheet"/>
              Daniela Castro - {data.site.siteMetadata.title}
            </Header>
            <Menu/>
            <Content style={ styles.content}> 
              <div>
              {children}
              </div>
            </Content>
            {/* <Footer>Footer</Footer> */}
        </AntLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
