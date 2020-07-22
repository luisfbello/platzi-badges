import React from 'react'
import logoConf from '../images/platziconf-logo.svg'
import './styles/BadgeDetail.css'
import Badge from '../component/Badge'
import { Link } from 'react-router-dom'

function BadgeDetail(props){
    return(
        <div className='col-lg-12'>
                <div className='BadgeDetails__hero'>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={logoConf} alt="logoConf"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name ">
                                <h1>{props.badge.firstName} {props.badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                        <Badge 
                                firstName={props.badge.firstName }
                                lastName={props.badge.lastName }
                                jobTitle={props.badge.jobTitle }
                                twitter={props.badge.twitter }
                                email={props.badge.email}
                                avatarUrl=''
                                />
                        </div>
                       <div className="col-6 ">
                           <div className="card">
                               <div className="card-header">
                                   <center><h1>Actions</h1></center>
                               </div>
                               <div className="card-body">
                                   <div className='Badge_action'>
                                       
                                            <div className='col_action'><Link className='btn btn-success' to={`/badges/${props.badge.id}/edit`}>Editar </Link></div>
                                            <div className='col_action' ><button className='btn btn-danger'>Eliminar</button></div>
                                    
                                   </div>
                               </div>
                           </div>
                           
                       </div>
                    </div>
                </div>

            </div>
    )

}

export default BadgeDetail