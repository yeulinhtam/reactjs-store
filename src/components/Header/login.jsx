import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CloseIcon from '@material-ui/icons/Close';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    TextField,
    FormControlLabel,
    Grid,
    Checkbox,
    Button,
    Link,
    InputAdornment
} from '@material-ui/core'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { isEqual } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import userApi from './../../api/userApi';
import { userLoginSuccess, userLoginRequest, userLoginError} from './../../actions/user';
import {  useHistory } from 'react-router-dom';

LoginDialog.propTypes = {

};


const useStyles = makeStyles((theme) => ({
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500]
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3)
    },
    title: {
        textAlign: 'center'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    forgotPassword: {
        textAlign: "center"
    },
    togglePassword: {
        position: 'absolute',
    }
}))


const validationSchema = yup.object({
    email: yup.string('Enter you email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
})

function LoginDialog(props) {

    const classes = useStyles();

    const { onClose, open } = props;

    const tokenLocal = localStorage.getItem('token');

    const history = useHistory();
    const dispatch = useDispatch();

    const [showPassword, setShowPasword] = useState(false);
    const accessToken  = useSelector(state => state.user.userInfo);

    if(tokenLocal || accessToken){
        history.push('/');
    }

    const handleTooglePassword = () => {
        setShowPasword(!showPassword);
    }

    const handleClose = () => {
        onClose();
        formik.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, setFieldError }) => {
            const { email, password } = formik.values;
            dispatch(userLoginRequest());
            userApi.signIn({ email, password })
                .then(res => {
                    dispatch(userLoginSuccess(res.data));
                }).catch(err => {
                    console.log(err);
                    // let { message } = err.response.data;
                    // let code = err.response.status;

                    // if (code === 401) {
                    //     setFieldError("password", message);
                    // } else
                    //     if (code === 404) {
                    //         setFieldError("email", message);
                    //     }


                });
            setSubmitting(false);
        }
    })

    const hasChanged = !isEqual(formik.values, formik.initialValues);
    const hasErrors = Object.keys(formik.errors).length > 0;

    return (
        <React.Fragment>
            <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth={true}>
                <DialogTitle id="form-dialog-title" className={classes.title}>LOGIN
                <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
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
                            autoComplete="current-password"
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

                        <Button type="submit"
                            fullWidth
                            color="primary"
                            variant="contained"
                            className={classes.submit}
                            disabled={hasErrors || !hasChanged}>
                            Login
                        </Button>

                        <Grid justify="center" container>
                            <Grid item xs justify="center" container>
                                <Link href="#" variant="body2" underline="none">
                                    Forgot password?
                            </Link>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}

export default LoginDialog;