'use client';

import React from 'react'
import VideoCard from './VideoCard'
import { Video } from '@/types/videoTypes';

interface VideoGridProps {
    videos: Video[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
        {videos && videos.length > 0 ? (
            videos.map((video, index) => <VideoCard key={index} video={video} />)
        ) : (
            <p className='text-gray-500'>No videos available</p>
        )}
    </div>
  );
};

export default VideoGrid