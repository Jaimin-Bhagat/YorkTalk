import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { prisma } from '@/lib/prisma'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { z } from 'zod'

// Schema for validation
const postSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title is too long'),
  content: z.string().min(1, 'Content is required'),
  topicId: z.string().min(1, 'Topic is required'),
})

export async function POST(req: Request) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)
    
    if (!session || !session.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const body = await req.json()
    
    // Validate request body
    const result = postSchema.safeParse(body)
    
    if (!result.success) {
      return NextResponse.json(
        { message: result.error.errors[0].message },
        { status: 400 }
      )
    }
    
    const { title, content, topicId } = result.data
    
    // Check if topic exists
    const topic = await prisma.topic.findUnique({
      where: { id: topicId },
    })
    
    if (!topic) {
      return NextResponse.json(
        { message: 'Topic not found' },
        { status: 404 }
      )
    }
    
    // Create post
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: session.user.id,
        topicId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
          },
        },
        topic: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    
    return NextResponse.json(
      { message: 'Post created successfully', post },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
