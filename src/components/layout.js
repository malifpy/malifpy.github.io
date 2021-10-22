import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
require(`katex/dist/katex.min.css`);

deckDeckGoHighlightElement();

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
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              HOME
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              ABOUT
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/post" className={navLinkText}>
              POST
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;