import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image 
        src="/york-talk-high-resolution-logo.png" 
        alt="York Talk Logo" 
        width={50} 
        height={0} 
        className="rounded-md"
      />
    </Link>
  )
}
