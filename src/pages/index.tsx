import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import classNames from 'classnames';

import * as styles from './index.module.scss';
import BasePage from '../components/BasePage';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Cover from '../components/Cover';
import Subheader from '../components/Subheader';

export const query = graphql`
  query {
    file(
      relativePath: { eq: "images/hardik-pandya--Ey_0PMz900-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 563
          srcSetBreakpoints: [320, 375, 563]
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
    <BasePage canonicalUrl="/" className="h-card">
      <a className={classNames('u-url', 'u-uid')} href="https://conduitim.pl">
        <Logo />
      </a>
      <Cover
        fluid={data.file.childImageSharp.fluid}
        alt="San Francisco's skyline"
      />
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <AniLink
            fade
            to="/services"
            className={classNames(
              'btn',
              'btn-outline-primary',
              'btn-block',
              styles.button,
            )}
          >
            Consulting Services
          </AniLink>
          <Subheader>Consumer Products</Subheader>
          <a
            href="https://hodgepodge.dev"
            className={classNames(
              'btn',
              'btn-outline-primary',
              'btn-block',
            )}
          >
            Hodge Podge Hosting <br />
            <small>Inexpensive server hosting</small>
          </a>
        </div>
        <div className="col-3"></div>
      </div>
      <Footer includeHCard />
    </BasePage>
  );
}
