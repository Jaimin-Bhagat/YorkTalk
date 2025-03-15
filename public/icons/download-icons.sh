#!/bin/bash

# Create directory for faculty icons
mkdir -p faculty

# Download faculty icons
curl -o faculty/beaker.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/beaker.svg"
curl -o faculty/cog.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/cog.svg"
curl -o faculty/book-text.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/book-text.svg"
curl -o faculty/heart.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/heart.svg"
curl -o faculty/bar-chart-3.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/bar-chart-3.svg"
curl -o faculty/palette.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/palette.svg"
curl -o faculty/graduation-cap.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/graduation-cap.svg"
curl -o faculty/scale.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/scale.svg"
curl -o faculty/book-open.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/book-open.svg"
curl -o faculty/building.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/building.svg"
curl -o faculty/globe.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/globe.svg"

# Create directory for general icons
mkdir -p general

# Download general icons
curl -o general/plus-circle.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/plus-circle.svg"
curl -o general/mail.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/mail.svg"

# Create directory for main section icons
mkdir -p main

# Download main section icons
curl -o main/briefcase.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/briefcase.svg"
curl -o main/building-2.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/building-2.svg"
curl -o main/message-square.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/message-square.svg"
curl -o main/grid.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/grid.svg"
curl -o main/award.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/award.svg"
curl -o main/trending-up.svg "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/trending-up.svg"

echo "Icons downloaded successfully!"
