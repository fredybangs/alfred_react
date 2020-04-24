import React, { Component } from "react";
import { Formik } from "formik";
import { Form } from "./signin";
import Copyright from '../Copyright'
import * as Yup from "yup"
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from "@material-ui/core/styles/withStyles";
import AppAppBar from '../../MainPage/modules/views/AppAppBar'



const styles = theme => ({
    paper: {
    //   marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: '20px',
      backgroundColor: '#455A64',
    },
    form: {
      width: '100%',
    //   marginTop: theme.spacing(3),
    },
    submit: {
    //   margin: theme.spacing(3, 0, 2),
    },

});

class SignInForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
                email:'',
                password:'',
                remember: false
        };
    }

    render() {
        const {classes, onLogin} = this.props;

        return (
            <Container component="main" maxWidth="lg" maxHeight="xs" >
                <AppAppBar/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                <CssBaseline />
                <Container maxWidth="md">
                <div className={classes.paper}>
                    
                    <Avatar className={classes.avatar} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" align="center">
                        Sign in
                    </Typography>
                    <Formik
                        render={props => <Form {...props} onLogin={onLogin} />}
                        initialValues = {this.state}

                        onSubmit= {(values,{setSubmitting}) => {
                            console.log("Submitting Form")
                            console.log(values)
                        }}
                        
                        validationSchema = { Yup.object().shape({ 
                            email: Yup.string("Enter your email")
                            .email("Enter a valid email")
                            .required("Email is required"),
                            
                            password: Yup.string()
                            .required()
                            .min(8, "Password must be 8 characters")
                            .matches(/(?=.*[0-9])/, "Password must contain a number."),
                        })}
                />
                </div>
                </Container>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>


    //  <React.Fragment>
    //       <div className={classes.container}>
    //      <Paper elevation={1} className={classes.paper}>
    //        <h1>Form</h1>
    //        <Formik
    //             render={props => <Form {...props} />}
    //             initialValues = {this.state}
                
    //             validationSchema = { Yup.object().shape({
    //                 name: Yup.string("Enter a name")
    //                 .required("Name is required"),
                    
    //                 email: Yup.string("Enter your email")
    //                 .email("Enter a valid email")
    //                 .required("Email is required"),
                    
    //                 password: Yup.string()
    //                 .required()
    //                 .min(8, "Password must be 8 characters")
    //                 .matches(/(?=.*[0-9])/, "Password must contain a number."),

    //                 confirmPassword: Yup.string("Enter your password")
    //                 .required("Confirm your password")
    //                 .oneOf([Yup.ref("password")], "Password does not match")

    //             })}
    //        />

            

    //      </Paper>
    //    </div>
    //  </React.Fragment>
   );
 }
}
export default withStyles(styles)(SignInForm);
