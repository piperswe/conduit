import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import classNames from 'classnames';
import Img from 'gatsby-image';

import * as styles from './index.module.scss';
import * as pageStyles from '../components/Page.module.scss';
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
    <div className={classNames('container', pageStyles.page, 'h-card')}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Conduit Implementations</title>
        <link rel="canonical" href="https://conduitim.pl/" />
      </Helmet>
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
      <footer className={pageStyles.addrBlock}>
        <a className="u-email" href="mailto:contact@conduitim.pl">
          contact@conduitim.pl
        </a>{' '}
        |{' '}
        <address className={classNames('p-adr', 'h-adr')}>
          <span className="p-street-address">380 Hamilton Ave #252</span>,{' '}
          <span className="p-locality">Palo Alto</span>,{' '}
          <span className="p-region">CA</span>{' '}
          <span className="p-postal-code">94301</span>
        </address>{' '}
        |{' '}
        <a className="p-tel" href="tel:1-650-308-4367">
          +1 (650) 308-4367
        </a>
      </footer>
    </div>
  );
}
