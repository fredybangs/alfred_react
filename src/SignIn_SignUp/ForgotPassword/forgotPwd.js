import React from "react";
import { Button, TextField } from "@material-ui/core/";
import { Link } from "react-router-dom";

export const Form = (props) => {
const {
    values: { email },
    handleChange, 
    handleSubmit,
    setFieldTouched,
    errors,
    touched,
    sent,
    submitting
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
                autoFocus
                autoComplete="email"
                disabled={submitting || sent}
                fullWidth
                margin="normal"
                name="email"
                required
                variant="outlined"
                id="email"
                label="Email Address"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                value={email}
                onChange={change.bind(null, "email")}
            />
            
            <Link to="/sign-in" style={linkStyle} >
                <Button
                    type="submit"
                    size="large"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Reset Password
                </Button>
            </Link>
    </form>
 );
};