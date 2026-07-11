"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, Bookmark, PlayCircle, Instagram } from 'lucide-react';

const Glimpses = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Images', 'Videos'];

  const galleryItems = [
    {
      id: 1,
      type: 'video',
      source: 'youtube',
      accountName: 'paruluniversity',
      location: 'Vadodara, Gujarat, India',
      likes: '3,776',
      image: '/assets/pu_admin_side.webp',
      youtubeId: 's_VNqr8S5SQ',
      description: 'PICET 2023: Conference on Engineering & Technology',
    },
    {
      id: 2,
      type: 'image',
      source: 'instagram',
      accountName: 'paruluniversity',
      location: 'Vadodara, Gujarat, India',
      likes: '1,776',
      image: '/assets/prateek.jpg',
      description: 'T C Sitharam shares experience at the conference.',
    },
    {
      id: 3,
      type: 'image',
      source: 'instagram',
      accountName: 'paruluniversity',
      location: 'Vadodara, Gujarat, India',
      likes: '5,160',
      image: '/assets/lakshya_2047.jpg',
      description: 'PICET Conference group photo.',
    },
    {
      id: 4,
      type: 'image',
      source: 'instagram',
      accountName: 'paruluniversity',
      location: 'Vadodara, Gujarat, India',
      likes: '2,382',
      image: '/assets/seshathiri.jpg',
      description: 'Keynote speaker session.',
    },
    {
      id: 5,
      type: 'video',
      source: 'youtube',
      accountName: 'paruluniversity',
      location: 'Vadodara, Gujarat, India',
      likes: '2,760',
      image: '/assets/main_gate_v2.png',
      youtubeId: 'Dbj2FEfc2Ds',
      description: '4th International PICET Conference 2 highlights.',
    },
    {
      id: 6,
      type: 'image',
      source: 'instagram',
      accountName: 'paruluniversity',
      location: 'Vadodara, Gujarat, India',
      likes: '2,760',
      image: '/assets/rajesh-kumar.jpg',
      description: 'Distinguished speaker at the podium.',
    },
    {
      id: 7,
      type: 'image',
      source: 'instagram',
      accountName: 'paruluniversity',
      location: 'Vadodara, Gujarat, India',
      likes: '5,060',
      image: '/assets/workshop-1.jpg',
      description: 'Cultural programme at PICET conference.',
    },
    {
      id: 8,
      type: 'video',
      source: 'youtube',
      accountName: 'paruluniversity',
      location: 'Vadodara, Gujarat, India',
      likes: '3,777',
      image: '/assets/workshop-2.jpg',
      youtubeId: 'lRKVE5rqr-U',
      description: 'Pre-Conference Workshop on GenAI: Building RAG and Agentic AI Application.',
    },
    {
      id: 9,
      type: 'image',
      source: 'instagram',
      accountName: 'paruluniversity and engineering...',
      location: 'Gujarat, India',
      likes: '2,562',
      image: '/assets/workshop-3.jpg',
      description: 'Award ceremony and prize distribution at PICET.',
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Images') return item.type === 'image';
    if (activeTab === 'Videos') return item.type === 'video';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0f172a] pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h4 className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2">GALLERY</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-8">
            Glimpses of Conference
          </h2>

          {/* Tabs */}
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                    : 'bg-transparent text-gray-400 border border-gray-600 hover:text-white hover:border-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Card Header (Instagram style) */}
                <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                      <div className="bg-white w-full h-full rounded-full flex items-center justify-center p-1">
                        <Image
                          src="/assets/aisct-logo-new.png"
                          alt="Logo"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-tight">{item.accountName}</h4>
                      <p className="text-xs text-gray-500">{item.location}</p>
                    </div>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
                    View profile
                  </button>
                </div>

                {/* Media Content */}
                <div className="relative aspect-square md:aspect-[4/5] bg-gray-100 group overflow-hidden">
                  {(item as any).youtubeId ? (
                    <iframe
                      className="w-full h-full border-0"
                      style={{ display: 'block', overflow: 'hidden' }}
                      src={`https://www.youtube.com/embed/${(item as any).youtubeId}`}
                      title={item.description}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      scrolling="no"
                    />
                  ) : (
                    <>
                      <Image
                        src={item.image}
                        alt={item.description}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                          <PlayCircle className="w-16 h-16 text-white/90 drop-shadow-lg" />
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Card Footer */}
                <div className="p-4 bg-white">
                  <p className="text-xs text-blue-500 font-semibold mb-3">
                    View more on {item.source === 'instagram' ? 'Instagram' : 'YouTube'}
                  </p>

                  {/* Action Icons */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <Heart className="w-6 h-6 text-gray-800 hover:text-red-500 cursor-pointer transition-colors" />
                      <MessageCircle className="w-6 h-6 text-gray-800 hover:text-gray-500 cursor-pointer transition-colors" />
                      <Share2 className="w-6 h-6 text-gray-800 hover:text-gray-500 cursor-pointer transition-colors" />
                    </div>
                    <Bookmark className="w-6 h-6 text-gray-800 hover:text-gray-500 cursor-pointer transition-colors" />
                  </div>

                  <p className="text-sm font-bold text-gray-900 mb-2">{item.likes} likes</p>

                  {/* Comment Input */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-2">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="text-sm text-gray-500 bg-transparent outline-none w-full"
                    />
                    <Instagram className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Glimpses;
