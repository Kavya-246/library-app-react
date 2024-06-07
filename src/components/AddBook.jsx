import React from 'react'

const AddBook = () => {
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
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">Book Title</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">category</label>
                            <select name="" id="" className="form-control">
                                <option value="comic">comic</option>
                                <option value="autobiography">autobiography</option>
                                <option value="novel">novel</option>
                                <option value="short story">short story</option>
                            </select></div>
                        </div>
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">Publication</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" class="form-label">Author name</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">Distributor name</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">Publicator name</label>
                            <input type="text" name="" id="" className="form-control" /></div>
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">price</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                            <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label for="" class="form-label">Edition</label>
                                <input type="text" name="" id="" className="form-control" />
                            </div>
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                       
                </div>
            </div>
         </div>                                
    </div>
   
  )
}

export default AddBook