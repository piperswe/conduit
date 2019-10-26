declare module 'gatsby-plugin-transition-link' {
  import { Link } from 'gatsby';
  export default Link;
}

declare module 'gatsby-plugin-transition-link/AniLink' {
  import { GatsbyLinkProps } from 'gatsby';
  import { Component } from 'react';

  export interface Props {
    fade?: boolean;
    paintDrip?: boolean;
    duration?: number;
    swipe?: boolean;
    direction?: string;
    top?: string;
    entryOffset?: number;
    color?: string;
    hex?: string;
    bg?: string;
  }

  export default class AniLink extends Component<GatsbyLinkProps<{}> & Props> {}
}
