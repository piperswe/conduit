import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import classNames from 'classnames';

import * as styles from './index.module.scss';
import Logo from '../components/Logo';

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
