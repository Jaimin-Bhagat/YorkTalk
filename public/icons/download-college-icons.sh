#!/bin/bash

# Create directory for club icons
mkdir -p clubs

# Download college icon
curl -o clubs/school.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/school.svg"
curl -o clubs/landmark.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/landmark.svg"

echo "College icons downloaded successfully!" 