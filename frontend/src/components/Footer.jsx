import React from "react"
import { Link } from "react-router-dom"
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return(
    <>
          <footer className="page-footer font-small blue pt-4 bg-dark">
                <div className="container-fluid text-center text-bg-dark text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">roomi store</h5>
                            <p>Encuentranos en calle 1010, Santiago, Chile</p>
                            <img src="" alt="" />
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0"/>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Siguenos</h5>
                                <Link to="#!">  <BsFacebook /> </Link>

                                <Link to="#!">  <BsInstagram /> </Link>
                                
                        </div>

                    </div>
                </div>

                <div className=" text-center py-3">
                    © 2022 Copyright
                </div>

            </footer>
       
    </>
    )
}

export default Footer