import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <main>
    <header>
        <nav>
            <Link to="/">Docket Form</Link>
            <Link to="/DocketList">All Docket</Link>
        </nav>
    </header>
</main>
    </div>
  )
}

export default Header
