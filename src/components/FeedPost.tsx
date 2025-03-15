import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, MessageSquare, Eye, Share2, MoreHorizontal } from 'lucide-react';

interface FeedPostProps {
  category: string;
  timestamp: string;
  author: string;
  authorUsername?: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  views: number;
  avatar?: string;
  avatarFallback?: string;
  avatarBgColor?: string;
  avatarTextColor?: string;
  postId: string;
}

export default function FeedPost({
  category,
  timestamp,
  author,
  authorUsername,
  title,
  content,
  likes,
  comments,
  views,
  avatar,
  avatarFallback,
  avatarBgColor = 'bg-blue-100',
  avatarTextColor = 'text-blue-600',
  postId
}: FeedPostProps) {
  const [expanded, setExpanded] = useState(false);
  const contentLimit = 150;
  const isLongContent = content.length > contentLimit;
  
  const displayContent = expanded || !isLongContent 
    ? content 
    : content.substring(0, contentLimit) + '...';
  
  return (
    <div className="feed-post relative z-0 cursor-pointer hover:shadow-[0_4px_8px_0_rgba(101,105,108,0.10)]">
      <div className="absolute inset-0 -z-10">
        <Link href={`/post/${postId}`} className="block h-full"></Link>
      </div>
      <div className="p-4">
        {/* Post Header */}
        <div className="feed-post-header flex justify-between">
          <div className="flex items-start">
            {/* Avatar */}
            <div className={`feed-post-avatar ${avatarBgColor} mr-3`}>
              {avatar ? (
                <Image src={avatar} alt={author} width={40} height={40} className="rounded-full" />
              ) : (
                <span className={`${avatarTextColor} font-semibold text-xs`}>{avatarFallback || author.substring(0, 2).toUpperCase()}</span>
              )}
            </div>
            
            {/* Category and Author Info */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <Link href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-semibold hover:underline">
                  {category}
                </Link>
                <span className="mx-2 text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">{timestamp}</span>
              </div>
              <div className="flex items-center text-xs text-gray-600 mt-1">
                <Link href={`/user/${authorUsername || author.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">
                  {author}
                </Link>
                {authorUsername && (
                  <>
                    <span className="mx-2 text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-400">@{authorUsername}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* More Options Button */}
          <button aria-label="More options" className="flex items-center rounded-full border border-transparent text-gray-700 hover:bg-gray-100 h-8 w-8 p-1">
            <MoreHorizontal size={16} />
          </button>
        </div>
        
        {/* Post Content */}
        <div className="mt-3">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-1">{displayContent}</p>
          {isLongContent && (
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="text-black font-medium hover:underline text-sm mb-3"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
        
        {/* Post Footer - Engagement Metrics */}
        <div className="feed-post-footer">
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
              <Heart size={16} className="mr-1" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
              <MessageSquare size={16} className="mr-1" />
              <span>{comments}</span>
            </button>
            <div className="flex items-center gap-1 text-gray-600">
              <Eye size={16} className="mr-1" />
              <span>{views}</span>
            </div>
          </div>
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
            <Share2 size={16} className="mr-1" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
} 