import React, { useEffect} from 'react';
import { Grid, Typography, Button, RadioGroup, Radio, FormControlLabel, Paper } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import {
    fade,
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import { DropzoneDialog } from 'material-ui-dropzone';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import userApi from './../../api/userApi';
import { userUploadRequest, userUploadSuccess, userUploadError } from './../../actions/user';
import { useDispatch, useSelector } from 'react-redux';




const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '400px',
        padding: '5px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);


const MobileInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '300px',
        padding: '5px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        width: 95,
        padding: '7px 12px',
        border: '1px solid',
        lineHeight: 1,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        marginBottom: 5,
        marginLeft: 5,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);


const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: 25
    },
    container: {
        backgroundColor: 'rgb(255, 255, 255)',
        padding: theme.spacing(2),
        minHeight: 470
    },
    mediaRoot: {
        maxWidth: 200,
        marginBottom: theme.spacing(1),
    },
    media: {
        width: 180,
        height: 100,
    },
}));

function UserForm(props) {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [file, setFile] = React.useState([]);

    const dispatch = useDispatch();

    const handleFile = (files) => {
        setFile(files[0]);
    }

    const { userInfo } = props;

    const onSubmitFile = (files) => {
        const image = new FormData();
        image.append("image",file);
        dispatch(userUploadRequest());
        userApi.upLoad(userInfo._id, image)
            .then(res => {
                dispatch(userUploadSuccess(res.data))
            }).catch(err => {
                dispatch(userUploadError(err.response.data))
            })
        setOpen(false);
    }

    return (
        <React.Fragment>
            <Grid item xs={12} lg={9} sm={9}>
                <Paper className={classes.container}>
                    <Typography color="textPrimary" className={classes.title} variant="h6">Thông tin tài khoản</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <Typography color="textPrimary">Họ tên</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <BootstrapInput defaultValue={userInfo.fullname} />
                        </Grid>
                        <Grid item xs={2}>
                            <Typography color="textPrimary">Avatar</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Card className={classes.mediaRoot}>
                                <CardMedia
                                    className={classes.media}
                                    image={`http://localhost:4000/uploads/${userInfo.image}` || null}
                                    title="Paella dish"
                                />
                            </Card>
                            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                                Add Image
                            </Button>
                            <DropzoneDialog
                                acceptedFiles={['image/*']}
                                cancelButtonText={"cancel"}
                                submitButtonText={"submit"}
                                maxFileSize={5000000}
                                filesLimit={1}
                                open={open}
                                onChange={(files) => handleFile(files)}
                                onClose={() => setOpen(false)}
                                onSave={(files) => onSubmitFile(files)}
                                showPreviews={true}
                                showFileNamesInPreview={true}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <Typography color="textPrimary">Email</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <BootstrapInput defaultValue={userInfo.email} readOnly />
                        </Grid>

                        <Grid item xs={2}>
                            <Typography color="textPrimary">Giới tính</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <RadioGroup row defaultValue="male">
                                <FormControlLabel value="male" control={<Radio color="primary" />} label="Nam" />
                                <FormControlLabel value="female" control={<Radio color="primary" />} label="Nữ" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={10}>
                            <Button variant="contained" color="secondary">Cập Nhập</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </React.Fragment>
    );
}

export default UserForm;