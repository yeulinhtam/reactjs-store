import React from 'react';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';


function Loading(props) {
    return (
        <Container maxWidth="lg">
            <CircularProgress />
        </Container>
    );
}

export default Loading;