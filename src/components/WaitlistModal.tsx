'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface WaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    schoolDistrictName: '',
    role: '',
    estimatedStudents: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Something went wrong')
        return
      }

      setSuccess(true)
    } catch {
      setError('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      schoolDistrictName: '',
      role: '',
      estimatedStudents: '',
    })
    setError('')
    setSuccess(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white">
        {!success ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl text-stone-800">Request Early Access</DialogTitle>
              <DialogDescription className="text-stone-600">
                Join the waitlist to bring Divinity Reflections to your school district.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Hayley Owens"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-stone-200 focus:border-stone-500 focus:ring-stone-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-stone-200 focus:border-stone-500 focus:ring-stone-500"
                />
              </div>

              <div>
                <label htmlFor="schoolDistrictName" className="block text-sm font-medium text-stone-700 mb-1">
                  School / District Name
                </label>
                <Input
                  id="schoolDistrictName"
                  name="schoolDistrictName"
                  type="text"
                  value={formData.schoolDistrictName}
                  onChange={handleChange}
                  required
                  className="border-stone-200 focus:border-stone-500 focus:ring-stone-500"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-stone-700 mb-1">
                  Your Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="flex h-9 w-full rounded-md border border-stone-200 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-stone-500 focus-visible:ring-2 focus-visible:ring-stone-500/50 md:text-sm"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="Principal">Principal</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Counselor">Counselor</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Superintendent">Superintendent</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="estimatedStudents" className="block text-sm font-medium text-stone-700 mb-1">
                  Estimated Number of Students
                </label>
                <Input
                  id="estimatedStudents"
                  name="estimatedStudents"
                  type="number"
                  min="1"
                  placeholder="e.g. 500"
                  value={formData.estimatedStudents}
                  onChange={handleChange}
                  required
                  className="border-stone-200 focus:border-stone-500 focus:ring-stone-500"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-stone-800 hover:bg-stone-900 text-white font-medium py-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">You&apos;re on the list!</h3>
            <p className="text-stone-600 mb-6">
              Thank you for your interest in Divinity Reflections. We&apos;ll be in touch soon!
            </p>
            <a
              href="https://divinity-f6971.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white font-medium rounded-full shadow-md hover:bg-stone-900 hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Try the Beta
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
