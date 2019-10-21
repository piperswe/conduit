import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function Logo(props) {
  const data = useStaticQuery(graphql`
    query GetLogo {
      file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 960
            traceSVG: { color: "#594E52", optCurve: false, turdSize: 1 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  console.log(data);
  return <Img fluid={data.file.childImageSharp.fluid} {...props} />;
}
