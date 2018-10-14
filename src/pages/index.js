import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => {
  // displays an object of the query data in console
  // simply access what you need using a map function
  // data.allFile.edges.map()
  console.log(data)
  return  <Layout>
  <h1>Hi people</h1>
  <p>Welcome to your new Gatsby site.</p>
  <p>Now go build something great.</p>
  <Link to="/page-2/">Go to page 2</Link>
</Layout>
}

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`