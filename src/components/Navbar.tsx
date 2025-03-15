'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { Search } from 'lucide-react'
import '../styles/headerStyles.css'

export default function Navbar() {
  const { data: session } = useSession()
  const pathname = usePathname()

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header>
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Left section: Logo and search */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/york-talk-logo.svg" 
                alt="York Talk Logo" 
                width={40} 
                height={40} 
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            
            {/* Search */}
            <div className="relative ml-4">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
                <Search className="h-4 w-4 text-gray-400 mr-4" />
                <input
                  type="text"
                  className="bg-transparent border-none focus:outline-none text-sm w-full"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          {/* Center section: Main navigation links */}
          <div className="flex items-center justify-center flex-1 mx-4">
            <Link
              href="/"
              className={`text-sm font-medium ${
                isActive('/') 
                  ? 'text-black border-b-2 border-red-500' 
                  : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
              }`}
            >
              Community
            </Link>
          </div>

          {/* Right section: Auth buttons */}
          <div className="flex items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/profile"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  {session.user?.name || 'Profile'}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/signin"
                  className="sign-in-button"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/signup"
                  className="sign-up-button"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 