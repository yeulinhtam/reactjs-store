import React, { useState } from 'react';
import {
    Grid,
    FormControl,
    TextField,
    Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { postCommentRequest, postCommentSuccess, postCommentError } from './../../actions/comment';
import commentApi from './../../api/commentApi.js';
import { useEffect } from 'react';
import { resetFormComment } from './../../actions/comment';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 30,
        borderRadius: 5,
        boxShadow: '0 1px 6px #efe9f2',
        padding: 30,
        backgroundColor: 'rgba(255,255,255,255)'
    },
    formComment: {
        marginTop: 20,
        marginBottom: 20
    }
}));



function Comment(props) {

    const classes = useStyles();

    const { product } = props;
    const [comment, setComment] = useState('');

    const user = useSelector(state => state.user.userInfo);
    const successSaveReview = useSelector(state => state.comments.success);
    const loadingSaveReview = useSelector(state => state.comments.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        if (successSaveReview) {
            alert('Review submitted successfully.');
            setComment('');
            dispatch(resetFormComment());
        }
        return () => {
            //
        };
    }, [successSaveReview, dispatch]);





    const postCommentApi = (data, id) => {
        dispatch(postCommentRequest());
        commentApi.createComment(data, id)
            .then(res => {
                dispatch(postCommentSuccess(res.data));
            }).catch(err => {
                dispatch(postCommentError(err));
            });
    }

    const handleChangeComment = (e) => {
        setComment(e.target.value)
    }

    const submitComment = () => {

        if (user) {
            const { _id } = user;
            postCommentApi({_id,comment}, product.slug);
        } else {
            alert('Login before comment')
        }
    }

    return (
        <React.Fragment>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <FormControl fullWidth className={classes.formComment}>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={10}
                            value={comment}
                            onChange={handleChangeComment}
                            placeholder="Mời bạn để lại bình luận!"
                            variant="outlined"
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={!comment}
                        onClick={submitComment}
                        startIcon={ loadingSaveReview ? <CircularProgress size={20}/> : ''}>
                            Thêm Bình Luận
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Comment;