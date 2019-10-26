import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import classNames from 'classnames';

import * as styles from './index.module.scss';
import BasePage from '../components/BasePage';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Cover from '../components/Cover';

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
        <AniLink
          fade
          to="/services"
          className={classNames(
            'btn',
            'btn-outline-primary',
            'btn-block',
            'col-6',
            styles.servicesButton,
          )}
        >
          Services
        </AniLink>
        <div className="col-3"></div>
      </div>
      <Footer includeHCard />
    </BasePage>
  );
}
