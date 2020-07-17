import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';
import classNames from 'classnames';
import Markdown from 'react-markdown';

import Page from '../components/Page';
import Cover from '../components/Cover';
import Subheader from '../components/Subheader';
import { Container } from '../components/BasePage';
import Footer from '../components/Footer';

export const query = graphql`
  query {
    file(relativePath: { eq: "images/chris-ried-ieic5Tq8YMk-unsplash.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 3840
          maxHeight: 480
          srcSetBreakpoints: [640, 750, 1125, 1242, 1920, 2560, 3840]
          traceSVG: { color: "#594E52", optCurve: false, turdSize: 1 }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

interface PortfolioLink {
  title: string,
  destination: string,
}

interface PortfolioImage {
  src: string,
  title?: string,
  alt: string,
}

interface PortfolioItemDetails {
  image?: PortfolioImage,
  name: string,
  subtitle?: string,
  description: string,
  links?: PortfolioLink[],
}

function PortfolioItem({ item }: { item: PortfolioItemDetails }) {
  return (
    <div className="col-6">
      <div className="card">
        { item.image &&
          <img
            src={item.image.src}
            className="card-img-top"
            alt={item.image.alt}
            title={item.image.title} /> }
        <div className="card-body">
          <h5 className="card-title">{ item.name }</h5>
          <div className="card-text">
            <Markdown
              source={item.description} />
          </div>
          { item.links && item.links.map(link => <a href={link.destination} className="card-link">{link.title}</a>)}
        </div>
      </div>
    </div>
  );
}

function Portfolio({ items }: { items: PortfolioItemDetails[] }) {
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="row col-6">
        { items.map(item => <PortfolioItem item={item} />) }
      </div>
    </div>
  );
}

const portfolioItems: PortfolioItemDetails[] = [
  {
    image: {
      src: '/conduit-homepage.png',
      alt: 'A screenshot of this website'
    },
    name: 'Conduit Implementations Website',
    description: `
This website is built with [Gatsby](https://www.gatsbyjs.org) (a static site
generator built on [React](https://reactjs.org) and
[GraphQL](https://graphql.org)), which allows us to add neat dynamic and
interactive pages while still using a static web host.
    `,
    links: [
      {
        title: 'Homepage',
        destination: 'https://conduitim.pl/',
      },
    ],
  },
  {
    image: {
      src: '/datacenter.jpg',
      alt: 'A few servers racked up in our cabinet',
      title: 'This image was taken while we were still getting things set up,'
           + ' so please don\'t judge our cable management _too_ harshly',
    },
    name: 'Hodge Podge Hosting',
    subtitle: 'Pre-launch',
    description: `
Hodge Podge Hosting is a server hosting product oriented towards hobbyists. From
the Hodge Podge Hosting website:

> Hodge Podge uses hardware that perfectly fits your project - gear (typically
> used, off-lease gear) that is usually relegated to hobbyists - to provide the
> afforable infrastructure it needs.

It operates out of a leased cabinet in the Hurricane Electric Fremont 2
datacenter, with hardware that is either fully owned by Conduit Implementations,
or sent in by customers for colocation.
    `,
    links: [
      {
        title: 'Landing Page',
        destination: 'https://hodgepodge.dev',
      },
    ],
  },
];

export default function ServicesPage({ data }) {
  return (
    <>
      <Page title="Services" canonicalUrl="/services" footer={false}>
        <Cover
          fluid={data.file.childImageSharp.fluid}
          alt="A code snippet displayed on a computer monitor"
        />
        <p>
          We offer a variety of web development and system administration
          consulting services. We have experience managing a fleet of NixOS
          servers using NixOps, running a series of custom services built on
          various frameworks and languages, including Sails, Go, and Clojure. If
          you are interested in talking to us about a potential project, please
          send us an email at{' '}
          <a href="mailto:sales@conduitim.pl">sales@conduitim.pl</a>.
        </p>
        <Subheader>Portfolio</Subheader>
      </Page>
      <Portfolio items={portfolioItems} />
      <Container>
        <Footer />
      </Container>
    </>
  );
}
