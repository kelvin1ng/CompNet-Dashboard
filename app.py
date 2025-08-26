from flask import Flask, render_template, jsonify
import json
from datetime import datetime, timedelta
import random

app = Flask(__name__)

# Sample data for the dashboard
def get_dashboard_data():
    """Generate sample data for the dashboard"""
    
    # Top metrics data
    top_metrics = [
        {"label": "Active Students", "value": "847", "trend": "+5.2%", "icon": "users"},
        {"label": "System Sessions", "value": "1,234", "trend": "+12.1%", "icon": "activity"},
        {"label": "Avg. Session", "value": "18:45", "trend": "+8.3%", "icon": "clock"},
        {"label": "Service Uptime", "value": "99.8%", "trend": "+0.1%", "icon": "trending-up"},
    ]
    
    # User journey flow data
    user_journey_data = [
        {"service": "Dashboard", "entry": 847, "exit": 623, "retention": 73.6},
        {"service": "Announcements", "entry": 623, "exit": 445, "retention": 71.4},
        {"service": "VM Mgmt", "entry": 234, "exit": 156, "retention": 66.7},
        {"service": "Exams", "entry": 156, "exit": 89, "retention": 57.1},
        {"service": "Elections", "entry": 78, "exit": 45, "retention": 57.7},
        {"service": "OneCard", "entry": 123, "exit": 98, "retention": 79.7},
    ]
    
    # Activity heatmap data
    heatmap_data = [
        {"hour": "6AM", "Mon": 12, "Tue": 8, "Wed": 15, "Thu": 10, "Fri": 18, "Sat": 5, "Sun": 3},
        {"hour": "9AM", "Mon": 145, "Tue": 132, "Wed": 156, "Thu": 142, "Fri": 138, "Sat": 25, "Sun": 18},
        {"hour": "12PM", "Mon": 234, "Tue": 245, "Wed": 267, "Thu": 223, "Fri": 198, "Sat": 45, "Sun": 32},
        {"hour": "3PM", "Mon": 189, "Tue": 201, "Wed": 178, "Thu": 195, "Fri": 167, "Sat": 38, "Sun": 28},
        {"hour": "6PM", "Mon": 89, "Tue": 95, "Wed": 87, "Thu": 92, "Fri": 78, "Sat": 65, "Sun": 45},
        {"hour": "9PM", "Mon": 34, "Tue": 28, "Wed": 31, "Thu": 29, "Fri": 42, "Sat": 78, "Sun": 65},
    ]
    
    # Microservices health data
    microservices_health = [
        {"name": "Dashboard", "status": "healthy", "uptime": 99.9, "responseTime": 120, "requests": 15420},
        {"name": "VM Management", "status": "healthy", "uptime": 99.7, "responseTime": 340, "requests": 2340},
        {"name": "Email Service", "status": "healthy", "uptime": 99.8, "responseTime": 180, "requests": 8760},
        {"name": "Exam System", "status": "warning", "uptime": 98.5, "responseTime": 450, "requests": 4560},
        {"name": "Announcement Service", "status": "healthy", "uptime": 99.9, "responseTime": 95, "requests": 12340},
        {"name": "Election Service", "status": "healthy", "uptime": 99.6, "responseTime": 210, "requests": 890},
        {"name": "OneCard Service", "status": "healthy", "uptime": 99.4, "responseTime": 280, "requests": 3450},
        {"name": "Analytics DB", "status": "healthy", "uptime": 99.9, "responseTime": 85, "requests": 18900},
    ]
    
    # Response time data for charts
    response_time_data = [
        {"time": "00:00", "dashboard": 120, "vm": 340, "email": 180, "exam": 450, "announcement": 95},
        {"time": "04:00", "dashboard": 115, "vm": 320, "email": 175, "exam": 420, "announcement": 90},
        {"time": "08:00", "dashboard": 140, "vm": 380, "email": 200, "exam": 480, "announcement": 110},
        {"time": "12:00", "dashboard": 160, "vm": 420, "email": 220, "exam": 520, "announcement": 130},
        {"time": "16:00", "dashboard": 145, "vm": 390, "email": 195, "exam": 470, "announcement": 115},
        {"time": "20:00", "dashboard": 125, "vm": 350, "email": 185, "exam": 440, "announcement": 100},
    ]
    
    # Recent user actions
    recent_actions = [
        {"user": "Sarah Chen", "action": "Submitted Exam", "service": "Exam System", "time": "2 min ago", "status": "success"},
        {"user": "Mike Johnson", "action": "Created VM Instance", "service": "VM Management", "time": "5 min ago", "status": "success"},
        {"user": "Emily Davis", "action": "Viewed Announcement", "service": "Announcements", "time": "8 min ago", "status": "info"},
        {"user": "Alex Kumar", "action": "Cast Vote", "service": "Elections", "time": "12 min ago", "status": "success"},
        {"user": "Lisa Wang", "action": "OneCard Transaction", "service": "OneCard", "time": "15 min ago", "status": "success"},
        {"user": "David Brown", "action": "Login Attempt Failed", "service": "Dashboard", "time": "18 min ago", "status": "warning"},
        {"user": "Jessica Lee", "action": "Downloaded Report", "service": "Analytics", "time": "22 min ago", "status": "info"},
        {"user": "Tom Wilson", "action": "VM Deployment", "service": "VM Management", "time": "25 min ago", "status": "success"},
        {"user": "Anna Garcia", "action": "Email Notification", "service": "Email Service", "time": "28 min ago", "status": "info"},
        {"user": "Chris Taylor", "action": "System Access", "service": "Dashboard", "time": "32 min ago", "status": "success"},
    ]
    
    # Academic reports data
    academic_reports = [
        {"name": "Network Lab Performance", "type": "Weekly", "status": "Active"},
        {"name": "VM Resource Utilization", "type": "Daily", "status": "Active"},
        {"name": "Course Completion Analytics", "type": "Semester", "status": "Active"},
        {"name": "System Security Audit", "type": "Monthly", "status": "Active"},
        {"name": "Infrastructure Performance", "type": "Real-time", "status": "Active"},
        {"name": "Student Project Analytics", "type": "Custom", "status": "Draft"},
        {"name": "Network Traffic Analysis", "type": "Weekly", "status": "Active"},
        {"name": "Exam System Performance", "type": "Event-based", "status": "Scheduled"},
        {"name": "Email Service Metrics", "type": "Daily", "status": "Active"},
    ]
    
    return {
        'top_metrics': top_metrics,
        'user_journey_data': user_journey_data,
        'heatmap_data': heatmap_data,
        'microservices_health': microservices_health,
        'response_time_data': response_time_data,
        'recent_actions': recent_actions,
        'academic_reports': academic_reports
    }

# Routes
@app.route('/')
def index():
    """Main dashboard page"""
    data = get_dashboard_data()
    return render_template('index.html', **data)

@app.route('/design-1')
def design_1():
    """Design 1 page"""
    return render_template('design-1.html')

@app.route('/design-2')
def design_2():
    """Design 2 page"""
    return render_template('design-2.html')

@app.route('/design-3')
def design_3():
    """Design 3 page"""
    return render_template('design-3.html')

@app.route('/reports')
def reports():
    """Reports page"""
    data = get_dashboard_data()
    return render_template('reports.html', academic_reports=data['academic_reports'])

# API endpoints for AJAX requests
@app.route('/api/dashboard-data')
def api_dashboard_data():
    """API endpoint to get dashboard data"""
    return jsonify(get_dashboard_data())

@app.route('/api/metrics')
def api_metrics():
    """API endpoint for real-time metrics"""
    data = get_dashboard_data()
    return jsonify(data['top_metrics'])

@app.route('/api/microservices-health')
def api_microservices_health():
    """API endpoint for microservices health"""
    data = get_dashboard_data()
    return jsonify(data['microservices_health'])

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
