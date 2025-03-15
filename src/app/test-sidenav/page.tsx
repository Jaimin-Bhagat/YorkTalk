'use client'

import React from 'react'
import SideNav from '@/components/SideNav'
import SimpleSideNav from '@/components/SimpleSideNav'

export default function TestSideNav() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">SideNav Test Page</h1>
      
      <div className="bg-yellow-100 p-4 mb-4 rounded-md">
        <p className="text-yellow-800">This is a test page to verify that the SideNav components work correctly.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:block border border-gray-300 rounded-lg p-2">
          <p className="text-sm text-gray-500 mb-2">Original SideNav Component:</p>
          <SideNav />
        </div>
        
        <div className="md:block border border-gray-300 rounded-lg p-2">
          <p className="text-sm text-gray-500 mb-2">Simplified SideNav Component:</p>
          <SimpleSideNav />
        </div>
        
        <div className="flex-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Main Content Area</h2>
          <p>This area represents the main content of your page.</p>
        </div>
      </div>
    </div>
  )
} 