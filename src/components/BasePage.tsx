import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import classNames from 'classnames';

import * as styles from './BasePage.module.scss';

export interface BasePageProps {
  title?: string;
  canonicalUrl?: string;
  children: ReactNode;
  className?: string;
}

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={classNames('container', styles.page, className)}>
      { children }
    </div>
  );
}

export default function BasePage({
  title,
  canonicalUrl,
  children,
  className,
}: BasePageProps) {
  return (
    <Container className={className}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? title + ' - ' : ''}Conduit Implementations</title>
        {canonicalUrl && (
          <link rel="canonical" href={'https://conduitim.pl' + canonicalUrl} />
        )}
      </Helmet>
      {children}
    </Container>
  );
}
