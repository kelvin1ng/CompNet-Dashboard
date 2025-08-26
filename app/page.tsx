"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation" // Added useRouter import for navigation
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Users,
  Activity,
  Clock,
  TrendingUp,
  Plus,
  GraduationCap,
  Server,
  FileText,
  CheckCircle,
  AlertCircle,
  XCircle,
} from "lucide-react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function HomePage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const router = useRouter() // Added router instance for navigation
  const [activeTab, setActiveTab] = useState("student-activity")
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    setLastUpdated(new Date())
  }, [activeTab])

  const topMetrics = [
    { label: "Active Students", value: "847", trend: "+5.2%", icon: Users },
    { label: "System Sessions", value: "1,234", trend: "+12.1%", icon: Activity },
    { label: "Avg. Session", value: "18:45", trend: "+8.3%", icon: Clock },
    { label: "Service Uptime", value: "99.8%", trend: "+0.1%", icon: TrendingUp },
  ]

  const engagementFlowData = {
    nodes: [
      { name: "Dashboard" },
      { name: "VM Management" },
      { name: "Exam System" },
      { name: "Announcements" },
      { name: "Elections" },
      { name: "OneCard" },
    ],
    links: [
      { source: 0, target: 1, value: 234 },
      { source: 0, target: 2, value: 156 },
      { source: 0, target: 3, value: 623 },
      { source: 1, target: 2, value: 89 },
      { source: 2, target: 3, value: 45 },
      { source: 0, target: 4, value: 78 },
      { source: 0, target: 5, value: 123 },
    ],
  }

  const heatmapData = [
    { hour: "6AM", Mon: 12, Tue: 8, Wed: 15, Thu: 10, Fri: 18, Sat: 5, Sun: 3 },
    { hour: "9AM", Mon: 145, Tue: 132, Wed: 156, Thu: 142, Fri: 138, Sat: 25, Sun: 18 },
    { hour: "12PM", Mon: 234, Tue: 245, Wed: 267, Thu: 223, Fri: 198, Sat: 45, Sun: 32 },
    { hour: "3PM", Mon: 189, Tue: 201, Wed: 178, Thu: 195, Fri: 167, Sat: 38, Sun: 28 },
    { hour: "6PM", Mon: 89, Tue: 95, Wed: 87, Thu: 92, Fri: 78, Sat: 65, Sun: 45 },
    { hour: "9PM", Mon: 34, Tue: 28, Wed: 31, Thu: 29, Fri: 42, Sat: 78, Sun: 65 },
  ]

  const microservicesHealth = [
    { name: "Dashboard", status: "healthy", uptime: 99.9, responseTime: 120, requests: 15420 },
    { name: "VM Management", status: "healthy", uptime: 99.7, responseTime: 340, requests: 2340 },
    { name: "Email Service", status: "healthy", uptime: 99.8, responseTime: 180, requests: 8760 },
    { name: "Exam System", status: "warning", uptime: 98.5, responseTime: 450, requests: 4560 },
    { name: "Announcement Service", status: "healthy", uptime: 99.9, responseTime: 95, requests: 12340 },
    { name: "Election Service", status: "healthy", uptime: 99.6, responseTime: 210, requests: 890 },
    { name: "OneCard Service", status: "healthy", uptime: 99.4, responseTime: 280, requests: 3450 },
    { name: "Analytics DB", status: "healthy", uptime: 99.9, responseTime: 85, requests: 18900 },
  ]

  const responseTimeData = [
    { time: "00:00", dashboard: 120, vm: 340, email: 180, exam: 450, announcement: 95 },
    { time: "04:00", dashboard: 115, vm: 320, email: 175, exam: 420, announcement: 90 },
    { time: "08:00", dashboard: 140, vm: 380, email: 200, exam: 480, announcement: 110 },
    { time: "12:00", dashboard: 160, vm: 420, email: 220, exam: 520, announcement: 130 },
    { time: "16:00", dashboard: 145, vm: 390, email: 195, exam: 470, announcement: 115 },
    { time: "20:00", dashboard: 125, vm: 350, email: 185, exam: 440, announcement: 100 },
  ]

  const serviceStatusData = [
    { name: "Healthy", value: 7, color: "#10b981" },
    { name: "Warning", value: 1, color: "#f59e0b" },
    { name: "Critical", value: 0, color: "#ef4444" },
  ]

  const reportDistribution = [
    { name: "Performance", value: 4, color: "#3b82f6" },
    { name: "Usage", value: 3, color: "#10b981" },
    { name: "Security", value: 2, color: "#f59e0b" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      case "critical":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-green-100 text-green-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      case "critical":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen">
      <Header onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="flex">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Student System Analytics</h1>
              <p className="text-gray-600">Master of Computer Networks Program - Toronto Metropolitan University</p>
            </div>

            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {topMetrics.map((metric, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() =>
                    setActiveTab(index === 3 ? "system-performance" : "student-activity")
                  }
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                        <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <TrendingUp className="h-3 w-3 text-green-600" />
                          <span className="text-xs text-green-600">{metric.trend}</span>
                        </div>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <metric.icon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tabbed Interface */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                <TabsTrigger value="student-activity" className="flex items-center gap-2 px-4 py-2">
                  <GraduationCap className="h-4 w-4" />
                  Student Activity
                </TabsTrigger>
                <TabsTrigger value="system-performance" className="flex items-center gap-2 px-4 py-2">
                  <Server className="h-4 w-4" />
                  System Performance
                </TabsTrigger>
                <TabsTrigger value="academic-reports" className="flex items-center gap-2 px-4 py-2">
                  <FileText className="h-4 w-4" />
                  Academic Reports
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student-activity" className="space-y-6">
                <p className="text-sm text-gray-500">Last updated: {lastUpdated.toLocaleTimeString()}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>User Journey Flow</CardTitle>
                      <CardDescription>
                        Visual flow of student navigation patterns through system services
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer
                        config={{
                          entry: {
                            label: "Entry Points",
                            color: "hsl(217, 91%, 60%)",
                          },
                          exit: {
                            label: "Exit Points",
                            color: "hsl(142, 76%, 36%)",
                          },
                          retention: {
                            label: "Retention Rate",
                            color: "hsl(262, 83%, 58%)",
                          },
                        }}
                        className="h-64"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={[
                              { service: "Dashboard", entry: 847, exit: 623, retention: 73.6 },
                              { service: "Announcements", entry: 623, exit: 445, retention: 71.4 },
                              { service: "VM Mgmt", entry: 234, exit: 156, retention: 66.7 },
                              { service: "Exams", entry: 156, exit: 89, retention: 57.1 },
                              { service: "Elections", entry: 78, exit: 45, retention: 57.7 },
                              { service: "OneCard", entry: 123, exit: 98, retention: 79.7 },
                            ]}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="service" tick={{ fontSize: 12 }} stroke="#6b7280" />
                            <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
                            <ChartTooltip
                              content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                  return (
                                    <div className="bg-white p-3 border rounded-lg shadow-lg">
                                      <p className="font-medium text-gray-900">{label}</p>
                                      <p className="text-blue-600">Entry: {payload[0]?.value} users</p>
                                      <p className="text-green-600">Exit: {payload[1]?.value} users</p>
                                      <p className="text-purple-600">Retention: {payload[0]?.payload?.retention}%</p>
                                    </div>
                                  )
                                }
                                return null
                              }}
                            />
                            <Bar dataKey="entry" fill="hsl(217, 91%, 60%)" name="Entry Points" radius={[2, 2, 0, 0]} />
                            <Bar dataKey="exit" fill="hsl(142, 76%, 36%)" name="Exit Points" radius={[2, 2, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Activity Heatmap</CardTitle>
                      <CardDescription>Student activity patterns by time and day</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer
                        config={{
                          Mon: { label: "Monday", color: "hsl(217, 91%, 60%)" },
                          Tue: { label: "Tuesday", color: "hsl(262, 83%, 58%)" },
                          Wed: { label: "Wednesday", color: "hsl(142, 76%, 36%)" },
                          Thu: { label: "Thursday", color: "hsl(38, 92%, 50%)" },
                          Fri: { label: "Friday", color: "hsl(346, 87%, 43%)" },
                          Sat: { label: "Saturday", color: "hsl(24, 95%, 53%)" },
                          Sun: { label: "Sunday", color: "hsl(12, 76%, 61%)" },
                        }}
                        className="h-64"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={heatmapData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="hour" tick={{ fontSize: 12 }} stroke="#6b7280" />
                            <YAxis tick={{ fontSize: 12 }} stroke="#6b7280" />
                            <ChartTooltip
                              content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                  return (
                                    <div className="bg-white p-3 border rounded-lg shadow-lg">
                                      <p className="font-medium text-gray-900">{label}</p>
                                      {payload.map((entry, index) => (
                                        <p key={index} style={{ color: entry.color }}>
                                          {entry.dataKey}: {entry.value} students
                                        </p>
                                      ))}
                                    </div>
                                  )
                                }
                                return null
                              }}
                            />
                            <Bar dataKey="Mon" stackId="a" fill="hsl(217, 91%, 60%)" />
                            <Bar dataKey="Tue" stackId="a" fill="hsl(262, 83%, 58%)" />
                            <Bar dataKey="Wed" stackId="a" fill="hsl(142, 76%, 36%)" />
                            <Bar dataKey="Thu" stackId="a" fill="hsl(38, 92%, 50%)" />
                            <Bar dataKey="Fri" stackId="a" fill="hsl(346, 87%, 43%)" />
                            <Bar dataKey="Sat" stackId="a" fill="hsl(24, 95%, 53%)" />
                            <Bar dataKey="Sun" stackId="a" fill="hsl(12, 76%, 61%)" />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent User Actions</CardTitle>
                      <CardDescription>Live feed of student system interactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {[
                          {
                            user: "Sarah Chen",
                            action: "Submitted Exam",
                            service: "Exam System",
                            time: "2 min ago",
                            status: "success",
                          },
                          {
                            user: "Mike Johnson",
                            action: "Created VM Instance",
                            service: "VM Management",
                            time: "5 min ago",
                            status: "success",
                          },
                          {
                            user: "Emily Davis",
                            action: "Viewed Announcement",
                            service: "Announcements",
                            time: "8 min ago",
                            status: "info",
                          },
                          {
                            user: "Alex Kumar",
                            action: "Cast Vote",
                            service: "Elections",
                            time: "12 min ago",
                            status: "success",
                          },
                          {
                            user: "Lisa Wang",
                            action: "OneCard Transaction",
                            service: "OneCard",
                            time: "15 min ago",
                            status: "success",
                          },
                          {
                            user: "David Brown",
                            action: "Login Attempt Failed",
                            service: "Dashboard",
                            time: "18 min ago",
                            status: "warning",
                          },
                          {
                            user: "Jessica Lee",
                            action: "Downloaded Report",
                            service: "Analytics",
                            time: "22 min ago",
                            status: "info",
                          },
                          {
                            user: "Tom Wilson",
                            action: "VM Deployment",
                            service: "VM Management",
                            time: "25 min ago",
                            status: "success",
                          },
                          {
                            user: "Anna Garcia",
                            action: "Email Notification",
                            service: "Email Service",
                            time: "28 min ago",
                            status: "info",
                          },
                          {
                            user: "Chris Taylor",
                            action: "System Access",
                            service: "Dashboard",
                            time: "32 min ago",
                            status: "success",
                          },
                        ].map((activity, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  activity.status === "success"
                                    ? "bg-green-500"
                                    : activity.status === "warning"
                                      ? "bg-yellow-500"
                                      : "bg-blue-500"
                                }`}
                              ></div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                                <p className="text-xs text-gray-600">
                                  {activity.action} • {activity.service}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500">{activity.time}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>User Behavior Patterns</CardTitle>
                      <CardDescription>Analysis of common student interaction patterns</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-900 mb-2">Peak Usage Pattern</h4>
                          <p className="text-sm text-blue-700">
                            Students are most active between 12PM-3PM on weekdays, with 67% of daily interactions
                            occurring during this window.
                          </p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-900 mb-2">Service Preference</h4>
                          <p className="text-sm text-green-700">
                            Announcements service has the highest engagement rate (73.6%), followed by OneCard
                            transactions (79.7% retention).
                          </p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-900 mb-2">Session Duration</h4>
                          <p className="text-sm text-purple-700">
                            Average session length is 18:45 minutes, with VM Management sessions lasting longest (45:15
                            avg).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="system-performance" className="space-y-6">
                <p className="text-sm text-gray-500">Last updated: {lastUpdated.toLocaleTimeString()}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">API Response Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">185ms</div>
                        <p className="text-sm text-gray-600">Average across all services</p>
                        <Badge className="mt-2 bg-green-100 text-green-800">Excellent</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Message Queue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">0.8s</div>
                        <p className="text-sm text-gray-600">RabbitMQ processing time</p>
                        <Badge className="mt-2 bg-blue-100 text-blue-800">Good</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">System Uptime</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
                        <p className="text-sm text-gray-600">All microservices</p>
                        <Badge className="mt-2 bg-green-100 text-green-800">Excellent</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Microservices Health Monitor</CardTitle>
                    <CardDescription>Real-time status of all system components</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Service Status Overview */}
                      <Card className="lg:col-span-1">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">Service Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={{
                              healthy: { label: "Healthy", color: "#10b981" },
                              warning: { label: "Warning", color: "#f59e0b" },
                              critical: { label: "Critical", color: "#ef4444" },
                            }}
                            className="h-32"
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={serviceStatusData}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={20}
                                  outerRadius={50}
                                  dataKey="value"
                                >
                                  {serviceStatusData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <ChartTooltip content={<ChartTooltipContent />} />
                              </PieChart>
                            </ResponsiveContainer>
                          </ChartContainer>
                          <div className="mt-3 space-y-1">
                            {serviceStatusData.map((item, index) => (
                              <div key={index} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                  <span>{item.name}</span>
                                </div>
                                <span className="font-medium">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Response Time Trends */}
                      <Card className="lg:col-span-2">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">Response Time Trends (24h)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={{
                              dashboard: { label: "Dashboard", color: "#3b82f6" },
                              vm: { label: "VM Management", color: "#10b981" },
                              email: { label: "Email Service", color: "#f59e0b" },
                              exam: { label: "Exam System", color: "#ef4444" },
                              announcement: { label: "Announcements", color: "#8b5cf6" },
                            }}
                            className="h-32"
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={responseTimeData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Line type="monotone" dataKey="dashboard" stroke="#3b82f6" strokeWidth={2} />
                                <Line type="monotone" dataKey="vm" stroke="#10b981" strokeWidth={2} />
                                <Line type="monotone" dataKey="email" stroke="#f59e0b" strokeWidth={2} />
                                <Line type="monotone" dataKey="exam" stroke="#ef4444" strokeWidth={2} />
                                <Line type="monotone" dataKey="announcement" stroke="#8b5cf6" strokeWidth={2} />
                              </LineChart>
                            </ResponsiveContainer>
                          </ChartContainer>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Detailed Service Status */}
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Service Details</h4>
                      <div className="space-y-3">
                        {microservicesHealth.map((service, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                            <div className="flex items-center gap-3">
                              {getStatusIcon(service.status)}
                              <div>
                                <p className="font-medium text-gray-900">{service.name}</p>
                                <Badge className={`text-xs ${getStatusColor(service.status)}`}>
                                  {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center gap-6 text-sm">
                              <div className="text-center">
                                <p className="text-gray-500">Uptime</p>
                                <p className="font-medium">{service.uptime}%</p>
                              </div>
                              <div className="text-center">
                                <p className="text-gray-500">Response</p>
                                <p className="font-medium">{service.responseTime}ms</p>
                              </div>
                              <div className="text-center">
                                <p className="text-gray-500">Requests/h</p>
                                <p className="font-medium">{service.requests.toLocaleString()}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="academic-reports" className="space-y-6">
                <p className="text-sm text-gray-500">Last updated: {lastUpdated.toLocaleTimeString()}</p>
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Report Builder</CardTitle>
                    <CardDescription>Generate custom reports for student performance and system usage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Create Academic Report</h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Build reports for student engagement, exam analytics, system usage, and course performance
                      </p>
                      <Button
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => router.push("/reports")} // Added navigation to reports page
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        New Academic Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Report Type Breakdown</CardTitle>
                    <CardDescription>Distribution of active reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        Performance: { label: "Performance", color: "#3b82f6" },
                        Usage: { label: "Usage", color: "#10b981" },
                        Security: { label: "Security", color: "#f59e0b" },
                      }}
                      className="h-64"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={reportDistribution}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            dataKey="value"
                          >
                            {reportDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Network Lab Performance", type: "Weekly", status: "Active" },
                    { name: "VM Resource Utilization", type: "Daily", status: "Active" },
                    { name: "Course Completion Analytics", type: "Semester", status: "Active" },
                    { name: "System Security Audit", type: "Monthly", status: "Active" },
                    { name: "Infrastructure Performance", type: "Real-time", status: "Active" },
                    { name: "Student Project Analytics", type: "Custom", status: "Draft" },
                    { name: "Network Traffic Analysis", type: "Weekly", status: "Active" },
                    { name: "Exam System Performance", type: "Event-based", status: "Scheduled" },
                    { name: "Email Service Metrics", type: "Daily", status: "Active" },
                  ].map((report, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{report.name}</h4>
                          <Badge variant={report.status === "Active" ? "default" : "secondary"}>{report.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{report.type} Report</p>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          View Report
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
