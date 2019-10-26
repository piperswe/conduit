import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import * as styles from './Cover.module.scss';

export default function Cover(props) {
  return (
    <Img className={classNames(styles.cover, props.classNames)} {...props} />
  );
}
