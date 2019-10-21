import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import * as styles from './404.module.scss';
import Logo from '../components/Logo';

export default function NotFoundPage({ data }) {
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found - Conduit Implementations</title>
      </Helmet>

      <div className={styles.body}>
        <Link to="/">
          <Logo />
        </Link>
        <h1>Not found.</h1>
        <p>
          This page couldn't be found.
        </p>
      </div>
    </div>
  );
}
