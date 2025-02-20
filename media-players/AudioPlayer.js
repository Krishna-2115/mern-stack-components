import React, { useRef } from 'react';

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current.play();
    };

    const pauseAudio = () => {
        audioRef.current.pause();
    };

    return (
        <div>
            <audio ref={audioRef} src={src} />
            <button onClick={playAudio}>Play</button>
            <button onClick={pauseAudio}>Pause</button>
        </div>
    );
};

export default AudioPlayer;
