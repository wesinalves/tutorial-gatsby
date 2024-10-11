import React from "react";
import PropTypes from "prop-types";
import Container from '@mui/material/Container';
import { videoResponsive } from './layout.module.css' 

const InstagramEmbed = ({ url }) => (
    <Container maxWidth="md" className={videoResponsive}>
        <iframe
            src={url}
            frameBorder="0"
            allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded Instagram"
        />
    </Container>
)

InstagramEmbed.propTypes = {
    url: PropTypes.string.isRequired
};

export default InstagramEmbed