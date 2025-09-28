# Science-Writing Nexus Homepage Redesign Implementation Plan

## Overview
Complete redesign of the homepage and navigation while maintaining existing application functionality. This plan follows an incremental approach starting with foundation and progressing through all sections.

## Phase 1: Foundation - Global CSS Variables

### Update `assets/css/global.css`
Add new CSS variables for the modern color scheme:

```css
/* Add after existing imports */
:root {
  /* New color scheme from HTML design */
  --primary-color: #1e3a8a;
  --secondary-color: #3b82f6;
  --accent-color: #60a5fa;
  --dark-bg: #0f172a;
  --light-bg: #f8fafc;
  --text-dark: #1e293b;
  --text-light: #64748b;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  
  /* Preserve existing dark mode variables */
  --dark-bg-primary: #0a0a0a;
  --dark-bg-surface: #1a1a1a;
  --dark-text-primary: #ffffff;
  --dark-text-secondary: #cccccc;
  --dark-primary: #e0e0e0;
  --dark-secondary: #b0b0b0;
  --dark-accent: #ffffff;
  --dark-border: rgba(255, 255, 255, 0.08);
  --dark-shadow: rgba(0, 0, 0, 0.6);
}

/* Update body styles to use new variables */
body {
  font-family: 'Poppins', 'Inter', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-dark);
  background-color: #ffffff;
  line-height: 1.6;
  transition: background-color 0.3s, color 0.3s;
}

/* Enhanced dark mode using new variables */
body.dark {
  background-color: var(--dark-bg);
  color: var(--dark-text-primary);
}

/* Add smooth scrolling */
html {
  scroll-behavior: smooth;
}
```

## Phase 2: Navigation & Hero

### 2.1 Create New Header Component
Replace `components/Header.vue` with new dropdown navigation:

**Key Features:**
- Dropdown menus for "Consultancy" and "Training"
- Animated hover effects
- Mobile-responsive hamburger menu
- Updated brand to "Science-Writing Nexus"
- Language switching and theme toggling preserved

**Navigation Structure:**
- Home
- Consultancy (dropdown)
  - Academic English Editing
  - Article Writing and Editing
  - Thesis Writing and Editing
  - Pre-submission Peer Review
  - Revision Support Services
  - Publication Process Support
  - Project Writing and Editing
  - Data Analysis and Visualization
- Training (dropdown)
  - Individual Training
  - Group Training
- About
- Get Free Evaluation (CTA button)

### 2.2 Create New Hero Section
Replace `components/MainSection.vue` with new animated hero:

**Key Features:**
- Animated background with floating elements
- Modern gradient design
- Enhanced CTA buttons
- Smooth animations and transitions
- Multi-language support preserved

## Phase 3: Content Sections

### 3.1 Create Stats Section
New component: `components/StatsSection.vue`

**Content:**
- 500+ Successful Publications
- 95% Acceptance Rate
- 50+ Q1 Journals
- 24/7 Support Available

### 3.2 Create Consultancy Services
Replace `components/Services.vue` with enhanced service cards:

**Service Categories:**
1. Academic English Editing
2. Article Writing and Editing
3. Thesis Writing and Editing
4. Pre-submission Peer Review (Featured)
5. Revision Support Services (Featured)
6. Publication Process Support
7. Project Writing and Editing
8. Data Analysis and Visualization

### 3.3 Create Training Section
Replace `components/Process.vue` with training programs:

**Training Programs:**
- Individual Training
  - Academic Writing Mentorship
  - Statistical Analysis Coaching
  - Publication Strategy Development
  - Thesis Writing Support
  - Grant Writing Skills Development
  - Peer Review Response Training
  - Research Methodology Enhancement
- Group Training
  - Academic Writing Fundamentals
  - Advanced Research Methods
  - Publishing in High-Impact Journals
  - Data Analysis with SPSS/R/Python
  - Systematic Review Methodology
  - Research Ethics and Integrity
  - Handling Peer Review Process

### 3.4 Create About Section
New component: `components/AboutSection.vue`

**Content:**
- Our Mission
- Our Approach
- Our Expertise
- Philosophy Quote: "Your research is your intellectual creation..."

## Phase 4: Contact & Footer

### 4.1 Update Contact Section
Enhance `components/Contact.vue` with new styling:

**Updates:**
- Modern form design
- Enhanced contact information
- Updated color scheme
- Preserve modal functionality

### 4.2 Update Footer
Update `components/Footer.vue` with new styling:

**Updates:**
- New color scheme
- Updated brand name
- Enhanced social media links
- Preserve legal links and structure

## Phase 5: Integration & Testing

### 5.1 Update Homepage Templates
Update both language versions:
- `pages/en/index.vue`
- `pages/tr/index.vue`

**Changes:**
- Replace component imports
- Update component order
- Add new sections (Stats, About)

### 5.2 Testing Checklist
- [ ] Responsive design on all screen sizes
- [ ] Language switching functionality
- [ ] Dark mode compatibility
- [ ] Dropdown navigation functionality
- [ ] Smooth scrolling animations
- [ ] Form submission functionality
- [ ] Cross-browser compatibility

## Implementation Priority Order

1. **Phase 1**: Global CSS Variables (Foundation)
2. **Phase 2**: Header & Hero (Most visible changes)
3. **Phase 3**: Stats Section (Quick win)
4. **Phase 3**: Consultancy Services (Core content)
5. **Phase 3**: Training Section (Replace Process)
6. **Phase 3**: About Section (New content)
7. **Phase 4**: Contact & Footer (Final styling)
8. **Phase 5**: Integration & Testing (Polish)

## Technical Considerations

### Component Migration Strategy
- Replace existing components in place
- Maintain same component names for seamless integration
- Preserve all existing functionality (language switching, dark mode)
- Update content structure while keeping multi-language support

### Content Migration
- Adapt existing content to fit new design structure
- Add new content from HTML template where appropriate
- Maintain Turkish and English language versions

### Performance Optimization
- Optimize animations for smooth performance
- Ensure images are properly sized and compressed
- Maintain fast loading times

## Success Metrics
- Complete visual redesign matching HTML template
- All existing functionality preserved
- Responsive design working on all devices
- Multi-language support maintained
- Dark mode compatibility ensured
- Performance maintained or improved

---

**Next Step**: Switch to Code mode to begin Phase 1 implementation.