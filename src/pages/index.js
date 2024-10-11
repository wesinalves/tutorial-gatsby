import * as React from 'react'
import { useEffect, useState } from 'react';
import Layout from '../components/layout'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Seo from '../components/seo';
import { navigate } from "gatsby"
import YoutubeEmbed from '../components/youtube';
import InstagramEmbed from '../components/instagram';
import { instaPhoto } from '../components/layout.module.css' 

const IndexPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://graph.instagram.com/${process.env.APP_ID}/media?fields=id,caption,media_type,media_url,permalink&access_token=${process.env.ACCESS_TOKEN}&limit=6`)
      .then((response) => response.json())
      .then((data) => setPosts(data.data));
  }, []);

  return (
    <Layout pageTitle="Home Page">
        <Seo
            title='Home page de engmoderno.com.br'
            description='Engenheiro da computação que adora programar em Python'            
        />
      {/* Hero unit */}
      <Container disableGutters maxWidth="md" component="main" sx={{ pt: 4, pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <YoutubeEmbed embedId='TUcPxQA3mAo' />
          <Grid container justifyContent='center' sx={{ marginTop: 1}} spacing={2}>
            <Grid item >                
                <Button fullwidth variant="contained" color="primary" href="https://forms.gle/qxgNetg74C8XwtU17">
                    Ebook de Python
                </Button>                
            </Grid>            
            <Grid item >                                
                <Button fullwidth variant="contained" color="secondary" 
                onClick={() => navigate("/python")} >                     
                    Aprenda Python                     
                </Button>
            </Grid>            
          </Grid>
          <Typography
          component="h1"
          variant="h4"          
          align="center"
          color="text.primary"
          mt={2}
          gutterBottom
          >
          Contribuições este ano
          </Typography>
          <img src="https://ghchart.rshah.org/wesinalves" alt="Name Your Github chart"  width="100%"/>

          
      </Container>      
      {/* End hero unit */}
      
      <Container maxWidth="md" component="main">
        <Typography
          component="h1"
          variant="h4"          
          align="center"
          color="text.primary"
          mt={0}
          gutterBottom
          >
          Instagram
          </Typography>
          <Grid container spacing={5} alignItems="flex-end">
          {posts && posts.map((post) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
              item
              key={post.id}
              xs={12}
              sm={post.id === 'Enterprise' ? 12 : 6}
              md={4}
              >
              <Card >
                <CardMedia sx={{backgroundColor:'common.black'}}>
                    {/* <StaticImage
                        alt={portfolio.title}
                        src={portfolio.image}
                        /> */}
                    {post.media_type === 'VIDEO'
                        ? <InstagramEmbed url={post.media_url} />
                        : <img src={post.media_url} alt={post.caption} className={instaPhoto}/>
                    }
                </CardMedia>
                    
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post.caption.substring(0, 50)}...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" fullWidth 
                    href={post.permalink} target="_blank">Acessar</Button>                    
                </CardActions>
                </Card>
              </Grid>
          ))}
          </Grid>
          
      </Container>
      
      {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog.webp"
      /> */}
    </Layout>
    
  )
}



export default IndexPage
