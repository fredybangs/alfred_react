import React, { Component, Fragment } from 'react'
// import MovieRender from './Components/MovieRender'
import Index from './MainPage/Home'
import Sign from './SignIn_SignUp/Sign'
import './style.css'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            loginStatus: false
    }
    this.handleClick = this.handleClick.bind(this)

    }
    
    handleClick(){
        this.setState({loginStatus: !this.state.loginStatus})
    }

    render(){
        const {loginStatus} = this.state
        return(
            <Fragment>
                {loginStatus ? <Index/> : <Sign onLogin={this.handleClick} loginStatus={loginStatus}/>}
            </Fragment>
        )
    }
}