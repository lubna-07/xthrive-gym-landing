import React, { useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="col-md-4 col-sm-4 mb-xs-40 content-block pt42" style={{ position: 'relative' }}>
            <video
                src="/video1.mp4"
                ref={videoRef}
                poster="https://flexxsirv.sirv.com/b6b3b9e876cd41273b1c1527c96892c5a2d3dfaa2f/opex-gyms-vid1.jpg"
                style={{ width: '100%', height: 'auto' }}
                controls={false}
            />
            <IconButton 
                onClick={handlePlayPause} 
                style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: 'white', 
                    width: '80px', 
                    height: '80px', 
                    border: '3px solid white',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} 
            >
                {isPlaying ? <Pause style={{ fontSize: '48px' }} /> : <PlayArrow style={{ fontSize: '48px' }} />}
            </IconButton>
        </div>
    );
}

export default Video;
