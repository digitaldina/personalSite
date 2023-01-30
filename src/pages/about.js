/*kodus to this codepen for the social buttons :)
https://codepen.io/vpdemo/pen/dPdymj
*/
import React from "react"
import { rhythm } from "../utils/typography"
import { StaticQuery, graphql } from "gatsby"
class About extends React.Component {
  
  render() {
    return(
    <StaticQuery
      query={aboutQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
    return (
      
      <div>
     <h1 style={{fontFamily: 'nightmare_codehackregular',textAlign: 'center'}}>>about me</h1>
     <br />
      <div
      style={{
        width: 250,
        marginLeft: '43%'
      }}
    >            
      <img src={require('../../static/me.jpeg')} style={{borderRadius:`50%`}}/><p>
              Written by <strong>{author}</strong>. Along with software development, digitaldina is in their 3rd year of Engineering Physics at McMaster University  and enjoys things like good food as well as producing, performing, and sound mixing music.
              {` `}
              <a href={`mailto:dinaelhanan@gmail.com`}>
                Here's their email!
              </a> :)
            </p>
    </div>
    <div align='center' class="socialbtns">
<ul>
<li><a href="https://www.twitter.com/dinaelhanan" class="fa fa-lg fa-twitter"></a></li>
<li><a href="https://www.github.com/dinaelhanan" class="fa fa-lg fa-github"></a></li>
<li><a href="#" class="fa fa-lg fa-linkedin"></a></li>
</ul>
</div>
      </div>
    )
 }}
    />
    )
  }
}
const aboutQuery = graphql`
  query AboutQuery {
    
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
export default About
