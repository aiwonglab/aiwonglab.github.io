#!/bin/bash
# Generate placeholder images for team members using ImageMagick

TEAM_DIR="public/images/team"
mkdir -p "$TEAM_DIR"

# Function to create placeholder image
create_image() {
    local filename=$1
    local fullname=$2
    local color=$3

    # Extract initials from filename (lastName_firstName.jpg -> F.L.)
    local lastname=$(echo "$filename" | cut -d'_' -f1 | cut -d'.' -f1)
    local firstname=$(echo "$filename" | cut -d'_' -f2 | cut -d'.' -f1)

    # Special handling for names
    if [[ "$fullname" == "A. Ian Wong" ]]; then
        initials="I.W."
    else
        local first_initial=$(echo "$firstname" | cut -c1 | tr '[:lower:]' '[:upper:]')
        local last_initial=$(echo "$lastname" | cut -c1 | tr '[:lower:]' '[:upper:]')
        initials="${first_initial}.${last_initial}."
    fi

    # Create image with ImageMagick
    convert -size 400x400 \
        xc:"$color" \
        -gravity center \
        -font DejaVu-Sans-Bold -pointsize 120 -fill white \
        -annotate +0-60 "$initials" \
        -font DejaVu-Sans -pointsize 24 -fill "rgba(255,255,255,0.9)" \
        -annotate +0+80 "$fullname" \
        -quality 85 \
        "$TEAM_DIR/$filename"

    echo "Created: $TEAM_DIR/$filename"
}

# Team members with colors
create_image "wong_ian.jpg" "A. Ian Wong" "#4A90E2"
create_image "alwakeel_mahmoud.jpg" "Mahmoud Alwakeel" "#50C878"
create_image "zhang_brenda.jpg" "Brenda Zhang" "#9B59B6"
create_image "cheruvu_aashish.jpg" "Aashish Cheruvu" "#E67E22"
create_image "park_suim.jpg" "Suim Park" "#E74C3C"
create_image "matos_joao.jpg" "Joao Matos" "#1ABC9C"
create_image "hao_sicheng.jpg" "Sicheng Hao" "#F39C12"
create_image "dempsey_katelyn.jpg" "Katelyn Dempsey" "#3498DB"
create_image "zhang_bob.jpg" "Bob Zhang" "#9B59B6"

echo ""
echo "✓ Successfully generated 9 placeholder images in $TEAM_DIR"
