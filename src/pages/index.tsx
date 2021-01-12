import React from "react"
import { Link, PageProps } from "gatsby"

import HeaderNav from "../components/header-nav"
import SEO from "../components/seo"
import Test from "../components/test"

import "styles/pages/index.scss"

const Index = (props: PageProps) => {
  return (
    <React.Fragment>
      <SEO title="home" />
      <HeaderNav />

      <div className="home-body">
        <h1>
          <span role="img" aria-label="wave">👋</span>
        </h1>
        <h1>Hi, I'm Carl.</h1>
        <div>
          <Link to="/about">/about</Link>
          {/* <Link to="/blog">/blog</Link> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
