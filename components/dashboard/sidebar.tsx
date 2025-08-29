'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import {
    Home,
    FileText,
    Upload,
    Users,
    Settings,
    Target,
    HelpCircle,
    BarChart3
} from 'lucide-react'

interface SidebarItem {
    id: string
    label: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    badge?: number
}

const sidebarItems: SidebarItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'stages', label: 'Stages & CheckList', icon: FileText },
    { id: 'uploaded', label: 'Uploaded Docs', icon: Upload },
    { id: 'preferred', label: 'Preferred Vendors', icon: Users },
    { id: 'tech', label: 'Tech Stack', icon: Settings },
    { id: 'targets', label: 'Targets', icon: Target },
    { id: 'sales', label: 'See Sales Targets', icon: BarChart3 },
    { id: 'kmi', label: 'KMI Groups', icon: Target },
    { id: 'pending', label: 'Pending Questions', icon: HelpCircle, badge: 2 }
]

export function Sidebar() {
    const [activeItem, setActiveItem] = useState('home')

    return (
        <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-teal-800 to-teal-900 text-white z-40">
            <div className="p-4 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-teal-600 rounded"></div>
                    </div>
                    <span className="text-xl font-bold">FrameTech</span>
                </div>

                <nav className="space-y-2 flex-1">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveItem(item.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                                    activeItem === item.id
                                        ? 'bg-white/10 text-white'
                                        : 'text-white/70 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                <Icon className="h-4 w-4" />
                                <span className="text-sm">{item.label}</span>
                                {typeof item.badge === 'number' && (
                                    <Badge
                                        variant="secondary"
                                        className="ml-auto bg-orange-500 text-white text-xs"
                                    >
                                        {item.badge}
                                    </Badge>
                                )}
                            </button>
                        )
                    })}
                </nav>

                <div className="pt-8">
                    <button
                        type="button"
                        className="w-full flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white text-left"
                    >
                        <HelpCircle className="h-4 w-4" />
                        <span className="text-sm">Logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
