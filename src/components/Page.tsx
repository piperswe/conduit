import React, { ReactNode } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
      <AniLink fade to="/">
        <Logo />
      </AniLink>
      {children}
      <Footer />
    </BasePage>
  );
}
