import React, { useState} from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { registerValidationSchema } from './../../utils/yupValidationSchema.js'
import { useFormik } from 'formik';
import { userSignUpRequest, userSignUpSuccess, userSignUpError} from './../../actions/user';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import userApi from './../../api/userApi';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        paddingBottom: theme.spacing(10),
    },
    cardContainer: {
        borderRadius: 15,
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1),
        },
    },
    paper: {
        marginTop: theme.spacing(2),
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


function Register(props) {
    
    const classes = useStyles();
    const [showPassword, setShowPasword] = useState(false);
    const dispatch = useDispatch();
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            fullname: ''
        },
        validationSchema: registerValidationSchema,
        onSubmit: (values) => {
            const { email, password, confirmPassword, fullname } = formik.values;
            dispatch(userSignUpRequest());
            userApi.signUp({email, password, confirmPassword, fullname})
                .then( res => {
                    dispatch(userSignUpSuccess(res.data));
                }).then( res => {
                    <Redirect to='/'></Redirect>
                }).catch(err => {
                    dispatch(userSignUpError(err.response.data));
                })
        }
    })

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
                            REGISTER
                    </Typography>
                        <form className={classes.form} onSubmit={formik.handleSubmit}>
                        <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="fullname"
                                label="Full Name"
                                name="fullname"
                                value={formik.values.fullname}
                                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                                helperText={formik.touched.fullname && formik.errors.fullname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
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
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type={showPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                value={formik.values.confirmPassword}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
                                size="large"
                                className={classes.submit}
                            >
                                REGISTER
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

export default Register;