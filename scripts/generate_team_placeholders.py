#!/usr/bin/env python3
"""
Generate placeholder images for team members using PIL/Pillow
Creates simple colored squares with initials and names
"""
from PIL import Image, ImageDraw, ImageFont
import os

# Team member data with colors
team_data = [
    ("wong_ian.jpg", "A. Ian Wong", "#4A90E2"),
    ("alwakeel_mahmoud.jpg", "Mahmoud Alwakeel", "#50C878"),
    ("zhang_brenda.jpg", "Brenda Zhang", "#9B59B6"),
    ("cheruvu_aashish.jpg", "Aashish Cheruvu", "#E67E22"),
    ("park_suim.jpg", "Suim Park", "#E74C3C"),
    ("matos_joao.jpg", "Joao Matos", "#1ABC9C"),
    ("hao_sicheng.jpg", "Sicheng Hao", "#F39C12"),
    ("dempsey_katelyn.jpg", "Katelyn Dempsey", "#3498DB"),
    ("zhang_bob.jpg", "Bob Zhang", "#9B59B6"),
]

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def get_initials(name):
    """Extract initials from full name"""
    # Remove titles and credentials
    name = name.replace("A. Ian", "Ian")
    parts = name.split()
    if len(parts) >= 2:
        return f"{parts[0][0]}.{parts[-1][0]}."
    return parts[0][0] + "."

def create_placeholder(filename, name, color_hex, size=400):
    """Create a placeholder image with initials and name"""
    # Create image
    color = hex_to_rgb(color_hex)
    img = Image.new('RGB', (size, size), color)
    draw = ImageDraw.Draw(img)

    # Get initials
    initials = get_initials(name).upper()

    # Try to use a system font, fall back to default if not available
    try:
        # Try common font locations
        font_large = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 120)
        font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)
    except:
        try:
            font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 120)
            font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
        except:
            # Fall back to default font
            font_large = ImageFont.load_default()
            font_small = ImageFont.load_default()

    # Draw initials (centered at 40% height)
    bbox = draw.textbbox((0, 0), initials, font=font_large)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (size - text_width) // 2
    y = int(size * 0.35) - text_height // 2
    draw.text((x, y), initials, fill='white', font=font_large)

    # Draw name (centered at 65% height)
    bbox = draw.textbbox((0, 0), name, font=font_small)
    text_width = bbox[2] - bbox[0]
    x = (size - text_width) // 2
    y = int(size * 0.65)
    draw.text((x, y), name, fill=(255, 255, 255, 230), font=font_small)

    return img

def main():
    output_dir = "public/images/team"
    os.makedirs(output_dir, exist_ok=True)

    for filename, name, color in team_data:
        filepath = os.path.join(output_dir, filename)
        img = create_placeholder(filename, name, color)
        img.save(filepath, 'JPEG', quality=85)
        print(f"Created: {filepath}")

    print(f"\n✓ Successfully generated {len(team_data)} placeholder images")

if __name__ == "__main__":
    main()
