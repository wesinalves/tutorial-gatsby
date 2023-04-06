import * as React from 'react';
import Layout from '../components/layout';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'gatsby';
import { hoverLink, 
    aisSearchBox,
    aisStats, } from './styles.module.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';
import Hit from '../components/hit';
import Seo from '../components/seo';


const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

const SearchPage = () => {
    return (
        <Layout pageTitle="Pesquisar">
            <Seo
                title='Pesquisa'
                description='Página de pesquisa'            
            />
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
                    Pesquisar
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/" className={hoverLink}>
                            <Typography color="text.secondary " className={hoverLink}>Home</Typography>
                        </Link>                    
                        <Typography color="text.primary">Pesquisar</Typography>
                    </Breadcrumbs>
                </Box>
                <Box className={aisSearchBox}>
                    <InstantSearch searchClient={searchClient} indexName={algolia.indexName} >
                        <SearchBox                                                          
                            translations={{ placeholder: 'Pesquisar...' }}
                            />
                        <Stats className={aisStats} 
                            translations={{stats(nbHits, timeSpentMS) {
                                return `${nbHits} resultados encontrados em ${timeSpentMS}ms`;
                            }}} />                        
                        <Hits hitComponent={Hit}/>                        
                    </InstantSearch>                    
                </Box>
                
            </Container>
            
        </Layout>
    )
}

export default SearchPage;