'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/Components/Ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/Ui/avatar'
import { Badge } from '@/Components/Ui/badge'

const prospectLeads = [
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
]

export function ProspectLeads() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">Prospect Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {prospectLeads.map((lead) => (
            <div key={lead.id} className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={lead.avatar} alt={lead.name} />
                <AvatarFallback>
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {lead.name}
                </p>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${lead.stageColor} mt-1`}
                >
                  {lead.stage}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}