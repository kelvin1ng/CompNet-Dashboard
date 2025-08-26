"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, BarChart3, FileText, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Student System Analytics", href: "/", icon: LayoutDashboard },
  { name: "Student Behavior Analytics", href: "/user-behavior", icon: BarChart3 },
  { name: "Report Generation", href: "/reports", icon: FileText },
]

interface SidebarProps {
  collapsed?: boolean
  onToggle?: () => void
}

export function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "bg-white/90 backdrop-blur-md border-r border-gray-200 shadow-lg transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200">
          <Button variant="ghost" size="icon" onClick={onToggle} className="ml-auto">
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100",
                  collapsed && "justify-center",
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <p className={cn("text-xs text-gray-500", collapsed && "text-center")}>
            {collapsed ? "© 2025 TMU" : "© 2025 Toronto Metropolitan University"}
          </p>
        </div>
      </div>
    </div>
  )
}
