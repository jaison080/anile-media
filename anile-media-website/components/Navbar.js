import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Modal } from '@mui/material';
import { useRouter } from 'next/router';



const pages = ['Customer Stories', 'About', 'Work','Solutions'];

const Navbar = () => {
    const Router=useRouter();
    function formPage()
{
    Router.push('/form')
}
function blogPage()
{
    Router.push('/blogs')
}
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
   const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:400,
  p: 4,
};
  return (
    <AppBar position="sticky" className="appbar">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            className="company"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 800,
              color: '#85CB33',
              textDecoration: 'none',
  
            }}
          >
            ANILE MEDIA
          </Typography>

          
          <Typography
            variant="h5"
            noWrap
            component="a"
            className="company"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 800,
              color: '#85CB33',
              textDecoration: 'none',
            }}
          >
            ANILE MEDIA
          </Typography>
          <Box className="box-1" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent:'center',}}>
            <Button className="company-button"  onClick={blogPage} >Customer Stories
                </Button>
                <Button  className="company-button"  onClick={blogPage} >About 
                </Button>
                <Button  className="company-button"  onClick={blogPage} >Work
                </Button>
                <Button className="company-button"  onClick={blogPage} >Solutions
                </Button>
          </Box>

         <Box sx={{ flexGrow: 0 , background:'none'}}>
             <Button className='company-button' onClick={handleOpen} sx={{borderRadius:'20px'}}>CONTACT US</Button>
             <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ><Box sx={style}>
      <iframe
        src="https://calendly.com/jaisondennis090/30min"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
        </Box></Modal>
            
                <button className='button_active-1' sx={{borderRadius:'20px'}} onClick={formPage}>START A PROJECT</button>
            
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon  color='#85CB33' />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem  onClick={blogPage} className="company-button">Customer Stories
                </MenuItem>
                <MenuItem  onClick={blogPage}  className="company-button">About 
                </MenuItem>
                <MenuItem  onClick={blogPage}  className="company-button">Work
                </MenuItem>
                <MenuItem onClick={blogPage} className="company-button" >Solutions
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
