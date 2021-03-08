import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, TextField, CssBaseline, Button, Avatar, Link, Typography, FormControlLabel, Checkbox, Card, InputAdornment, IconButton } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { userLoginRequest, userLoginSuccess} from './../../actions/user';
import userApi from './../../api/userApi';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        paddingBottom: theme.spacing(10),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    cardContainer: {
        borderRadius: 15,
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1),
            paddingBottom: theme.spacing(5),
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const loginValidationSchema = yup.object({
    email: yup.string('Enter you email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
})


function Login(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const [showPassword, setShowPasword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values, { setSubmitting, setFieldError }) => {
            const { email, password } = formik.values;
            dispatch(userLoginRequest());
            userApi.signIn({ email, password })
                .then(res => {
                    dispatch(userLoginSuccess(res.data));
                }).catch(err => {
                    let { message } = err.response.data;
                    let code = err.response.status;
                    if (code === 401) {
                        setFieldError("password", message);
                    } else
                        if (code === 404) {
                            setFieldError("email", message);
                        }
                });
            setSubmitting(false);
        }
    })

    // const hasChanged = !isEqual(formik.values, formik.initialValues);
    // const hasErrors = Object.keys(formik.errors).length > 0;

    const handleTooglePassword = () => {
        setShowPasword(!showPassword);
    }

    return (
        <React.Fragment>
            <Container component="main" maxWidth="sm" className={classes.root}>
                <CssBaseline />
                <Card className={classes.cardContainer}>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            SIGN IN
                    </Typography>
                        <form className={classes.form} onSubmit={formik.handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={formik.values.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={formik.values.password}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleTooglePassword}
                                            >
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default Login;