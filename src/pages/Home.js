import React from 'react'
import './styles/Home.css'
import logoConf from '../images/platziconf-logo.svg'
import { Link } from 'react-router-dom'
import imgHome from '../images/Hacker-bro.svg'

function Home(){
    return(
        <div className="Badge__home">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={logoConf} alt="logo"/>
                        <h1>Print your Badges</h1>
                        <p>Badge Management System</p>
                        <Link to='/badges' className='btn btn-primary'>Create Badge</Link>
                    </div>
                    <div className="col-6">
                        <img className='imgHome' src={imgHome} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home