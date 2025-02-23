import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

export default function WaveformAudioPlayer() {
  const waveformRef = useRef(null);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#3b82f6',
      progressColor: '#1e40af',
      responsive: true,
    });
    wavesurfer.load('audio-file.mp3');
    return () => wavesurfer.destroy();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div ref={waveformRef} className="w-full h-24" />
      <audio controls src="audio-file.mp3" className="w-full mt-2" />
    </div>
  );
}
