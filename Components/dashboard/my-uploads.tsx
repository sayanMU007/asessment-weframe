'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/Ui/card'
import { Button } from '@/Components/Ui/button'
import { Badge } from '@/Components/Ui/badge'
import Switch from '@/Components/Ui/switch'
import { Input } from '@/Components/Ui/input'
import { Search, Filter, FileText, Image, Video, File } from 'lucide-react'

const documents = [
  {
    id: '1',
    name: 'Tech requirements.pdf',
    type: 'pdf',
    size: '200 KB',
    category: 'Legal'
  },
  {
    id: '2',
    name: 'Dashboard_screenshot.jpg',
    type: 'jpg',
    size: '2.3 GB',
    category: 'Ventures & Assets'
  },
  {
    id: '3',
    name: 'Dashboard_prototype_recording.mp4',
    type: 'mp4',
    size: '24.9 MB',
    category: 'Technology'
  },
  {
    id: '4',
    name: 'Financial Overview.docx',
    type: 'docx',
    size: '4.2 MB',
    category: 'Financial'
  }
]

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return <FileText className="h-4 w-4 text-red-500" />
    case 'jpg':
      return <Image className="h-4 w-4 text-green-500" />
    case 'mp4':
      return <Video className="h-4 w-4 text-blue-500" />
    default:
      return <File className="h-4 w-4 text-gray-500" />
  }
}

export function MyUploads() {
  const [searchTerm, setSearchTerm] = useState('')
  const [aiAppChecked, setAiAppChecked] = useState(true)
  const [dashboardChecked, setDashboardChecked] = useState(true)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg text-gray-900">My Uploads</CardTitle>
            <p className="text-sm text-gray-600 mt-1">Documents that are uploaded by you...</p>
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search here..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                {getFileIcon(doc.type)}
                <div>
                  <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                  <p className="text-xs text-gray-500">{doc.size} • {doc.category}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">AI App</span>
                  <Switch checked={aiAppChecked} onChange={setAiAppChecked} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">Dashboard</span>
                  <Switch checked={dashboardChecked} onChange={setDashboardChecked} />
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}