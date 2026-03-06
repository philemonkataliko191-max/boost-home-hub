

## Analysis

The "Look Millionnaire" dark mode with gold accents was already implemented in the previous conversation. The current codebase already has:
- Deep black background (`--background: 0 0% 4%`) with brilliant gold accents
- Gold gradients, shadows, and glassmorphism effects
- Luxury villa property data (names, prices in millions MAD)
- All components styled with the dark/gold theme

However, there are improvements that can still be made to push the "billionaire tech app" aesthetic further:

## Plan

### 1. Regenerate luxury villa images
Generate 4 new high-quality images using AI image generation:
- **hero-bg.jpg**: Ultra-modern villa at night with infinity pool, dramatic lighting
- **property-1.jpg**: Futuristic oceanfront mansion with glass walls and rooftop pool
- **property-2.jpg**: Sleek penthouse with city skyline view and infinity edge pool
- **property-3.jpg**: Mega-villa with illuminated pool, palm trees, and modern architecture

### 2. Enhance visual polish across components
- **HeroSection**: Add a subtle gold particle shimmer overlay and refine the glassmorphic search bar with stronger gold border glow
- **FeaturedProperties**: Add a gold shimmer hover effect on cards, enhance the score badge with a glow animation
- **Navbar**: Add a subtle gold underline animation on hover for nav links
- **LiveSport**: Ensure consistent dark/gold styling (currently uses `bg-primary` which maps to near-black, already correct)
- **Bonus page**: Already well-themed, no changes needed

### 3. Add luxury micro-interactions
- Gold border glow on card hover using `animate-glow-pulse`
- Smooth gold underline transitions on navigation links
- Enhanced button hover states with scale + glow effects

All changes use existing CSS variables and Tailwind config - no new dependencies needed.

