import React, { useState, useEffect } from 'react';
import {
    Grid,
    NativeSelect,
    Link,
    Button,
    ButtonGroup,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';


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

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


function Filter(props) {

    const classes = useStyles();
    const { handleSortPrice } = props;

    const [buttonSelect, setButtonSelect] = useState(-1);

    const handleChangeSortPrice = (value,index) => {
        handleSortPrice(value);
        setButtonSelect(index)
    }

    return (
        <Grid container className={classes.container}>
            <Grid container spacing={2} item xs={9}>
                <Grid item>
                    <Typography align="center" variant="h6" component="h6">Ưu tiên xem: </Typography>
                </Grid>
                <Grid item>
                    <ButtonGroup disableElevation variant="text" color="primary" aria-label="outlined primary button group">

                        <Button
                            variant="text"
                            color={ buttonSelect === 1 ? 'secondary' : 'primary'}
                            onClick={() => handleChangeSortPrice('lowest', 1)}
                        >
                            Giá Thấp
                                </Button>

                        <Button
                            variant="text"
                            color={ buttonSelect === 2 ? 'secondary' : 'primary'}
                            onClick={() => handleChangeSortPrice('highest', 2)}
                        > Giá Cao
                                </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Filter;