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

const BlogPost = ({ data, pageContext }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
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
                <Grid container spacing={1} sx={{mt: 1}}>
                    {previous && (
                        <Grid item xs={6} md={6}>
                            <Paper elevation={3} sx={{p:3}}>
                                {"<<" + previous.frontmatter.tittle}
                            </Paper>                        
                        </Grid>                       
                    )}
                    {next && (
                        <Grid item xs={6} md={6}>
                            <Paper elevation={3} sx={{p:3}}>
                                {next.frontmatter.tittle + ">>"}
                            </Paper>
                        </Grid>
                    )}
                </Grid>
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