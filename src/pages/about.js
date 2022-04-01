import * as React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@material-ui/core/Box';
import Seo from '../components/seo';

const AboutPage = () => {
    return (
        <Layout pageTitle="Sobre mim">
            <Seo
                title='Sobre'
                description='Página Sobre'            
            />
            <Container disableGutters maxWidth="md" component="main" >                
                <Header name="Sobre" links={[{path: '/', description: 'Home'}]} />
                <Typography variant="h5" align="left" color="text.secondary" component="p">
                    Meu nome é Wesin Ribeiro. Sou Engenheiro da Computação atuando na área de
                    desenvolvimento de sistemas e aplicações web desde de 2007. Possuo mestrado e
                    doutorado na área de computação aplicada e adoro programar em Python.                    
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" component="p">                    
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
            </Container>
            
        </Layout>
    )
}

export default AboutPage;