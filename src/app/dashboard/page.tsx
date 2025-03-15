'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import SideNav from '@/components/SideNav'
import SimpleSideNav from '@/components/SimpleSideNav'

interface Post {
  id: string
  title: string
  content: string
  createdAt: string
  author: {
    name: string
  }
  topic: {
    name: string
  }
  _count: {
    comments: number
    votes: number
  }
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts/recent')
        const data = await response.json()
        
        if (response.ok) {
          setPosts(data.posts)
        } else {
          toast.error(data.message || 'Failed to fetch posts')
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
        toast.error('Something went wrong')
      } finally {
        setIsLoading(false)
      }
    }

    if (status === 'authenticated') {
      fetchPosts()
    }
  }, [status])

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Link href="/posts/new" className="btn btn-primary">
          Create Post
        </Link>
      </div>

      {/* Debug message */}
      <div className="bg-yellow-100 p-4 mb-4 rounded-md">
        <p className="text-yellow-800">If you can see this message, the page is loading correctly. The SideNav should appear below.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left sidebar - Original SideNav */}
        <div className="md:block border border-gray-300 rounded-lg p-2 mb-4" style={{ minWidth: '240px', backgroundColor: 'white' }}>
          <p className="text-sm text-gray-500 mb-2">Original SideNav:</p>
          <div style={{ border: '1px dashed red', padding: '8px' }}>
            <SideNav />
          </div>
        </div>

        {/* Left sidebar - Simplified SideNav */}
        <div className="md:block border border-gray-300 rounded-lg p-2 mb-4" style={{ minWidth: '300px', backgroundColor: 'white' }}>
          <p className="text-sm text-gray-500 mb-2">Simplified SideNav (Updated Faculties):</p>
          <div style={{ border: '2px solid blue', padding: '8px' }}>
            <SimpleSideNav />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Discussions</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Stay updated with the latest conversations.</p>
            </div>
            
            {posts.length === 0 ? (
              <div className="px-4 py-5 sm:p-6 text-center">
                <p className="text-gray-500">No posts yet. Be the first to start a discussion!</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {posts.map((post) => (
                  <li key={post.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <Link href={`/posts/${post.id}`} className="block">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-medium text-red-600 truncate">{post.title}</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {post.topic.name}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            Posted by {post.author.name}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p className="mr-4">
                            {post._count.comments} comments
                          </p>
                          <p>
                            {post._count.votes} votes
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Popular Topics</h3>
                <div className="mt-5">
                  <ul className="divide-y divide-gray-200">
                    <li className="py-3">
                      <Link href="/topics/academics" className="text-red-600 hover:text-red-800">
                        Academics
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link href="/topics/campus-life" className="text-red-600 hover:text-red-800">
                        Campus Life
                      </Link>
                    </li>
                    <li className="py-3">
                      <Link href="/topics/careers" className="text-red-600 hover:text-red-800">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">My Activity</h3>
                <div className="mt-5">
                  <Link href="/profile/posts" className="text-red-600 hover:text-red-800 block py-2">
                    My Posts
                  </Link>
                  <Link href="/profile/comments" className="text-red-600 hover:text-red-800 block py-2">
                    My Comments
                  </Link>
                  <Link href="/profile/saved" className="text-red-600 hover:text-red-800 block py-2">
                    Saved Posts
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Community Guidelines</h3>
                <div className="mt-2 text-sm text-gray-500">
                  <p className="mb-2">Remember to follow our community guidelines:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Be respectful to others</li>
                    <li>No hate speech or harassment</li>
                    <li>Protect personal information</li>
                    <li>No spam or self-promotion</li>
                    <li>Stay on topic in discussions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 