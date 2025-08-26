"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Filter, ArrowUpDown, Users, Activity, PieChart, FileText, Calendar } from "lucide-react"

export default function Design3Page() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const summaryMetrics = [
    { label: "Total Users", value: "1,234", icon: Users, preview: "pie" },
    { label: "Active Sessions", value: "567", icon: Activity, preview: "bar" },
    { label: "Page Views", value: "8,901", icon: PieChart, preview: "line" },
  ]

  const tableData = [
    {
      timestamp: "2025-01-03 14:30:15",
      userId: "USR001",
      action: "Page View",
      page: "/dashboard",
      duration: "2:45",
      device: "Desktop",
    },
    {
      timestamp: "2025-01-03 14:28:32",
      userId: "USR002",
      action: "Click",
      page: "/analytics",
      duration: "0:15",
      device: "Mobile",
    },
    {
      timestamp: "2025-01-03 14:25:18",
      userId: "USR003",
      action: "Form Submit",
      page: "/contact",
      duration: "5:20",
      device: "Tablet",
    },
    {
      timestamp: "2025-01-03 14:22:45",
      userId: "USR001",
      action: "Page View",
      page: "/reports",
      duration: "3:12",
      device: "Desktop",
    },
    {
      timestamp: "2025-01-03 14:20:03",
      userId: "USR004",
      action: "Download",
      page: "/resources",
      duration: "1:30",
      device: "Desktop",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="flex">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Data Analytics Center</h1>
              <p className="text-gray-600">Comprehensive data analysis with detailed insights</p>
            </div>

            {/* Summary Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {summaryMetrics.map((metric, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">{metric.label}</CardTitle>
                    <metric.icon className="h-4 w-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 mb-3">{metric.value}</div>
                    <div className="h-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded border-2 border-dashed border-gray-200 flex items-center justify-center">
                      <span className="text-xs text-gray-500 capitalize">{metric.preview} preview</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trends Section */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Performance Trends</CardTitle>
                    <CardDescription>Monitor key metrics and their trends over time</CardDescription>
                  </div>
                  <Select defaultValue="sessions">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sessions">Active Sessions</SelectItem>
                      <SelectItem value="users">Total Users</SelectItem>
                      <SelectItem value="pageviews">Page Views</SelectItem>
                      <SelectItem value="conversions">Conversions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Trend Visualization</p>
                    <p className="text-sm text-gray-500 mt-1">Real-time metric trends with selectable time ranges</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Data Table */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Activity Log</CardTitle>
                    <CardDescription>Detailed breakdown of user interactions and behaviors</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      CSV
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Excel
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search activities..." className="pl-10" />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Actions</SelectItem>
                      <SelectItem value="pageview">Page Views</SelectItem>
                      <SelectItem value="click">Clicks</SelectItem>
                      <SelectItem value="form">Form Submits</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all-devices">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-devices">All Devices</SelectItem>
                      <SelectItem value="desktop">Desktop</SelectItem>
                      <SelectItem value="mobile">Mobile</SelectItem>
                      <SelectItem value="tablet">Tablet</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>

                {/* Data Table */}
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">
                          <Button variant="ghost" size="sm" className="h-auto p-0 font-semibold">
                            Timestamp
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </Button>
                        </TableHead>
                        <TableHead className="font-semibold">
                          <Button variant="ghost" size="sm" className="h-auto p-0 font-semibold">
                            User ID
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </Button>
                        </TableHead>
                        <TableHead className="font-semibold">Action</TableHead>
                        <TableHead className="font-semibold">Page</TableHead>
                        <TableHead className="font-semibold">Duration</TableHead>
                        <TableHead className="font-semibold">Device</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tableData.map((row, index) => (
                        <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <TableCell className="font-mono text-sm">{row.timestamp}</TableCell>
                          <TableCell className="font-medium">{row.userId}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                row.action === "Page View"
                                  ? "default"
                                  : row.action === "Click"
                                    ? "secondary"
                                    : row.action === "Form Submit"
                                      ? "destructive"
                                      : "outline"
                              }
                            >
                              {row.action}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-blue-600 hover:underline cursor-pointer">{row.page}</TableCell>
                          <TableCell className="font-mono text-sm">{row.duration}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                row.device === "Desktop"
                                  ? "bg-blue-100 text-blue-800"
                                  : row.device === "Mobile"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {row.device}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-600">Showing 1 to 5 of 1,234 results</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-blue-600 text-white">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
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
