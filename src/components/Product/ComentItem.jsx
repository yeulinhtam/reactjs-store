import React from 'react';
import { Avatar, Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(3),
        borderRadius: 10,
        boxShadow: '0 1px 6px #efe9f2',
        padding: '50px 30px 40px 30px',
        backgroundColor: 'rgba(255,255,255,255)'
    },
    timeText: {
        color: '#bfbaba'
    },
    reaction: {
        marginTop: theme.spacing(1),
        display: 'flex',
        maxWidth: 300,
        justifyContent: 'space-start',
        alignItems: 'center'
    },
    reactionItem: {
        marginRight: 10
    }
}));

const TypographyCustom = withStyles({
    body2: {
        paddingTop: 1,
        fontSize: '1rem',
        fontFamily: 'BlinkMacSystemFont',
        letterSpacing: '0.01071em'
    }
})(Typography);

function ComentItem(props) {

    const classes = useStyles();

    const { comment } = props;
    return (
        <React.Fragment>
            <Grid container className={classes.container}>
                <Grid item lg={1}>
                    <Avatar src={`http://localhost:4000/uploads/${comment.user.image}` || null}> </Avatar>
                </Grid>
                <Grid item xs={11} container>
                    <Grid item xs={12}>
                        <Typography
                            color="primary"
                            variant='subtitle2'>
                            {comment.user.fullname}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1'>{comment.content}</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.reaction} >
                        <Link className={classes.reactionItem} underline="none">Like</Link>
                        <Link className={classes.reactionItem} underline="none">Dislike</Link>
                        <TypographyCustom
                            variant='body2'
                            className={classes.reactionItem}
                            component={Moment}
                            fromNow>
                            {comment.createdAt}
                        </TypographyCustom>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default ComentItem;