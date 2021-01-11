import React from "react"
import { Link } from "gatsby"

import HeaderNav from "../components/header-nav"
import SEO from "../components/seo"

import "styles/pages/index.scss"

export default class Index extends React.Component {
  render() {
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
    )
  }
}
