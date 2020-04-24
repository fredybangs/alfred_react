import React from "react";
import {Button, TextField, FormControlLabel, Checkbox, Grid} from "@material-ui/core/";
import { Link } from "react-router-dom";

export const Form = (props) => {
const {
    values: { email, password, remember },
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

    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <form onSubmit={handleSubmit}>

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
            <FormControlLabel
                control={<Checkbox value={remember} name="remember" id="remember" color="primary" />}
                label="Remember me"
                onChange={change.bind(null, "remember")}
                />
            <Link to="/movie-centre" style={linkStyle} >
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign In
                </Button>
            </Link>
            <Grid container>
                <Grid item xs>
                    <Link to="/forgot-password" variant="body2" style={{textDecoration: 'none'}}>
                        Forgot Password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/sign-up" variant="body2" style={{textDecoration: 'none'}}>
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
            </Grid>
    </form>
 );
};