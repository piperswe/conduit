import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import styles from './services.module.scss';
import Logo from '../components/Logo';

export default function ServicesPage({ data }) {
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services - Conduit Implementations</title>
        <link rel="canonical" href="https://conduitim.pl/services" />
      </Helmet>

      <div className={styles.body}>
        <Link to="/">
          <Logo className={styles.img} />
        </Link>
        <p>
          We offer a variety of software consulting services.
        </p>
      </div>
    </div>
  );
}
