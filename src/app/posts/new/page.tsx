'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

interface Topic {
  id: string
  name: string
}

export default function NewPost() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [topicId, setTopicId] = useState('')
  const [topics, setTopics] = useState<Topic[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  useEffect(() => {
    const fetchTopics = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('/api/topics')
        const data = await response.json()
        
        if (response.ok) {
          setTopics(data.topics)
          if (data.topics.length > 0) {
            setTopicId(data.topics[0].id)
          }
        } else {
          toast.error(data.message || 'Failed to fetch topics')
        }
      } catch (error) {
        console.error('Error fetching topics:', error)
        toast.error('Something went wrong')
      } finally {
        setIsLoading(false)
      }
    }

    if (status === 'authenticated') {
      fetchTopics()
    }
  }, [status])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim() || !content.trim() || !topicId) {
      toast.error('Please fill in all fields')
      return
    }
    
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          topicId,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      toast.success('Post created successfully')
      router.push(`/posts/${data.post.id}`)
    } catch (error) {
      console.error('Error creating post:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to create post')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input mt-1 block w-full"
                placeholder="Enter a descriptive title"
                required
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                value={topicId}
                onChange={(e) => setTopicId(e.target.value)}
                className="input mt-1 block w-full"
                required
              >
                {topics.length === 0 ? (
                  <option value="">No topics available</option>
                ) : (
                  topics.map((topic) => (
                    <option key={topic.id} value={topic.id}>
                      {topic.name}
                    </option>
                  ))
                )}
              </select>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="input mt-1 block w-full"
                placeholder="Share your thoughts..."
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Posts are anonymous but must follow community guidelines.
              </p>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="btn btn-secondary"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating...' : 'Create Post'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
} 