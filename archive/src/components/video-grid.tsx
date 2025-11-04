'use client';

import { VideoPlayer } from "./video-player";
import { Card, CardContent } from "@/components/ui/card";
import { videos } from "@/config/videos";
import { useVideo } from '@/contexts/video-context';

export function VideoGrid() {
  const { setActiveVideo } = useVideo();

  return (
    <div className="w-full">
      <Card className="bg-gray-900 text-white p-6 md:p-8 border-0 ring-0 ring-offset-0 shadow-none">
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:max-w-3xl md:mx-auto">
            {videos.moreTestimonials.map((video, index) => (
              <div key={index} className="relative aspect-[9/16] rounded-lg overflow-hidden">
                <VideoPlayer 
                  src={video.src}
                  onPlay={setActiveVideo}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
