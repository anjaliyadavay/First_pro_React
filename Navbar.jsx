import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
{/* <!-- navigation bar --> */}
<header className="header-sec">
        <div className="logo">
            {/* <img src="" alt=""> */}
        </div>
        <div class="nav-link">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Skill</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Contect</a></li>
            </ul>
        </div>
    </header>
    </>
  )
}

export default Navbar