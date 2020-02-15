import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { InView } from "react-intersection-observer"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }
      return (
        <InView>
          {({ inView, ref, entry }) => (
            <div ref={ref}>
              {inView ? <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} /> : null}
            </div>
          )}
        </InView>
      )
    }}
  />
)

export default Image