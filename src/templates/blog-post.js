import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import Layout from '../components/layout';
import Header from '../components/header';
import Seo from '../components/seo';
import { hoverLink } from '../pages/styles.module.css';

const BlogPost = ({ data, pageContext, children }) => {    
    const next = pageContext.next
    const previous = pageContext.previous        
    let disqusConfig = {
        url: 'engmoderno.com.br' + pageContext.slug,
        identifier: data.mdx.id,
        title: data.mdx.frontmatter.title,        
    }
    

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <Seo
                title={data.mdx.frontmatter.title}
                description={data.mdx.frontmatter.description}
                image={data.mdx.frontmatter.image}
            />
            <Container maxWidth="md" component="main">
                <Header name={data.mdx.frontmatter.title} links={[{path: '/', description: 'Home'}, {path: '/blog', description: 'Blog'}]} />
                <Paper elevation={3} sx={{p: 1, color: 'text.secondary'}}>
                    <p>{data.mdx.frontmatter.date}</p>                                
                    {children}                     
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
            <CommentCount config={disqusConfig} placeholder={'...'} />
            {/* Post Contents */}
            <Disqus config={disqusConfig} />
            </Container>

        </Layout>
    )
}


export const query = graphql`
    query ($slug: String) {
        mdx(fields: {slug: {eq: $slug}}) {        
            id
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
            internal {
                contentDigest
            }
        }
    }
`
export default BlogPost
