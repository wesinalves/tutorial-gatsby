import * as React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Button from '@mui/material/Button';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@material-ui/core/Box';
import Seo from '../components/seo';
import YoutubeEmbed from "../components/youtube";

const AprendaPython = () => {
    return (
        <Layout pageTitle='Aprenda Python'>
            <Seo 
                title='Aprenda python'
                description='Python é o novo inglês'
            />
            <Container disableGutters maxWidth="md" component="main">
                <Header name="Aprenda Python" links={[{path: '/', description: 'Home'}]}/>
                <Typography variant="body1" align="left" color="text.secondary" component="p" sx={{ml: 1, mb: 2}}>
                    Quer aprender a programar utilizando uma linguagem extremamente poderosa e versátil,
                    utilizada por grandes coorporações ao redor do mundo?
                    Então o curso Como Programar em Python é perfeito para você!
                </Typography>
                <YoutubeEmbed embedId='b4zRMjvWtq8' />
                <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ml: 1, mb: 2}}>
                    Python é uma linguagem de programação de alto nível, fácil de aprender e usar, 
                    com uma ampla variedade de aplicativos, desde desenvolvimento web e aplicativos de desktop 
                    até ciência de dados e aprendizado de máquina. É uma escolha popular para 
                    iniciantes e experientes programadores.
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ml: 1, mb: 2}}>
                    Nesse curso, você vai aprender a programar em Python sem enrolação, com uma abordagem
                    direta ao ponto, com base nos fundamentos da programação. Além de aprender os segredos da
                    linguagem Python, você irá desenvolver um raciocínio lógico para resolver problemas do seu dia a dia.                    
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ml: 1, mb: 2}}>
                    Não é necessário ter experiência prévia em programação ou em Python, pois o conteúdo foi
                    criado para pessoas iniciantes na área, ou seja, você irá aprender a programar do absoluto zero.
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" component="p" sx={{ml: 1}}>
                    O conteúdo do curso está em constante atualização e inclui os seguintes tópicos:
                    <ul>
                        <li>* Programação estruturada </li>
                        <li>* Estruturas de controle </li>
                        <li>* Funções </li>
                        <li>* Estrutura de dados </li>
                        <li>* Orientação a objetos - parte I </li>
                        <li>* Orientação a objetos - parte II </li>
                        <li>* Github </li>
                    </ul>
                    

                </Typography>

                <Button fullwidth variant="contained" color="secondary" 
                href="https://www.udemy.com/course/como-programar-em-python/" 
                target="_blank" >                     
                    Clique para aprender a programar em Python!                     
                </Button>

            </Container>

        </Layout>
    )
}

export default AprendaPython