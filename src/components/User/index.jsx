import React from 'react';
import { Container, Grid, Breadcrumbs, Link, Typography, Paper } from '@material-ui/core';
import UserMenu from './UserMenu';
import UserForm from './UserForm';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8)
    },
    breadCumbsContainer: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: theme.spacing(2),
    }
}))

function UserComponent(props) {
    const classes = useStyles();

    const { userInfo } = props;

    return (
        <React.Fragment>
            <Container maxWidth="lg" className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.breadCumbsContainer}>
                             <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" href="/">
                                Trang chủ
                                </Link>
                            <Typography color="textPrimary">Thông tin tài khoản</Typography>
                        </Breadcrumbs>
                        </Paper>
                    </Grid>
                    <UserMenu />
                    <UserForm userInfo = {userInfo}/>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default UserComponent;