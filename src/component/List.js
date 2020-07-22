import React from 'react'
import './styles/List.css'
import { Link } from 'react-router-dom'
import icontwitter from '../images/icon-twitter.svg'
import Gravatar from './Gravatar'

class List extends React.Component{
    render(){
        return(
            <li  key={this.props.itemList.id}>
            <Link className='Badges_item text-reset text-decoration-none' to={`/badges/${this.props.itemList.id}`}>
                <div className='List'>
                    <table>
                        <tbody>
                            <tr>
                                <td><Gravatar className='avatar' email={this.props.itemList.email}/></td>
                                <td>
                                    <table>
                                    <tbody>
                                            <tr>
                                                <td><strong>{this.props.itemList.firstName} {this.props.itemList.lastName}</strong></td>
                                            </tr>
                                            <tr>
                                                <td><img className='iconTwiter' src={icontwitter} alt="twitter"/> {this.props.itemList.twitter}</td>
                                            </tr>
                                            <tr>
                                                <td>{this.props.itemList.jobTitle}</td>
                                            </tr>
                                    </tbody>
                                    </table>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </Link>
            </li>
        )
    }
}

export default List