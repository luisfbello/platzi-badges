import React from 'react'

import api from '../api'
import Loader from '../component/Loader'
import PageError from '../component/PageError'
import BadgeDetail from '../pages/BadgeDetail'



class BadgeDetailContainer extends React.Component{

state={
    loading:true,
    error:null,
    data:undefined
}

componentDidMount(){

    this.ReadData()
}



ReadData= async e =>{
    this.setState({loading:true,error:null})

    try {
        const data = await api.badges.read(this.props.match.params.badgeId)
        this.setState({loading:false,data:data})
    } catch (error) {
        this.setState({loading:false,error:error})
    }

}

    render(){
        if (this.state.loading) {
            return <Loader/>
        }
        if (this.state.error) {
            return <PageError  errorMessage={this.state.error.message}/>
        }
        return(
            <BadgeDetail badge={this.state.data}/>
        )
    }
}

export default BadgeDetailContainer