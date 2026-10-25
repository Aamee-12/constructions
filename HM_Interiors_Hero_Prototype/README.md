# HM Interiors — Hero Prototype

This is a visual and interaction prototype for the temporary HM Interiors brand.

## Run it
1. Extract the ZIP.
2. Open `index.html` in a modern browser with an internet connection.
3. The prototype loads Three.js and GSAP from public CDNs, plus Google Fonts.
4. Scroll through the tall hero section to scrub the 3D house assembly and camera sequence.

If browser restrictions prevent scripts from loading from a local file, run a local static server from this folder:
- Python: `python -m http.server 8000`
- Then open `http://localhost:8000`

## What this prototype demonstrates
- Scroll-linked 3D architectural scene built from procedural Three.js geometry.
- Glass facade panels enter from the sides and architectural parts assemble.
- Camera choreography moves from exterior views toward the interior.
- Layered text changes with scroll progress.
- Services, concept portfolio, process, and contact sections to demonstrate the intended visual direction.
- Responsive styling and reduced-motion fallback.

## Important limitations
- This is a design/interaction prototype, not a final photorealistic architectural visualization.
- The house uses procedural box geometry to make the animation self-contained and editable. Replace it with a well-made GLB/GLTF architectural model for production-quality details and more convincing room transitions.
- The contact form is not connected to a backend and does not send messages.
- Project images are CSS-generated concept placeholders, not real client projects.
- The scripts and fonts load from CDNs, so an internet connection is required.

## Suggested Antigravity handoff
Use this prototype as the visual and interaction reference. Preserve its scroll-driven assembly concept, warm luxury art direction, text choreography, and restrained layout. Rebuild or integrate it into the existing project architecture, replace the procedural model with an optimized architectural GLB/GLTF when available, test desktop and mobile scroll behaviour, and do not invent final branding or business details.
