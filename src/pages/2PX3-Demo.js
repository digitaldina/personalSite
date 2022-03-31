import React from "react"
import { Link, graphql } from "gatsby"
class PXDemo extends React.Component {
  
   render() {   
    window.location.href = "https://driveforward.live/PXDemo"

    return (<div></div>)
  }
  
}
export default PXDemo

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
