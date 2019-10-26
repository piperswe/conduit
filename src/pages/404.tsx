import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';
import Cover from '../components/Cover';

export const query = graphql`
  query {
    file(
      relativePath: { eq: "images/lachlan-donald-eaTHXNIUsYM-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 3840
          maxHeight: 960
          traceSVG: { color: "#594E52", optCurve: false, turdSize: 1 }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default function NotFoundPage({ data }) {
  return (
    <Page title="Not Found">
      <Cover
        fluid={data.file.childImageSharp.fluid}
        alt="A set of road signs signalling the end of a road, in a barren landscape"
      />
      <p>This page couldn't be found.</p>
    </Page>
  );
}
