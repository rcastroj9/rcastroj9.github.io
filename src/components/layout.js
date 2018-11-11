import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MyHeader from './header';
import AppMenu from './menu';
import { StaticQuery, graphql } from 'gatsby'

import { Layout as AntLayout } from 'antd';

const { Header, Footer, Sider, Content } = AntLayout;

const styles = {
  layout: {
    overflow: 'auto', 
    height: '100vh'
  }, 
  sider: {
    marginTop: '65px',
    overflow: 'auto', 
    height: '100vh', 
    position: 'fixed', 
    left: 0
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
          <Sider style={ styles.sider }> <AppMenu/> </Sider>
          <AntLayout  style={{ marginLeft: 200 }}>
            <Header> <MyHeader siteTitle={data.site.siteMetadata.title} /> </Header>
            <Content> 
              <div>
              {children}
              </div>
            </Content>
          </AntLayout>
        </AntLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
