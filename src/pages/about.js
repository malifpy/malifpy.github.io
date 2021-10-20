// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby';
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Empty About page. Go to{" "}
        <Link to="/post">
          Post
        </Link>
        .</p>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage