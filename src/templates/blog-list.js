import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';
import { Link } from 'gatsby'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { blogItem, hoverLink } from '../pages/styles.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Seo from '../components/seo';

const BlogList = ({ data, pageContext }) => {
    const posts = data.allMdx.edges
    const { numPages, currentPage } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? " " : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()    
    
    return(
        <Layout pageTitle="Página de Blog">
            <Seo
                title='Blog'
                description='Página de Blog'                
            />
            <Container maxWidth="md" component="main">
                <Header name="Blog" links={[{path: '/', description: 'Home'}]} />
                <Stack spacing={2} >
                    {
                        posts.map(edge => (
                            <Paper elevation={3} sx={{p: 1}} className={blogItem}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={3}>
                                        <GatsbyImage
                                            image={getImage(edge.node.frontmatter.hero_image)}
                                            alt={edge.node.frontmatter.hero_image_alt}                                            
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                      <Box sx={{ml: 1}}>
                                        <Chip label={edge.node.frontmatter.category} 
                                            color={edge.node.frontmatter.color}
                                            size="small"
                                            variant="outlined"
                                        />
                                        <Link to={`/blog/${edge.node.slug}`}>
                                            <Typography component='h1' variant='h4' color='primary'>
                                                {edge.node.frontmatter.title}
                                            </Typography>
                                            <Typography component='p' color='text.content'>{edge.node.frontmatter.description}</Typography>
                                            <Typography variant='caption'>Posted: {edge.node.frontmatter.date} </Typography>
                                        </Link>                                    
                                      </Box>                                                                        
                                    </Grid>
                                  </Grid>                                                   
                            </Paper>
                        ))
                    }                
                </Stack>
                <Box sx={{p: 1, alignItems: 'center'}}>
                    <ul                      
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        listStyle: "none",
                        padding: 0,                        
                      }}
                    >
                      {!isFirst && (
                        <Link
                          style={{
                            color: "var(--headerColor)",
                            textDecoration: "none",
                          }}
                          to={`/blog/${prevPage}`}
                          rel="prev"                          
                        >
                          {"<< Prev"}
                        </Link>
                      )}
                      {Array.from({ length: numPages }, (_, i) => (
                        <li
                          key={`pagination-number${i + 1}`}
                          style={{
                            margin: 0,
                          }}
                        >
                          <Link
                            to={`/blog/${i === 0 ? "" : i + 1}`}                            
                            style={{
                              padding: "0.2rem",
                              textDecoration: "none",
                              color:
                                i + 1 === currentPage ? "#fff" : "#616161",
                              background: i + 1 === currentPage ? "#1b5e20" : "",
                            }}
                          >
                            {i + 1}
                          </Link>
                        </li>
                      ))}
                      {!isLast && (
                        <Link
                          to={`/blog/${nextPage}`}
                          rel="next"
                          style={{
                            marginTop: "0.1rem",
                            marginBottom: "0.1rem",
                            padding: "0.5rem",
                            color: "var(--headerColor)",
                            textDecoration: "none",
                          }}
                        >
                          {"Next >>"}
                        </Link>
                      )}
                    </ul>
                  </Box>
                  
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query blogPageQuery($skip: Int!, $limit: Int!){
        allMdx(sort: {fields: frontmatter___date, order: DESC}
          limit: $limit
          skip: $skip
        ) {
            edges {
                next {
                  fields{
                    slug
                  }
                }
                previous {
                  fields{
                    slug
                  }
                }
                node {
                  frontmatter {
                    category
                    color
                    description
                    hero_image {
                      childImageSharp {
                        gatsbyImageData(width: 200, height: 200)
                      }
                    }
                    date
                    hero_image_alt
                    title
                  }
                  id
                  fields{
                    slug
                  }
                }
            }
        }
    }
`

export default BlogList