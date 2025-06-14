#!/usr/bin/env python3
"""Create Supabase storage bucket for Wubbleton galleries"""

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
        
        print("🚀 Creating Supabase storage bucket...")
        
        # Create the bucket
        response = supabase.storage.create_bucket(
            "wubbleton-galleries",
            options={
                "public": True,  # Make it public so images can be accessed
                "allowed_mime_types": ["image/jpeg", "image/jpg", "image/png", "image/gif"],
                "file_size_limit": 10485760  # 10MB limit
            }
        )
        
        print("✅ Bucket 'wubbleton-galleries' created successfully!")
        print(f"Response: {response}")
        
    except Exception as e:
        if "already exists" in str(e):
            print("ℹ️  Bucket 'wubbleton-galleries' already exists")
        else:
            print(f"❌ Error creating bucket: {e}")
            sys.exit(1)

if __name__ == "__main__":
    main() 