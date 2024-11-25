'use client';

import { createContext, useContext, useRef } from 'react';

interface VideoContextType {
  activeVideoRef: React.MutableRefObject<HTMLVideoElement | null>;
  setActiveVideo: (video: HTMLVideoElement) => void;
}

const VideoContext = createContext<VideoContextType | null>(null);

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const activeVideoRef = useRef<HTMLVideoElement | null>(null);

  const setActiveVideo = (video: HTMLVideoElement) => {
    if (activeVideoRef.current && activeVideoRef.current !== video) {
      activeVideoRef.current.pause();
    }
    activeVideoRef.current = video;
  };

  return (
    <VideoContext.Provider value={{ activeVideoRef, setActiveVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
} 
