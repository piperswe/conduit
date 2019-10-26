import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import classNames from 'classnames';

import Logo from './Logo';
import Footer from './Footer';
import BasePage from './BasePage';

export interface PageProps {
  title: string;
  canonicalUrl?: string;
  children: ReactNode;
}

export default function Page({ title, canonicalUrl, children }: PageProps) {
  return (
    <BasePage title={title} canonicalUrl={canonicalUrl}>
      <Link to="/">
        <Logo />
      </Link>
      {children}
      <Footer />
    </BasePage>
  );
}
