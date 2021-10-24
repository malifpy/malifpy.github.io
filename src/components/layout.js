import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkText,
  siteTitle,
} from "./layout.module.css";
//import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
require(`katex/dist/katex.min.css`);

//deckDeckGoHighlightElement();

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav className={navLinks}>
        <Link to="/" className={navLinkText}>
          HOME
        </Link>

        <Link to="/about" className={navLinkText}>
          ABOUT
        </Link>

        <Link to="/post" className={navLinkText}>
          POST
        </Link>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
