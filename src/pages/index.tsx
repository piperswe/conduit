import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import classNames from 'classnames';
import Img from 'gatsby-image';

import * as styles from './index.module.scss';
import Logo from '../components/Logo';

export const query = graphql`
  query {
    file(
      relativePath: { eq: "images/hardik-pandya--Ey_0PMz900-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 3840
          maxHeight: 1500
          traceSVG: { color: "#594E52", optCurve: false, turdSize: 1 }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default function IndexPage({ data }) {
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Conduit Implementations</title>
        <link rel="canonical" href="https://conduitim.pl/" />
      </Helmet>

      <div className={classNames(styles.body, 'h-card')}>
        <a className={classNames('u-url', 'u-uid')} href="https://conduitim.pl">
          <Logo />
        </a>
        <Img fluid={data.file.childImageSharp.fluid} className={styles.cover} />
        <p>
          <a className="u-email" href="mailto:contact@conduitim.pl">
            contact@conduitim.pl
          </a>
        </p>
        <p>
          <Link to="/services">Services</Link>
        </p>
      </div>
    </div>
  );
}
