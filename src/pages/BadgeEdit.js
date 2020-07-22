import React from 'react'
import Badge from '../component/Badge'
import BadgeForm from '../component/BadgeForm'
import './styles/BadgeEdit.css'
import logo from '../images/platziconf-logo.svg'
import api from '../api'
import Loader from '../component/Loader'
import PageError from '../component/PageError'


class BadgeEdit extends React.Component{
    state={
        loading:true,
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

    componentDidMount(){
        this.readData()
    }

    readData = async e =>{
        this.setState({loading:true,error:null})

        try {
            const data= await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false,form:data})

        } catch (error) {
            this.setState({loading:false,error:error})
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
        this.setState({loading:true,error:null})
        try {
            
            await api.badges.update(this.props.match.params.badgeId,this.state.form)
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
                 <div className='BadgeEdit__hero'>
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
                                        formValues={this.state.form}
                                        isEdit='true'/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default BadgeEdit