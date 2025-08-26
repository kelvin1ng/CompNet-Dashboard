"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Activity, Server, TrendingUp, TrendingDown, Calendar } from "lucide-react"

export default function Design1Page() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const metrics = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Sessions",
      value: "567",
      change: "+8.2%",
      trend: "up",
      icon: Activity,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "System Health",
      value: "99.9%",
      change: "Excellent",
      trend: "stable",
      icon: Server,
      color: "text-green-600",
      bgColor: "bg-green-50",
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
              <p className="text-gray-600">Monitor your web analytics in real-time</p>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-200 hover:border-blue-300 cursor-pointer"
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
                    <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                      <metric.icon className={`h-4 w-4 ${metric.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="flex items-center gap-1">
                      {metric.trend === "up" && <TrendingUp className="h-4 w-4 text-green-600" />}
                      {metric.trend === "down" && <TrendingDown className="h-4 w-4 text-red-600" />}
                      <span
                        className={`text-sm ${
                          metric.trend === "up"
                            ? "text-green-600"
                            : metric.trend === "down"
                              ? "text-red-600"
                              : "text-gray-600"
                        }`}
                      >
                        {metric.change}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Analytics Card */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Activity Over Time</CardTitle>
                    <CardDescription>Track user engagement and session patterns</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="7d">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1d">Last 24h</SelectItem>
                        <SelectItem value="7d">Last 7 days</SelectItem>
                        <SelectItem value="30d">Last 30 days</SelectItem>
                        <SelectItem value="90d">Last 90 days</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Custom Range
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Chart Placeholder</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Real-time user activity visualization would appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Cards Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Top Pages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { page: "/dashboard", views: "1,234", change: "+5%" },
                      { page: "/analytics", views: "987", change: "+12%" },
                      { page: "/reports", views: "654", change: "-2%" },
                      { page: "/settings", views: "321", change: "+8%" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2">
                        <span className="text-sm font-medium text-gray-900">{item.page}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{item.views}</span>
                          <Badge variant={item.change.startsWith("+") ? "default" : "destructive"}>{item.change}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { action: "New user registered", time: "2 minutes ago", type: "success" },
                      { action: "Report generated", time: "5 minutes ago", type: "info" },
                      { action: "System backup completed", time: "1 hour ago", type: "success" },
                      { action: "High traffic alert", time: "2 hours ago", type: "warning" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 py-2">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            item.type === "success"
                              ? "bg-green-500"
                              : item.type === "warning"
                                ? "bg-yellow-500"
                                : "bg-blue-500"
                          }`}
                        ></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{item.action}</p>
                          <p className="text-xs text-gray-500">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
