import React from "react"
import { Link } from "gatsby"

const HeaderNav = () => (
  <div className="home-header">
    <div>
      <Link to="/">c9rl.works</Link>
      (
        <a
          href="https://github.com/c9rl/cvrl.works"
          target="_blank"
          rel="noopener noreferrer"
        >
          src
        </a>
      )
    </div>
    <div className="social-icons">
      <a
        href="https://github.com/c9rl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-icon github"></div>
      </a>
      <a
        href="https://www.linkedin.com/in/carlbernardo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-icon linkedin"></div>
      </a>
      <a href="mailto:c9rl.bernardo@gmail.com">
        <div className="social-icon mail"></div>
      </a>
    </div>
  </div>
);

export default HeaderNav;