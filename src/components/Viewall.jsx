import React, { useState } from 'react'
import NavBar from './NavBar'

const Viewall = () => {
    
    const [data,changeData]=useState(
        [
                {"name":"kavya","admno":"112","rollno":"11"},
                {"name":"sana","admno":"113","rollno":"12"},
                {"name":"shilpa","admno":"114","rollno":"13"},

         ]
            
    )

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                {data.map(
                    (value, index) => {
                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC2k_mRTtn4ZCuaCWY1crj3V_Of6VE3VmsOA&s" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Name:{value.name}</h5>
                                <p className="card-text">Adm No:{value.admno}</p>
                                <p className="card-text">Roll No:{value.rollno}</p>
                                <a href="#" className="btn btn-primary">biodata</a>
                            </div>
                        </div>
                    </div>   
                    }
                )} 
            </div>
        </div>
    </div>
  )
}

export default Viewall