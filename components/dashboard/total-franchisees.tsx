'use client'

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'

const franchiseeSteps = [
    { id: 1, title:'Stage 1 (Initial Inquiry)', count: 2, color:'bg-blue-500'},
    { id: 2, title:'Stage 2 (Document Submission)', count: 7, color:'bg-blue-500'},
    { id: 3, title:'Stage 3 (Training)', count: 5, color:'bg-blue-500'}
    
]

export function TotalFranchisees(){
    const totalCount = franchiseeSteps.reduce((sum,step)=> sum + step.count, 0)

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg text-gray-900">Total Franchisees Onboard</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex items-center gap-4 mb-6'>
                    <div className='text-2xl font-bold'>{totalCount}</div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                            +7.2%
                    </Badge>
                </div>
                 <div className="space-y-4">
          {franchiseeSteps.map((step) => (
            <div key={step.id} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${step.color}`} />
              <span className="text-sm text-gray-600 flex-1">{step.title}</span>
              <span className="text-sm font-medium text-gray-900">{step.count.toString().padStart(2, '0')}</span>
            </div>
          ))}
        </div>
            </CardContent>
        </Card>
    )
}