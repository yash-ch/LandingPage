import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import "../css/header.css"
import {Menu, MenuItem} from "@mui/material";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

let headerMenuList = ["Team", "Contacts", "Issues", "Info"];
export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const animiaLogo = require('../assets/animia.png');

    return (
        <div>
            <Box sx={{flexGrow: 1}} style={{position: 'relative', zIndex: '3'}}>
                <AppBar className="zigsin-header" position="static">
                    <Toolbar>
                        <Box sx={{display: {md: 'flex'}}}>
                            <img src={animiaLogo} alt="Logo" height={30}/>
                        </Box>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}/>
                        <Box sx={{flexGrow: 1}}/>
                        <Box sx={{display: {md: 'flex'}}} style={{
                            marginRight: "2vw"
                        }}>
                            {headerMenuList.map((item, index) => {
                                return (
                                    <Box sx={{display: {xs: 'none', md: "flex"}}}>
                                        <button className='zigsin-header-button' onClick={() => {
                                            console.log(window.location.host);
                                        }
                                        }>{item}
                                        </button>
                                    </Box>
                                );
                            })}


                            <button className='zigsin-header-more-button' onClick={
                                handleClick
                            }><MenuIcon/></button>
                            <Menu
                                keepMounted
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                open={Boolean(anchorEl)}
                            >
                                <MenuItem onClick={handleClose}>Team</MenuItem>
                                <MenuItem onClick={handleClose}>Contacts</MenuItem>
                                <MenuItem onClick={handleClose}>Issues</MenuItem>
                                <MenuItem onClick={handleClose}>Info</MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}