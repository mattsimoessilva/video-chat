'use client'

import React, { useState } from 'react';

const AddChannel = () => {
  const [channelName, setChannelName] = useState('');
  const [channelUrl, setChannelUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Channel Added:', { channelName, channelUrl });

    setChannelName('');
    setChannelUrl('');
  };

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold text-center md:text-left'>Add Channel</h1>

      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center md:items-start">
        <div className="flex flex-col w-full md:w-[60%]">
          <label htmlFor="channelName" className="text-sm font-semibold pb-3">Channel Name</label>
          <input
            type="text"
            id="channelName"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            placeholder="Enter channel name"
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        <div className="flex flex-col w-full md:w-[60%]">
          <label htmlFor="channelUrl" className="text-sm font-semibold pb-3">Channel URL</label>
          <input
            type="url"
            id="channelUrl"
            value={channelUrl}
            onChange={(e) => setChannelUrl(e.target.value)}
            placeholder="Enter channel URL (e.g., https://www.youtube.com/channel/abc)"
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-[20%] py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default AddChannel;
