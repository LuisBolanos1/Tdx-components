import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import TlDropdownButton from '../buttons/DropdownButton';
import Logo from '../../../public/images/Logo-TDX.png';
import Link from '@mui/material/Link';
import { ConstantsDropdownButtons } from '../Constants';
import Grid from '@mui/material/Grid';
import TlTopBar from './Topbar';

function testFunction(){
    console.log('Hello world.')
}

const optionsAdmin = [
    { title: 'Stacks', click: testFunction}, { title: 'Applications', click: testFunction }
]

const optionsVirtualization = [
    { title: 'Rules', click: testFunction}, { title: 'Flows', click: testFunction }
]

const optionsResponses = [
    { title: 'Templates', click: testFunction}, { title: 'Business Actions', click: testFunction }
]


const pages = [ 
    { buttonTitle: 'Administration', options: optionsAdmin }, 
    { buttonTitle: 'Virtualization', options: optionsVirtualization }, 
    { buttonTitle: 'Responses', options: optionsResponses }, 
]


export default function TlNavbar(props:any){
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }
    // elevation={0}
    return (
            <AppBar sx={{ bgcolor: '#FFFFFF', color: 'black', height: '80px' }} position="fixed" elevation={0}>
                <Box sx={{ marginTop: 1,  }}>
                    <Container maxWidth='xl'>
                        <Toolbar disableGutters >
                            <Link href="/">
                                <Box
                                    component="img"
                                    sx={{ height: 30 }}
                                    alt="Logo"
                                    src={Logo}
                                />
                            </Link>
                            <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                                {pages.map((page:any) => (
                                    <TlDropdownButton buttonTitle={page.buttonTitle} options={page.options} styles={ConstantsDropdownButtons.WhiteButton}></TlDropdownButton>
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
                                        <TlDropdownButton buttonTitle={page.buttonTitle} options={page.options} styles={ConstantsDropdownButtons.WhiteButton}></TlDropdownButton>

                                    ))}    
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </Box>
            </AppBar>

    )
}