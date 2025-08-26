"use client"

import { Search, Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

interface HeaderProps {
  onMenuToggle?: () => void
}

export function Header({ onMenuToggle }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const announcements = [
    {
      id: 1,
      title: "Network Lab Maintenance Scheduled",
      message: "Lab 3 will be offline for router firmware updates",
      timestamp: "15 mins ago",
      priority: "high",
    },
    {
      id: 2,
      title: "VM Resource Allocation Update",
      message: "New VM templates available for CCNA practice labs",
      timestamp: "32 mins ago",
      priority: "high",
    },
    {
      id: 3,
      title: "Exam Portal System Update",
      message: "Network Security exam portal will be updated tonight",
      timestamp: "53 mins ago",
      priority: "high",
    },
    {
      id: 4,
      title: "Course Materials Updated",
      message: "New Cisco packet tracer files uploaded for Week 8",
      timestamp: "2 hours ago",
      priority: "normal",
    },
    {
      id: 5,
      title: "OneCard System Integration",
      message: "Lab access cards now sync with student portal",
      timestamp: "4 hours ago",
      priority: "normal",
    },
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onMenuToggle} className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/tmu-logo.png"
              alt="Toronto Metropolitan University"
              width={40}
              height={28}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900 text-sm">Student System Analytics</span>
              <span className="text-xs text-gray-600">Master of Computer Networks</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search analytics..." className="pl-10 w-64" />
          </div>

          <div className="relative" ref={dropdownRef}>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Button>

            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900">System Announcements</h3>
                  <p className="text-sm text-gray-600">MCN Program Updates</p>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {announcements.map((announcement, index) => (
                    <div
                      key={announcement.id}
                      className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer ${
                        index < 3 ? "bg-blue-50/30" : ""
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-gray-900 text-sm">{announcement.title}</h4>
                        <span className="text-xs text-gray-500 ml-2">{announcement.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600">{announcement.message}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-100">
                  <Button variant="ghost" className="w-full text-sm text-blue-600 hover:text-blue-700">
                    View All Announcements
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
