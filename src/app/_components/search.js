'use client'
import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Popover, Popper, Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Search({onBackClick, isAtLeastLg}) {

    const [isFetchingSuggestions, setIsFetchingSuggestions] = useState(false);
    
    const [suggestions, setSuggestions] = useState([]);
    
    const [suggestionsFetched, setSuggestionsFetched] = useState(false)

    const [query, setQuery]  = useState('')

    useEffect( () => {
        setAnchorEl(document.getElementById('input-and-auto-complete'))

        const fetchSuggestions = async () => {
            setIsFetchingSuggestions(true);
            setSuggestions([])
            setSuggestionsFetched(false)
            var results =await new Promise((resolve, reject) => {
             setTimeout(() => {
                    resolve(['suggestion 1', 'suggestion 2', 'suggestion 3'])
                }, 1000);
            })
            setSuggestions(results)
            setIsFetchingSuggestions(false)
            setSuggestionsFetched(true)
        };

        if(query != ''){
            fetchSuggestions();
        }else{
            setSuggestions([])
            setSuggestionsFetched(false)
        }

        const handleBodyClick = (event) => {
            // Check if the clicked element is not the input or autocomplete component
            setAnchorEl(null);
        };

        document.body.addEventListener('click', handleBodyClick);

    }, [query])

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => {
        setAnchorEl(null)
    }


    return (
        <>
            <Grid container alignItems={'center'}>
                {
                    !isAtLeastLg &&
                    <Grid sx={{textAlign: 'center'}} onClick={onBackClick} item auto xs={1.5}>
                        <IconButton> <ArrowBackIcon/></IconButton>
                    </Grid>
                }
                <Grid item xs={9.5}>
                    <Paper
                        component="form"
                        id="input-and-auto-complete"
                        sx={{ p: '2px 4px', borderRadius: '25px', display: 'flex', alignItems: 'center', width: '100%' }}
                    >
                        <InputBase
                            sx={{ ml: 1, p: '8px', flex: 1}}
                            placeholder="Search"
                            autoFocus={isAtLeastLg ? false : true}
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <div >
                            { isFetchingSuggestions && 
                                <Popper 
                                    open={Boolean(anchorEl)}
                                    anchorEl={anchorEl}
                                    sx={{p: 1}}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                >   
                                    <Paper elevation={3} sx={{padding: '10px', textAlign: 'center'}}>
                                        <SuggestionsLoadingUI /> 
                                    </Paper>
                                </Popper> 
                            }
                            { suggestionsFetched  && 
                                <Popper
                                    open={Boolean(anchorEl)}
                                    anchorEl={anchorEl}
                                    sx={{p: 1}}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Paper elevation={5} sx={{padding: '10px 0'}}>
                                        <AutoCompleteSuggestions ss={suggestions}/> 
                                    </Paper>
                                </Popper>
                            }
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

function DisplayNoSuggestions(){
    return(
        <>
            No Suggestion!
        </>
    );
}

function Suggestion({s}){
    return(
        <ListItemButton>
            <ListItemIcon> <SearchIcon /> </ListItemIcon>
            <ListItemText primary={s} />
        </ListItemButton>
    )
}

function DisplaySuggestions({ss}){
    
    return(
        <List
            sx={{ width: '100%', maxWidth: '400px', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {
                ss.map((suggestion, index) => ( <Suggestion key={index} s={suggestion} /> ) )
            }
        </List>
    );
}



function AutoCompleteSuggestions({ss}){
    
    return(
        <>
            {
                ss.length
                    ? <DisplaySuggestions ss={ss} />
                    : <DisplayNoSuggestions />
            }      
            
        </>
    );
}

function SuggestionsLoadingUI(){
    return(
        <>
            <div>Loading</div>
        </>
    )
}
