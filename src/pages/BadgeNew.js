import React from 'react'
import Badge from '../component/Badge'
import BadgeForm from '../component/BadgeForm'
import './styles/BadgeNew.css'
import logo from '../images/platziconf-logo.svg'
import api from '../api'
import Loader from '../component/Loader'
import PageError from '../component/PageError'


class BadgeNew extends React.Component{
    state={
        loading:false,
        error:null,
        form:{
            firstName:'',
            lastName:'',
            jobTitle:'',
            twitter:'',
            email:'',
            avatarUrl:''
        }
    }


    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e=>{
        e.preventDefault()
        this.setState({loading:false,error:null})
        try {
            
            await api.badges.create(this.state.form)
            this.setState({loading:true})
            setTimeout(this.props.history.push('/badges'),1000)

        } catch (error) {
            this.setState({loading:false,error:error})
        }
    }

    render(){
        if (this.state.loading) {
            return <Loader/>
        }
        if (this.state.error) {
            return <PageError errorMessage={this.state.error.message}/>
        }
        return(
            <React.Fragment>
                 <div className='BadgeNew__hero'>
                    <img src={logo} alt=" logo" className='img-fluid'/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badge 
                                firstName={this.state.form.firstName || 'Frist Name'}
                                lastName={this.state.form.lastName || 'Last Name'}
                                jobTitle={this.state.form.jobTitle || 'Job Title'}
                                twitter={this.state.form.twitter || 'Twiter'}
                                email={this.state.form.email || 'Email'}
                                avatarUrl=''
                                />
                        </div>
                        <div className="col-6">
                            <BadgeForm  onChange={this.handleChange} 
                                        onSubmit={this.handleSubmit}
                                        formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default BadgeNew