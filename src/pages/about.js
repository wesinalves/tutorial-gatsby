import * as React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Seo from '../components/seo';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import CardHeader from '@mui/material/CardHeader';

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

const AboutPage = () => {
    return (
        <Layout pageTitle="Sobre mim">
            <Seo
                title='Sobre'
                description='Engenheiro da computação que adora programar em Python'            
            />
            <Container disableGutters maxWidth="md" component="main" >                
                <Header name="Sobre" links={[{path: '/', description: 'Home'}]} />
                <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ml: 1}}>
                    Meu nome é Wesin Ribeiro. Sou Engenheiro da Computação atuando na área de
                    desenvolvimento de sistemas e aplicações web desde de 2007. Possuo mestrado e
                    doutorado na área de computação aplicada e adoro programar em Python.                    
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ml: 1}}>                    
                    Atualmente estou trabalhando como chefe da divisão de projeto de sistemas 
                    no Ministério das Comunicações utilizando metodologia ágil, devops e 
                    computação em nuvem para gerenciar as aplicações.                    
                </Typography>
                <Box mt={5}>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Doutorado em Engenharia Elétrica com ênfase em Computação Aplicada</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography variant="p" align="left" color="text.secondary" component="p">
                        Universidade Federal do Pará, UFPA, Belem, Brasil <br/>
                        Título: REDES NEURAIS COM APRENDIZAGEM PROFUNDA APLICADAS 
                        ESTIMAÇÃO DE CANAL SEM FIO MIMO <br/>
                        Ano de obtenção: 2021 <br/>
                        Orientador: Aldebaro Barreto da Rocha Klautau Junior
                        </Typography>
                        </AccordionDetails>
                        </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Mestrado em Engenharia Elétrica com ênfase em Computação Aplicada</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography variant="p" align="left" color="text.secondary" component="p">
                            Universidade Federal do Pará, UFPA, Belem, Brasil <br/>
                            Título: MODELOS PARA PREVISÃO DE CARGA A CURTO PRAZO ATRAVÉS DE
                            REDES NEURAIS ARTIFICIAIS COM TREINAMENTO BASEADO NA TEORIA DA
                            INFORMAÇÃO <br/>
                            Ano de obtenção: 2011 <br/>
                            Orientador: Adriana Garcez Castro <br/>
                            Bolsista do(a): Conselho Nacional de Desenvolvimento Científico e Tecnológico
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography>Graduação em Engenharia da Computação</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography variant="p" align="left" color="text.secondary" component="p">
                            Universidade Federal do Pará, UFPA, Belem, Brasil <br/>
                            Título: REALIDADE VIRTUAL UTILIZADA COMO FERRAMENTA NO PROCESSO DE
                            ENSINO/APRENDIZADO DE FÍSICA <br/>
                            Orientador: Manoel Ribeiro Filho
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>

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
            </Container>
            
            
        </Layout>
    )
}

export default AboutPage;