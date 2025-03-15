import React from 'react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center">
        <span className="text-white font-bold text-lg">YT</span>
      </div>
    </Link>
  )
} 