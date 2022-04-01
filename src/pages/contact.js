import * as React from 'react';
import Layout from '../components/layout';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'gatsby';
import { hoverLink } from './styles.module.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

const ContactPage = () => {
    return (
        <Layout pageTitle="Sobre mim">
            <Container disableGutters maxWidth="md" component="main" >
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
                    Contato
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/" className={hoverLink}>
                            <Typography color="text.secondary " className={hoverLink}>Home</Typography>
                        </Link>                    
                        <Typography color="text.primary">Contato</Typography>
                    </Breadcrumbs>
                </Box>
                <Box component="form"> 
                <Paper elevation={3} sx={{p: 2}}>
                    <FormControl>
                        <TextField
                            required
                            id="name"
                            label="Nome"                            
                            sx = {{mb: 2}}                            
                        />
                        <TextField
                            required
                            id="email"
                            label="Email"                                                        
                            sx = {{mb: 2}}
                        />

                        <TextField
                            required
                            id="phone"
                            label="Telefone"                                                        
                            sx = {{mb: 2}}
                        />

                        <TextField
                            id="message"
                            label="Digite sua mensagem"
                            multiline
                            rows={4}                            
                            sx = {{mb: 2}}
                        />
                    
                        <FormLabel id="demo-row-radio-buttons-group-label">Seu orçameno</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="15.000 - 30.000" control={<Radio />} label="R$ 15.000 - R$ 30.000" />
                            <FormControlLabel value="30.000 - 100.000" control={<Radio />} label="R$ 30.000 - R$ 100.000" />
                            <FormControlLabel value="100.000 - 250.000" control={<Radio />} label="R$ 100.000 - R$ 250.000" />                            
                            <FormControlLabel value="> 250.000" control={<Radio />} label="> R$ 250.000" />                            
                        </RadioGroup>
                    </FormControl>

                </Paper>

                </Box>
                
            </Container>
            
        </Layout>
    )
}

export default ContactPage;