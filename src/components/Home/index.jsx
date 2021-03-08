import React from 'react';
import {
    Grid,
    Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './../ProductCard';
import ProductCardSkeleton from './../Skeleton/ProductCardSkeleton';
import Filter from './../Fillter';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    container: {
        marginTop: 50,
    },
    selectContainer: {
        width: 200,
        float: 'right'
    },
    selected: {
        color: 'red'
    },
    paginationContainer: {
        marginTop: theme.spacing(5),
        justifyContent: 'flex-end',
        paddingBottom: theme.spacing(5),
        borderBottom: `1px solid ${theme.palette.divider}`
    }
}));


function Home(props) {

    const classes = useStyles();

    const { products, loading, onSortPrice } = props;

    const handleSortPrice = (value) => {
        onSortPrice(value)
    }

    let loadingProduct = [];

    for (let i = 0; i < 8; i++) {
        loadingProduct.push(<ProductCard loading={true} key={i} />)
    }

    if (loading) {
        return (
            <React.Fragment>
                <Container maxWidth="lg">
                    {/* <Filter /> */}
                    <Grid container spacing={6} className={classes.container}>
                        {
                            loadingProduct.map((product, index) => {
                                return (
                                    <Grid item xs={3} key={index}>
                                         <ProductCardSkeleton />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Filter handleSortPrice={handleSortPrice}/>
                <Grid container spacing={2} className={classes.container}>
                    {products &&
                        products.map((product, index) => {
                            return (
                                <Grid item xs={12} lg={3} sm={4} key={index}>
                                    <ProductCard product={product} loading={loading} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Home;