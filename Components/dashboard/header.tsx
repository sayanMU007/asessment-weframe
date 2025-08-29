'use client'

import {Avatar, AvatarFallback, AvatarImage} from "@/Components/ui/avatar";
import { Bell,Settings } from "lucide-react";

export function Header(){
    return(
        <header className="w-full border-b bg-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Settings className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Bell className="h-5 w-5" />
                </button>
                <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User"/>
                    <AvatarFallback>UN</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}