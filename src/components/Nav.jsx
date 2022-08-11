import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

const Nav = () => {
  return (
    <>
      {/* make manu */}
    <section className="nav-bar">
      <div className="container">
      <div classNameName="row">
            <div className="col">
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hosting
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Web Hosting</Link>
            <p>Next Level SSD Hosting</p>
            </li>
            <li><Link className="dropdown-item" to="#">Reseller Hosting</Link>
            <p>Starter Selling Today</p>
            </li>
            
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Server
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Virtual Server</Link>
            <p>Next-Gen VPS Hosting</p>
            </li>
            <li><Link className="dropdown-item" to="#">Dedicated Server</Link>
            <p>Gain maximum power and control</p>
            </li>
            
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Domain</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Email Hosting</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">SSL Certificate</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Nav