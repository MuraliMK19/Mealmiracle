import React from 'react'
import Home from './Home'
import Ask from './Ask'
import Help from './Help'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import About from './About'


export default function Navigation() {
    const backgr = {
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/07/26/16/48/bread-2542308_1280.jpg")',
        backgroundSize: "cover",
        height: "100vh"
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "white" }}>
                <div className="container-fluid">
                <img src="https://cdn.pixabay.com/photo/2021/05/15/13/20/hunger-6255733_1280.png" alt="" height={"100px"} width={"100px"} />
                    <a className="navbar-brand" href="/" style={{ color: "green", fontSize: "25px" }}>MealMiracle</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Ask" className="nav-link" href="#">Ask Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Help" className="nav-link" href="#">Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link" href="#">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Ask' element={<Ask />} />
                <Route path='/Help' element={<Help />} />
                <Route path='/About' element={<About/>} />
            </Routes>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-2 text-center">
                            <img src="https://cdn.pixabay.com/photo/2021/05/15/13/20/hunger-6255733_1280.png" alt="" height={"200px"} width={"200px"} />
                            <div className="row">
                                <div className="col-lg-12">
                                    <img src="https://www.qualitylogoproducts.com/images/_promo-university/social-media/_icon_facebook-smi.svg" height="50px" width="50px" alt="" />
                                    <img src="https://www.qualitylogoproducts.com/images/_promo-university/social-media/_icon_twitter-smi.svg" height="50px" width="50px" alt="" />
                                    <img src="https://www.qualitylogoproducts.com/images/_promo-university/social-media/_icon_instagram-smi.svg" height="50px" width="50px" alt="" />
                                    <img src="https://www.qualitylogoproducts.com/images/_promo-university/social-media/_icon_pinterest-smi.svg" height="50px" width="50px" alt="" />
                                </div>
                                <p>337, Ayur Vigyan Nagar, New Delhi, India.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div>
                                <h3>Contact Us</h3>
                                <p >mealmiracle@gmail.com</p>
                                <p>+91 6383160191</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div>
                                <h3>Let Us Help Others</h3>
                                <p>Give a Grub</p>
                                <p>Your Account</p>
                                <p>Return Center</p>
                                <p>Help</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p style={{ textAlign: 'center' }}><i className="fa-solid fa-copyright" style={{ color: '#5a7188' }}></i> Copyrights owned by MealMiracle 2024</p>
                </div>
            </footer>
        </div>
    )
}
