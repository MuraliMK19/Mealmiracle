import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Ask from './Ask'


export default function Home() {
    const backgr = {
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg")',
        backgroundSize: "cover",
        backgroundPosition: 'fixed',
        height: "100vh"
    }
    return (
        <>
            <div style={backgr}>
                <h1 style={{ textAlign: "center", fontStyle: "oblique", fontSize: "50px", color: "white" }}>Let's Cultivate a world where no one goes hungry!!</h1>

                <div className='d-flex justify-content-center mt-5'>
                    <Link to="/Ask">
                        <button type='submit' className='btn' style={{ backgroundColor: "rgb(72, 212, 135,.5)", width: "250px", height: "80px", borderRadius: "30px", color: "white", fontWeight: "bolder", fontSize: "20px" }} >Ask your Help</button>
                    </Link>
                    <Link to="/Help">
                        <button type='button' className='btn' style={{ backgroundColor: "rgb(58, 188, 214,.5)", width: "250px", height: "80px", borderRadius: "30px", color: "white", fontWeight: "bolder", fontSize: "20px" }}>Suppress Hunger!!</button>
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path='/Ask' element={<Ask />} />
            </Routes>
            <div className='container'>
                <h1 style={{ textAlign: "center", fontSize: "60px", color: "rgb(2, 33, 84)", fontFamily: "sans-serif", fontWeight: "bolder" }}>Let's end Hunger</h1>
                <p style={{ textAlign: "center", fontSize: "30px", color: "rgb(2, 33, 84)" }}>"Zero Hunger" is the second Sustainable Development Goal (SDG) established by the United Nations. It aims to end hunger, achieve food security, improve nutrition, and promote sustainable agriculture by 2030. </p>
                <div className='d-flex justify-content-center'>
                    <div className='card m-4' style={{ borderRadius: "20px", width: "400px", borderTop:"7px solid rgb(222, 44, 130)" }}>
                        <h3 className='p-2' style={{ color: "rgb(2, 33, 84)" }}>Food for the Poor</h3>
                        <p className='p-2' style={{ color: "rgb(2, 33, 84)" }}>As with any charitable organization, individuals interested in supporting "Food For The Poor". The organization focuses on addressing poverty, hunger, and other pressing issues by delivering essential resources such as food, clean water, healthcare, education, and housing.</p>
                        <img src='https://cdn.vectorstock.com/i/preview-1x/74/09/food-sharing-nutrition-charity-logo-design-vector-47927409.jpg' height={"150px"} width={"150px"}  />
                    </div>
                    <div className='card m-4' style={{ borderRadius: "20px", width: "400px", borderTop:"7px solid rgb(47, 47, 212)"}}>
                        <h3 className='p-2' style={{ color: "rgb(2, 33, 84)" }}>Cultivate a World.</h3>
                        <p className='p-2' style={{ color: "rgb(2, 33, 84)" }}>Cultivating a world where no one goes hungry is a powerful and noble goal. This vision aligns with the United Nations' Sustainable Development Goal of achieving Zero Hunger by 2030. </p>
                        <img src='https://i.pinimg.com/474x/c6/6a/77/c66a77558b5cf2ff67d11d981d664d54.jpg' height={"150px"} width={"150px"}  />
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='card m-4' style={{ borderRadius: "20px", width: "400px", borderTop:"7px solid rgb(47, 212, 135)"}}>
                        <h3 className='p-2' style={{ color: "rgb(2, 33, 84)" }}>Reducing Food Waste</h3>
                        <p className='p-2' style={{ color: "rgb(2, 33, 84)" }}>Reducing Food Waste by donating it to the poorer near you.</p>
                        <img src='https://cdni.iconscout.com/illustration/premium/thumb/food-donation-6500856-5433273.png?f=webp' height={"150px"} width={"150px"} />
                    </div>
                    <div className='card m-4' style={{ borderRadius: "20px", width: "400px", borderTop:"7px solid rgb(192, 219, 55)" }}>
                        <h3 className='p-2' style={{ color: "rgb(2, 33, 84)" }}>Empowering Communities</h3>
                        <p className='p-2' style={{ color: "rgb(2, 33, 84)" }}>Let's create a Communities to donate the food for poorer. Donate at your convenience.</p>
                        <img src='https://www.teraflow.ai/wp-content/uploads/2023/08/Teraflow_3DBot_Aha-copy-2.png' height={"150px"} width={"150px"} />
                    </div>
                </div>
            </div>

        </>

    )
}
