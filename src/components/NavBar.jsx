import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-dark bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="/NavBar">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/add">Add</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/search">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/delete">Delete</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/viewall">Viewall</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar