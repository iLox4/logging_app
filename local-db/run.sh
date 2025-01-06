#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

echo "Removing stopped containers..."
docker compose rm -f

echo "Starting services..."
docker compose up -d

echo "Streaming logs..."
docker compose logs -f