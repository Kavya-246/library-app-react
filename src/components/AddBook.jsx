import React from 'react'
import NavBar from './NavBar'

const AddBook = () => {
  return (
    <div>
        <NavBar/>
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