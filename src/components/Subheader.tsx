import React from 'react';
import classNames from 'classnames';

import * as styles from './Subheader.module.scss';

export default function Subheader({ children }) {
    return <h2 className={classNames('h3', styles.subheader)}>{children}</h2>;
}
