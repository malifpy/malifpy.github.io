// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import {Link} from 'gatsby';

//import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        Empty Home Page. Go to{" "}
        <Link to="/post">
          Post
        </Link>
        .
      </p>
    </Layout>
  );
};
// Step 3: Export your component
export default IndexPage;
