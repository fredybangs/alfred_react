import React from 'react';
import SignInForm from './SignIn/signinInput';
import SignUpForm from './SignUp/signupInput';
import MovieRender from '../Components/MovieRender'
import ForgotPassword from './ForgotPassword/forgotPwdInput'
import Index from '../MainPage/Home'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../store'
import { createBrowserHistory } from 'history';


const history = syncHistoryWithStore(createBrowserHistory(), store);


function Sign() {
    return(
        <Router history={history}>
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