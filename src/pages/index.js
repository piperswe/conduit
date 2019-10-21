import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import classNames from 'classnames';
import Img from 'gatsby-image';

import styles from './index.module.scss';

export const query = graphql`
  query GetLogo {
    file(relativePath: { eq: "images/logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 960, traceSVG: {
          color: "#594E52",
          optCurve: false,
          turdSize: 1
        }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default function IndexPage({ data }) {
  return (<div className={styles.container}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Conduit Implementations</title>
      <link rel="canonical" href="https://conduitim.pl/" />
    </Helmet>

    <div className={classNames(styles.body, 'h-card')}>
      <a className={classNames('u-url', 'u-uid')} href="https://conduitim.pl">
        <Img className={styles.img} fluid={data.file.childImageSharp.fluid} />
      </a>
      <p><a className="u-email" href="mailto:contact@conduitim.pl">contact@conduitim.pl</a></p>
    </div>
  </div>);
};
