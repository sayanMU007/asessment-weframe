'use client'

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Progress} from '@/components/ui/progress'

export function AccountProgress(){
    const progress = 85

    return (
        <Card className="border-2 border-pink-500">
            <CardHeader>
            <CardTitle className="text-lg text-gray-900">Account Progress</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
                <svg className="w-32 h-32 transform-rotate-90" viewBox="0 0 36 36">
                <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
              className="text-blue-500"
              strokeLinecap="round"
              />
                </svg>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-2xl font-bold text-gray-900'>{progress}%</span>
                </div>
            </div>
            </CardContent>
        </Card>
    )
}