'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SimpleSideNav from '@/components/SimpleSideNav'
import Feed from '@/components/Feed'

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
            <Feed />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select an item from the sidebar</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
} 