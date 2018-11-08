import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MyHeader from './header';
import Menu from './menu'
import { StaticQuery, graphql } from 'gatsby'

import { Layout as AntLayout } from 'antd';

const { Header, Footer, Sider, Content } = AntLayout;

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
        <AntLayout>
          <Sider> <Menu/> </Sider>
          <AntLayout>
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
