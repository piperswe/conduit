import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import classNames from 'classnames';
import Img from 'gatsby-image';

import * as styles from './index.module.scss';
import * as pageStyles from '../components/Page.module.scss';
import BasePage from '../components/BasePage';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

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
      <Img fluid={data.file.childImageSharp.fluid} className={styles.cover} />
      <div className="row">
        <div className="col-3"></div>
        <Link
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
        </Link>
        <div className="col-3"></div>
      </div>
      <Footer includeHCard />
    </BasePage>
  );
}
