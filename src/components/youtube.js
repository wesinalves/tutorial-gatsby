import React from "react";
import PropTypes from "prop-types";
import Container from '@mui/material/Container';
import { videoResponsive } from './layout.module.css' 

const YoutubeEmbed = ({ embedId }) => (
    <Container maxWidth="md" className={videoResponsive}>
        <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </Container>
)

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed