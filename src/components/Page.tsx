import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import classNames from 'classnames';

import * as styles from './Page.module.scss';
import Logo from './Logo';

export interface PageProps {
  title: string;
  canonicalUrl?: string;
  children: ReactNode;
}

export default function Page({ title, canonicalUrl, children }: PageProps) {
  return (
    <div className={classNames('container', styles.page)}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? title + ' - ' : ''}Conduit Implementations</title>
        {canonicalUrl && (
          <link rel="canonical" href={'https://conduitim.pl' + canonicalUrl} />
        )}
      </Helmet>
      <Link to="/">
        <Logo />
      </Link>
      {children}
      <footer className={styles.addrBlock}>
        <a href="mailto:contact@conduitim.pl">contact@conduitim.pl</a> |{' '}
        <address>380 Hamilton Ave #252, Palo Alto, CA 94301</address> |{' '}
        <a href="tel:1-650-308-4367">+1 (650) 308-4367</a>
      </footer>
    </div>
  );
}
