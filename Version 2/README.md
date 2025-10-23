# Team Sheldon Website - Version 2 🤖

**Team Sheldon's Website Version 2** - The previous iteration of our official robotics team website, featuring the original design and interactive whiteboard functionality.

## 📝 Overview

Version 2 represents Team Sheldon's earlier website design, showcasing our robotics team's journey in FIRST competitions with a focus on the interactive FRC 2025 whiteboard application and comprehensive team information.

## 📁 File Structure

### 🏠 Main Pages
- **`index.html`** - Homepage with team introduction and overview
- **`our-team.html`** - Team member profiles and structure
- **`achievements.html`** - Awards and competition history
- **`robots.html`** - Robot showcase and specifications
- **`Sponsors.html`** - Sponsor partnerships and recognition
- **`contact-us.html`** - Contact information and forms

### 🎮 Interactive Tools
- **`2025-FRC.html`** - Interactive FRC 2025 REEFSCAPE℠ whiteboard application
- **`FRCGF.html`** - FRC Game Fields resource page

### 🎨 Assets & Resources
- **`logo.png`** - Team Sheldon logo
- **`Files/`** - Images, graphics, and media assets
- **`test.html`** - Development testing page

## ✨ Key Features

### 🎯 Interactive FRC Whiteboard
The standout feature of Version 2 is the fully-functional FRC strategy whiteboard:

- **Team Positioning** - Drag-and-drop up to 3 teams per alliance
- **Drawing Tools** - Freehand drawing with color picker and brush size
- **Eraser & Undo** - Full editing capabilities with 20-step undo
- **Save Function** - Export strategies as PNG images
- **Lock System** - Prevent accidental team movement
- **Responsive Design** - Mobile-optimized toolbar and controls

### 🏆 Team Showcase
- Comprehensive team member profiles
- Competition history and achievements
- Robot galleries with technical details
- Sponsor recognition and partnerships

### 🎨 Design Elements
- Clean, professional layout
- FIRST Robotics branding colors
- Responsive mobile design
- Interactive hover effects

## 🛠 Technical Implementation

### Frontend Technologies
- **HTML5** with Canvas API for whiteboard functionality
- **CSS3** with responsive design and animations
- **Vanilla JavaScript** with ES6+ features
- **File API** for image saving and export

### Whiteboard Features
- **Canvas Drawing** - Mouse and touch-based drawing
- **Team Management** - Dynamic team box creation and positioning
- **Image Composition** - Combines drawings and team positions for export
- **Responsive Scaling** - Field image scales properly across devices
- **State Management** - Undo/redo system with canvas state saving

### Mobile Optimization
- **Bottom Toolbar** - Touch-friendly controls on mobile
- **Responsive Canvas** - Scales appropriately for different screen sizes
- **Touch Gestures** - Optimized for mobile drawing and team positioning

## 📊 Differences from Version 3

Version 2 serves as the foundation that evolved into Version 3:

### What's Different:
- **Styling**: Lighter theme compared to Version 3's dark theme
- **Layout**: Different page structure and navigation
- **Interactive Features**: Original whiteboard implementation
- **Design Language**: Earlier branding and visual approach

### What Carried Forward:
- **Core Functionality** - Team positioning and whiteboard concepts
- **Responsive Design** - Mobile-first approach
- **Content Structure** - Team profiles, achievements, sponsors

## 🚀 Usage

### Running the Website
1. Open `index.html` in a web browser
2. Navigate through pages using internal links
3. Access the FRC whiteboard via `2025-FRC.html`

### Using the Whiteboard
1. **Team Setup**: Add team numbers for red and blue alliances
2. **Positioning**: Drag team boxes to desired field positions
3. **Drawing**: Use toolbar to draw strategies and notes
4. **Saving**: Export your strategy as a PNG image
5. **Lock/Unlock**: Toggle to prevent accidental team movement

### File Dependencies
- All pages link to shared assets in `Files/` directory
- Whiteboard requires `./Files/Images/2025 FRC Field.png` for background
- Cross-page navigation uses relative links

## 🎯 Interactive Whiteboard Details

### Team Management System
```javascript
- Maximum 3 teams per alliance (Red/Blue)
- Real-time validation and feedback
- Drag-and-drop positioning with proper scaling
- Dynamic team box sizing based on field scale
```

### Drawing System
```javascript
- Freehand drawing with mouse/touch
- Color picker with hex color support
- Brush size range: 1-50 pixels
- Eraser tool with destination-out compositing
- 20-step undo system with canvas state management
```

### Export Functionality
```javascript
- Composite canvas rendering
- Includes background field + drawings + team positions
- Timestamp-based filename generation
- PNG format with proper resolution
```

## 📱 Mobile Experience

### Responsive Features
- **Adaptive Toolbar** - Moves to bottom on mobile devices
- **Touch Controls** - Optimized for finger interaction
- **Scaled Interface** - Buttons and inputs resize appropriately
- **Canvas Scaling** - Field image maintains aspect ratio

### Performance Optimizations
- **Reduced Animations** - Lighter effects on mobile
- **Efficient Rendering** - Optimized canvas operations
- **Memory Management** - Proper cleanup of canvas states

## 🔄 Evolution to Version 3

Version 2 laid the groundwork for the enhanced Version 3:

### Lessons Learned:
- **User Interface** - Led to the dark theme in V3
- **Interactive Elements** - Improved whiteboard in V3
- **Mobile Experience** - Enhanced responsive design in V3
- **Content Organization** - Better structured pages in V3

### Technical Improvements Made in V3:
- Enhanced CSS framework
- Better JavaScript organization
- Improved accessibility features
- More sophisticated animations

## 🏅 Historical Context

Version 2 represents an important milestone in Team Sheldon's digital presence:

- **First Interactive Whiteboard** - Original strategy planning tool
- **Established Design Language** - Foundation for team branding
- **Comprehensive Team Site** - Complete information architecture
- **Mobile-First Approach** - Early responsive design implementation

## 📋 Legacy Features

Some unique aspects of Version 2 that showcase our development journey:

### Original Innovations:
- **Canvas-based Strategy Tool** - First implementation of field planning
- **Dynamic Team Positioning** - Drag-and-drop alliance management
- **Composite Image Export** - Advanced canvas manipulation
- **Responsive Whiteboard** - Mobile-optimized drawing interface

### Development Insights:
- **Vanilla JavaScript** - No external frameworks, pure implementation
- **Custom Canvas Logic** - Hand-coded drawing and positioning systems
- **Performance Focus** - Optimized for various device capabilities

---

## 🎯 Quick Start Guide

1. **Browse the Site**: Start with `index.html` to explore team information
2. **Try the Whiteboard**: Open `2025-FRC.html` for interactive strategy planning
3. **Mobile Testing**: View on mobile devices to experience responsive design
4. **Export Strategies**: Use the whiteboard to create and save field strategies

---

**Version 2 Archive** | *Foundation of Team Sheldon's Digital Innovation*

**© 2024-2025 Sheldon College (Team Sheldon)** | Historical preservation of our web development journey