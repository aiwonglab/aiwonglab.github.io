#!/bin/bash
# Generate placeholder images for team members
# Uses ImageMagick to create simple placeholder images with names

TEAM_DIR="public/images/team"
mkdir -p "$TEAM_DIR"

# Colors for diversity
COLORS=("#4A90E2" "#50C878" "#9B59B6" "#E67E22" "#E74C3C" "#1ABC9C" "#F39C12" "#3498DB")

# Function to create placeholder image
create_placeholder() {
    local filename=$1
    local name=$2
    local color=${3:-"#4A90E2"}

    # Extract initials from filename (lastName_firstName.jpg -> F.L.)
    local lastname=$(echo "$filename" | cut -d'_' -f1 | cut -d'.' -f1)
    local firstname=$(echo "$filename" | cut -d'_' -f2 | cut -d'.' -f1)
    local initials="${firstname:0:1}.${lastname:0:1}."
    initials=$(echo "$initials" | tr '[:lower:]' '[:upper:]')

    # Create SVG placeholder
    cat > "$TEAM_DIR/$filename" << EOF
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="$color"/>
  <text x="50%" y="40%" font-family="Arial, sans-serif" font-size="120" font-weight="bold"
        fill="white" text-anchor="middle" dominant-baseline="middle">$initials</text>
  <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="24"
        fill="rgba(255,255,255,0.9)" text-anchor="middle" dominant-baseline="middle">$name</text>
</svg>
EOF

    echo "Created placeholder: $filename"
}

# Team members
create_placeholder "wong_ian.jpg" "A. Ian Wong" "${COLORS[0]}"
create_placeholder "alwakeel_mahmoud.jpg" "Mahmoud Alwakeel" "${COLORS[1]}"
create_placeholder "zhang_brenda.jpg" "Brenda Zhang" "${COLORS[2]}"
create_placeholder "cheruvu_aashish.jpg" "Aashish Cheruvu" "${COLORS[3]}"
create_placeholder "park_suim.jpg" "Suim Park" "${COLORS[4]}"

# Alumni
create_placeholder "matos_joao.jpg" "Joao Matos" "${COLORS[5]}"
create_placeholder "hao_sicheng.jpg" "Sicheng Hao" "${COLORS[6]}"
create_placeholder "dempsey_katelyn.jpg" "Katelyn Dempsey" "${COLORS[7]}"
create_placeholder "zhang_bob.jpg" "Bob Zhang" "${COLORS[2]}"

echo "All placeholder images created successfully in $TEAM_DIR"
