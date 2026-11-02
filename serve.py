#!/usr/bin/env python3
"""
Mister Bnine Restaurant - Local Development Server
Usage: python3 serve.py [port]
"""

import http.server
import socketserver
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3005

class UTF8Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def guess_type(self, path):
        ctype = super().guess_type(path)
        if ctype and ctype.startswith('text/html'):
            return 'text/html; charset=utf-8'
        if ctype and ctype.startswith('text/plain'):
            return 'text/plain; charset=utf-8'
        if ctype and ctype.startswith('text/markdown'):
            return 'text/markdown; charset=utf-8'
        if path.endswith('.svg'):
            return 'image/svg+xml; charset=utf-8'
        return ctype

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(base_dir)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), UTF8Handler) as httpd:
        print("=" * 60)
        print(f"🔥 Mister Bnine Restaurant Server")
        print(f"📍 Local URL: http://localhost:{PORT}/")
        print(f"📱 WhatsApp: +212 6 65 63 84 87")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            httpd.server_close()
