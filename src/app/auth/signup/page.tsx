'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import '../../../styles/authStyles.css'

export default function SignUp() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!email.endsWith('@yorku.ca')) {
      toast.error('Only York University email addresses are allowed')
      return
    }
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      toast.success('Account created successfully')
      router.push('/auth/signin')
    } catch (error) {
      console.error('Registration error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to create account')
    } finally {
      setIsLoading(false)
    }
  }

  const handleContinueFromStep1 = () => {
    if (!name.trim()) {
      toast.error('Please enter a display name')
      return
    }
    setCurrentStep(2)
  }

  const handleBackToStep1 = () => {
    setCurrentStep(1)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    // Show confirm password field when user starts typing in password field
    if (value.length > 0 && !showConfirmPassword) {
      setShowConfirmPassword(true)
    } else if (value.length === 0) {
      setShowConfirmPassword(false)
      setConfirmPassword('')
    }
  }

  // Step 1: Display Name
  const renderStep1 = () => (
    <div className="text-center">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Display Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        className="input mt-1 block w-full text-center"
        placeholder="Anonymous Lion"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <p className="mt-1 text-xs text-gray-500">
        This will be your anonymous display name in the community
      </p>
      
      <div className="button-container">
        <button
          type="button"
          onClick={handleContinueFromStep1}
          className="btn btn-primary w-full"
          style={{ marginTop: '1rem', cursor: 'pointer' }}
        >
          Continue
        </button>
      </div>
      
      <div className="mt-2 text-center">
        <p className="block text-sm font-medium text-gray-700">
          Already a member?{' '}
          <Link href="/auth/signin" className="font-medium text-red-600 hover:text-red-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )

  // Step 2: Email and Password
  const renderStep2 = () => (
    <div className="text-center">
      <div className="mb-4">
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
          autoFocus
        />
        <p className="mt-1 text-xs text-gray-500">
          Must be a valid @yorku.ca email address
        </p>
      </div>
      
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          className="input mt-1 block w-full text-center"
          placeholder="••••••••"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      
      {showConfirmPassword && (
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            className="input mt-1 block w-full text-center"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password && confirmPassword && password !== confirmPassword && (
            <p className="mt-1 text-xs text-red-500">
              Passwords do not match
            </p>
          )}
        </div>
      )}
      
      <div className="flex justify-between mt-4 space-x-2">
        <button
          type="button"
          onClick={handleBackToStep1}
          className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 w-1/3"
          style={{ cursor: 'pointer' }}
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isLoading || (showConfirmPassword && password !== confirmPassword)}
          className="btn btn-primary w-2/3"
          style={{ cursor: 'pointer' }}
        >
          {isLoading ? 'Creating account...' : 'Sign up'}
        </button>
      </div>
      
      <div className="text-xs text-gray-500 text-center mt-4">
        By signing up, you agree to our Terms of Service and Privacy Policy.
        Your email will only be used for verification and will never be shared.
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Create your York Talk account
            </h2>
          </div>
          
          <div className="space-y-4 rounded-md">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
          </div>
        </form>
      </div>
    </div>
  )
} 