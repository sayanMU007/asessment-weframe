'use client'

import { useState, useEffect } from 'react'
import { DashboardData } from '@/types/dashboard'

// Mock data - in a real app this would come from an API
const mockDashboardData: DashboardData = {
  accountProgress: 85,
  totalFranchisees: 14,
  franchiseeGrowth: 7.2,
  KeyInsight: {
    percentage: 10,
    description: 'Franchisees are requesting more detailed tracking methods.'
  },
  franchiseeSteps: [
    { id: 1, title: 'Stage 1 (Initial Inquiry)', count: 2, color: 'bg-blue-500' },
    { id: 2, title: 'Stage 2 (Document Submission)', count: 7, color: 'bg-blue-500' },
    { id: 3, title: 'Stage 3 (Training)', count: 5, color: 'bg-blue-500' }
  ],
  stepProgress: [
    { id: 1, title: 'Profile Setup', completed: true, color: 'text-green-500' },
    { id: 2, title: 'Bank Transfer', completed: true, color: 'text-green-500' },
    { id: 3, title: 'Legal Documents', completed: true, color: 'text-green-500' },
    { id: 4, title: 'Financial Integration', completed: false, color: 'text-gray-400' },
    { id: 5, title: 'Final Review', completed: false, color: 'text-gray-400' }
  ],
  financialWellbeing: {
    totalFranchisees: 20,
    target: 500000,
    current: 450000,
    growth: 11
  },
  prospectLeads: [
    {
      id: '1',
      name: 'Wade Warren',
      avatar: '/placeholder-avatar-1.jpg',
      stage: 'Stage: Initial Inquiry',
      stageColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: '2',
      name: 'Ava Wright',
      avatar: '/placeholder-avatar-2.jpg',
      stage: 'Stage: Initial Inquiry',
      stageColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: '3',
      name: 'Cody Fisher',
      avatar: '/placeholder-avatar-3.jpg',
      stage: 'Stage: Initial Inquiry',
      stageColor: 'bg-blue-100 text-blue-700'
    }
  ],
  uploadedDocuments: []
}

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        setLoading(true)
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setData(mockDashboardData)
      } catch (err) {
        setError('Failed to load dashboard data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const refreshData = async () => {
    setLoading(true)
    try {
      // Simulate API refresh
      await new Promise(resolve => setTimeout(resolve, 500))
      setData(mockDashboardData)
    } catch (err) {
      setError('Failed to refresh dashboard data')
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    loading,
    error,
    refreshData
  }
}