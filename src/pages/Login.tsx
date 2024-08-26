import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import './login.css'
import google from '../assets/Google.png'

const Login = () => {
    return (
        <div className='login'>
            <div className="header">
                <img src={logo} alt="reachinbox-logo" />
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "87.8vh"}}>
                <div style={{background: "#111214", width: "460px", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "50px", paddingBottom: "50px", alignItems: "center", borderRadius: "17px", border: "2px solid #25262B"}}>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <p style={{ color: "#fff", fontSize: "20px", textAlign: "center" }}>Create new account</p>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", cursor: "pointer", gap: "10px", alignItems: "center", height: "40px", borderRadius: "10px", width: "350px", marginTop: "20px", border: "2px solid #474952" }}>
                            <img src={google} alt=""/>
                            {/* <Link to="/dashboard">Sign Up with Google</Link> */}
                            <Link to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachboxairadha-l4u0ycafz-thanveshs-projects.vercel.app/dashboard/" className='text-sm text-gray-400 cursor-pointer'> Sign Up with Google </Link>
                        </div>
                        <p style={{
                            height: "40px",
                            width: "195px",
                            paddingTop: "10px",
                            marginTop: "40px",
                            borderRadius: "5px",
                            borderStyle: "none",
                            textAlign: "center",
                            background: "linear-gradient(90deg, #4B63DD, #0524BF)",
                            fontSize: "14px",
                            color: "#fff"
                        }} >Create an account</p>
                        <p style={{color: "#909296", fontSize: "16px", marginTop: "20px"}}>Already have an account? <span style={{color: "#C1C2C5", fontSize: "16px"}}>Sign In</span></p>
                    </div>

                </div>
            </div>
            <div className="footer">
                <p> ©️ 2023 Reachinbox. All rights reserved.</p>
            </div>
        </div>

    )
}

export default Login
