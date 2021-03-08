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
    Grid,
    Button,
    Link,
    InputAdornment
} from '@material-ui/core'

import * as yup from 'yup';
import { useFormik } from 'formik';
import { isEqual } from 'lodash';
import { registerValidationSchema } from './../../utils/yupValidationSchema';

import { useDispatch } from 'react-redux';
import { userSignUpRequest, userSignUpSuccess, userSignUpError } from './../../actions/user';
import userApi from './../../api/userApi';
import { Redirect } from 'react-router-dom';


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
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    forgotPassword: {
        textAlign: "center"
    },
    togglePassword: {
        position: 'absolute',
    }
}));


function RegisterDialog(props) {

    const classes = useStyles();

    const { open, onClose } = props;

    const [showPassword, setShowPasword] = useState(false);

    const dispatch = useDispatch();

    const handleClose = () => {
        onClose();
        setShowPasword(false);
        formik.resetForm();
    }

    const handleToggleShowPassword = () => {
        setShowPasword(!showPassword);
    }


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

    const hasChanged = !isEqual(formik.values, formik.initialValues);
    const hasErrors = Object.keys(formik.errors).length > 0;

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="xs">
            <DialogTitle>Register
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
                                        onClick={handleToggleShowPassword}
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
                        label="Repeat Password"
                        type={showPassword ? 'text' : 'password'}
                        id="repeat-password"
                        autoComplete="current-password"
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
                                        onClick={handleToggleShowPassword}
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
                        Register
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
    );
}

export default RegisterDialog;