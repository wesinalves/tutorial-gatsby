import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby'
import { hoverLink } from '../pages/styles.module.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const BlogPost = ({ data, pageContext }) => {    
    const next = pageContext.next
    const previous = pageContext.previous

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <Container maxWidth="md" component="main">
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
                    Blog
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/" className={hoverLink} >
                            <Typography color="text.secondary" className={hoverLink}>Home</Typography>
                        </Link>
                        <Link to="/blog" className={hoverLink} >
                            <Typography color="text.secondary" className={hoverLink}>Blog</Typography>
                        </Link>                     
                        <Typography color="text.primary">{data.mdx.frontmatter.title}</Typography>
                    </Breadcrumbs>
                </Box>
                <Paper elevation={3} sx={{p: 1, color: 'text.secondary'}}>
                    <p>{data.mdx.frontmatter.date}</p>            
                    <MDXRenderer>
                        {data.mdx.body}                
                    </MDXRenderer>
                </Paper>
                <Stack spacing={2} direction="row" justifyContent="space-between" sx={{mt: 1}}>
                {previous && (
                    <Paper elevation={3} sx={{p:2}}>
                        <Grid container spacing={1} sx={{mt: 1}}>
                            <Grid item xs={3} sm={3}>
                                <GatsbyImage 
                                image={getImage(previous.frontmatter.hero_image)}
                                alt={previous.frontmatter.hero_image_alt}
                                />     
                            </Grid>
                            <Grid item xs={9} sm={9}>
                                    <Link to={previous.fields.slug} className={hoverLink}>
                                    <Typography variant="h6" >                                        
                                        {previous.frontmatter.title}
                                    </Typography>                
                                </Link>
                            </Grid>
                        </Grid>                       
                    </Paper>                        
                )}
                {next && (
                    <Paper elevation={3} sx={{p:2}}>
                        <Grid container spacing={1} sx={{mt: 1}}>
                            <Grid item xs={9} sm={9}>
                                <Link to={next.fields.slug} className={hoverLink}>                                    
                                    <Typography variant="h6">                                        
                                        {next.frontmatter.title}
                                    </Typography>                                                                   
                                </Link>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <GatsbyImage 
                                    image={getImage(next.frontmatter.hero_image)}
                                    alt={next.frontmatter.hero_image_alt}
                                />     
                            </Grid>
                        </Grid>
                    </Paper>
                    )}
            </Stack>
            </Container>

        </Layout>
    )
}

export const query = graphql`
    query ($slug: String) {
        mdx(fields: {slug: {eq: $slug}}) {
        body
        frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
        }
        }
    }
`

export default BlogPost