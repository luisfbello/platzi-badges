import React from 'react'


class BadgeForm extends React.Component{
    state={
    }

    
    handleClick =(e)=>{
        
        console.log('Button Has Click')
    }
    handleSubmit =(e)=>{
        
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        return(
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <center><h1>New Attendant</h1></center>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input onChange={this.props.onChange} value={this.props.formValues.firstName} className='form-control' type="text" name='firstName'/>
                                <label>Last Name</label>
                                <input onChange={this.props.onChange} value={this.props.formValues.lastName} className='form-control' type="text" name='lastName'/>
                                <label>Job Title</label>
                                <input onChange={this.props.onChange} value={this.props.formValues.jobTitle} className='form-control' type="text" name='jobTitle'/>
                                <label>Email</label>
                                <input onChange={this.props.onChange} value={this.props.formValues.email} className='form-control' type="email" name='email'/>
                                <label>Twitter</label>
                                <input onChange={this.props.onChange} value={this.props.formValues.twitter} className='form-control' type="text" name='twitter'/>
                            </div>
                            <button onClick={this.handleClick} className='btn btn-primary'>Save</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeForm