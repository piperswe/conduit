import React from 'react';
import classNames from 'classnames';

import * as styles from './Footer.module.scss';

interface FooterProps {
  includeHCard?: boolean;
}

export default function Footer({ includeHCard }: FooterProps) {
  return (
    <footer className={styles.addrBlock}>
      <a
        className={classNames(includeHCard && 'u-email')}
        href="mailto:contact@conduitim.pl"
      >
        contact@conduitim.pl
      </a>{' '}
      |{' '}
      <address
        className={classNames(includeHCard && 'p-adr', includeHCard && 'h-adr')}
      >
        <span className={classNames(includeHCard && 'p-street-address')}>
          380 Hamilton Ave #252
        </span>
        ,{' '}
        <span className={classNames(includeHCard && 'p-locality')}>
          Palo Alto
        </span>
        , <span className={classNames(includeHCard && 'p-region')}>CA</span>{' '}
        <span className={classNames(includeHCard && 'p-postal-code')}>
          94301
        </span>
      </address>{' '}
      |{' '}
      <a
        className={classNames(includeHCard && 'p-tel')}
        href="tel:1-650-308-4367"
        title="Feel free to call or send a text!"
      >
        +1 (650) 308-4367
      </a>
    </footer>
  );
}
