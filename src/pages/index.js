import * as React from 'react'
import Layout from '../components/layout'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Seo from '../components/seo';
import { navigate } from "gatsby"
import YoutubeEmbed from '../components/youtube';

const tiers = [
  {
      title: 'Linguagens de Programação',
      price: '0',
      description: [
      ['Python', 5],
      ['Javascript', 5],
      ['Php', 5],
      ['Java', 4.5],
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
  },
  {
      title: 'Aprendizado de Máquina',
      subheader: 'Most popular',
      price: '15',
      description: [
      ['Keras', 5],
      ['Tensorflow', 4.5],
      ['Weka', 5],
      ['Elki', 4.5],
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
  },
  {
      title: 'Tencologias para Devops',
      price: '30',
      description: [
      ['Terraform', 4.5],
      ['Docker', 5],
      ['Gitlab CI', 4],
      ['Kubernetes', 3.5],
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
  },
];

const portfolios = [
    {
        title: 'Gestaosecom',
        description: 'Sistema de controle de propagandas do governo federal',
        url: 'https://gestaosecom.mcom.gov.br/',
        image: '../images/gestaosecom.png'
    },
    {
        title: 'Secomweb',
        description: 'Sistema de publicidade do governo federal',
        url: 'https://secomweb.mcom.gov.br/',
        image: '../images/secomweb.png'
    },
    {
        title: 'PGD',
        description: 'Sistema de gestao de demandas do governo federal',
        url: 'https://pg.mcom.gov.br/',
        image: '../images/pgmcom.png'
    },
    {
        title: 'BVS - IEC',
        description: 'Portal da biblioteca virtual do Instituto Evandro Chagas',
        url: 'https://bvs.iec.gov.br/iec/',
        image: '../images/bvsiec.png'
    },
    {
        title: 'Revista RPAS',
        description: 'Portal da Revista Pan Amazônica de Saúde',
        url: 'http://revista.iec.gov.br',
        image: '../images/revistaiec.png'
    },
    {
        title: 'OJS - RPAS',
        description: 'Sistema de publicações da Revista Pan Amazônica de Saúde',
        url: 'http://bvs.iec.gov.br/iec/',
        image: '../images/revistasistema.png'
    },
    {
        title: 'Patuá - IEC',
        description: 'Repositório digital do Instituto Evandro Chagas',
        url: 'http://revista.iec.gov.br/submit/index.php/rpas',
        image: '../images/patua.png'
    },
    

]

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <Seo
            title='Home page de engmoderno.com.br'
            description='Engenheiro da computação que adora programar em Python'            
        />
      {/* Hero unit */}
      <Container disableGutters maxWidth="md" component="main" sx={{ pt: 4, pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <YoutubeEmbed embedId='5PepfmvEgM8' />
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
          mt={2}
          gutterBottom
          >
          Habilidades
          </Typography>
          <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
              >
              <Card>
                  <CardHeader
                  title={tier.title}
                  //subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  /*action={tier.title === 'Pro' ? <StarIcon /> : null}*/
                  subheaderTypographyProps={{
                      align: 'center',
                  }}
                  sx={{
                      backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                  }}
                  />
                  <CardContent>                  
                  <ul>
                      {tier.description.map((line) => (
                      <Typography
                          component="li"
                          variant="subtitle1"                          
                          key={line[0]}
                          sx={{display: 'flex', justifyContent: 'space-between'}}                          
                      >
                          {line[0]}
                          <Rating name="half-rating-read" defaultValue={line[1]} precision={0.5} readOnly /> 
                      </Typography>
                      ))}
                  </ul>
                  </CardContent>                  
              </Card>
              </Grid>
          ))}
          </Grid>
          <Typography
          component="h1"
          variant="h4"          
          align="center"
          color="text.primary"
          mt={10}
          gutterBottom
          >
          Portfolio
          </Typography>
          <Grid container spacing={5} alignItems="flex-end">
          {portfolios.map((portfolio) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
              item
              key={portfolio.title}
              xs={12}
              sm={portfolio.title === 'Enterprise' ? 12 : 6}
              md={4}
              >
              <Card >
                <CardMedia>
                    {/* <StaticImage
                        alt={portfolio.title}
                        src={portfolio.image}
                    /> */}
                </CardMedia>
                    
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {portfolio.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {portfolio.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" fullWidth 
                    href={portfolio.url} target="_blank">Acessar</Button>                    
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
