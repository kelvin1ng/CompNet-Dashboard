"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ChevronRight,
  Calendar,
  Users,
  Monitor,
  Smartphone,
  Tablet,
  MousePointer,
  Clock,
  TrendingUp,
} from "lucide-react"

export default function UserBehaviorPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const [filters, setFilters] = useState({
    dateRange: "7d",
    studentSegment: "all",
    deviceType: "all",
  })
  const [filteredData, setFilteredData] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)

  const journeyFlowData = {
    nodes: [
      { name: "Login Page" },
      { name: "Dashboard" },
      { name: "VM Management" },
      { name: "Exam Portal" },
      { name: "Course Materials" },
      { name: "Announcements" },
      { name: "OneCard Services" },
      { name: "Exit" },
    ],
    links: [
      { source: 0, target: 1, value: 450 }, // Login → Dashboard
      { source: 1, target: 2, value: 180 }, // Dashboard → VM Management
      { source: 1, target: 3, value: 220 }, // Dashboard → Exam Portal
      { source: 1, target: 4, value: 160 }, // Dashboard → Course Materials
      { source: 1, target: 5, value: 90 }, // Dashboard → Announcements
      { source: 1, target: 6, value: 75 }, // Dashboard → OneCard
      { source: 2, target: 7, value: 120 }, // VM Management → Exit
      { source: 3, target: 7, value: 180 }, // Exam Portal → Exit
      { source: 4, target: 7, value: 140 }, // Course Materials → Exit
      { source: 5, target: 7, value: 70 }, // Announcements → Exit
      { source: 6, target: 7, value: 60 }, // OneCard → Exit
      { source: 2, target: 1, value: 60 }, // VM Management → Dashboard (return)
      { source: 3, target: 1, value: 40 }, // Exam Portal → Dashboard (return)
      { source: 4, target: 1, value: 20 }, // Course Materials → Dashboard (return)
    ],
  }

  const allUserActions = [
    {
      timestamp: "2025-01-03 14:30:15",
      userId: "STU001",
      action: "Login",
      page: "/login",
      duration: "0:45",
      device: "Desktop",
      location: "Toronto, CA",
      segment: "new",
    },
    {
      timestamp: "2025-01-03 14:28:32",
      userId: "STU002",
      action: "VM Access",
      page: "/vm-management",
      duration: "15:30",
      device: "Desktop",
      location: "Toronto, CA",
      segment: "returning",
    },
    {
      timestamp: "2025-01-03 14:25:18",
      userId: "STU003",
      action: "Exam Submit",
      page: "/exam-portal",
      duration: "45:20",
      device: "Tablet",
      location: "Mississauga, CA",
      segment: "graduate",
    },
    {
      timestamp: "2025-01-03 14:22:45",
      userId: "STU001",
      action: "Course View",
      page: "/course-materials",
      duration: "8:12",
      device: "Desktop",
      location: "Toronto, CA",
      segment: "new",
    },
    {
      timestamp: "2025-01-03 14:20:03",
      userId: "STU004",
      action: "OneCard Check",
      page: "/onecard",
      duration: "2:30",
      device: "Mobile",
      location: "Brampton, CA",
      segment: "returning",
    },
    {
      timestamp: "2025-01-03 14:18:45",
      userId: "STU005",
      action: "Login",
      page: "/login",
      duration: "1:15",
      device: "Desktop",
      location: "Scarborough, CA",
      segment: "new",
    },
    {
      timestamp: "2025-01-03 14:16:22",
      userId: "STU006",
      action: "Announcement View",
      page: "/announcements",
      duration: "3:45",
      device: "Mobile",
      location: "Toronto, CA",
      segment: "graduate",
    },
    {
      timestamp: "2025-01-03 14:14:08",
      userId: "STU007",
      action: "VM Access",
      page: "/vm-management",
      duration: "22:15",
      device: "Desktop",
      location: "Markham, CA",
      segment: "returning",
    },
    {
      timestamp: "2025-01-03 14:12:33",
      userId: "STU008",
      action: "Course Download",
      page: "/course-materials",
      duration: "5:20",
      device: "Tablet",
      location: "Toronto, CA",
      segment: "new",
    },
    {
      timestamp: "2025-01-03 14:10:17",
      userId: "STU009",
      action: "Exam Start",
      page: "/exam-portal",
      duration: "60:00",
      device: "Desktop",
      location: "Richmond Hill, CA",
      segment: "graduate",
    },
    {
      timestamp: "2025-01-03 14:08:55",
      userId: "STU010",
      action: "OneCard Balance",
      page: "/onecard",
      duration: "1:45",
      device: "Mobile",
      location: "Toronto, CA",
      segment: "returning",
    },
    {
      timestamp: "2025-01-03 14:06:41",
      userId: "STU011",
      action: "Login",
      page: "/login",
      duration: "0:52",
      device: "Desktop",
      location: "Etobicoke, CA",
      segment: "new",
    },
    {
      timestamp: "2025-01-03 14:04:28",
      userId: "STU012",
      action: "VM Create",
      page: "/vm-management",
      duration: "8:30",
      device: "Desktop",
      location: "Toronto, CA",
      segment: "returning",
    },
    {
      timestamp: "2025-01-03 14:02:15",
      userId: "STU013",
      action: "Course View",
      page: "/course-materials",
      duration: "12:45",
      device: "Tablet",
      location: "Mississauga, CA",
      segment: "graduate",
    },
    {
      timestamp: "2025-01-03 14:00:02",
      userId: "STU014",
      action: "Announcement Read",
      page: "/announcements",
      duration: "2:15",
      device: "Mobile",
      location: "Toronto, CA",
      segment: "new",
    },
  ]

  const applyFilters = () => {
    let filtered = [...allUserActions]

    if (filters.studentSegment !== "all") {
      filtered = filtered.filter((action) => action.segment === filters.studentSegment)
    }

    if (filters.deviceType !== "all") {
      filtered = filtered.filter((action) => action.device.toLowerCase() === filters.deviceType)
    }

    if (filters.dateRange === "1d") {
      filtered = filtered.slice(0, 5)
    } else if (filters.dateRange === "30d") {
      filtered = filtered.slice(0, 12)
    }

    setFilteredData(filtered)
    setIsFiltered(true)
    setCurrentPage(1)
  }

  const getFilteredStats = () => {
    const data = isFiltered ? filteredData : allUserActions
    const activeStudents = new Set(data.map((action) => action.userId)).size
    const desktopCount = data.filter((action) => action.device === "Desktop").length
    const mobileCount = data.filter((action) => action.device === "Mobile").length
    const tabletCount = data.filter((action) => action.device === "Tablet").length
    const total = data.length

    return {
      activeStudents,
      deviceBreakdown: {
        desktop: total > 0 ? Math.round((desktopCount / total) * 100) : 0,
        mobile: total > 0 ? Math.round((mobileCount / total) * 100) : 0,
        tablet: total > 0 ? Math.round((tabletCount / total) * 100) : 0,
      },
    }
  }

  const stats = getFilteredStats()

  const dataToShow = isFiltered ? filteredData : allUserActions
  const totalItems = dataToShow.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentUserActions = dataToShow.slice(startIndex, endIndex)

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePageClick = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="flex">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <span>Home</span>
              <ChevronRight className="h-4 w-4" />
              <span>Analytics</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">Student Behavior</span>
            </div>

            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Behavior Analytics</h1>
              <p className="text-gray-600">
                Analyze student interactions and engagement patterns across the MCN system
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Filters & Settings</CardTitle>
                <CardDescription>
                  Customize your analysis by selecting date ranges, student segments, and device types
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Date Range</label>
                    <Select
                      value={filters.dateRange}
                      onValueChange={(value) => setFilters({ ...filters, dateRange: value })}
                    >
                      <SelectTrigger>
                        <Calendar className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1d">Last 24 hours</SelectItem>
                        <SelectItem value="7d">Last 7 days</SelectItem>
                        <SelectItem value="30d">Last 30 days</SelectItem>
                        <SelectItem value="90d">Last 90 days</SelectItem>
                        <SelectItem value="custom">Custom range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Student Segment</label>
                    <Select
                      value={filters.studentSegment}
                      onValueChange={(value) => setFilters({ ...filters, studentSegment: value })}
                    >
                      <SelectTrigger>
                        <Users className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Students</SelectItem>
                        <SelectItem value="new">New Students</SelectItem>
                        <SelectItem value="returning">Returning Students</SelectItem>
                        <SelectItem value="graduate">Graduate Students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Device Type</label>
                    <Select
                      value={filters.deviceType}
                      onValueChange={(value) => setFilters({ ...filters, deviceType: value })}
                    >
                      <SelectTrigger>
                        <Monitor className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Devices</SelectItem>
                        <SelectItem value="desktop">Desktop</SelectItem>
                        <SelectItem value="mobile">Mobile</SelectItem>
                        <SelectItem value="tablet">Tablet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={applyFilters}>
                      Apply Filters
                      {isFiltered && <span className="ml-2 text-xs bg-blue-800 px-2 py-1 rounded">Active</span>}
                    </Button>
                  </div>
                </div>
                {isFiltered && (
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-800">
                        Filters applied - Showing {dataToShow.length} of {allUserActions.length} records
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setIsFiltered(false)
                          setCurrentPage(1)
                        }}
                        className="text-blue-600 border-blue-300 hover:bg-blue-100"
                      >
                        Clear Filters
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Journey Flow</CardTitle>
                    <CardDescription>Visualize how students navigate through the MCN system services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[480px] bg-white rounded-lg border">
                      <div className="p-3 border-b bg-gray-50">
                        <h4 className="font-medium text-gray-900">Student Navigation Patterns</h4>
                        <p className="text-sm text-gray-600">Flow shows student movement between system services</p>
                      </div>
                      <div className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-center">
                            <div className="bg-blue-100 border-2 border-blue-300 rounded-lg px-5 py-2 text-sm font-medium text-blue-800">
                              Login Portal (450 students)
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <div className="w-px h-6 bg-gray-300"></div>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="bg-green-100 border-2 border-green-300 rounded-lg px-5 py-2 text-sm font-medium text-green-800">
                              Dashboard (450 students)
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <div className="w-px h-6 bg-gray-300"></div>
                          </div>
                          <div className="grid grid-cols-5 gap-2 text-xs">
                            <div className="bg-purple-100 border border-purple-300 rounded-lg px-2 py-2 text-center text-purple-800">
                              <div className="font-medium">VM Management</div>
                              <div className="text-base font-bold mt-1">(180)</div>
                            </div>
                            <div className="bg-orange-100 border border-orange-300 rounded-lg px-2 py-2 text-center text-orange-800">
                              <div className="font-medium">Exam Portal</div>
                              <div className="text-base font-bold mt-1">(220)</div>
                            </div>
                            <div className="bg-teal-100 border border-teal-300 rounded-lg px-2 py-2 text-center text-teal-800">
                              <div className="font-medium">Course Materials</div>
                              <div className="text-base font-bold mt-1">(160)</div>
                            </div>
                            <div className="bg-pink-100 border border-pink-300 rounded-lg px-2 py-2 text-center text-pink-800">
                              <div className="font-medium">Announcements</div>
                              <div className="text-base font-bold mt-1">(90)</div>
                            </div>
                            <div className="bg-yellow-100 border border-yellow-300 rounded-lg px-2 py-2 text-center text-yellow-800">
                              <div className="font-medium">OneCard Services</div>
                              <div className="text-base font-bold mt-1">(75)</div>
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <div className="inline-flex items-center gap-4 text-xs text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-blue-300 rounded"></div>
                                <span>Entry Point</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-300 rounded"></div>
                                <span>Central Hub</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-purple-300 rounded"></div>
                                <span>System Services</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Summary Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">Active Students</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{stats.activeStudents}</div>
                        <div className="text-xs text-green-600 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          +8.2%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">Avg. Session</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">12:45</div>
                        <div className="text-xs text-green-600 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          +5.1%
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MousePointer className="h-4 w-4 text-purple-600" />
                        <span className="text-sm text-gray-600">Bounce Rate</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">18.3%</div>
                        <div className="text-xs text-green-600 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 rotate-180" />
                          -3.2%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Device Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Monitor className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Desktop</span>
                      </div>
                      <span className="font-medium">{stats.deviceBreakdown.desktop}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tablet className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Tablet</span>
                      </div>
                      <span className="font-medium">{stats.deviceBreakdown.tablet}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Mobile</span>
                      </div>
                      <span className="font-medium">{stats.deviceBreakdown.mobile}%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Student Actions</CardTitle>
                <CardDescription>Detailed log of student interactions with timestamps and context</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">Timestamp</TableHead>
                        <TableHead className="font-semibold">Student ID</TableHead>
                        <TableHead className="font-semibold">Action</TableHead>
                        <TableHead className="font-semibold">Service</TableHead>
                        <TableHead className="font-semibold">Duration</TableHead>
                        <TableHead className="font-semibold">Device</TableHead>
                        <TableHead className="font-semibold">Location</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentUserActions.map((action, index) => (
                        <TableRow key={startIndex + index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <TableCell className="font-mono text-sm">{action.timestamp}</TableCell>
                          <TableCell className="font-medium">{action.userId}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                action.action === "Login"
                                  ? "default"
                                  : action.action.includes("VM")
                                    ? "secondary"
                                    : action.action.includes("Exam")
                                      ? "destructive"
                                      : action.action.includes("OneCard")
                                        ? "outline"
                                        : "default"
                              }
                            >
                              {action.action}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-blue-600 hover:underline cursor-pointer">{action.page}</TableCell>
                          <TableCell className="font-mono text-sm">{action.duration}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              {action.device === "Desktop" && <Monitor className="h-4 w-4 text-blue-600" />}
                              {action.device === "Mobile" && <Smartphone className="h-4 w-4 text-green-600" />}
                              {action.device === "Tablet" && <Tablet className="h-4 w-4 text-purple-600" />}
                              <span className="text-sm">{action.device}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">{action.location}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-600">
                    Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} student actions
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={handlePreviousPage}>
                      Previous
                    </Button>
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      const pageNum = i + 1
                      return (
                        <Button
                          key={pageNum}
                          variant="outline"
                          size="sm"
                          className={currentPage === pageNum ? "bg-blue-600 text-white" : ""}
                          onClick={() => handlePageClick(pageNum)}
                        >
                          {pageNum}
                        </Button>
                      )
                    })}
                    <Button variant="outline" size="sm" disabled={currentPage === totalPages} onClick={handleNextPage}>
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
