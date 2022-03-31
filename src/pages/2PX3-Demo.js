
import React from "react"
import { Link, graphql } from "gatsby"
import Logo from "../components/logo.js"
import Header from  "../components/header.js"
class BlogIndex extends React.Component {
  render() {
    return (

      <div>
        <br />
        <br />
        <br />
     <Logo />
     <Header />
     </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
   allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {   
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
