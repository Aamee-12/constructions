# HM CONSTRUCTIONS — LUXURY ARCHITECTURE & INTERIOR DESIGN

A bespoke, cinematic residential architecture, interior design, and turnkey construction website designed for **HM Constructions**.

This project interprets the dark luxury architectural aesthetic (dark charcoal backgrounds, warm bronze accents, muted olive details, refined serif typography, and restrained borders) and integrates the supplied house video as the scroll-driven hero sequence with a 3D procedural spatial fallback.

---

## 1. Quick Start

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Run
```bash
# Install dependencies (already installed in workspace)
npm install

# Run Vite development server
npm run dev
# The site is available at http://localhost:5173

# Production build
npm run build
```

---

## 2. Key Features & Creative Direction

1. **Cinematic House Hero Experience (`src/components/HeroSection.tsx`)**:
   - Directly integrates the supplied video (`public/assets/video/gemini_generated_video_a75e218e.mp4`).
   - Uses scroll-scrubbing to progress through architectural phases with an interactive progress indicator.
   - Includes a real-time **3D Spatial Model** fallback mode powered by Three.js with architectural assembly and orbit choreography.
   - Play/pause toggle and reduced-motion detection.

2. **Editorial Introduction (`src/components/IntroSection.tsx`)**:
   - Generous whitespace, refined serif headlines (*Cormorant Garamond*), and architectural dialogue between materials and spatial flow.

3. **Practice & Capabilities (`src/components/ServicesSection.tsx`)**:
   - Covers **Interior Design**, **Architecture & Planning**, **Construction & Execution**, and **Renovation & Turnkey Projects**.
   - Interactive editorial preview tabs with scope checklists.

4. **Curated Projects Showcase (`src/components/ProjectsSection.tsx`)**:
   - Inspired directly by the reference screenshot:
     - Prominent featured project display with frosted glass project caption card (`«Villa Verden»`).
     - Category filters (`Contemporary Residences`, `Luxury Living Spaces`, `Kitchen & Dining`, etc.).
     - Minimalist circular carousel navigation.
     - Curated architectural project grid.

5. **Interior Metamorphosis (`src/components/TransformationSection.tsx`)**:
   - Interactive before-and-after drag slider demonstrating the transformation of an empty architectural concrete shell into a finished luxury living sanctuary.

6. **Philosophy & Craft (`src/components/PhilosophySection.tsx`)**:
   - Highlights spatial planning, natural light choreography, honest materiality, and enduring detail.

7. **Our Refined Process (`src/components/ProcessSection.tsx`)**:
   - 4-stage methodology: `01 Discover`, `02 Design`, `03 Develop`, and `04 Deliver`.

8. **Project Enquiry (`src/components/EnquirySection.tsx`)**:
   - Directly replicates the lower half of the reference screenshot:
     - Left column: Volumetric 3D architectural house model presentation and direct studio contact card.
     - Right column: Scope of work pill selectors, property type selector, approximate area, location, contact inputs, and warm bronze submit button.
     - Honest frontend validation: Discloses prototype mode with guidance on connecting a backend/form service (e.g. Formspree, Resend, or custom API).

9. **Centralised Configuration (`src/config/siteConfig.ts`)**:
   - Single point of truth for brand name, legal name, taglines, contact details, office hours, service items, project portfolio, and form options.

---

## 3. How to Customise Brand & Assets

All content is decoupled from layout components. To rebrand or replace client assets:

### A. Updating Brand & Contact Details
Open [`src/config/siteConfig.ts`](src/config/siteConfig.ts):
```typescript
export const SITE_CONFIG = {
  brand: {
    name: "NEW STUDIO NAME",
    tagline: "Your custom tagline",
    ...
  },
  contact: {
    email: "concierge@yourstudio.com",
    phone: "+1 (555) 012-3456",
    address: "Your office address",
    ...
  }
}
```

### B. Replacing the Hero Video
Place your new MP4 video in `public/assets/video/` and update the reference in `src/components/HeroSection.tsx`.

### C. Replacing Project Imagery
Add project photographs to `public/assets/images/` and update the `projects` array in [`src/config/siteConfig.ts`](src/config/siteConfig.ts).

### D. Connecting the Enquiry Form to a Live Backend
In [`src/components/EnquirySection.tsx`](src/components/EnquirySection.tsx), locate `handleSubmit`:
Replace the `setTimeout` mock with an API call (e.g., `fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(formData) })`).

---

## 4. Design System Tokens

- **Main Background**: `#242424`
- **Secondary Background**: `#30302F`
- **Primary Text**: `#F5F2EC`
- **Secondary Text**: `#B7B5AF`
- **Muted Olive**: `#78836C`
- **Warm Bronze**: `#B18D57`
- **Subtle Borders**: `rgba(245, 242, 236, 0.24)`
