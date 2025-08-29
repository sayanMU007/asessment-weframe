'use client'

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'

export function FinancialWellbeing(){
    const currentValue = 450000
    const targetValue = 500000
    const totalFranchisees = 20

    return(
        <Card>
            <CardHeader>
                <CardTitle className='text-lg text-gray-900'>Financial Wellbeing</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex items-center gap-4 mb-6'>
                <div className='text 2xl font-bold text-gray-900'>{totalFranchisees}</div>
                <Badge variant="secondary" className='bg-green-100 text-green-700'>
                    +11%
                </Badge>
                </div>
                <p className='text-sm text-gray-600 mb-4'>Total Franchisees</p>


                <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                        <span className="text-sm text-gray-600">Target</span>
                        <span className="text-sm font-medium text-gray-900">
                            ${targetValue.toLocaleString()}
                            </span>
                    </div>
                    <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Current</span>
            <span className="text-sm font-medium text-gray-900">
              ${currentValue.toLocaleString()}
            </span>
          </div>
                </div>

            </CardContent>
        </Card>
    )
}