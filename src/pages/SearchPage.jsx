import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import PropTypes from 'prop-types';
import { fetchProducts } from '../actions/fetchProduct';
import { useDispatch, useSelector } from 'react-redux';
import Home from './../components/Home';
import AlertPopUp from './../components/Alert';
import PaginationComponent from './../components/Paganation';

SearchPage.propTypes = {

};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage(props) {

  const products = useSelector(state => state.products.list);
  const loading = useSelector(state => state.products.loading);
  const pagination = useSelector(state => state.products.pagination);

  let query = useQuery();

  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
    sort: '',
    keyword: ''
  });


  console.log(filters);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = fetchProducts(filters);
    dispatch(action);
  }, [filters, dispatch]);


  useEffect(() => {
    setFilters({
      ...filters,
      keyword: query.get("keyword"),
    })
    console.log('bbbbbbbbb')
  }, [query.get('keyword'), dispatch])


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
      <Home products={products} loading={loading} onSortPrice={onSortPrice}/>
      <AlertPopUp />
      <PaginationComponent pagination={pagination} onPageChange={onPageChange} />
    </React.Fragment>
  );
}

export default SearchPage;