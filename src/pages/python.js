import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Done } from '@mui/icons-material';

import Layout from '../components/layout';
import Header from '../components/header';
import Seo from '../components/seo';
import YoutubeEmbed from "../components/youtube";

const Topics = [
    {
        title: 'Introdução',
        description: 'Apresentação do curso e configuração do ambiente de trabalho',
    },
    {
        title: 'Introdução a programação estruturada',
        description: 'Conceitos básicos de programação',
    },    
    {
        title: 'Estruturas de controle ',
        description: 'Aprenda a criar algoritmos com base em estruturas de seleção e repetição',
    },
    {
        title: 'Funções ',
        description: 'Como utilizar funções para estruturar seu código e recursividade.'
    },
    {
        title: 'Estrutura de dados ',
        description: 'Entenda a diferença entre listas, tuplas, dicionários e conjuntos.'
    },
    {
        title: 'Orientação a objetos - parte I ',
        description: 'Reusabilidade de código usando o paradigma de orientação a objetos'
    },
    {
        title: 'Orientação a objetos - parte II ',
        description: 'Trabalhe com herança, polimorfismo e interfaces.'
    },
    {
        title: 'Tratamento de exceção',
        description: 'Previna erros em seu programa com o bloco de tratamento de exceção.'
    },
    {
        title: 'Github',
        description: 'Repositório e controle de versão do seu código fonte.'
    },
]

const Benefits = [
    {
        text: 'Aprenda python sem enrolação',        
    },
    {
        text: 'Exercícios práticos para desenvolver suas habilidades',        
    },
    {
        text: 'Tirar dúvidas com o professor',        
    },    
    {
        text: 'Conteúdo atualizado',        
    },
    {
        text: 'Aprenda no seu ritmo',        
    },
    {
        text: 'Acesso vitalício',        
    },
    {
        text: 'Assista pela TV ou dispositivos móveis',        
    },
    {
        text: 'Certificado de conclusão',        
    },

]
 
const AprendaPython = () => {
    return (
        <Layout pageTitle='Aprenda Python'>
            <Seo 
                title='Aprenda python'
                description='Aprenda os fundamentos da programação em Python.'
            />
            <Container disableGutters maxWidth="md" component="main">
                <Header name="Aprenda Python" links={[{path: '/', description: 'Home'}]} />
                <Typography variant="body1" align="left" color="text.secondary" component="p" sx={{ml: 1, mb: 2}}>
                    Quer aprender a programar utilizando uma linguagem extremamente poderosa e versátil,
                    utilizada por grandes coorporações ao redor do mundo?
                    Então o curso Como Programar em Python é perfeito para você!
                </Typography>
                <YoutubeEmbed embedId='b4zRMjvWtq8' />                
                <Grid container justifyContent='center' sx={{ mb: 1, mt: 1}} spacing={2}>
                    <Grid item >                
                        <Button fullwidth variant="contained" color="secondary" 
                        href="https://www.udemy.com/course/como-programar-em-python/?couponCode=PYTHON30" 
                        target="_blank">                     
                            Compre o curso agora!             
                        </Button>
                    </Grid>                                
                </Grid>
                <Typography variant="body1" align="left" color="text.secondary" component="p" sx={{ml: 1, mb: 2}}>
                    Python é uma linguagem de programação de alto nível, fácil de aprender e usar, 
                    com uma ampla variedade de aplicações, desde desenvolvimento web até aprendizado de máquina. É uma escolha popular para 
                    iniciantes e programadores experientes.
                </Typography>
                <Typography variant="body1" align="left" color="text.secondary" component="p" sx={{ml: 1, mb: 2}}>
                    Nesse curso, você vai aprender a programar em Python sem enrolação, com uma abordagem
                    direta ao ponto, com base nos fundamentos da programação. Além de aprender os segredos da
                    linguagem Python, você irá desenvolver um raciocínio lógico para resolver problemas do seu dia a dia.                    
                </Typography>
                <Typography variant="body1" align="left" color="text.secondary" component="p" sx={{ml: 1, mb: 2}}>
                    Não é necessário ter experiência prévia em programação ou em Python, pois o conteúdo foi
                    criado para pessoas iniciantes na área, ou seja, você irá aprender a programar do absoluto zero.
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ml: 1, mb: 2}}>
                    Grade curricular
                </Typography>
                
                {
                    Topics.map((topic, index) => (
                        <Box sx={{ p: 2, border: '1px solid grey', backgroundColor: 'white', mt: 1}} >
                            <Chip label={"Módulo " + index} /> {topic.title}
                            <Typography variant="body2" align="left" color="text.secondary" component="p" sx={{ml: 1}}>
                                {topic.description}
                            </Typography>
                        </Box>
                    ))
                }



                <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ml: 1, mb: 2, mt: 1}}>
                    Benefícios:
                </Typography>
                <Grid container justifyContent='space-around' sx={{ mb: 1}} spacing={2} >
                    <Grid item>
                        <List>
                        { Benefits.map((benefit) => (
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <Done color="primary" />
                                </ListItemIcon>
                                <ListItemText>
                                    {benefit.text}
                                </ListItemText>
                        </ListItem>
                        ))}                    
                        </List>
                    </Grid>
                    <Grid item>
                        <StaticImage
                            alt="Benefícios de programar em python."
                            src="../images/join.png"                    
                            width={300}                    

                        />
                    </Grid>

                </Grid>

                <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ml: 1, mb: 2, mt: 1}}>
                    Quem sou eu?
                </Typography>
                <Grid container justifyContent='space-around' sx={{ mb: 1}} spacing={2} >                                       
                    <Grid item>
                        <StaticImage
                            alt="Breve resumo"
                            src="../images/resume.png"                    
                            width={300}                    

                        />
                    </Grid>
                    <Grid item maxWidth='sm' >                        
                        <Typography variant="h5" color="text.primary" component="p" sx={{ml: 1}}>
                            Servidor público federal com mais de 15 anos de experiência na área de tecnologia.
                            Possuo graduação em engenharia da computação, além de mestrado e doutorado em computação aplicada.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' sx={{ mb: 1, mt: 1}} spacing={2}>
                    <Grid item >                
                        <Button fullwidth variant="contained" color="secondary" 
                        href="https://www.udemy.com/course/como-programar-em-python" 
                        target="_blank">                     
                            Compre o curso agora!             
                        </Button>
                    </Grid>                                
                </Grid>

            </Container>

        </Layout>
    )
}

export default AprendaPython