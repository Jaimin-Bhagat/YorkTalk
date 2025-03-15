import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { prisma } from '@/lib/prisma'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET() {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    // Fetch all topics
    const topics = await prisma.topic.findMany({
      orderBy: {
        name: 'asc',
      },
    })
    
    return NextResponse.json({ topics })
  } catch (error) {
    console.error('Error fetching topics:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 