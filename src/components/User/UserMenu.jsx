import React from 'react';
import { Grid, List, ListItem, ListItemText, ListItemIcon, Paper } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PaymentIcon from '@material-ui/icons/Payment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StorageIcon from '@material-ui/icons/Storage';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../actions/user';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8)
    },
    breadCumbsContainer: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: theme.spacing(2),
    },
    menuContainer: {
        minHeight: 500
    },
    appBarSpacer: theme.mixins.toolbar,
    dialogContainer: {
        width: 300
    }
}))


function UserMenu(props) {

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(userLogout());
        setOpen(false);
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Grid item xs={12} lg={3} sm={3} className={classes.menuContainer}>
                <Paper className={classes.menuContainer}>
                    <List>
                        <ListItem button>
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText primary='Thông tin tài khoản' />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><NotificationsActiveIcon /> </ListItemIcon>
                            <ListItemText primary='Thông báo của tôi' />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><StorageIcon /></ListItemIcon>
                            <ListItemText primary='Quản lý đơn hàng' />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><PaymentIcon /></ListItemIcon>
                            <ListItemText primary='Thông tin thanh toán' />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><VisibilityIcon /></ListItemIcon>
                            <ListItemText primary='Sản phẩm đã xem' />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><FavoriteIcon /></ListItemIcon>
                            <ListItemText primary='Sản phẩm yêu thích' />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><CommentIcon /></ListItemIcon>
                            <ListItemText primary='Nhận xét của tôi' />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><ContactSupportIcon /></ListItemIcon>
                            <ListItemText primary='Hỏi đáp' />
                        </ListItem>
                        <ListItem button onClick={handleClickOpen}>
                            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                            <ListItemText primary='Đăng xuất' />
                        </ListItem>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="draggable-dialog-title"
                            maxWidth='sm'
                        >
                            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                                Confirm Logout
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                     Are you sure you want to log out?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleLogOut} color="secondary" variant="contained">
                                    Logout
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </List>
                </Paper>
            </Grid>
        </React.Fragment>
    );
}

export default UserMenu;