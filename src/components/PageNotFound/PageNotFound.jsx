import React from 'react'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
  return (
        <div className="container vh-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-6">
                    <Link to="/home" >
                        <img  className='w-100' style={{objectFit:'cover'}} src="assets/images/notfound/notFound.jpg" alt="not found image" />
                    </Link>
                </div>
            </div>
        </div>
  )
}
