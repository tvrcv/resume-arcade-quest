
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from 'lucide-react';

interface Track {
  title: string;
  artist: string;
  url: string;
  duration: string;
}

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Lo-fi cyberpunk playlist (using placeholder URLs - in real app, use actual audio files)
  const tracks: Track[] = [
    {
      title: "Neon Dreams",
      artist: "Cyber Lofi",
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      duration: "3:24"
    },
    {
      title: "Tokyo Rain",
      artist: "Digital Chill",
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      duration: "4:12"
    },
    {
      title: "Circuit Meditation",
      artist: "Binary Beats",
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      duration: "2:58"
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="cyber-panel p-4 space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Volume2 className="w-5 h-5 text-neon-cyan" />
        <h3 className="text-lg font-bold neon-text text-neon-pink heading-readable">
          LoFi Player
        </h3>
        <span className="text-xs text-neon-cyan font-pixel">サウンド</span>
      </div>

      {/* Current Track Display */}
      <div className="bg-cyber-darker rounded-lg p-3 border border-neon-pink/30">
        <div className="text-neon-cyan text-sm font-semibold text-readable">
          {tracks[currentTrack].title}
        </div>
        <div className="text-neon-purple text-xs text-readable">
          {tracks[currentTrack].artist}
        </div>
        <div className="text-gray-400 text-xs mt-1">
          {tracks[currentTrack].duration}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-3">
        <button
          onClick={prevTrack}
          className="p-2 rounded-full bg-neon-purple/20 hover:bg-neon-purple/30 transition-colors"
        >
          <SkipBack className="w-4 h-4 text-neon-cyan" />
        </button>
        
        <button
          onClick={togglePlayPause}
          className="p-3 rounded-full bg-gradient-to-r from-neon-pink to-neon-cyan hover:from-neon-cyan hover:to-neon-pink transition-all duration-300 cyber-glow"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-black" />
          ) : (
            <Play className="w-5 h-5 text-black ml-1" />
          )}
        </button>
        
        <button
          onClick={nextTrack}
          className="p-2 rounded-full bg-neon-purple/20 hover:bg-neon-purple/30 transition-colors"
        >
          <SkipForward className="w-4 h-4 text-neon-cyan" />
        </button>
      </div>

      {/* Volume Control */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <button onClick={toggleMute} className="text-neon-cyan hover:text-neon-pink transition-colors">
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <span className="text-xs text-gray-400">{Math.round(volume * 100)}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full h-2 bg-cyber-border rounded-full appearance-none cursor-pointer 
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
            [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-neon-pink [&::-webkit-slider-thumb]:to-neon-cyan 
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer 
            [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,20,147,0.5)]
            [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 
            [&::-moz-range-thumb]:bg-gradient-to-r [&::-moz-range-thumb]:from-neon-pink [&::-moz-range-thumb]:to-neon-cyan 
            [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none 
            [&::-moz-range-thumb]:shadow-[0_0_10px_rgba(255,20,147,0.5)]"
        />
      </div>

      {/* Track List */}
      <div className="space-y-2 max-h-40 overflow-y-auto">
        <div className="text-xs text-neon-cyan font-semibold mb-2">Playlist</div>
        {tracks.map((track, index) => (
          <div
            key={index}
            onClick={() => setCurrentTrack(index)}
            className={`p-2 rounded cursor-pointer transition-all text-readable ${
              index === currentTrack
                ? 'bg-neon-pink/20 border border-neon-pink/40'
                : 'bg-cyber-darker hover:bg-neon-cyan/10 border border-transparent'
            }`}
          >
            <div className="text-xs font-medium text-gray-200">{track.title}</div>
            <div className="text-xs text-gray-400">{track.artist}</div>
          </div>
        ))}
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={tracks[currentTrack].url}
        onEnded={nextTrack}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MusicPlayer;
