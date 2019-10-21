import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import * as styles from './services.module.scss';
import Logo from '../components/Logo';

export const query = graphql`
  query {
    file(relativePath: { eq: "images/chris-ried-ieic5Tq8YMk-unsplash.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 3840,
          maxHeight: 480
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default function ServicesPage({ data }) {
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services - Conduit Implementations</title>
        <link rel="canonical" href="https://conduitim.pl/services" />
      </Helmet>

      <div className={styles.body}>
        <Link to="/">
          <Logo />
        </Link>
        <Img fluid={data.file.childImageSharp.fluid} className={styles.cover} />
        <p>
          We offer a variety of software consulting services. If you are
          interested in hiring Conduit or would like more information, please
          contact us at <a href="mailto:contact@conduitim.pl">contact@conduitim.pl</a>.
        </p>
      </div>
    </div>
  );
}
