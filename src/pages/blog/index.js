import * as React from 'react'
import { graphql, Link } from "gatsby";
import Layout from '../../components/layout'
const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          id
          slug
        }
      }
  }`    

export default BlogPage