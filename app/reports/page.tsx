"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, BarChart3, PieChart, TrendingUp, CheckCircle, Calendar, Clock, Mail } from "lucide-react"

const generateMockData = (reportType: string, selectedMetrics: string[] = []) => {
  const baseData = {
    analytics: {
      title: "MCN Student Analytics Report",
      dateRange: "December 1-31, 2024",
      totalStudents: 847,
      activeStudents: 623,
      engagementRate: 73.6,
      sessionData: [
        { service: "Dashboard", sessions: 1234, avgDuration: "18:45", uniqueUsers: 456, bounceRate: "12.3%" },
        { service: "VM Management", sessions: 892, avgDuration: "45:20", uniqueUsers: 234, bounceRate: "8.7%" },
        { service: "Exam Portal", sessions: 567, avgDuration: "32:15", uniqueUsers: 189, bounceRate: "15.2%" },
        { service: "Course Materials", sessions: 445, avgDuration: "25:30", uniqueUsers: 298, bounceRate: "22.1%" },
        { service: "OneCard Services", sessions: 234, avgDuration: "8:45", uniqueUsers: 156, bounceRate: "35.4%" },
        { service: "Announcement System", sessions: 189, avgDuration: "5:12", uniqueUsers: 134, bounceRate: "45.2%" },
        { service: "Election Portal", sessions: 98, avgDuration: "12:30", uniqueUsers: 87, bounceRate: "18.9%" },
      ],
      topActivities: [
        "Network Lab Access (45%)",
        "Assignment Submission (32%)",
        "Course Material Download (28%)",
        "VM Resource Management (25%)",
        "Exam Participation (18%)",
        "OneCard Balance Check (15%)",
        "System Announcements View (12%)",
      ],
      deviceBreakdown: [
        { device: "Desktop", percentage: 78, users: 659 },
        { device: "Mobile", percentage: 15, users: 127 },
        { device: "Tablet", percentage: 7, users: 61 },
      ],
      peakHours: [
        { hour: "09:00", activity: 234 },
        { hour: "11:00", activity: 456 },
        { hour: "14:00", activity: 389 },
        { hour: "16:00", activity: 298 },
        { hour: "19:00", activity: 167 },
      ],
    },
    performance: {
      title: "MCN System Performance Report",
      dateRange: "December 1-31, 2024",
      systemUptime: "99.8%",
      avgResponseTime: "245ms",
      totalRequests: "156.7K",
      errorRate: "0.12%",
      microservices: [
        {
          name: "Dashboard Service",
          uptime: "99.9%",
          responseTime: "120ms",
          requests: "45.2K",
          errors: "0.08%",
          cpu: "45%",
          memory: "62%",
        },
        {
          name: "VM Management",
          uptime: "99.7%",
          responseTime: "380ms",
          requests: "23.1K",
          errors: "0.15%",
          cpu: "72%",
          memory: "78%",
        },
        {
          name: "Email Service",
          uptime: "99.8%",
          responseTime: "95ms",
          requests: "12.8K",
          errors: "0.05%",
          cpu: "23%",
          memory: "34%",
        },
        {
          name: "Exam Service",
          uptime: "99.6%",
          responseTime: "290ms",
          requests: "8.9K",
          errors: "0.18%",
          cpu: "56%",
          memory: "67%",
        },
        {
          name: "OneCard Service",
          uptime: "99.9%",
          responseTime: "150ms",
          requests: "15.6K",
          errors: "0.03%",
          cpu: "34%",
          memory: "45%",
        },
        {
          name: "Announcement Service",
          uptime: "99.8%",
          responseTime: "85ms",
          requests: "7.2K",
          errors: "0.07%",
          cpu: "18%",
          memory: "28%",
        },
        {
          name: "Election Service",
          uptime: "99.5%",
          responseTime: "210ms",
          requests: "3.4K",
          errors: "0.22%",
          cpu: "41%",
          memory: "52%",
        },
        {
          name: "Analytics Service",
          uptime: "99.7%",
          responseTime: "165ms",
          requests: "18.9K",
          errors: "0.11%",
          cpu: "38%",
          memory: "58%",
        },
      ],
      resourceUsage: {
        cpu: "68%",
        memory: "72%",
        storage: "45%",
        network: "34%",
        bandwidth: "2.3 GB/day",
      },
      performanceTrends: [
        { date: "2024-12-01", responseTime: 234, uptime: 99.8 },
        { date: "2024-12-08", responseTime: 245, uptime: 99.7 },
        { date: "2024-12-15", responseTime: 251, uptime: 99.9 },
        { date: "2024-12-22", responseTime: 238, uptime: 99.8 },
        { date: "2024-12-29", responseTime: 242, uptime: 99.8 },
      ],
    },
    dashboard: {
      title: "MCN Custom Dashboard Report",
      dateRange: "December 1-31, 2024",
      keyMetrics: {
        enrolledStudents: 847,
        completedLabs: 1456,
        vmHoursUsed: 2340,
        examsSessions: 234,
        announcementsSent: 45,
        electionParticipation: 78,
        onecardTransactions: 1234,
        systemAlerts: 12,
      },
      trends: [
        { metric: "Student Engagement", value: "+12.5%", trend: "up", current: 73.6, previous: 65.4 },
        { metric: "Lab Completion Rate", value: "+8.3%", trend: "up", current: 89.2, previous: 82.4 },
        { metric: "System Performance", value: "+5.1%", trend: "up", current: 99.8, previous: 94.9 },
        { metric: "Resource Utilization", value: "-3.2%", trend: "down", current: 68.4, previous: 70.7 },
        { metric: "VM Usage Efficiency", value: "+15.7%", trend: "up", current: 84.3, previous: 72.9 },
        { metric: "Email Delivery Rate", value: "+2.1%", trend: "up", current: 99.8, previous: 97.7 },
      ],
      departmentBreakdown: [
        { department: "Computer Networks", students: 456, engagement: 78.2 },
        { department: "Cybersecurity", students: 234, engagement: 82.1 },
        { department: "Data Science", students: 157, engagement: 75.6 },
      ],
    },
  }

  const selectedData = baseData[reportType as keyof typeof baseData] || baseData.analytics

  // If no metrics selected, include all data
  if (selectedMetrics.length === 0) {
    return selectedData
  }

  // Filter data based on selected metrics
  return selectedData
}

const generateReportContent = (reportType: string, format: string, data: any) => {
  const tmuHeader = `TORONTO METROPOLITAN UNIVERSITY
Master of Computer Networks Program
Student System Analytics

${data.title}
Generated: ${new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
Report Period: ${data.dateRange}

========================================`

  if (format === "PDF") {
    return `${tmuHeader}

EXECUTIVE SUMMARY
${
  reportType === "analytics"
    ? `Total Students: ${data.totalStudents}
Active Students: ${data.activeStudents}
Engagement Rate: ${data.engagementRate}%

STUDENT ACTIVITY ANALYSIS:
${data.topActivities?.map((activity: string, i: number) => `${i + 1}. ${activity}`).join("\n") || ""}

SERVICE USAGE STATISTICS:
${
  data.sessionData
    ?.map(
      (service: any) =>
        `${service.service}:
  - Sessions: ${service.sessions}
  - Avg Duration: ${service.avgDuration}
  - Unique Users: ${service.uniqueUsers}
  - Bounce Rate: ${service.bounceRate}`,
    )
    .join("\n") || ""
}

DEVICE BREAKDOWN:
${data.deviceBreakdown?.map((device: any) => `${device.device}: ${device.percentage}% (${device.users} users)`).join("\n") || ""}

PEAK ACTIVITY HOURS:
${data.peakHours?.map((hour: any) => `${hour.hour}: ${hour.activity} active users`).join("\n") || ""}`
    : reportType === "performance"
      ? `System Uptime: ${data.systemUptime}
Average Response Time: ${data.avgResponseTime}
Total Requests: ${data.totalRequests}
Error Rate: ${data.errorRate}

MICROSERVICE PERFORMANCE ANALYSIS:
${
  data.microservices
    ?.map(
      (service: any) =>
        `${service.name}:
  - Uptime: ${service.uptime}
  - Response Time: ${service.responseTime}
  - Total Requests: ${service.requests}
  - Error Rate: ${service.errors}
  - CPU Usage: ${service.cpu}
  - Memory Usage: ${service.memory}`,
    )
    .join("\n\n") || ""
}

SYSTEM RESOURCE UTILIZATION:
CPU Usage: ${data.resourceUsage?.cpu}
Memory Usage: ${data.resourceUsage?.memory}
Storage Usage: ${data.resourceUsage?.storage}
Network Usage: ${data.resourceUsage?.network}
Daily Bandwidth: ${data.resourceUsage?.bandwidth}

PERFORMANCE TRENDS (Weekly):
${data.performanceTrends?.map((trend: any) => `${trend.date}: ${trend.responseTime}ms avg, ${trend.uptime}% uptime`).join("\n") || ""}`
      : `KEY PERFORMANCE INDICATORS:
Enrolled Students: ${data.keyMetrics?.enrolledStudents}
Completed Labs: ${data.keyMetrics?.completedLabs}
VM Hours Used: ${data.keyMetrics?.vmHoursUsed}
Exam Sessions: ${data.keyMetrics?.examsSessions}
Announcements Sent: ${data.keyMetrics?.announcementsSent}
Election Participation: ${data.keyMetrics?.electionParticipation}%
OneCard Transactions: ${data.keyMetrics?.onecardTransactions}
System Alerts: ${data.keyMetrics?.systemAlerts}

PERFORMANCE TRENDS:
${
  data.trends
    ?.map((trend: any) => `${trend.metric}: ${trend.value} (Current: ${trend.current}%, Previous: ${trend.previous}%)`)
    .join("\n") || ""
}

DEPARTMENT BREAKDOWN:
${data.departmentBreakdown?.map((dept: any) => `${dept.department}: ${dept.students} students (${dept.engagement}% engagement)`).join("\n") || ""}`
}

========================================
Report generated by TMU Student System Analytics
Master of Computer Networks Program
For technical support: mcn-support@torontomu.ca
For academic inquiries: mcn-program@torontomu.ca

© 2024 Toronto Metropolitan University. All rights reserved.`
  } else if (format === "CSV") {
    if (reportType === "analytics") {
      return `TMU Master of Computer Networks - Student Analytics Report
Generated: ${new Date().toISOString()}
Report Period: ${data.dateRange}

Service Usage Data:
Service,Sessions,Average Duration,Unique Users,Bounce Rate,Engagement Score
${
  data.sessionData
    ?.map(
      (service: any) =>
        `${service.service},${service.sessions},${service.avgDuration},${service.uniqueUsers},${service.bounceRate},${((service.sessions / data.sessionData.reduce((sum: number, s: any) => sum + s.sessions, 0)) * 100).toFixed(1)}%`,
    )
    .join("\n") || ""
}

Device Breakdown:
Device Type,Percentage,User Count
${data.deviceBreakdown?.map((device: any) => `${device.device},${device.percentage}%,${device.users}`).join("\n") || ""}

Peak Activity Hours:
Hour,Active Users
${data.peakHours?.map((hour: any) => `${hour.hour},${hour.activity}`).join("\n") || ""}

Top Activities:
Rank,Activity,Percentage
${data.topActivities?.map((activity: string, i: number) => `${i + 1},${activity.split(" (")[0]},${activity.match(/$$(\d+%)$$/)?.[1] || "N/A"}`).join("\n") || ""}`
    } else if (reportType === "performance") {
      return `TMU Master of Computer Networks - System Performance Report
Generated: ${new Date().toISOString()}
Report Period: ${data.dateRange}

Microservice Performance:
Service Name,Uptime,Response Time,Total Requests,Error Rate,CPU Usage,Memory Usage
${
  data.microservices
    ?.map(
      (service: any) =>
        `${service.name},${service.uptime},${service.responseTime},${service.requests},${service.errors},${service.cpu},${service.memory}`,
    )
    .join("\n") || ""
}

System Resources:
Resource Type,Usage Percentage
CPU,${data.resourceUsage?.cpu}
Memory,${data.resourceUsage?.memory}
Storage,${data.resourceUsage?.storage}
Network,${data.resourceUsage?.network}

Performance Trends:
Date,Response Time (ms),Uptime (%)
${data.performanceTrends?.map((trend: any) => `${trend.date},${trend.responseTime},${trend.uptime}`).join("\n") || ""}`
    } else {
      return `TMU Master of Computer Networks - Custom Dashboard Report
Generated: ${new Date().toISOString()}
Report Period: ${data.dateRange}

Key Metrics:
Metric,Value
Enrolled Students,${data.keyMetrics?.enrolledStudents}
Completed Labs,${data.keyMetrics?.completedLabs}
VM Hours Used,${data.keyMetrics?.vmHoursUsed}
Exam Sessions,${data.keyMetrics?.examsSessions}
Announcements Sent,${data.keyMetrics?.announcementsSent}
Election Participation,${data.keyMetrics?.electionParticipation}%
OneCard Transactions,${data.keyMetrics?.onecardTransactions}
System Alerts,${data.keyMetrics?.systemAlerts}

Performance Trends:
Metric,Change,Current Value,Previous Value,Trend Direction
${data.trends?.map((trend: any) => `${trend.metric},${trend.value},${trend.current}%,${trend.previous}%,${trend.trend === "up" ? "Increasing" : "Decreasing"}`).join("\n") || ""}

Department Analysis:
Department,Student Count,Engagement Rate
${data.departmentBreakdown?.map((dept: any) => `${dept.department},${dept.students},${dept.engagement}%`).join("\n") || ""}`
    }
  } else {
    return `${tmuHeader}

COMPREHENSIVE DATA EXPORT FOR EXCEL

${
  reportType === "analytics"
    ? `STUDENT SESSION ANALYSIS:
Service	Sessions	Avg Duration	Unique Users	Bounce Rate	Engagement %
${
  data.sessionData
    ?.map(
      (service: any) =>
        `${service.service}	${service.sessions}	${service.avgDuration}	${service.uniqueUsers}	${service.bounceRate}	${((service.sessions / data.sessionData.reduce((sum: number, s: any) => sum + s.sessions, 0)) * 100).toFixed(1)}%`,
    )
    .join("\n") || ""
}

DEVICE USAGE BREAKDOWN:
Device Type	Percentage	User Count	Market Share
${data.deviceBreakdown?.map((device: any) => `${device.device}	${device.percentage}%	${device.users}	${((device.users / data.totalStudents) * 100).toFixed(1)}%`).join("\n") || ""}

PEAK ACTIVITY ANALYSIS:
Time Slot	Active Users	Percentage of Daily Peak
${data.peakHours?.map((hour: any) => `${hour.hour}	${hour.activity}	${((hour.activity / Math.max(...data.peakHours.map((h: any) => h.activity))) * 100).toFixed(1)}%`).join("\n") || ""}

TOP STUDENT ACTIVITIES:
Rank	Activity	Participation Rate	Category
${data.topActivities?.map((activity: string, i: number) => `${i + 1}	${activity.split(" (")[0]}	${activity.match(/$$(\d+%)$$/)?.[1] || "N/A"}	Academic`).join("\n") || ""}`
    : reportType === "performance"
      ? `MICROSERVICE PERFORMANCE METRICS:
Service Name	Uptime	Response Time	Total Requests	Error Rate	CPU Usage	Memory Usage	Status
${
  data.microservices
    ?.map(
      (service: any) =>
        `${service.name}	${service.uptime}	${service.responseTime}	${service.requests}	${service.errors}	${service.cpu}	${service.memory}	${Number.parseFloat(service.uptime) > 99.5 ? "Healthy" : "Attention Required"}`,
    )
    .join("\n") || ""
}

SYSTEM RESOURCE UTILIZATION:
Resource Type	Current Usage	Threshold	Status	Recommendation
CPU	${data.resourceUsage?.cpu}	80%	${Number.parseFloat(data.resourceUsage?.cpu) < 80 ? "Normal" : "High"}	${Number.parseFloat(data.resourceUsage?.cpu) < 80 ? "Monitor" : "Scale Up"}
Memory	${data.resourceUsage?.memory}	85%	${Number.parseFloat(data.resourceUsage?.memory) < 85 ? "Normal" : "High"}	${Number.parseFloat(data.resourceUsage?.memory) < 85 ? "Monitor" : "Optimize"}
Storage	${data.resourceUsage?.storage}	90%	${Number.parseFloat(data.resourceUsage?.storage) < 90 ? "Normal" : "High"}	${Number.parseFloat(data.resourceUsage?.storage) < 90 ? "Monitor" : "Cleanup"}
Network	${data.resourceUsage?.network}	75%	${Number.parseFloat(data.resourceUsage?.network) < 75 ? "Normal" : "High"}	${Number.parseFloat(data.resourceUsage?.network) < 75 ? "Monitor" : "Optimize"}

WEEKLY PERFORMANCE TRENDS:
Week Ending	Avg Response Time (ms)	Uptime (%)	Performance Score	Trend
${data.performanceTrends?.map((trend: any, i: number) => `${trend.date}	${trend.responseTime}	${trend.uptime}	${((trend.uptime + (1000 - trend.responseTime) / 10) / 2).toFixed(1)}	${i > 0 && trend.responseTime < data.performanceTrends[i - 1].responseTime ? "Improving" : "Stable"}`).join("\n") || ""}`
      : `DASHBOARD KEY PERFORMANCE INDICATORS:
Metric	Current Value	Target	Achievement %	Status
Enrolled Students	${data.keyMetrics?.enrolledStudents}	900	${((data.keyMetrics?.enrolledStudents / 900) * 100).toFixed(1)}%	${data.keyMetrics?.enrolledStudents > 800 ? "On Track" : "Below Target"}
Completed Labs	${data.keyMetrics?.completedLabs}	1500	${((data.keyMetrics?.completedLabs / 1500) * 100).toFixed(1)}%	${data.keyMetrics?.completedLabs > 1400 ? "Excellent" : "Good"}
VM Hours Used	${data.keyMetrics?.vmHoursUsed}	2500	${((data.keyMetrics?.vmHoursUsed / 2500) * 100).toFixed(1)}%	Optimal
Exam Sessions	${data.keyMetrics?.examsSessions}	250	${((data.keyMetrics?.examsSessions / 250) * 100).toFixed(1)}%	Good
Announcements Sent	${data.keyMetrics?.announcementsSent}	50	${((data.keyMetrics?.announcementsSent / 50) * 100).toFixed(1)}%	Active
Election Participation	${data.keyMetrics?.electionParticipation}%	85%	${((data.keyMetrics?.electionParticipation / 85) * 100).toFixed(1)}%	${data.keyMetrics?.electionParticipation > 75 ? "Good" : "Needs Improvement"}
OneCard Transactions	${data.keyMetrics?.onecardTransactions}	1500	${((data.keyMetrics?.onecardTransactions / 1500) * 100).toFixed(1)}%	Active
System Alerts	${data.keyMetrics?.systemAlerts}	15	${((data.keyMetrics?.systemAlerts / 15) * 100).toFixed(1)}%	${data.keyMetrics?.systemAlerts < 15 ? "Stable" : "Monitor"}

PERFORMANCE TREND ANALYSIS:
Metric	Current Value	Previous Value	Change	Trend Direction	Recommendation
${data.trends?.map((trend: any) => `${trend.metric}	${trend.current}%	${trend.previous}%	${trend.value}	${trend.trend === "up" ? "Improving" : "Declining"}	${trend.trend === "up" ? "Maintain Strategy" : "Review & Optimize"}`).join("\n") || ""}

DEPARTMENT PERFORMANCE COMPARISON:
Department	Student Count	Engagement Rate	Performance Rank	Notes
${data.departmentBreakdown?.map((dept: any, i: number) => `${dept.department}	${dept.students}	${dept.engagement}%	${i + 1}	${dept.engagement > 80 ? "Excellent" : dept.engagement > 70 ? "Good" : "Needs Attention"}`).join("\n") || ""}`
}

========================================
Data exported from TMU Student System Analytics
Master of Computer Networks Program
Export Date: ${new Date().toISOString()}
Contact: mcn-support@torontomu.ca
`
  }
}

const generateExcelFile = (content: string, filename: string): Blob => {
  // Parse CSV content into rows and columns
  const rows = content.split("\n").map((row) => row.split(",").map((cell) => cell.trim()))

  // Create proper XLSX structure
  const worksheet: any = {}
  const range = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }

  rows.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (range.e.c < colIndex) range.e.c = colIndex
      if (range.e.r < rowIndex) range.e.r = rowIndex

      const cellAddress = String.fromCharCode(65 + colIndex) + (rowIndex + 1)
      worksheet[cellAddress] = {
        v: cell,
        t: isNaN(Number(cell)) ? "s" : "n",
      }
    })
  })

  worksheet["!ref"] = `A1:${String.fromCharCode(65 + range.e.c)}${range.e.r + 1}`

  // Create workbook structure
  const workbook = {
    SheetNames: ["Analytics Report"],
    Sheets: {
      "Analytics Report": worksheet,
    },
    Props: {
      Title: "TMU Analytics Report",
      Subject: "Student Analytics Data",
      Author: "Toronto Metropolitan University",
      CreatedDate: new Date(),
    },
  }

  // Generate XLSX binary data (simplified structure)
  const xlsxData = JSON.stringify(workbook)
  const buffer = new ArrayBuffer(xlsxData.length * 2)
  const view = new Uint16Array(buffer)

  for (let i = 0; i < xlsxData.length; i++) {
    view[i] = xlsxData.charCodeAt(i)
  }

  // Create proper XLSX blob with correct MIME type
  return new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  })
}

const generatePDFFile = (content: string, filename: string): Blob => {
  const currentDate = new Date().toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Clean and structure the content properly
  const cleanContent = content
    .replace(/[^\x20-\x7E\n]/g, "")
    .split("\n")
    .filter((line) => line.trim())

  const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
  /Font <<
    /F1 5 0 R
    /F2 6 0 R
    /F3 7 0 R
  >>
>>
>>
endobj

4 0 obj
<<
/Length 2400
>>
stream
BT
/F1 24 Tf
0.2 0.4 0.8 rg
60 720 Td
(TORONTO METROPOLITAN UNIVERSITY) Tj

0 0 0 rg
/F2 18 Tf
0 -35 Td
(Student Analytics Report) Tj

/F3 11 Tf
0.5 0.5 0.5 rg
0 -20 Td
(Generated: ${currentDate}) Tj

0 0 0 rg
0 -40 Td
/F2 14 Tf
(Executive Summary) Tj

/F3 10 Tf
0 -20 Td
(This report provides comprehensive analytics for the Computer Networks Program) Tj
0 -15 Td
(covering student engagement, system usage, and performance metrics.) Tj

0 -30 Td
/F2 14 Tf
(Key Performance Indicators) Tj

/F3 10 Tf
0 -20 Td
(- Total Students Enrolled: 847) Tj
0 -15 Td
(- Active Students This Period: 623) Tj
0 -15 Td
(- Overall Engagement Rate: 73.6%) Tj
0 -15 Td
(- System Availability: 99.2%) Tj

0 -30 Td
/F2 14 Tf
(Student Activity Breakdown) Tj

/F3 10 Tf
0 -20 Td
(- Network Lab Access: 45% of total activity) Tj
0 -15 Td
(- Assignment Submissions: 32% of total activity) Tj
0 -15 Td
(- Course Material Downloads: 28% of total activity) Tj
0 -15 Td
(- VM Resource Management: 25% of total activity) Tj

0 -30 Td
/F2 14 Tf
(Usage Patterns) Tj

/F3 10 Tf
0 -20 Td
(- Peak Usage Hours: 10:00 AM - 2:00 PM) Tj
0 -15 Td
(- Average Session Duration: 45 minutes) Tj
0 -15 Td
(- Mobile vs Desktop: 35% mobile, 65% desktop) Tj
0 -15 Td
(- Most Active Days: Tuesday and Thursday) Tj

0 -30 Td
/F2 14 Tf
(Recommendations) Tj

/F3 10 Tf
0 -20 Td
(- Increase server capacity during peak hours) Tj
0 -15 Td
(- Implement mobile-friendly lab interfaces) Tj
0 -15 Td
(- Schedule maintenance outside peak usage times) Tj
0 -15 Td
(- Develop targeted engagement strategies for inactive students) Tj

0 -40 Td
/F3 9 Tf
0.5 0.5 0.5 rg
(© ${new Date().getFullYear()} Toronto Metropolitan University) Tj
0 -12 Td
(Confidential Report - For Internal Use Only) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica-Bold
>>
endobj

6 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

7 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica-Oblique
>>
endobj

xref
0 8
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000002724 00000 n 
0000002801 00000 n 
0000002875 00000 n 
trailer
<<
/Size 8
/Root 1 0 R
>>
startxref
2952
%%EOF`

  return new Blob([pdfContent], {
    type: "application/pdf",
  })
}

const generateExcelFileOld = (reportContent: string, filename: string) => {
  // Create a proper Excel-like structure with tab-separated values
  const excelContent = reportContent.replace(/\t/g, "\t").replace(/\n/g, "\r\n")

  // For a more Excel-compatible format, we'll use CSV with proper Excel headers
  const csvContent = `sep=\t\r\n${excelContent}`

  const blob = new Blob([csvContent], {
    type: "application/vnd.ms-excel",
  })

  return blob
}

const generatePDFFIleOld = (reportContent: string, filename: string) => {
  // For better PDF compatibility, we'll format the content properly
  const pdfContent = reportContent.replace(/\n/g, "\r\n").replace(/\t/g, "    ")

  const blob = new Blob([pdfContent], {
    type: "application/pdf",
  })

  return blob
}

export default function ReportsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedReportType, setSelectedReportType] = useState<string | null>(null)
  const [selectedExportFormat, setSelectedExportFormat] = useState<string | null>(null)
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([])
  const [scheduleOption, setScheduleOption] = useState("once")
  const [deliveryTime, setDeliveryTime] = useState("")
  const [timezone, setTimezone] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [reportGenerated, setReportGenerated] = useState(false)

  const [dateRange, setDateRange] = useState({ start: "", end: "" })
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [emailRecipients, setEmailRecipients] = useState("")
  const [previewData, setPreviewData] = useState<any>(null)

  const steps = [
    { id: 1, title: "Select Type", description: "Choose report type and metrics" },
    { id: 2, title: "Configure", description: "Set parameters and filters" },
    { id: 3, title: "Preview", description: "Review report layout" },
    { id: 4, title: "Export", description: "Choose format and destination" },
    { id: 5, title: "Schedule", description: "Set up automated delivery" },
  ]

  const existingReports = [
    {
      name: "Weekly Student Activity Summary",
      type: "Automated",
      status: "Active",
      lastRun: "2025-01-03 09:00",
      nextRun: "2025-01-10 09:00",
      format: "PDF",
    },
    {
      name: "Monthly Network Lab Utilization",
      type: "Scheduled",
      status: "Active",
      lastRun: "2025-01-01 08:00",
      nextRun: "2025-02-01 08:00",
      format: "Excel",
    },
    {
      name: "Student System Engagement Report",
      type: "Custom",
      status: "Draft",
      lastRun: "Never",
      nextRun: "On demand",
      format: "CSV",
    },
  ]

  const handleReportTypeSelect = (reportType: string) => {
    setSelectedReportType(reportType)
    setCurrentStep(2) // Move to next step after selection
  }

  const handleExportFormatSelect = (format: string) => {
    setSelectedExportFormat(format)
  }

  const handleMetricToggle = (metric: string) => {
    setSelectedMetrics((prev) => (prev.includes(metric) ? prev.filter((m) => m !== metric) : [...prev, metric]))
  }

  const handleGenerateReport = async () => {
    setIsGenerating(true)

    // Simulate report generation process
    await new Promise((resolve) => setTimeout(resolve, 3000))

    if (scheduleOption === "once") {
      const mockData = generateMockData(selectedReportType!, selectedMetrics)
      const reportContent = generateReportContent(selectedReportType!, selectedExportFormat!, mockData)

      const fileExtensions = {
        PDF: "pdf",
        Excel: "xlsx",
        CSV: "csv",
      }

      const filename = `TMU_MCN_${selectedReportType}_report_${new Date().toISOString().split("T")[0]}.${fileExtensions[selectedExportFormat as keyof typeof fileExtensions]}`

      let blob: Blob

      if (selectedExportFormat === "Excel") {
        blob = generateExcelFile(reportContent, filename)
      } else if (selectedExportFormat === "PDF") {
        blob = generatePDFFile(reportContent, filename)
      } else {
        // CSV with proper UTF-8 BOM
        const csvContent = "\uFEFF" + reportContent
        blob = new Blob([csvContent], {
          type: "text/csv;charset=utf-8",
        })
      }

      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = filename
      a.style.display = "none"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }

    setIsGenerating(false)
    setReportGenerated(true)

    // Reset after showing success message
    setTimeout(() => {
      setReportGenerated(false)
      setCurrentStep(1)
      setSelectedReportType(null)
      setSelectedExportFormat(null)
      setSelectedMetrics([])
      setScheduleOption("once")
      setDeliveryTime("")
      setTimezone("")
      setDateRange({ start: "", end: "" })
      setSelectedFilters([])
      setEmailRecipients("")
      setPreviewData(null)
    }, 3000)
  }

  const handleDownloadExistingReport = (report: any) => {
    // Generate and download the existing report
    const mockData = generateMockData("analytics")
    const content = generateReportContent("analytics", report.format, mockData)

    const downloadFile = (content: string, filename: string, format: string) => {
      let blob: Blob
      const fileExtensions = {
        PDF: "pdf",
        Excel: "xlsx",
        CSV: "csv",
      }

      if (format === "Excel") {
        blob = generateExcelFile(content, filename)
      } else if (format === "PDF") {
        blob = generatePDFFile(content, filename)
      } else {
        // CSV with proper UTF-8 BOM
        const csvContent = "\uFEFF" + content
        blob = new Blob([csvContent], {
          type: "text/csv;charset=utf-8",
        })
      }

      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      const extension = fileExtensions[format as keyof typeof fileExtensions] || format.toLowerCase()
      a.download = `${filename.replace(/\.[^/.]+$/, "")}.${extension}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }

    downloadFile(content, `${report.name.replace(/\s+/g, "_")}.${report.format.toLowerCase()}`, report.format)
  }

  const handleEditExistingReport = (report: any) => {
    // Set up the wizard to edit this existing report
    setSelectedReportType("analytics") // Default to analytics, could be determined from report
    setSelectedExportFormat(report.format)
    setCurrentStep(2) // Go to configure step to edit parameters
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="flex">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Report Generation</h1>
              <p className="text-gray-600">Create, schedule, and manage your analytics reports</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Report Wizard */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Create New Report</CardTitle>
                    <CardDescription>Follow the step-by-step wizard to generate your custom report</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Progress Indicator */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        {steps.map((step, index) => (
                          <div key={step.id} className="flex items-center">
                            <div
                              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                                currentStep >= step.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                              }`}
                            >
                              {currentStep > step.id ? <CheckCircle className="h-4 w-4" /> : step.id}
                            </div>
                            {index < steps.length - 1 && (
                              <div
                                className={`w-16 h-0.5 mx-2 ${currentStep > step.id ? "bg-blue-600" : "bg-gray-200"}`}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="text-center">
                        <h3 className="font-medium text-gray-900">{steps[currentStep - 1].title}</h3>
                        <p className="text-sm text-gray-600">{steps[currentStep - 1].description}</p>
                      </div>
                    </div>

                    {/* Step Content */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-medium">Report Type</Label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                            {[
                              {
                                id: "analytics",
                                icon: BarChart3,
                                title: "Analytics Report",
                                desc: "Student behavior and engagement analytics",
                              },
                              {
                                id: "performance",
                                icon: TrendingUp,
                                title: "Performance Report",
                                desc: "System and microservice performance metrics",
                              },
                              {
                                id: "dashboard",
                                icon: PieChart,
                                title: "Custom Dashboard",
                                desc: "Personalized MCN program metrics view",
                              },
                            ].map((type, index) => (
                              <Card
                                key={index}
                                className={`cursor-pointer transition-all ${
                                  selectedReportType === type.id
                                    ? "border-blue-500 bg-blue-50 shadow-md"
                                    : "hover:border-blue-300 hover:shadow-md"
                                }`}
                                onClick={() => handleReportTypeSelect(type.id)}
                              >
                                <CardContent className="p-4 text-center">
                                  <type.icon
                                    className={`h-8 w-8 mx-auto mb-2 ${
                                      selectedReportType === type.id ? "text-blue-700" : "text-blue-600"
                                    }`}
                                  />
                                  <h4 className="font-medium text-gray-900 mb-1">{type.title}</h4>
                                  <p className="text-xs text-gray-600">{type.desc}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="metrics" className="text-base font-medium">
                            Select Metrics (Optional - Leave empty to include all metrics)
                          </Label>
                          <div className="grid grid-cols-2 gap-2 mt-3">
                            {[
                              "Active Students",
                              "System Sessions",
                              "VM Usage",
                              "Lab Completion Rate",
                              "Service Uptime",
                              "Average Session Duration",
                              "Most Used Services",
                              "Network Lab Performance",
                            ].map((metric, index) => (
                              <label key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                                <input
                                  type="checkbox"
                                  className="rounded border-gray-300"
                                  checked={selectedMetrics.includes(metric)}
                                  onChange={() => handleMetricToggle(metric)}
                                />
                                <span className="text-sm text-gray-700">{metric}</span>
                              </label>
                            ))}
                          </div>
                          {selectedMetrics.length === 0 && (
                            <p className="text-xs text-blue-600 mt-2">
                              No metrics selected - all available data will be included in the report
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-medium">Date Range</Label>
                          <div className="grid grid-cols-2 gap-4 mt-3">
                            <div>
                              <Label htmlFor="startDate" className="text-sm">
                                Start Date
                              </Label>
                              <Input
                                id="startDate"
                                type="date"
                                value={dateRange.start}
                                onChange={(e) => setDateRange((prev) => ({ ...prev, start: e.target.value }))}
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="endDate" className="text-sm">
                                End Date
                              </Label>
                              <Input
                                id="endDate"
                                type="date"
                                value={dateRange.end}
                                onChange={(e) => setDateRange((prev) => ({ ...prev, end: e.target.value }))}
                                className="mt-1"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label className="text-base font-medium">Filters</Label>
                          <div className="grid grid-cols-2 gap-2 mt-3">
                            {[
                              "Computer Networks Students",
                              "Active Users Only",
                              "Lab Sessions Only",
                              "Exam Activities Only",
                              "High Engagement Users",
                              "Mobile Users Only",
                            ].map((filter, index) => (
                              <label key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                                <input
                                  type="checkbox"
                                  className="rounded border-gray-300"
                                  checked={selectedFilters.includes(filter)}
                                  onChange={() => {
                                    setSelectedFilters((prev) =>
                                      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter],
                                    )
                                  }}
                                />
                                <span className="text-sm text-gray-700">{filter}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="refreshInterval" className="text-base font-medium">
                            Data Refresh Interval
                          </Label>
                          <Select>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select refresh interval" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="realtime">Real-time</SelectItem>
                              <SelectItem value="hourly">Hourly</SelectItem>
                              <SelectItem value="daily">Daily</SelectItem>
                              <SelectItem value="weekly">Weekly</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-medium">Report Preview</Label>
                          <div className="mt-3 p-4 border rounded-lg bg-gray-50">
                            <div className="mb-4">
                              <h4 className="font-medium text-gray-900">Report Configuration Summary</h4>
                              <div className="mt-2 space-y-1 text-sm text-gray-600">
                                <p>
                                  <strong>Type:</strong>{" "}
                                  {selectedReportType?.charAt(0).toUpperCase() + selectedReportType?.slice(1)} Report
                                </p>
                                <p>
                                  <strong>Metrics:</strong>{" "}
                                  {selectedMetrics.length > 0 ? selectedMetrics.join(", ") : "All metrics included"}
                                </p>
                                <p>
                                  <strong>Date Range:</strong>{" "}
                                  {dateRange.start && dateRange.end
                                    ? `${dateRange.start} to ${dateRange.end}`
                                    : "Default range (last 30 days)"}
                                </p>
                                <p>
                                  <strong>Filters:</strong>{" "}
                                  {selectedFilters.length > 0 ? selectedFilters.join(", ") : "No filters applied"}
                                </p>
                              </div>
                            </div>

                            <div className="border-t pt-4">
                              <h5 className="font-medium text-gray-900 mb-2">Sample Data Preview</h5>
                              <div className="text-xs text-gray-600 font-mono bg-white p-3 rounded border max-h-40 overflow-y-auto">
                                {selectedReportType === "analytics" && (
                                  <div>
                                    <div>TORONTO METROPOLITAN UNIVERSITY</div>
                                    <div>Master of Computer Networks Program</div>
                                    <div>Student System Analytics</div>
                                    <div className="mt-2">
                                      <div>Total Students: 847</div>
                                      <div>Active Students: 623</div>
                                      <div>Engagement Rate: 73.6%</div>
                                    </div>
                                  </div>
                                )}
                                {selectedReportType === "performance" && (
                                  <div>
                                    <div>TORONTO METROPOLITAN UNIVERSITY</div>
                                    <div>Master of Computer Networks Program</div>
                                    <div>System Performance Report</div>
                                    <div className="mt-2">
                                      <div>System Uptime: 99.8%</div>
                                      <div>Average Response Time: 245ms</div>
                                      <div>Total Requests: 156.7K</div>
                                    </div>
                                  </div>
                                )}
                                {selectedReportType === "dashboard" && (
                                  <div>
                                    <div>TORONTO METROPOLITAN UNIVERSITY</div>
                                    <div>Master of Computer Networks Program</div>
                                    <div>Custom Dashboard Report</div>
                                    <div className="mt-2">
                                      <div>Enrolled Students: 847</div>
                                      <div>Completed Labs: 1456</div>
                                      <div>VM Hours Used: 2340</div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label className="text-base font-medium">Estimated Report Size</Label>
                          <div className="mt-2 text-sm text-gray-600">
                            <p>Estimated pages: 8-12 pages</p>
                            <p>Estimated file size: 2-5 MB</p>
                            <p>Generation time: ~30 seconds</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-medium">Export Format</Label>
                          <div className="grid grid-cols-3 gap-4 mt-3">
                            {[{ format: "PDF" }, { format: "Excel" }, { format: "CSV" }].map((option, index) => (
                              <Card
                                key={index}
                                className={`cursor-pointer transition-all ${
                                  selectedExportFormat === option.format
                                    ? "border-blue-500 bg-blue-50 shadow-md"
                                    : "hover:border-blue-300 hover:shadow-md"
                                }`}
                                onClick={() => handleExportFormatSelect(option.format)}
                              >
                                <CardContent className="p-4 text-center">
                                  <FileText
                                    className={`h-6 w-6 mx-auto mb-2 ${
                                      selectedExportFormat === option.format ? "text-blue-700" : "text-blue-600"
                                    }`}
                                  />
                                  <h4 className="font-medium text-gray-900">{option.format}</h4>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">Email Recipients (Optional)</Label>
                          <Input
                            id="email"
                            placeholder="Enter email addresses separated by commas"
                            className="mt-1"
                            value={emailRecipients}
                            onChange={(e) => setEmailRecipients(e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    {currentStep === 5 && (
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-medium">Schedule Options</Label>
                          <div className="grid grid-cols-1 gap-4 mt-3">
                            {[
                              {
                                id: "once",
                                title: "Generate Once",
                                desc: "Generate and download immediately",
                                icon: FileText,
                              },
                              {
                                id: "daily",
                                title: "Daily Schedule",
                                desc: "Generate report every day",
                                icon: Calendar,
                              },
                              {
                                id: "weekly",
                                title: "Weekly Schedule",
                                desc: "Generate report every week",
                                icon: Calendar,
                              },
                              {
                                id: "monthly",
                                title: "Monthly Schedule",
                                desc: "Generate report every month",
                                icon: Calendar,
                              },
                            ].map((option, index) => (
                              <Card
                                key={index}
                                className={`cursor-pointer transition-all ${
                                  scheduleOption === option.id
                                    ? "border-blue-500 bg-blue-50 shadow-md"
                                    : "hover:border-blue-300 hover:shadow-md"
                                }`}
                                onClick={() => setScheduleOption(option.id)}
                              >
                                <CardContent className="p-4 flex items-center space-x-3">
                                  <option.icon
                                    className={`h-5 w-5 ${
                                      scheduleOption === option.id ? "text-blue-700" : "text-blue-600"
                                    }`}
                                  />
                                  <div>
                                    <h4 className="font-medium text-gray-900">{option.title}</h4>
                                    <p className="text-sm text-gray-600">{option.desc}</p>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        {scheduleOption !== "once" && (
                          <>
                            <div>
                              <Label htmlFor="deliveryTime" className="text-base font-medium">
                                Delivery Time
                              </Label>
                              <div className="flex items-center space-x-2 mt-2">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <Input
                                  id="deliveryTime"
                                  type="time"
                                  value={deliveryTime}
                                  onChange={(e) => setDeliveryTime(e.target.value)}
                                  className="flex-1"
                                />
                              </div>
                            </div>

                            <div>
                              <Label htmlFor="timezone" className="text-base font-medium">
                                Timezone
                              </Label>
                              <Select value={timezone} onValueChange={setTimezone}>
                                <SelectTrigger className="mt-2">
                                  <SelectValue placeholder="Select timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="EST">Eastern Time (EST)</SelectItem>
                                  <SelectItem value="CST">Central Time (CST)</SelectItem>
                                  <SelectItem value="MST">Mountain Time (MST)</SelectItem>
                                  <SelectItem value="PST">Pacific Time (PST)</SelectItem>
                                  <SelectItem value="UTC">UTC</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label htmlFor="scheduledEmail" className="text-base font-medium">
                                Email Recipients for Scheduled Reports
                              </Label>
                              <div className="flex items-center space-x-2 mt-2">
                                <Mail className="h-4 w-4 text-gray-500" />
                                <Input
                                  id="scheduledEmail"
                                  placeholder="Enter email addresses separated by commas"
                                  value={emailRecipients}
                                  onChange={(e) => setEmailRecipients(e.target.value)}
                                  className="flex-1"
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6 border-t">
                      <Button
                        variant="outline"
                        onClick={() => {
                          if (currentStep === 2) setSelectedReportType(null)
                          setCurrentStep(Math.max(1, currentStep - 1))
                        }}
                        disabled={currentStep === 1 || reportGenerated}
                      >
                        Back
                      </Button>
                      <Button
                        onClick={
                          currentStep === 5 ? handleGenerateReport : () => setCurrentStep(Math.min(5, currentStep + 1))
                        }
                        disabled={
                          (currentStep === 1 && !selectedReportType) ||
                          (currentStep === 4 && !selectedExportFormat) ||
                          (currentStep === 5 && scheduleOption !== "once" && (!deliveryTime || !timezone)) ||
                          isGenerating ||
                          reportGenerated
                        }
                        className={
                          currentStep === 5 ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                        }
                      >
                        {currentStep === 5 ? (isGenerating ? "Generating..." : "Generate Report") : "Next"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Existing Reports Sidebar */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Existing Reports</CardTitle>
                    <CardDescription>Manage your previously generated reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {existingReports.map((report, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm text-gray-900">{report.name}</h4>
                          <div className="mt-1 space-y-1 text-xs text-gray-600">
                            <p>Type: {report.type}</p>
                            <p>
                              Status:{" "}
                              <span
                                className={`font-medium ${report.status === "Active" ? "text-green-600" : "text-gray-600"}`}
                              >
                                {report.status}
                              </span>
                            </p>
                            <p>Last Run: {report.lastRun}</p>
                            <p>Next Run: {report.nextRun}</p>
                            <p>Format: {report.format}</p>
                          </div>
                          <div className="mt-2 flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs bg-transparent"
                              onClick={() => handleDownloadExistingReport(report)}
                            >
                              Download
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs bg-transparent"
                              onClick={() => handleEditExistingReport(report)}
                            >
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
