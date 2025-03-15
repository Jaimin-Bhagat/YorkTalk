import React, { useState } from 'react';
import FeedPost from './FeedPost';
import { ChevronDown } from 'lucide-react';

// Sample data for demonstration
const samplePosts = [
  {
    id: '1',
    category: 'Health & Wellness',
    timestamp: 'Yesterday',
    author: 'Meta',
    authorUsername: 'sgemm',
    title: 'How do you trick yourself to eat less? I\'m a big foodie and out of control.',
    content: '',
    likes: 4,
    comments: 27,
    views: 341,
    avatarBgColor: 'bg-blue-100',
    avatarTextColor: 'text-blue-600',
    avatarFallback: 'M'
  },
  {
    id: '2',
    category: 'Tech Industry',
    timestamp: '2d',
    author: 'ex-Microsoft',
    authorUsername: 'J2bb3',
    title: 'Meta >>> Microsoft',
    content: 'Meta is just so so much better than Microsoft, in nearly all aspects. I left MS and joined Meta a little over a year ago, and I couldn\'t be happier. 1. Microsoft compensation policy is terrible, the pay is garbage. Meta does much better, with base salary and refreshers too. 2. Performance reviews ...',
    likes: 65,
    comments: 109,
    views: 5296,
    avatarBgColor: 'bg-red-100',
    avatarTextColor: 'text-red-600',
    avatarFallback: 'MS'
  },
  {
    id: '3',
    category: 'Campus Life',
    timestamp: '3d',
    author: 'York Student',
    authorUsername: 'yorkie22',
    title: 'Best study spots on campus?',
    content: 'I\'m looking for quiet places to study on campus. Any recommendations? The library is always packed during finals week. I\'ve tried the student center but it gets noisy around lunch time. Are there any hidden gems that not many people know about? I prefer places with good natural lighting and access to power outlets.',
    likes: 32,
    comments: 45,
    views: 876,
    avatarBgColor: 'bg-green-100',
    avatarTextColor: 'text-green-600',
    avatarFallback: 'YS'
  },
  {
    id: '4',
    category: 'Academic',
    timestamp: '1d',
    author: 'Professor',
    authorUsername: 'prof_smith',
    title: 'Extended office hours next week',
    content: 'Due to the upcoming midterm exams, I will be extending my office hours next week. I\'ll be available Monday through Thursday from 2-5pm in my office (Ross Building, Room 342). Feel free to drop by with any questions about the course material or exam preparation. No appointment necessary.',
    likes: 87,
    comments: 12,
    views: 1245,
    avatarBgColor: 'bg-purple-100',
    avatarTextColor: 'text-purple-600',
    avatarFallback: 'PS'
  }
];

type SortOption = 'Popular' | 'Recent' | 'Trending';

export default function Feed() {
  const [sortBy, setSortBy] = useState<SortOption>('Popular');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (option: SortOption) => {
    setSortBy(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Sort dropdown */}
      <div className="flex justify-end mb-4">
        <div className="relative">
          <div className="flex items-center text-sm">
            <span className="text-gray-600 mr-2">Sort by :</span>
            <button 
              onClick={toggleDropdown}
              className="flex items-center font-medium"
            >
              {sortBy} <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1">
                <li>
                  <button 
                    className={`block px-4 py-2 text-sm w-full text-left ${sortBy === 'Popular' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                    onClick={() => handleSortChange('Popular')}
                  >
                    Popular
                  </button>
                </li>
                <li>
                  <button 
                    className={`block px-4 py-2 text-sm w-full text-left ${sortBy === 'Recent' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                    onClick={() => handleSortChange('Recent')}
                  >
                    Recent
                  </button>
                </li>
                <li>
                  <button 
                    className={`block px-4 py-2 text-sm w-full text-left ${sortBy === 'Trending' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                    onClick={() => handleSortChange('Trending')}
                  >
                    Trending
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Feed posts */}
      <div className="space-y-4">
        {samplePosts.map((post) => (
          <FeedPost
            key={post.id}
            postId={post.id}
            category={post.category}
            timestamp={post.timestamp}
            author={post.author}
            authorUsername={post.authorUsername}
            title={post.title}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
            views={post.views}
            avatarBgColor={post.avatarBgColor}
            avatarTextColor={post.avatarTextColor}
            avatarFallback={post.avatarFallback}
          />
        ))}
      </div>
    </div>
  );
} 