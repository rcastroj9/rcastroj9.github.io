import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const BlogPage = ({data}) => (
    <Layout>
        <div>
            <h1>Latest Posts</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id} >
                    <Card
                        style={{ width: 400 }}
                        hoverable= 'true'
                        type= "horizontal"
                        // cover={<img alt="example" src={require('../' + '${post.node.frontmatter.imagePath}')}/>}
                        actions={[<Link to={post.node.frontmatter.path}> Read more </Link>]}
                    >
                        <Meta
                        // avatar={<Avatar src="https://photos.app.goo.gl/iUH3ZJSBXfd27frS7" />}
                        title={post.node.frontmatter.title}
                        description={post.node.frontmatter.date}
                        />
                    </Card>
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