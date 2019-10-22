import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import * as styles from './Page.module.scss';
import Logo from './Logo';

export interface PageProps {
  title: string;
  canonicalUrl?: string;
  children: ReactNode;
}

export default function Page({ title, canonicalUrl, children }: PageProps) {
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? title + ' - ' : ''}Conduit Implementations</title>
        {canonicalUrl && (
          <link rel="canonical" href={'https://conduitim.pl' + canonicalUrl} />
        )}
      </Helmet>

      <div className={styles.body}>
        <Link to="/">
          <Logo />
        </Link>
        {children}
      </div>
    </div>
  );
}
