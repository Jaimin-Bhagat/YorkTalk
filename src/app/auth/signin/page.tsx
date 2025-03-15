'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import '../../../styles/authStyles.css'

export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast.error('Invalid credentials')
      } else {
        toast.success('Signed in successfully')
        router.push('/dashboard')
        router.refresh()
      }
    } catch (error) {
      console.error('Sign in error:', error)
      toast.error('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Sign in to York Talk
            </h2>
          </div>
          
          <div className="space-y-4 rounded-md">
            <div className="text-center">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input mt-1 block w-full text-center"
                placeholder="your.name@yorku.ca"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="text-center">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input mt-1 block w-full text-center"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          
            <div className="button-container">
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <p className="block text-sm font-medium text-gray-700">
                New to YorkTalk?{' '}
                <Link href="/auth/signup" className="font-medium text-red-600 hover:text-red-500">
                  Sign-Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
} 