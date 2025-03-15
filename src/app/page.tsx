'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import SimpleSideNav from '@/components/SimpleSideNav'
import { MessageSquare, ThumbsUp, Share2, Clock, Eye, MoreHorizontal, ChevronDown } from 'lucide-react'

export default function Home() {
  const pathname = usePathname()
  const [showFeed, setShowFeed] = useState(true)
  
  // Show feed only on homepage
  useEffect(() => {
    setShowFeed(pathname === '/')
  }, [pathname])

  return (
    <>
      {/* Sidebar - fixed position */}
      <div className="sidebar-container">
        <SimpleSideNav onHomeClick={() => setShowFeed(true)} />
      </div>

      {/* Main content - centered with independent scrolling */}
      <div className="main-layout">
        <div className="content-container">
          {showFeed ? (
            <>
              {/* Feed header with sorting options */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Feed</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="text-sm bg-white border border-gray-200 rounded-md px-2 py-1">
                    <option>Popular</option>
                    <option>Recent</option>
                    <option>Trending</option>
                  </select>
                </div>
              </div>
              
              {/* Main feed content */}
              <div className="space-y-4">
                {/* Post 1 */}
                <div className="feed-post relative z-0 cursor-pointer hover:shadow-[0_4px_8px_0_rgba(101,105,108,0.10)]">
                  <div className="absolute inset-0 -z-10">
                    <a className="block h-full" href="#"></a>
                  </div>
                  <div className="p-4">
                    <div className="feed-post-header">
                      <div className="feed-post-avatar bg-red-100">
                        <span className="text-red-600 font-semibold text-xs">FS</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex h-full items-center text-sm font-semibold text-black">
                          <a className="hover:underline" href="#">Faculty of Science</a>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" className="text-gray-700 mx-1">
                            <circle cx="6" cy="7.125" r="1.125" fill="currentColor"></circle>
                          </svg>
                          <span className="text-xs text-gray-600">Yesterday</span>
                        </div>
                        <div className="flex h-full items-center text-xs text-gray-800">
                          <a className="hover:underline" href="#">York University</a>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" className="text-gray-700 mx-1">
                            <circle cx="6" cy="7.125" r="1.125" fill="currentColor"></circle>
                          </svg>
                          <span>Prof_Smith</span>
                        </div>
                      </div>
                      <div className="flex flex-1 items-baseline justify-end">
                        <button aria-label="More options" className="flex items-center rounded-full border border-transparent text-gray-700 hover:bg-gray-100 h-10 w-10 p-2">
                          <MoreHorizontal size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between gap-2 mt-2">
                      <div className="flex-1">
                        <h3 className="feed-post-title">Has anyone taken EECS 3101 with Professor Smith?</h3>
                        <p className="feed-post-content line-clamp-3">I'm planning my courses for next semester and wanted to know if anyone has experience with this professor and how difficult the course is.</p>
                      </div>
                    </div>
                    
                    <div className="feed-post-footer">
                      <div className="flex gap-2 md:gap-4">
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <ThumbsUp size={16} className="my-2" />
                          <span>24</span>
                        </button>
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <MessageSquare size={16} className="my-2" />
                          <span>8</span>
                        </button>
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <Eye size={16} className="my-2" />
                          <span>1,245</span>
                        </button>
                      </div>
                      <button className="flex w-max items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                        <Share2 size={16} className="my-2" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Post 2 */}
                <div className="feed-post relative z-0 cursor-pointer hover:shadow-[0_4px_8px_0_rgba(101,105,108,0.10)]">
                  <div className="absolute inset-0 -z-10">
                    <a className="block h-full" href="#"></a>
                  </div>
                  <div className="p-4">
                    <div className="feed-post-header">
                      <div className="feed-post-avatar bg-blue-100">
                        <span className="text-blue-600 font-semibold text-xs">LS</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex h-full items-center text-sm font-semibold text-black">
                          <a className="hover:underline" href="#">Lassonde School of Engineering</a>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" className="text-gray-700 mx-1">
                            <circle cx="6" cy="7.125" r="1.125" fill="currentColor"></circle>
                          </svg>
                          <span className="text-xs text-gray-600">2 days ago</span>
                        </div>
                        <div className="flex h-full items-center text-xs text-gray-800">
                          <a className="hover:underline" href="#">York University</a>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" className="text-gray-700 mx-1">
                            <circle cx="6" cy="7.125" r="1.125" fill="currentColor"></circle>
                          </svg>
                          <span>CS_Student</span>
                        </div>
                      </div>
                      <div className="flex flex-1 items-baseline justify-end">
                        <button aria-label="More options" className="flex items-center rounded-full border border-transparent text-gray-700 hover:bg-gray-100 h-10 w-10 p-2">
                          <MoreHorizontal size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between gap-2 mt-2">
                      <div className="flex-1">
                        <h3 className="feed-post-title">Internship opportunities for Computer Science students</h3>
                        <p className="feed-post-content line-clamp-3">Does anyone know of any good internship opportunities for CS students? I'm looking for something for the summer semester.</p>
                      </div>
                    </div>
                    
                    <div className="feed-post-footer">
                      <div className="flex gap-2 md:gap-4">
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <ThumbsUp size={16} className="my-2" />
                          <span>42</span>
                        </button>
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <MessageSquare size={16} className="my-2" />
                          <span>15</span>
                        </button>
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <Eye size={16} className="my-2" />
                          <span>2,387</span>
                        </button>
                      </div>
                      <button className="flex w-max items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                        <Share2 size={16} className="my-2" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Post 3 - Poll */}
                <div className="feed-post relative z-0 cursor-pointer hover:shadow-[0_4px_8px_0_rgba(101,105,108,0.10)]">
                  <div className="absolute inset-0 -z-10">
                    <a className="block h-full" href="#"></a>
                  </div>
                  <div className="p-4">
                    <div className="feed-post-header">
                      <div className="feed-post-avatar bg-green-100">
                        <span className="text-green-600 font-semibold text-xs">SB</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex h-full items-center text-sm font-semibold text-black">
                          <a className="hover:underline" href="#">Schulich School of Business</a>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" className="text-gray-700 mx-1">
                            <circle cx="6" cy="7.125" r="1.125" fill="currentColor"></circle>
                          </svg>
                          <span className="text-xs text-gray-600">3 days ago</span>
                        </div>
                        <div className="flex h-full items-center text-xs text-gray-800">
                          <a className="hover:underline" href="#">York University</a>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" className="text-gray-700 mx-1">
                            <circle cx="6" cy="7.125" r="1.125" fill="currentColor"></circle>
                          </svg>
                          <span>Business_Major</span>
                        </div>
                      </div>
                      <div className="flex flex-1 items-baseline justify-end">
                        <button aria-label="More options" className="flex items-center rounded-full border border-transparent text-gray-700 hover:bg-gray-100 h-10 w-10 p-2">
                          <MoreHorizontal size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between gap-2 mt-2">
                      <div className="flex-1">
                        <h3 className="feed-post-title">Best places to study on campus during exam season?</h3>
                        <p className="feed-post-content line-clamp-3">The libraries are always packed during finals. Does anyone know any quiet spots on campus that aren't too crowded?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm rounded-lg bg-gray-200 px-4 py-3.5 my-3">
                      <div className="flex items-center gap-1 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="h-5 w-5 text-red-600">
                          <path fill="currentColor" fillRule="evenodd" d="M5 3h10l2 3H3l2-3Zm2.5 1.5A.5.5 0 0 1 8 4h4a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5ZM3 7h14v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Zm3.007 3.604a.5.5 0 0 1 .707 0l2.829 2.828 4.243-4.243a.5.5 0 1 1 .707.707l-4.597 4.597-.353.353-.354-.353-3.182-3.182a.5.5 0 0 1 0-.707Z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-red-600">Poll</span>
                      </div>
                      <div className="h-[18px] border-r border-gray-600"></div>
                      <div><span className="font-semibold">128</span> Participants</div>
                    </div>
                    
                    <div className="feed-post-footer">
                      <div className="flex gap-2 md:gap-4">
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <ThumbsUp size={16} className="my-2" />
                          <span>36</span>
                        </button>
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <MessageSquare size={16} className="my-2" />
                          <span>22</span>
                        </button>
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <Eye size={16} className="my-2" />
                          <span>3,456</span>
                        </button>
                      </div>
                      <button className="flex w-max items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                        <Share2 size={16} className="my-2" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Post with image */}
                <div className="feed-post relative z-0 cursor-pointer hover:shadow-[0_4px_8px_0_rgba(101,105,108,0.10)]">
                  <div className="absolute inset-0 -z-10">
                    <a className="block h-full" href="#"></a>
                  </div>
                  <div className="p-4">
                    <div className="feed-post-header">
                      <div className="feed-post-avatar bg-purple-100">
                        <span className="text-purple-600 font-semibold text-xs">YU</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex h-full items-center text-sm font-semibold text-black">
                          <a className="hover:underline" href="#">York University</a>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" className="text-gray-700 mx-1">
                            <circle cx="6" cy="7.125" r="1.125" fill="currentColor"></circle>
                          </svg>
                          <span className="text-xs text-gray-600">1 day ago</span>
                        </div>
                        <div className="flex h-full items-center text-xs text-gray-800">
                          <a className="hover:underline" href="#">Official</a>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" className="text-gray-700 mx-1">
                            <circle cx="6" cy="7.125" r="1.125" fill="currentColor"></circle>
                          </svg>
                          <span>Admin</span>
                        </div>
                      </div>
                      <div className="flex flex-1 items-baseline justify-end">
                        <button aria-label="More options" className="flex items-center rounded-full border border-transparent text-gray-700 hover:bg-gray-100 h-10 w-10 p-2">
                          <MoreHorizontal size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between gap-2 mt-2">
                      <div className="flex-1">
                        <h3 className="feed-post-title">Campus events this weekend</h3>
                        <p className="feed-post-content line-clamp-3">Check out these exciting events happening on campus this weekend!</p>
                      </div>
                    </div>
                    
                    <div className="relative max-h-[350px] w-full rounded-xl border border-gray-300 bg-gray-200 my-3">
                      <img 
                        src="https://picsum.photos/800/400" 
                        alt="Campus events" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="feed-post-footer">
                      <div className="flex gap-2 md:gap-4">
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <ThumbsUp size={16} className="my-2" />
                          <span>78</span>
                        </button>
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <MessageSquare size={16} className="my-2" />
                          <span>12</span>
                        </button>
                        <button className="flex items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                          <Eye size={16} className="my-2" />
                          <span>4,521</span>
                        </button>
                      </div>
                      <button className="flex w-max items-center gap-1 rounded-[20px] bg-gray-100 px-2 text-sm/5 text-gray-800 hover:bg-gray-200">
                        <Share2 size={16} className="my-2" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Most Read section */}
                <div className="most-read-section">
                  <h3 className="text-lg font-bold mb-3">Most Read</h3>
                  <div className="space-y-1">
                    <div className="most-read-item">
                      <span className="most-read-number">1</span>
                      <div>
                        <p className="font-medium text-sm">York University announces new scholarship program for international students</p>
                        <p className="text-xs text-gray-500">5d • 1.2k views</p>
                      </div>
                    </div>
                    <div className="most-read-item">
                      <span className="most-read-number">2</span>
                      <div>
                        <p className="font-medium text-sm">Campus food options: What's actually worth your money?</p>
                        <p className="text-xs text-gray-500">3d • 856 views</p>
                      </div>
                    </div>
                    <div className="most-read-item">
                      <span className="most-read-number">3</span>
                      <div>
                        <p className="font-medium text-sm">Tips for finding affordable housing near campus</p>
                        <p className="text-xs text-gray-500">1w • 723 views</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-[80vh]">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to York Talk</h2>
              <p className="text-gray-600 mb-6 text-center max-w-md">
                Select a topic from the sidebar or click on Home to view the latest feed.
              </p>
              <button 
                onClick={() => setShowFeed(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                View Feed
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
} 