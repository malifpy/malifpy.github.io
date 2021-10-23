import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  const emptyQuery = "";
  const allPosts = data.allMdx.nodes || [];

  const [state, setState] = useState({
    postsFiltered: [],
    inputQuery: emptyQuery,
  });

  const handleInputChange = (event) => {
    const inputQuery = new RegExp(event.target.value, "i");
    // case insensitive regex

    // Nge-filter post
    const postsFiltered = allPosts.filter((post) => {
      const { title, tags } = post.frontmatter;
      return (
        // Check if query contained in title
        // or
        // Check if query contained in any of the tag
        inputQuery.test(title) || tags.some((tag) => inputQuery.test(tag))
      );
    });

    // Nge update state
    setState({
      postsFiltered,
      inputQuery,
    });
  };

  const changeSearch = (event) => {
    document.getElementById("postSearch").value = event.target.value;
    handleInputChange(event);
  };

  const { postsFiltered, inputQuery } = state;
  const hasSearchResults = postsFiltered && inputQuery !== emptyQuery;
  const posts = hasSearchResults ? postsFiltered : allPosts;

  return (
    <Layout pageTitle="My Posts">
      <input
        id="postSearch"
        type="text"
        defaultValue=""
        placeholder="Filter title or tag..."
        onChange={handleInputChange}
      />
      <button value="" onClick={changeSearch}>
        {" "}
        Clear{" "}
      </button>
      {posts.map((node) => (
        <div key={node.id} className="postBox">
          <div className="postDate">{node.frontmatter.date}</div>
          <div className="postLink">
            <Link to={`/post/${node.slug}`} className="postLinkText">{node.frontmatter.title}</Link>
          </div>
          <div className="postTags">
            {node.frontmatter.tags.map((tag) => (
              <input
                type="button"
                className="postTagBox"
                value={tag}
                key={node.id + tag}
                onClick={changeSearch}
              />
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { hidden: { ne: true } } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "DD MMM YYYY")
          tags
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
