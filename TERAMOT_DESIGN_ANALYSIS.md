# Teramot.com - Design Analysis & Implementation Guide

## Color Palette
- **Primary Blue**: `#0052CC` (bright, energetic)
- **Dark Text**: `#000000` / `#1a1a1a`
- **Light Background**: `#FFFFFF` / `#F8F9FA`
- **Accent Green**: `#00D084` (secondary highlight)
- **Border Gray**: `#E5E7EB` / `#D1D5DB`

## Typography
- **Headings**: Bold, sans-serif (likely Inter or similar)
- **H1**: Large, black, bold (60-72px)
- **Body**: Regular weight, dark gray (16px)
- **Accent Text**: Blue color for key phrases ("sell more")

## Layout Structure

### Navbar
- Fixed top navigation
- Logo on left
- Menu items: Product, Pricing, For Specialists, Tutorials, Docs
- Language toggle: ES/EN
- CTA buttons: "Book a call" (outline), "Start for free" (filled black)
- Mobile menu toggle

### Hero Section
- Two-column layout (asymmetric)
- Left: Text content with large heading
- Right: Diagram/illustration (secure environment visualization)
- Heading: "Make AI understand your business and figure out how to sell more"
- Subheading: "Teramot is the layer that connects any AI model..."
- Trust badges: SOC 2 Certified, No credit card, Ready in 1 hour

### Key Visual Elements
- Circular diagram showing: Systems (Postgres, Salesforce, Excel, SAP, BigQuery, Snowflake) → Teramot → AI Models (Claude, ChatGPT, Gemini)
- Blue center node with connecting lines
- Icons for each system/AI model

### Spacing & Whitespace
- Generous padding between sections
- Breathing room around text
- Aligned grid structure

## Implementation Priority
1. Navbar (fixed, responsive)
2. Hero section (two-column, responsive)
3. Diagram/illustration (SVG or canvas)
4. Trust badges
5. Footer

## Notes
- Clean, minimal design
- Focus on clarity and professionalism
- Strong visual hierarchy
- Responsive design essential
