import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            
            <div
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: 250,
                borderRadius: `100%`,
              }}
            >            
              <img src={require('../../static/me.jpeg')} style={{borderRadius:`50%`}} alt={author}/>
            </div>
            <p>
             Written by <strong>{author}</strong>. Along with software development, digitaldina is in their 3rd year of Engineering Physics at McMaster University  and enjoys things like good food as well as producing, performing, and sound mixing music.
              {` `}
              <a href={`mailto:dinaelhanan@gmail.com`}>
                Here's their email!
              </a> :)
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
