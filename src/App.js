import './App.css';
import { useState } from 'react';
import { Grid, Container, CssBaseline } from '@mui/material';
import Player from '../src/components/Player';


function App() {
 const [currentTrack, setCurrentTrack] = useState(null);
 const [playlist, setPlaylist] = useState([]);
 const addToPlaylist = (track) => {
    setPlaylist([...playlist, track]);
 };
 return(
    <Container maxWidth="lg">
        <CssBaseLine/>
        <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
                <NowPlaying track={currentTrack}/>
                <Player track={currentTrack}/>
            </Grid>
        </Grid>
    </Container>
 );
}


export default App;
