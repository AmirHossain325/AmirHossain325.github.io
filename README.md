# Advanced Futuristic Security Engineer Portfolio

A cutting-edge, interactive **3D portfolio** website featuring advanced animations, 3D models, and cyberpunk aesthetics. Built with **Three.js**, **GSAP**, and post-processing effects for a truly immersive experience.

## ✨ Advanced Features

- **🎮 3D Model Integration**: GLTF model loader with interactive floating 3D objects
- **💫 Post-Processing Effects**: Bloom, glow, and advanced shader effects
- **🌌 Advanced Particle System**: 3000+ particles with multi-color variations
- **🎯 Holographic UI**: HUD overlays, scan lines, and futuristic interface elements
- **⚡ Loading Screen**: Animated progress with multi-ring loader
- **🔮 Glitch Effects**: Cyberpunk-style text glitches and RGB separation
- **💡 Neon Glow**: Dynamic lighting and neon button effects
- **🖱️ Interactive 3D**: Mouse-responsive camera and 3D card tilting
- **📊 Data Stream**: Matrix-style falling code effect
- **🎬 Advanced GSAP Animations**: Elastic, spiral, and 3D transform animations

## 🎨 Features

- **3D Animated Background**: Dynamic particle system and network visualization using Three.js
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Modular Design**: Each section has its own separate file for easy customization
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Cybersecurity-themed design with neon accents
- **Easy Customization**: Simple data structures for updating content

## 📁 Project Structure

```
portfolio/
├── index.html                          # Main HTML file
├── source/
│   ├── css/
│   │   └── style.css                  # All styling
│   ├── js/
│   │   ├── main.js                    # Three.js scene setup
│   │   ├── animations.js              # GSAP animations
│   │   └── sections/
│   │       ├── about.js               # About Me section
│   │       ├── skills.js              # Skills Inventory section
│   │       ├── projects.js            # Projects section
│   │       ├── certifications.js      # Certifications section
│   │       └── contacts.js            # Contacts & Links section
└── textures/                          # For 3D textures (optional)
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge recommended)
- Local web server (for best performance)

### Quick Start

#### Option 1: Open Directly in Browser

Simply open `index.html` in a modern web browser. The portfolio uses CDN links for Three.js and GSAP, so no installation is required!

### Option 2: Use a Local Server (Recommended)

For better performance and to avoid CORS issues:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎯 Advanced Features Overview

For detailed documentation on all advanced features, see [ADVANCED_FEATURES.md](ADVANCED_FEATURES.md).

### 3D Scene Components
- **GLTF Model Loader**: Displays the Control Room Monitor 3D model
- **3000 Particles**: Multi-colored particle system with depth
- **80 Network Lines**: Dynamic connection visualization
- **Holographic Grid**: Futuristic floor grid with platform
- **Multiple Light Sources**: Directional, point, and ambient lighting

### Visual Effects
- **Bloom Post-Processing**: UnrealBloomPass for glowing elements
- **Glitch Text**: RGB channel separation effect
- **Hologram Effect**: Flickering neon text
- **Cursor Trail**: Mouse-following particle trail
- **Scan Lines**: Animated HUD overlay
- **Data Stream**: Matrix-style code rain

### Interactions
- **Mouse-Responsive Camera**: Camera follows cursor smoothly
- **3D Card Tilting**: Cards rotate based on mouse position
- **Click Interactions**: 3D model pulses on click
- **Hover Effects**: Scale, glow, and color transitions
- **Smooth Scroll**: Advanced GSAP scroll animations

## ✏️ Customization Guide

### 1. About Me Section

Edit `source/js/sections/about.js`:

```javascript
const aboutData = {
    greeting: "Your greeting here",
    name: "Your Name",
    title: "Your Title",
    description: [
        "Paragraph 1",
        "Paragraph 2",
        "Paragraph 3"
    ],
    highlights: [
        "Highlight 1",
        "Highlight 2",
        "Highlight 3",
        "Highlight 4"
    ]
};
```

### 2. Skills Inventory

Edit `source/js/sections/skills.js`:

Add or modify skill categories:

```javascript
{
    icon: "🔒",  // Emoji icon
    title: "Category Name",
    skills: [
        "Skill 1",
        "Skill 2",
        // Add more skills
    ]
}
```

### 3. Projects

Edit `source/js/sections/projects.js`:

```javascript
{
    title: "Project Name",
    description: "Project description",
    tags: ["Tag1", "Tag2", "Tag3"],
    link: "https://project-link.com",
    icon: "🚀"  // Emoji icon
}
```

### 4. Certifications

Edit `source/js/sections/certifications.js`:

```javascript
{
    name: "Cert Acronym",
    fullName: "Full Certification Name",
    issuer: "Issuing Organization",
    date: "Year",
    icon: "🎖️",
    color: "#ff006e"  // Accent color
}
```

### 5. Contacts & Links

Edit `source/js/sections/contacts.js`:

Update your contact information and social media links:

```javascript
const contactData = {
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    socialLinks: [
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/yourprofile",
            icon: "💼"
        },
        // Add more social links
    ]
};
```

## 🎨 Color Customization

Edit CSS variables in `source/css/style.css`:

```css
:root {
    --primary-color: #00ff88;      /* Main accent (green) */
    --secondary-color: #0099ff;    /* Secondary accent (blue) */
    --accent-color: #ff006e;       /* Third accent (pink) */
    --dark-bg: #0a0e1a;            /* Background color */
    --text-color: #e0e0e0;         /* Main text color */
    --text-secondary: #8892b0;     /* Secondary text color */
}
```

## 🎭 3D Scene Customization

Edit `source/js/main.js` to customize:

- **Particle Count**: Change `particlesCount` variable
- **Particle Colors**: Modify the color arrays in `createParticles()`
- **Network Lines**: Adjust `lineCount` in `createNetworkLines()`
- **Camera Movement**: Modify mouse interaction in `onMouseMove()`

## 📱 Responsive Design

The portfolio is fully responsive. Breakpoints are defined in `style.css`:

```css
@media (max-width: 768px) {
    /* Mobile styles */
}
```

## 🎭 3D Scene Customization

Edit `source/js/main.js` to customize:

### Particle System
```javascript
// Line 109 - Change particle count
const particlesCount = 3000; // Increase/decrease for performance

// Line 123-137 - Modify particle colors
// Change RGB values for different color schemes
```

### 3D Model
```javascript
// Line 212 - Model path
loader.load('source/Control Room Monitor.gltf', ...)

// Line 216 - Model scale and position
this.model.scale.set(3, 3, 3);
this.model.position.set(0, 0, 0);

// Line 220-224 - Material properties
child.material.emissive = new THREE.Color(0x00ff88);
child.material.emissiveIntensity = 0.3;
```

### Post-Processing
```javascript
// Line 268-273 - Bloom settings
const bloomPass = new THREE.UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.8,  // strength (0-3)
    0.4,  // radius (0-1)
    0.85  // threshold (0-1)
);
```

### Camera & Lighting
```javascript
// Line 61 - Camera position
this.camera.position.set(0, 0, 50);

// Line 74-85 - Adjust lighting colors and intensity
const pointLight1 = new THREE.PointLight(0x00ff88, 2, 100);
```

## 🔧 Advanced Customization

### Adding Custom 3D Models

1. Export your model as GLTF (.gltf + .bin) or GLB (.glb) format
2. Place files in the `source/` folder
3. Update the model path in `main.js`:

```javascript
loader.load('source/YourModel.gltf', (gltf) => {
    this.model = gltf.scene;
    // Customize scale, position, materials
});
```

**Recommended Model Sources:**
- [Sketchfab](https://sketchfab.com) - Free/paid 3D models
- [TurboSquid](https://turbosquid.com) - Professional models
- [Blender](https://blender.org) - Create your own
- [Ready Player Me](https://readyplayer.me) - Custom avatars

### Adding Custom Textures

1. Add texture files to the `textures/` folder
2. Load them in `main.js`:

```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('textures/your-texture.jpg');
material.map = texture;
```

### Modifying Animations

Edit `source/js/animations.js` to customize:

- **Animation Duration**: Change `duration` values
- **Animation Delays**: Adjust `delay` values
- **Easing Functions**: Use different GSAP easing functions
- **Scroll Triggers**: Modify `start` and `end` values

### Adding New Sections

1. Create a new file in `source/js/sections/`
2. Add the section to `index.html`
3. Add animations in `animations.js`
4. Link the script in `index.html`

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari (limited post-processing)
- ✅ Edge
- ✅ Opera
- ❌ IE11 (not supported)

## 📦 Dependencies

All dependencies are loaded via CDN:

- **Three.js r128** - 3D graphics library
- **GLTFLoader** - 3D model loading
- **EffectComposer** - Post-processing pipeline
- **RenderPass** - Render scene to texture
- **UnrealBloomPass** - Bloom shader effect
- **CopyShader** - Copy pixels shader
- **ShaderPass** - Custom shader support
- **GSAP 3.12.2** - Animation library
- **ScrollTrigger** - GSAP scroll plugin

### Advanced Three.js Features Used
- BufferGeometry for performance
- PointsMaterial for particles
- LineBasicMaterial for connections
- Shadow mapping (PCFSoftShadowMap)
- Fog effects (FogExp2)
- Emissive materials
- Additive blending
- Raycasting for interactions

## ⚡ Performance Optimization

### Default Settings
The portfolio is optimized for modern hardware. For lower-end devices:

```javascript
// Reduce particle count (main.js line 109)
const particlesCount = 1000; // Instead of 3000

// Reduce network lines (main.js line 171)
const lineCount = 30; // Instead of 80

// Disable post-processing (main.js line 264)
// Comment out or remove setupPostProcessing() call

// Limit pixel ratio (main.js line 68)
this.renderer.setPixelRatio(1); // Instead of Math.min(2)
```

### Mobile Optimization
```javascript
// Detect mobile and adjust
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const particlesCount = isMobile ? 500 : 3000;
const lineCount = isMobile ? 20 : 80;
```

### Performance Monitoring
```javascript
// Add FPS counter
const stats = new Stats();
document.body.appendChild(stats.dom);

// In animate function
stats.begin();
// ... rendering code
stats.end();
```

## 🚀 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to Settings → Pages
3. Select main branch
4. Your site will be live at `https://yourusername.github.io/portfolio`

### Netlify/Vercel

Simply drag and drop your portfolio folder to either platform for instant deployment.

## 📝 To-Do for Personalization

- [ ] Update all personal information in section files
- [ ] Replace placeholder links with real URLs
- [ ] Add your actual projects
- [ ] Update certifications with your credentials
- [ ] Customize colors to match your brand
- [ ] Replace/customize the 3D model (optional)
- [ ] Add custom textures (optional)
- [ ] Adjust particle count for your target devices
- [ ] Test performance and optimize if needed
- [ ] Test on multiple devices and browsers
- [ ] Add your own logo/branding
- [ ] Customize animation timings to your preference
- [ ] Add analytics tracking (Google Analytics, etc.)
- [ ] Set up custom domain
- [ ] Add meta tags for SEO
- [ ] Create social media preview images

## 🎮 Interactive Features Guide

### Mouse Interactions
- **Move Mouse**: Camera follows cursor for dynamic parallax
- **Hover Cards**: Cards tilt and scale based on mouse position
- **Click 3D Model**: Model pulses and scales
- **Hover Buttons**: Glow and scanning effects

### Keyboard Navigation
- **Tab**: Navigate through links
- **Enter**: Activate focused link
- **Arrow Keys**: Scroll page (browser default)

### Touch Interactions (Mobile)
- **Swipe**: Scroll through sections
- **Tap**: Activate links and buttons
- **Pinch**: Zoom (browser default)

## 🎓 Learning Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [GLTF Format Specification](https://github.com/KhronosGroup/glTF)
- [GSAP Documentation](https://greensock.com/docs/)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [Shader Tutorial](https://thebookofshaders.com/)

## 🐛 Troubleshooting

### 3D Model Not Loading
- ✅ Check file path is correct: `source/Control Room Monitor.gltf`
- ✅ Ensure `.bin` file is in same directory as `.gltf`
- ✅ Use a local server (not file://)
- ✅ Check browser console for errors
- ✅ Check model file size (large models take time to load)

### Performance Issues
- 🔧 Reduce particle count in `main.js`
- 🔧 Disable post-processing effects
- 🔧 Reduce network line count
- 🔧 Limit pixel ratio to 1
- 🔧 Check GPU acceleration is enabled in browser
- 🔧 Close other browser tabs

### Animations Not Working
- ✅ Verify GSAP scripts are loading from CDN
- ✅ Check browser console for JavaScript errors
- ✅ Ensure all section files are linked in `index.html`
- ✅ Clear browser cache (Ctrl+Shift+R)
- ✅ Check ScrollTrigger plugin is loaded

### Particles Not Visible
- ✅ Check camera position in `main.js`
- ✅ Verify particle colors aren't too dark
- ✅ Check particle opacity settings
- ✅ Ensure additive blending is enabled
- ✅ Move camera closer to particles

### Post-Processing Not Working
- ✅ Check EffectComposer is loaded from CDN
- ✅ Verify UnrealBloomPass is available
- ✅ Check WebGL2 support in browser
- ✅ Try in different browser (Chrome recommended)
- ✅ Check console for shader compilation errors

### Loading Screen Stuck
- ✅ Open browser console to check for errors
- ✅ Verify model file exists and is accessible
- ✅ Check network tab for failed requests
- ✅ Try without 3D model (comment out loadModels)
- ✅ Ensure LoadingManager callbacks are firing

## 📄 License

Feel free to use this portfolio template for your personal or professional use.

## 🤝 Contributing

Found a bug or want to improve the portfolio? Feel free to submit issues or pull requests!

---

**Built with ❤️ for Security Professionals**

🔒 Stay Secure! 🔒
