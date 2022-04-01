import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'gatsby';
import { hoverLink } from './layout.module.css';
import propTypes from "prop-types"

const Header = ({links, name}) => {
    return (
        <Box sx={{p: 3,
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'}}>
            <Typography
                component="h1"
                variant="h4"          
                align="center"
                color="text.primary"                        
                gutterBottom
                >
            {name}
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
                {links.map((link, index) => (
                    <Link to={link.path} className={hoverLink} key={index}>
                        <Typography color="text.secondary " className={hoverLink}>{link.description}</Typography>
                    </Link>                    
                ))};
                <Typography color="text.primary">{name}</Typography>
            </Breadcrumbs>
        </Box>
    );

}

Header.propTypes = {
    name: propTypes.string.isRequired,
    links: propTypes.array.isRequired
}

export default Header;