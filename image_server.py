#!/usr/bin/env python3
"""
Simple Image Server for Wubbleton Gallery Images
Serves images with proper CORS headers for cross-origin access
"""

import http.server
import socketserver
import os
from urllib.parse import urlparse
import json

PORT = 8004
GALLERY_PATH = "web/galleries"

class CORSImageHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=GALLERY_PATH, **kwargs)
    
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'public, max-age=3600')
        super().end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()
    
    def log_message(self, format, *args):
        # Custom logging
        print(f"[Gallery Server] {self.address_string()} - {format % args}")

def main():
    print(f"🖼️  Wubbleton Gallery Server starting on port {PORT}")
    print(f"📁 Serving images from: {os.path.abspath(GALLERY_PATH)}")
    print(f"🌐 Access galleries at: http://localhost:{PORT}/")
    print(f"\nGallery URLs:")
    print(f"  - The Crisis: http://localhost:{PORT}/crisis/")
    print(f"  - Modern Zombies: http://localhost:{PORT}/zombies/")
    print(f"  - The Rapture: http://localhost:{PORT}/rapture/")
    print(f"\n✨ Press Ctrl+C to stop the server\n")
    
    with socketserver.TCPServer(("", PORT), CORSImageHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n👋 Gallery server stopped. Namaste! 🙏")

if __name__ == "__main__":
    main() 