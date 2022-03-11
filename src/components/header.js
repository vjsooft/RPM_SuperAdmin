import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

// const settings = [
//     'Profile', 
//     'Account', 
//     'Dashboard', 
//     'Logout'
// ];
export default function header() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Box className='mainHeader bg-white'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>Logo</div>
                    <div className='col-6 text-end'>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser}
                        anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                        keepMounted transformOrigin={{vertical: 'top', horizontal: 'right',}} 
                        open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            <MenuItem  onClick={handleCloseUserMenu}>
                                <Typography textAlign="center"><Link to={'viewprofile'} underline="none">Profile</Link></Typography>
                            </MenuItem>
                            <MenuItem  onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                        {/* <div>
                            <Button
                                ref={anchorRef}
                                id="composition-button"
                                aria-controls={open ? 'composition-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                            >
                                My profile
                            </Button>
                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList autoFocusItem={open} id="composition-menu" aria-labelledby="composition-button"onKeyDown={handleListKeyDown}>
                                                    <MenuItem onClick={handleClose}><Link to={'viewprofile'}>Profile</Link></MenuItem>
                                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div> */}
                    </div>
                </div>
            </div>
        </Box>
    )
}
