import React, { useRef, useState } from 'react';
import { Card, CardHeader, CardActionArea, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';

const Video = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="col-md-4 col-sm-4 mb-xs-40 content-block pt42">
            {/* <Card raised={true} style={{ position: 'relative' }}>
                <CardHeader title="test" />
                <CardActionArea> */}
                    <CardMedia
                        component='video'
                        src={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}
                        ref={videoRef}
                        poster="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-vid1.jpg" // Thumbnail image
                        style={{ height: 200 }}
                    />
                    <IconButton 
                        onClick={handlePlayPause} 
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red' }} 
                        size='large'>
                        {isPlaying ? <Pause /> : <PlayArrow />}
                    </IconButton>
                    {/* <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Some Text
                        </Typography>
                    </CardContent>
                </CardActionArea> */}
            {/* </Card> */}
        </div>
    );
}

export default Video;
