import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

// Schema for validation
const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string()
    .email('Invalid email address')
    .refine((email) => email.endsWith('@yorku.ca'), {
      message: 'Only York University email addresses are allowed',
    }),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Validate request body
    const result = userSchema.safeParse(body)
    
    if (!result.success) {
      return NextResponse.json(
        { message: result.error.errors[0].message },
        { status: 400 }
      )
    }
    
    const { name, email, password } = result.data
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })
    
    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 400 }
      )
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    
    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = user
    
    return NextResponse.json(
      { message: 'User created successfully', user: userWithoutPassword },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 