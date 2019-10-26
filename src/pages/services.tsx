import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';
import Cover from '../components/Cover';

export const query = graphql`
  query {
    file(relativePath: { eq: "images/chris-ried-ieic5Tq8YMk-unsplash.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 3840
          maxHeight: 480
          srcSetBreakpoints: [640, 750, 1125, 1242, 1920, 2560, 3840]
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
      <Cover
        fluid={data.file.childImageSharp.fluid}
        alt="A code snippet displayed on a computer monitor"
      />
      <p>
        We offer a variety of software consulting services. If you are
        interested in hiring Conduit or would like more information, please
        contact us at{' '}
        <a href="mailto:contact@conduitim.pl">contact@conduitim.pl</a>.
      </p>
    </Page>
  );
}
