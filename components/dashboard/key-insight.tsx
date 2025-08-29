'use client'

import {Card,CardContent, CardHeader, CardTitle} from  '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {TrendingUp} from 'lucide-react'

export function KeyInsights(){
    return(
        <Card>
            <CardHeader>
                <CardTitle className="text-lg text-gray-900">Key Insights & Feedback</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex items-center gap-4 mb-4'>
                    <div className="text-3xl font-bold text-gray-900">10%</div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        This month
                    </Badge>
                </div>

                
            </CardContent>
        </Card>
    )
}