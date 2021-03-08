import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import { removeSnackbar } from './../../actions/alert';


function AlertPopUp() {

    const alertMessage = useSelector(state => state.alert);
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();


    useEffect(() => {
        const { open, message, level } = alertMessage;
        if (open) {
            enqueueSnackbar(message, {
                variant: level,
                onEntering: (event, myKey) => {
                    const action = removeSnackbar();
                    dispatch(action)
                }
            });
        }
    }, [alertMessage]);

    return (
        null
    );
}

export default AlertPopUp;