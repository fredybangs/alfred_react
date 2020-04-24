import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

export const Form = (props) => {
const {
    onLogin,
    values: { email, password, remember, passwordConfirmation, name },
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldTouched,
    } = props;
    
    const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
    };

    return (
        <form onSubmit={handleSubmit}>

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                value={name}
                onChange={change.bind(null, "name")}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                value={email}
                onChange={change.bind(null, "email")}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                fullWidth
                value={password}
                onChange={change.bind(null, "password")}
            />
            
            <TextField
                variant="outlined"
                margin="normal"
                required
                name="passwordConfirmation"
                label="Confirm Password"
                type="password"
                id="passwordConfirmation"
                helperText={touched.passwordConfirmation ? errors.passwordConfirmation : ""}
                error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
                fullWidth
                value={passwordConfirmation}
                onChange={change.bind(null, "passwordConfirmation")}
            />
            <FormControlLabel
                control={<Checkbox value={remember} name="remember" id="remember" color="primary" />}
                label="Agree to Terms and Conditions"
                onChange={change.bind(null, "remember")}            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={onLogin}
            >
            Sign Up
            </Button>
            <Grid container>
                <Grid item>
                    <Link to="/sign-in" variant="body2" style={{textDecoration: 'none'}}>
                        Have an account? Sign In
                    </Link>
                </Grid>
            </Grid>
    </form>
 );
};