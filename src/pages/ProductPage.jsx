import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchProductRequest, fetchProductSuccess, fetchProductError } from './../actions/product';
import { fetchCommentsError, fetchCommentsRequest, fetchCommentsSuccess } from '../actions/comment';
import productApi from './../api/productApi';
import commentApi from './../api/commentApi';
import Product from './../components/Product';
import AlertPopUp from './../components/Alert';
import Loading from './../components/Loading/index';


function ProductPage(props) {

    const { slug } = useParams();
    const dispatch = useDispatch();

    const { data, loading } = useSelector(state => state.product);
    const comments = useSelector(state => state.comments.data, shallowEqual);
    
    useEffect(() => {
        const fetchProductId = (id) => {
            dispatch(fetchProductRequest());
            productApi.getProductId(id)
                .then(res => {
                    dispatch(fetchProductSuccess(res.data));
                }).catch(error => {
                    dispatch(fetchProductError(error));
                })
        }
        fetchProductId(slug);
    }, [slug, dispatch]);

    useEffect(() => {
        const fetchComments = (id) => {
            dispatch(fetchCommentsRequest());
            commentApi.getComments(id)
                .then(res => {
                    dispatch(fetchCommentsSuccess(res.data));
                }).catch(err => {
                    dispatch(fetchCommentsError(err))
                })
        }
        fetchComments(slug);
    }, [slug, dispatch]);

    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <React.Fragment>
            <Product product={data} loading={loading} comments={comments} />
            <AlertPopUp />
        </React.Fragment>
    );
}

export default ProductPage;