import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { blogItem, hoverUnderlineAnimation, hoverLink } from '../pages/styles.module.css';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const BlogList = ({ data, pageContext }) => {
    const posts = data.allMdx.edges
    const { numPages, currentPage } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/posts" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    
    return(
        <Layout pageTitle="My blog posts">
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
                        <Typography color="text.primary">Blog</Typography>
                    </Breadcrumbs>
                </Box>
                <Stack spacing={2} >
                    {
                        posts.map(edge => (
                            <Paper elevation={3} sx={{p: 1}} className={blogItem}>
                                <GatsbyImage 
                                    image={getImage(edge.node.frontmatter.hero_image)}
                                    alt={edge.node.frontmatter.hero_image_alt}
                                />                        
                                <Box sx={{ml: 1}}>
                                    <Chip label={edge.node.frontmatter.category} 
                                        color={edge.node.frontmatter.color}
                                        size="small"
                                        variant="outlined"
                                    />
                                    <Link to={`/posts/${edge.node.slug}`}>
                                        <Typography component='h1' variant='h4' color='primary'>
                                            {edge.node.frontmatter.title}
                                        </Typography>
                                        <Typography component='p' color='text.content'>{edge.node.frontmatter.description}</Typography>
                                        <Typography variant='caption'>Posted: {edge.node.frontmatter.date} </Typography>
                                    </Link>                                    
                                </Box>                                

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
                          to={prevPage}
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
                            to={`/posts/${i === 0 ? "" : i + 1}`}
                            style={{
                              textDecoration: "none",
                              color:
                                i + 1 === currentPage ? "text.primary" : "text.secondary",
                              background: i + 1 === currentPage ? "text.secondary" : "",
                            }}
                          >
                            {i + 1}
                          </Link>
                        </li>
                      ))}
                      {!isLast && (
                        <Link
                          to={nextPage}
                          rel="next"
                          style={{
                            marginTop: "0.1rem",
                            marginBottom: "0.1rem",
                            padding: "0.5rem",
                            color: "var(--headerColor)",
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
                  slug
                }
                previous {
                  slug
                }
                node {
                  frontmatter {
                    category
                    color
                    description
                    hero_image {
                      childImageSharp {
                        gatsbyImageData(width: 200)
                      }
                    }
                    date
                    hero_image_alt
                    title
                  }
                  id
                  slug
                }
            }
        }
    }
`

export default BlogList