import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby'
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { hoverLink, navLink } from './layout.module.css'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import SearchIcon from '@mui/icons-material/Search';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import propTypes from "prop-types"
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';


const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: grey[500],
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500],
  },
}));


function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
}
  
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };


const theme = createTheme({    
    palette: {      
      primary: {
        main: green[900],
        contrastText: grey[100]
      },
      secondary:{
        main: red[500],
      },
      background: {
        default: grey[300],
      },
      text: {
        primary: green[900],
        content: grey[900],
      },
    },
});

const footers = [
    {
      title: 'Conteúdo',
      description: [
          ['home','/'], 
          ['about','/about'], 
          ['blog','/blog'], ],
    },
    {
      title: 'Social',
      description: [
        ['facebook','https://pt-br.facebook.com/wesin.ribeiro'],
        ['instagram','https://www.instagram.com/engmoderno/'],
        ['youtube','https://www.youtube.com/channel/UCk70TYJHmZ_tsBKo-_SjP1w'],
        ['linkedin','https://www.linkedin.com/in/wesin-alves-0012b1145/?originalSubdomain=br'],
        ['github','https://github.com/wesinalves'],
      ],
    },    
    {
      title: 'Legal',
      description: [
          ['Política de privacidade', '/policy'],
          ['Termos de uso', '/terms'],
      ],
    },
];

const Copyright = ({props, siteName}) => {
    return(
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/" underline='none' className={hoverLink}>
            {siteName}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const Layout = ({props, pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
            }
            }
        }
    `);

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    return (
        <ThemeProvider theme={theme}>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            <GlobalStyles styles={{ul: { margin: 0, padding: 0, listStyle: 'none'}}} />
            <CssBaseline />
            <AppBar
                position="fixed"
                color="primary"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}                
            >
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
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
                      <MenuItem >
                        <Link to='/'className={navLink} textAlign="center">Home</Link >
                      </MenuItem>
                      <MenuItem >
                        <Link to='/about'className={navLink} textAlign="center">Sobre</Link >
                      </MenuItem>
                      <MenuItem >
                        <Link to='/blog'className={navLink} textAlign="center">Blog</Link >
                      </MenuItem>
                      <MenuItem >
                        <Link to='/search'className={navLink} textAlign="center">Pesquisar</Link >
                      </MenuItem>
                    
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: {xs: 'none', md:'flex'}, alignItems: 'center'}}>
                  <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                      {pageTitle} | {data.site.siteMetadata.title}
                  </Typography>
                  <nav >
                      <Link to="/" className={navLink}>Home</Link>           
                      <Link to="/about" className={navLink}>Sobre</Link>
                      <Link to="/blog"  className={navLink}>Blog</Link>
                  </nav>
                  <Button href="/search" variant="outlined" sx={{ my: 1, mx: 1.5 }} color='inherit'>
                      <SearchIcon />
                  </Button>                

                </Box>
                </Toolbar>
              </Container>
            </AppBar> 
            <Toolbar id="back-to-top-anchor" />           
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>         
            
            <main>                
                {children}
            </main>

            <Root>
              <Typography>down(md): red</Typography>
              <Typography>up(md): blue</Typography>
              <Typography>up(lg): green</Typography>
            </Root>
            {/* Footer */}
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 5,
                py: [3, 6],
                }}
            >
                <Grid container spacing={4} justifyContent="space-evenly">
                  <Grid item xs={6} sm={3}>
                    
                    <Typography variant="subtitle1" color="text.secondary">
                        "Não sei como será o futuro, mas será com inteligência artificial."
                    </Typography>
                  </Grid>
                {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        {footer.title}
                    </Typography>
                    <ul>                        
                        {footer.description.map((item) => (
                        <li key={item[0]}>
                            <Link to={item[1]} className={hoverLink}>
                            {item[0]}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </Grid>
                ))}
                </Grid>
                <Copyright sx={{ mt: 10 }} siteName={data.site.siteMetadata.title} />
            </Container>
            {/* End footer */}
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: propTypes.node.isRequired,
    pageTitle: propTypes.string.isRequired,
};

export default Layout