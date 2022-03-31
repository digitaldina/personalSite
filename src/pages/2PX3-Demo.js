import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Logo from "../components/logo.js"
import BlogLogo from "../components/bloglogo.js"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
   
                   
      <Layout location={this.props.location}>
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >Recycling-23 Code Demo
              </h3>

              <p>Here, I used the main_demo_do_math.py to find the wavenumbers to the corresponding second max tranmittance of LDPE, HDPE, PET, and Polyester since those need to be differentiated.</p>
              <Img src="https://cdn.glitch.global/e5b8e94f-8fa0-44a0-a5eb-631d02499035/finding_wavenumbers.png?v=1648731888964"/>
               
               <p>old code for HDPE or LDPE decision</p>
               <Img src="https://cdn.glitch.global/e5b8e94f-8fa0-44a0-a5eb-631d02499035/previous_code_HDPE_LDPE.png?v=1648731889116"/>
                 
                <p>changed code for HDPE or LDPE decision</p>
               <Img src="https://cdn.glitch.global/e5b8e94f-8fa0-44a0-a5eb-631d02499035/new_code_HDPE_LDPE.png?v=1648731888841"/>
                 
                <p>old code for Polyester or PET decision</p>
               <Img src="https://cdn.glitch.global/e5b8e94f-8fa0-44a0-a5eb-631d02499035/old_code_PET.png?v=1648731888690"/>
                 
                <p>new code for Polyester or PET decision</p>
               <Img src="https://cdn.glitch.global/e5b8e94f-8fa0-44a0-a5eb-631d02499035/new_code_pet.png?v=1648731888534"/>
                
                <p>running our algorithm in testing mode</p>
               <Img src="https://cdn.glitch.global/e5b8e94f-8fa0-44a0-a5eb-631d02499035/demo_testing_mode.png?v=1648731888433"/>
                 
               <p>running our algorithm in training mode</p>
               <Img src="https://cdn.glitch.global/e5b8e94f-8fa0-44a0-a5eb-631d02499035/demo_training_mode.png?v=1648731888403"/>
            
               <p>Parameters for length, width, speed, number of containers, sensing zone location, sampling frequency were chosen based on maximal values from testing the algorithm. OPTIMAL VALUES FOR PARAMTERS ARE HIGHLIGHTED:</p>
               <Img src="https://cdn.glitch.global/e5b8e94f-8fa0-44a0-a5eb-631d02499035/testing_parameters.png?v=1648732142291"/>  
                 </div>
          )
      </Layout>
    )
  }
}

export default 2PX3Demo

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
