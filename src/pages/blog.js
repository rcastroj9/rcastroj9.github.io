import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'

const BlogPage = ({data}) => (
    <Layout>
        <div>
            <h1>Latest Posts</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id} >
                    <h3>{post.node.frontmatter.title}</h3>
                    <small> Posted {post.node.frontmatter.date} </small>
                        <br/>
                        <br/>
                    <Link to={post.node.frontmatter.path}> Read more </Link>
                    <hr/>
                </div>

            ))}
        </div>
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter{
              path
              title
              date
            }
            excerpt
            }
          }
        }
    }
`

export default BlogPage