import React from 'react'
import BadgesList from '../component/BadgesList'
import Loader from '../component/Loader'
import PageError from '../component/PageError'
import logoConf from '../images/badge-header.svg'
import './styles/Badges.css'
import { Link } from 'react-router-dom'

import api from '../api'

class Badges extends React.Component{
    // _isMounted=false

    state={
        loading:true,
        error:null,
        data:[]
    }
    


    componentDidMount(){
        
        this.fetchData()
        
    }

    fetchData = async () => {
        this.setState({loading:true,error:null})

        try {
            const data= await api.badges.list()
            this.setState({loading:false,data:data})
        } catch (error) {
            this.setState({loading:false,error:error})
        }
    }

    // componentDidUpdate(props,prevState){
    //     console.log('5 componentDidUpdate')
    //     console.log({props:props,prevState:prevState})

    //     console.log({props:this.props,state:this.state})
    // }

    // componentWillUnmount(){
    //     this._isMounted=false
    // }
    render(){
        if(this.state.loading){
            return <Loader />
        }
        if (this.state.error) {
            return <PageError errorMessage={this.state.error.message}/>
        }
        
        return(
            <React.Fragment>
                
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className='Badges_conf-logo' src={logoConf} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className='btn btn-primary'>
                            New Badge
                        </Link>
                    </div>

                    <div className="Badge__list">
                        <div className="Badges__container">
                        <BadgesList className='deco_none' badges={this.state.data}/>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Badges