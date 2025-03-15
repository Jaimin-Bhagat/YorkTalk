'use client'

import Link from 'next/link'
import Image from 'next/image'
import SimpleSideNav from '@/components/SimpleSideNav'
import SideNav from '@/components/SideNav'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left sidebar */}
          <SideNav />

          {/* Main content */}
          <div className="flex-1">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6 p-5">
              <div className="mb-4">
                <h2 className="text-xl font-bold">Welcome to York Talk</h2>
                <p className="text-gray-600">York University's Anonymous Community Platform</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Anonymous Discussions</h3>
                  <p className="text-sm text-gray-600">
                    Speak freely about any topic while maintaining your anonymity.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">York University Verified</h3>
                  <p className="text-sm text-gray-600">
                    Only York University students with verified @yorku.ca emails can join.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Topic-Based Communities</h3>
                  <p className="text-sm text-gray-600">
                    Find discussions organized by topics relevant to York University.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sample Feed Content */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Discussions</h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="px-4 py-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-red-600 truncate">Sample Discussion Topic {item}</p>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Faculty of Science
                      </span>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <p className="text-sm text-gray-500">Posted by Anonymous</p>
                      <div className="flex space-x-4 text-sm text-gray-500">
                        <span>5 comments</span>
                        <span>12 votes</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 