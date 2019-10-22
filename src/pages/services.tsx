import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as styles from './services.module.scss';
import Page from '../components/Page';

export const query = graphql`
  query {
    file(relativePath: { eq: "images/chris-ried-ieic5Tq8YMk-unsplash.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 3840
          maxHeight: 480
          traceSVG: { color: "#594E52", optCurve: false, turdSize: 1 }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default function ServicesPage({ data }) {
  return (
    <Page title="Services" canonicalUrl="/services">
      <Img fluid={data.file.childImageSharp.fluid} className={styles.cover} />
      <p>
        We offer a variety of software consulting services. If you are
        interested in hiring Conduit or would like more information, please
        contact us at{' '}
        <a href="mailto:contact@conduitim.pl">contact@conduitim.pl</a>.
      </p>
    </Page>
  );
}
