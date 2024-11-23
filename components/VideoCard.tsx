import React from 'react'
import { Video } from '@/types/videoTypes';

interface VideoCardProps {
    video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    return (
        <div className='bg-dark-1 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className='relative w-full h-o'>
                <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className='w-full h-full object-cover rounded-t-lg' 
                />
            </div>

            <div className='p-4 flex items-start space-x-3'>
                <img 
                    src={video.channelIcon}
                    alt={video.channelTitle}
                    className='w-10 h-10 rounded-full object-cover'
                />

                <div className='flex-1'>
                    <h3 className='text-md font-semibold text-white truncate w-[90%]'>
                        {video.title}
                    </h3>
                    <p className='text-sm text-slate-400'>{video.channelTitle}</p>
                </div>
            </div>
        </div>
    )
};

export default VideoCard;