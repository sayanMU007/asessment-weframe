'use client'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import { CheckCircle2, Circle } from 'lucide-react'

const completedSteps = [
    {id:1, title: 'profile setup', completed: true},
    {id:2, title: 'Bank Transfer', completed: true},
    {id:3, title: 'Legal Document', completed: true}
]

const remainingSteps = [
    {id:4, title: 'Financial Integration', completed: false},
    {id:5, title: 'Final review', completed: false},
]

export function StepsProgress()
{
    return(
        <Card className="border-2 border-pink-500">
            <CardHeader>
                <CardTitle className="text-lg text-gray-900">Steps Completed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className='space-y-3'>
                    {completedSteps.map((step)=>(
                        <div key={step.id} className='flex items-center gap-3'>
                            <CheckCircle2 className='h-5 w-5 text-green-500' />
                            <span className='text-sm text-gray-700'>{step.title}</span>
                        </div>
                    ))}
                </div>
                <div className="border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Steps Remaining</h4>
                    <div className="space-y-3">
                        {remainingSteps.map((step)=>(
                           <div key={step.id} className="flex items-center gap-3">
                            <Circle className='h-5 w-5 text-gray-400' />
                            <span className='text-sm text-gray-700'>{step.title}</span>
                           </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}