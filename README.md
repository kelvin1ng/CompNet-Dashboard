# CompNet Dashboard - Flask Version

A comprehensive student analytics dashboard for the Master of Computer Networks Program at Toronto Metropolitan University, converted from Next.js/TypeScript to Python/Flask.

## Features

- **Student Analytics Dashboard**: Real-time monitoring of student engagement and system usage
- **Multiple Design Views**: Three different dashboard layouts (Design 1, 2, and 3)
- **Advanced Reporting**: Multi-step report generation wizard with scheduling capabilities
- **System Performance Monitoring**: Microservices health monitoring and performance metrics
- **Responsive Design**: Mobile-first responsive design with collapsible sidebar
- **Interactive Charts**: Data visualization using Chart.js
- **Real-time Updates**: Live data updates and notifications

## Technology Stack

- **Backend**: Python 3.8+ with Flask
- **Frontend**: HTML5, CSS3 (Tailwind CSS), Vanilla JavaScript
- **Charts**: Chart.js for data visualization
- **Icons**: Lucide Icons
- **Styling**: Tailwind CSS v4 with custom components

## Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd dashboardmain
   \`\`\`

2. **Create a virtual environment**
   \`\`\`bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   \`\`\`

3. **Install dependencies**
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

4. **Run the application**
   \`\`\`bash
   python app.py
   \`\`\`

5. **Access the dashboard**
   Open your browser and navigate to `http://localhost:5000`

## Project Structure

\`\`\`
dashboardmain/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
├── templates/            # Jinja2 templates
│   ├── base.html         # Base template with layout
│   ├── index.html        # Main dashboard
│   ├── design-1.html     # Design variant 1
│   ├── design-2.html     # Design variant 2
│   ├── design-3.html     # Design variant 3
│   └── reports.html      # Report generation wizard
├── static/               # Static assets
│   ├── css/
│   │   └── style.css     # Custom styles
│   ├── js/
│   │   └── main.js       # JavaScript utilities
│   └── images/
│       ├── tmu-logo.png  # University logo
│       └── tmu-logo.jpg  # University logo (JPG)
\`\`\`

## API Endpoints

- `GET /` - Main dashboard
- `GET /design-1` - Design variant 1
- `GET /design-2` - Design variant 2  
- `GET /design-3` - Design variant 3
- `GET /reports` - Report generation page
- `GET /api/dashboard-data` - Dashboard data API
- `GET /api/metrics` - Real-time metrics API
- `GET /api/microservices-health` - System health API

## Features Overview

### Main Dashboard
- Student activity analytics with interactive charts
- System performance monitoring
- Real-time metrics updates
- Tabbed interface for different data views

### Design Variants
- **Design 1**: Clean overview with key metrics and activity feed
- **Design 2**: Comprehensive analytics with tabbed performance views
- **Design 3**: Data-focused view with detailed tables and filtering

### Report Generation
- Multi-step wizard for custom report creation
- Support for PDF, Excel, and CSV export formats
- Scheduling options for automated report delivery
- Preview functionality before generation

### System Monitoring
- Microservices health monitoring
- Performance metrics and trends
- Resource utilization tracking
- Real-time status updates

## Customization

### Adding New Pages
1. Create a new template in `templates/`
2. Add a route in `app.py`
3. Update navigation in `base.html`

### Modifying Styles
- Edit `static/css/style.css` for custom styles
- Tailwind classes can be used directly in templates
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`

### Adding Charts
- Use the chart utilities in `static/js/main.js`
- Chart.js is included for data visualization
- Examples available in dashboard templates

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2025 Toronto Metropolitan University. All rights reserved.

## Support

For technical support or questions:
- Email: mcn-support@torontomu.ca
- Academic inquiries: mcn-program@torontomu.ca
