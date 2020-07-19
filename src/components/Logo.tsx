import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import * as styles from './Logo.module.scss';

export default function Logo(props) {
  const data = useStaticQuery(graphql`
    query GetLogo {
      file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 640
            srcSetBreakpoints: [160, 320, 640]
            traceSVG: { color: "#594E52", optCurve: false, turdSize: 1 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <div className={classNames('row', styles.logo)}>
      <div className="col"></div>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Conduit Implementations"
        className={classNames('col-8', props.classNames)}
        {...props}
      />
      <div className="col"></div>
    </div>
  );
}
