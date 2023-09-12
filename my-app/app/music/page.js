'use client';

import { useState, useRef } from "react";
// Utilisation du useRef avec une musique qu'on peut lancer et arrêter
const music = () => {
    const [isPlaying, setIsplaying] = useState(false)
    const audioRef = useRef(null)

    const handlePlayOrPause = () => {
        if(isPlaying) {
            audioRef.current.pause()
            setIsplaying(!isPlaying) //false
        }
        else{
            audioRef.current.play()
            setIsplaying(!isPlaying)
        }
    }

    return (
        <>
            <audio ref={audioRef} src="music.mp3" className="nativeAudioPlayer" controls></audio>
            {isPlaying ? (
                <p onClick={() => handlePlayOrPause()}>Pause</p>
            ) : (
                <p onClick={() => handlePlayOrPause()}>Play</p>
            )
        }
        </>
    )
}

export default music;