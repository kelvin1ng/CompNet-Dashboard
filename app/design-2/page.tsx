"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Users, Activity, Clock, TrendingUp, Plus, MousePointer, Zap } from "lucide-react"

export default function Design2Page() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const topMetrics = [
    { label: "Total Users", value: "1,234", trend: "+12.5%", icon: Users },
    { label: "Active Sessions", value: "567", trend: "+8.2%", icon: Activity },
    { label: "Avg. Session", value: "4:32", trend: "+2.1%", icon: Clock },
    { label: "Conversion Rate", value: "3.4%", trend: "+0.8%", icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="flex">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
              <p className="text-gray-600">Comprehensive analytics with organized data views</p>
            </div>

            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {topMetrics.map((metric, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
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
            <Tabs defaultValue="behavior" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 lg:w-96">
                <TabsTrigger value="behavior" className="flex items-center gap-2">
                  <MousePointer className="h-4 w-4" />
                  User Behavior
                </TabsTrigger>
                <TabsTrigger value="performance" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Performance
                </TabsTrigger>
                <TabsTrigger value="reports" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Custom Reports
                </TabsTrigger>
              </TabsList>

              <TabsContent value="behavior" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>User Flow Analysis</CardTitle>
                      <CardDescription>Track how users navigate through your application</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        <div className="text-center">
                          <MousePointer className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-600 font-medium">Funnel Visualization</p>
                          <p className="text-sm text-gray-500 mt-1">Interactive user flow diagram</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Heatmap Preview</CardTitle>
                      <CardDescription>Visual representation of user interactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        <div className="text-center">
                          <Activity className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-600 font-medium">Click Heatmap</p>
                          <p className="text-sm text-gray-500 mt-1">User interaction hotspots</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Page Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { page: "Homepage", bounceRate: "32%", avgTime: "2:45", exitRate: "28%" },
                        { page: "Product Page", bounceRate: "45%", avgTime: "3:12", exitRate: "35%" },
                        { page: "Checkout", bounceRate: "15%", avgTime: "1:30", exitRate: "12%" },
                        { page: "Contact", bounceRate: "55%", avgTime: "1:15", exitRate: "48%" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-900">{item.page}</span>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="text-center">
                              <p className="text-gray-500">Bounce Rate</p>
                              <p className="font-medium">{item.bounceRate}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-gray-500">Avg Time</p>
                              <p className="font-medium">{item.avgTime}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-gray-500">Exit Rate</p>
                              <p className="font-medium">{item.exitRate}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="performance" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Server Response</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">245ms</div>
                        <p className="text-sm text-gray-600">Average response time</p>
                        <Badge className="mt-2 bg-green-100 text-green-800">Excellent</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Page Load Speed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">1.2s</div>
                        <p className="text-sm text-gray-600">Average load time</p>
                        <Badge className="mt-2 bg-blue-100 text-blue-800">Good</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Uptime</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                        <p className="text-sm text-gray-600">Last 30 days</p>
                        <Badge className="mt-2 bg-green-100 text-green-800">Excellent</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>System Performance Timeline</CardTitle>
                    <CardDescription>Monitor system metrics over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                      <div className="text-center">
                        <Zap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">Performance Chart</p>
                        <p className="text-sm text-gray-500 mt-1">Real-time system metrics visualization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Custom Report Builder</CardTitle>
                    <CardDescription>Create personalized reports with your preferred metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Plus className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Create Your First Report</h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Build custom reports by selecting metrics, date ranges, and visualization types
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Weekly Summary", type: "Automated", status: "Active" },
                    { name: "User Engagement", type: "Custom", status: "Draft" },
                    { name: "Revenue Analysis", type: "Scheduled", status: "Active" },
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
