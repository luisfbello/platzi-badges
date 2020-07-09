import React from 'react'
import Navbar from '../component/Navbar'
import Badge from '../component/Badge'
import BadgeForm from '../component/BadgeForm'
import './styles/BadgeNew.css'
import logo from '../images/logo.svg'



class BadgeNew extends React.Component{
    state={
        form:{
            firstName:'',
            lastName:'',
            jobTitle:'',
            twitter:'',
            email:'',
            avatarUrl:'https://www.gravatar.com/avatar?d=identicon'
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

    render(){
        return(
            <div>
                <Navbar/>
                <div className='BadgeNew__hero'>
                    <img src={logo} alt=" logo" className='img-fluid'/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                avatarUrl='https://www.gravatar.com/avatar?d=identicon'
                                />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BadgeNew