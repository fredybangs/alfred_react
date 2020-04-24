import React from 'react';
import SignInForm from './SignIn/signinInput';
import SignUpForm from './SignUp/signupInput';
import MovieRender from '../Components/MovieRender'
import ForgotPassword from './ForgotPassword/forgotPwdInput'
import Index from '../MainPage/Home'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


function Sign() {
    return(
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Index} />            
                    <Route path="/sign-in" component={SignInForm} />
                    <Route path="/sign-up" component={SignUpForm} />
                    <Route path="/movie-centre" component={MovieRender} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>    
            </div>
        </Router>
    )
}
export default Sign;