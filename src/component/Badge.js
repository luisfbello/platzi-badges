import React from 'react'
import logoConf from '../images/badge-header.svg'
import './styles/Badge.css'


class Badge extends React.Component {
    render(){
        return (
            <div className='Badge'>
                <div className='Badge__header'>
                    <img src={logoConf} alt="logoConf"/>
                </div>
                <div className='Badge__section-name'>
                    <img className='Badge__avatar' src={this.props.avatarUrl} alt="avatar"/>
        <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className='Badge__section-info'>
        <p>{this.props.jobTitle}</p>
        <p>@{this.props.twitter}</p>
                </div>
                <div className='Badge__footer'>
                    <p>#PlatziConf</p>
                </div>
            </div>
        )
    }
}

export default Badge