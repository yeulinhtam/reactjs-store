import React, { useEffect, useState } from 'react';
import Home from './../components/Home';
import AlertPopUp from './../components/Alert';
import PaginationComponent from './../components/Paganation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/fetchProduct';
import {
    useLocation
} from "react-router-dom";


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function HomePage(props) {

    const products = useSelector(state => state.products.list);
    const loading = useSelector(state => state.products.loading);
    const pagination = useSelector(state => state.products.pagination);

    let query = useQuery();

    const [filters, setFilters] = useState({
        page: 1,
        limit: 8,
        sort: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        const action = fetchProducts(filters);
        dispatch(action);
    }, [filters, dispatch]);


    const onPageChange = (newPage) => {
        setFilters({
            ...filters,
            page: newPage
        })
    }

    const onSortPrice = (value) => {
        setFilters({
          ...filters,
          sort: value
        })
      }

    return (
        <React.Fragment>
            <Home products={products} loading={loading} onSortPrice={onSortPrice}  />
            <AlertPopUp />
            <PaginationComponent pagination={pagination} onPageChange={onPageChange} />
        </React.Fragment>
    );
}

export default HomePage;