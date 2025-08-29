'use client'

import {Sidebar} from '@/Components/dashboard/sidebar'
import {Header} from '@/Components/dashboard/header'

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                <Sidebar/>
                <div className='flex-1 flex flex-col min-h-screen ml-64'>
                    <Header/>
                    <main className="flex-1 p-6">   
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}