#!/usr/bin/env python3
"""
Production runner for the CompNet Dashboard Flask application.
"""

import os
from app import app

if __name__ == '__main__':
    # Get port from environment variable or default to 5000
    port = int(os.environ.get('PORT', 5000))
    
    # Get debug mode from environment variable
    debug = os.environ.get('FLASK_DEBUG', 'False').lower() == 'true'
    
    # Run the application
    app.run(
        host='0.0.0.0',
        port=port,
        debug=debug
    )
