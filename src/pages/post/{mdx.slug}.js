import * as React from 'react'
import { graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import TableOfContents from '../../components/tableOfContents'

const BlogPost = ({data}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <TableOfContents items={data.mdx.tableOfContents.items}></TableOfContents>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
    }
    body
    tableOfContents
  }
}
`
export default BlogPost