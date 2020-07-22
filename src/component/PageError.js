import React from 'react'
import errorImg from '../images/error.png'
import './styles/PageError.css'

class PageError extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='error'>
                    <div className='error-container'>
                    <div className="container">
                        <div className="row">

                            <div className='col-6'>
                                <img className='imgError' src={errorImg} alt="error"/>
                            </div>
                            <div className="col-6">
                                <h1>{this.props.errorMessage}</h1>
                                <p>Por favor intentalo mas tarde</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PageError