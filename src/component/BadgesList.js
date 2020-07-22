import React from 'react'
import List from '../component/List'

class BadgesList extends React.Component{
    render(){
        if (this.props.badges.length===0) {
            return (
                <div>
                    <h2>No Existen datos En esta Lista</h2>
                    <p>Crea un nuevo</p>
                </div>
            )
        }
        return(
            <React.Fragment>
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return(
                    <List  key={badge.id} itemList={badge}/>
                    )
                })} 
            </ul>
        </React.Fragment>
        )
    }
}

export default BadgesList