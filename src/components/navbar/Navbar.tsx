import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TlDropdownButton from '../buttons/DropdownButton';
import Logo from '../../../public/images/TDX-logo.png';
import Link from '@mui/material/Link';

function testFunction(){
    console.log('Hello world.')
}

const subOptions = [
    { title: 'option1', click: testFunction}, { title: 'option2', click: testFunction }, { title: 'option3', click: testFunction }
]


const pages = [ 
    { buttonTitle: 'App config', options: subOptions }, 
    { buttonTitle: 'Data rules', options: subOptions }, 
    { buttonTitle: 'Actions', options: subOptions }, 
    { buttonTitle: 'Data sources', options: subOptions }]

const style = {
    background : '#2E3B55'
};

export default function TlNavbar(props:any){
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }
    // elevation={0}
    return (
            <AppBar sx={{ bgcolor: '#FFFFFF', color: 'black', height: '80px' }} elevation={0}>
                <Box sx={{ marginTop: 1,  }}>

                <Container maxWidth='xl'>
                    <Toolbar disableGutters >
                        <Link href="/">
                            <Box
                                component="img"
                                sx={{ height: 50 }}
                                alt="Logo"
                                src={Logo}
                            />
                        </Link>
                        <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                            {pages.map((page:any) => (
                                <TlDropdownButton buttonTitle={page.buttonTitle} options={page.options}></TlDropdownButton>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                            <IconButton 
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                                color='inherit'>
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }
                                }}
                            >
                                {pages.map((page:any) => (
                                    <TlDropdownButton buttonTitle={page.buttonTitle} options={page.options}></TlDropdownButton>

                                ))}    
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
                </Box>

            </AppBar>
    )
}