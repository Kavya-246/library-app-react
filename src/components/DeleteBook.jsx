import React from 'react'

const DeleteBook = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
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
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Book title</label>
                    <input type="text" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteBook