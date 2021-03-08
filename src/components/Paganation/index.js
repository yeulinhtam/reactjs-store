import React from 'react';
import { Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';


PaginationComponent.propTypes = {

};


const useStyles = makeStyles((theme) => ({
    paginationContainer: {
        marginTop: theme.spacing(5),
        justifyContent: 'flex-end',
        paddingBottom: theme.spacing(5),
        borderBottom: `1px solid ${theme.palette.divider}`
    }
}));

function PaginationComponent(props) {
    const classes = useStyles();

    const { pagination, onPageChange } = props;
    const { page, limit, total } = pagination;

    const totalPages = Math.ceil(total / limit);

    const handlePageChange = (event,value) => {
        onPageChange(value);
    }
    return (
        <Grid container className={classes.paginationContainer}>
            <Grid item>
                <Pagination count={totalPages} page={page} color="secondary" shape="rounded" onChange={handlePageChange}></Pagination>
            </Grid>
        </Grid>
    );
}

export default PaginationComponent;