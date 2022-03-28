import React from 'react';
import { Link } from 'gatsby'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { blogItem } from '../pages/styles.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Hit = ({ hit }) => (
        <Paper elevation={3} sx={{p: 1, mt: 1}} className={blogItem}>            
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                    <GatsbyImage
                        image={getImage(hit.hero_image)}
                        alt={hit.hero_image_alt}                                            
                    />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Box sx={{ml: 1}}>
                    <Chip label={hit.category} 
                        color={hit.color}
                        size="small"
                        variant="outlined"
                    />
                    <Link to={`/posts/${hit.slug}`}>
                        <Typography component='h1' variant='h4' color='primary'>
                            {hit.title}
                        </Typography>
                        <Typography component='p' color='text.content'>{hit.description}</Typography>
                        <Typography variant='caption'>Posted: {hit.date} </Typography>
                    </Link>                                    
                    </Box>                                                                        
                </Grid>
                </Grid>                                                   
        </Paper>
)


export default Hit;