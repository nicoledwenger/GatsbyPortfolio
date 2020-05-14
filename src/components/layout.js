import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import { breakpoints } from "./Breakpoints"
import styled from "styled-components/macro";

import Header from "./Header"
import Footer from './Footer'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const LayoutContainer = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 1.0875rem 1.45rem;

    @media (min-width: ${breakpoints.tabletMax}) {
      padding-left: 0px;
    }

    @media (min-width: ${breakpoints.mobileMax}) {
      padding-left: 50px;
  }
`;

  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <LayoutContainer>
        <main>
          {children}
        </main>
        <Footer />
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
