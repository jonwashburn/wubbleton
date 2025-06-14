#!/usr/bin/env python3
"""Check Supabase storage buckets"""

from supabase import create_client, Client
import os
import sys

# Supabase configuration
SUPABASE_URL = "https://ozxhahlykxeeiuvmzrbb.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96eGhhaGx5a3hlZWl1dm16cmJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMjI0NjAsImV4cCI6MjA0OTY5ODQ2MH0.Yx0OPdXlt-d0x-LP7_yMnNiAkNBM0dIFBKQ-FMN7jLI"

def main():
    try:
        # Initialize Supabase client
        supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
        
        print("🔍 Checking Supabase storage buckets...")
        
        # Try to list buckets
        try:
            buckets = supabase.storage.list_buckets()
            print(f"✅ Found {len(buckets)} buckets:")
            for bucket in buckets:
                print(f"  - {bucket['name']} (public: {bucket.get('public', False)})")
        except Exception as e:
            print(f"❌ Error listing buckets: {e}")
        
        # Try to get specific bucket
        try:
            bucket = supabase.storage.get_bucket("wubbleton-galleries")
            print(f"\n✅ Bucket 'wubbleton-galleries' exists!")
            print(f"  - Public: {bucket.get('public', False)}")
        except Exception as e:
            print(f"\n❌ Bucket 'wubbleton-galleries' not found: {e}")
            
    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main() 