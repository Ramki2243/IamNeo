import React from 'react';

import { styled } from '@mui/material/styles';

import {
    AppBar,
    Toolbar,
    IconButton,
    
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';




const Navbar = styled(AppBar)`
    z-index: ${props => props.theme.zIndex.drawer + 1};
    background-color: #fff;
    box-shadow: inset 0 -1px 0 0 #dadce0;
`;




const Header = ({ handleDrawer, open }) => {




    return (
        <Navbar open={open}>
            <Toolbar>
                <IconButton
                    onClick={handleDrawer}
                    edge="start"
                    sx={{ marginRight: 5 }}>
                    <MenuIcon />
                </IconButton>
                
            </Toolbar>
        </Navbar>
    )
}

export default Header;