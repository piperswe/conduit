import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';
import Cover from '../components/Cover';
import Subheader from '../components/Subheader';

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
        We offer a variety of web development and system administration
        consulting services. We have experience managing a fleet of NixOS
        servers using NixOps, running a series of custom services built on
        various frameworks and languages, including Sails, Go, and Clojure. If
        you are interested in talking to us about a potential project, please
        send us an email at{' '}
        <a href="mailto:sales@conduitim.pl">sales@conduitim.pl</a>.
      </p>
      <Subheader>Portfolio coming soon.</Subheader>
    </Page>
  );
}
