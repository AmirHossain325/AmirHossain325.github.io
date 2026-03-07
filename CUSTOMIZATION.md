# Quick Customization Guide

## 🎯 Files You Need to Edit

### 1️⃣ Personal Information - `source/js/sections/about.js`
```javascript
Line 4-5: Change "Your Name Here" to your actual name
Line 6: Update your professional title
Lines 7-13: Write your personal bio
```

### 2️⃣ Skills - `source/js/sections/skills.js`
```javascript
Lines 6-106: Modify skill categories and add/remove skills
- Keep the structure with icon, title, and skills array
- Use emojis for icons or search for others at emojipedia.org
```

### 3️⃣ Projects - `source/js/sections/projects.js`
```javascript
Lines 6-58: Update with your actual projects
- Replace titles, descriptions, and tags
- Update links to point to GitHub/live demos
- Change emojis to match project types
```

### 4️⃣ Certifications - `source/js/sections/certifications.js`
```javascript
Lines 6-89: Add/remove your certifications
- Update names, dates, and issuers
- Customize colors for each cert card
```

### 5️⃣ Contact Info - `source/js/sections/contacts.js`
```javascript
Lines 7-8: Update email and phone
Line 9: Update location
Lines 11-26: Update contact links
Lines 28-57: Update social media URLs
```

## 🎨 Visual Customization

### Change Colors
**File**: `source/css/style.css` (Lines 10-21)
```css
--primary-color: #00ff88;      ← Main green accent
--secondary-color: #0099ff;    ← Blue accent
--accent-color: #ff006e;       ← Pink highlight
--neon-cyan: #00ffff;          ← Cyan glow
--neon-pink: #ff00ff;          ← Pink neon
```

### Adjust 3D Particles
**File**: `source/js/main.js`
```javascript
Line 109: const particlesCount = 3000;  ← Increase/decrease
Line 171: const lineCount = 80;         ← Network lines
Line 123-137: Particle color values     ← RGB colors
```

### Modify 3D Model
**File**: `source/js/main.js` (Lines 212-230)
```javascript
// Line 212: Change model file
loader.load('source/YOUR_MODEL.gltf', ...)

// Line 216: Adjust scale
this.model.scale.set(5, 5, 5);  ← Bigger model

// Line 217: Change position
this.model.position.set(10, 5, 0);  ← Move model

// Line 221: Change glow color
child.material.emissive = new THREE.Color(0xff00ff);
```

### Adjust Bloom Effect
**File**: `source/js/main.js` (Lines 268-273)
```javascript
const bloomPass = new THREE.UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.2,  ← strength (higher = more glow)
    0.6,  ← radius
    0.85  ← threshold
);
```

### Modify Animation Speed
**File**: `source/js/animations.js`
```javascript
duration: 1.2,  ← Change to speed up (0.5) or slow down (2)
delay: 0.1,     ← Stagger timing between elements
ease: 'power4.out'  ← Easing function
```

## 🎬 Advanced Customizations

## 📝 Content Templates

### Adding a New Skill Category
```javascript
{
    icon: "🎨",
    title: "Your Category",
    skills: [
        "Skill 1",
        "Skill 2",
        "Skill 3"
    ]
}
```

### Adding a New Project
```javascript
{
    title: "Project Name",
    description: "Brief description of what it does and your role",
    tags: ["Tech1", "Tech2", "Tech3"],
    link: "https://github.com/yourusername/project",
    icon: "🚀"
}
```

### Adding a New Certification
```javascript
{
    name: "ACRONYM",
    fullName: "Full Certification Name",
    issuer: "Issuing Organization",
    date: "2024",
    icon: "🎖️",
    color: "#ff006e"
}
```

### Adding a Social Link
```javascript
{
    platform: "Platform Name",
    url: "https://platform.com/yourprofile",
    icon: "🔗"
}
```

## 🚀 Quick Start Commands

### Start Local Server
**Python 3:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server
```

**PHP:**
```bash
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 🎭 Emoji Resources
- [Emojipedia](https://emojipedia.org/) - Find perfect emojis
- Security-themed emojis: 🔒 🔓 🔐 🛡️ 🔑 🗝️ ⚠️ 🚨 🎯 ⚔️ 🛠️ 💻 🌐 ☁️ 🔥

## 🐛 Troubleshooting

**3D Scene not showing?**
- Check browser console for errors (F12)
- Make sure you're using Chrome, Firefox, or Edge
- Try using a local server: `python -m http.server 8000`
- Check that Three.js is loading from CDN

**3D Model not loading?**
- Verify file path: `source/Control Room Monitor.gltf`
- Check .bin file is in same folder
- Must use local server (not file://)
- Check browser console for loading errors

**Animations not working?**
- Check that GSAP scripts are loading from CDN
- Open browser console to check for JavaScript errors
- Verify all section files are linked in index.html
- Hard refresh: Ctrl+Shift+R

**Performance issues?**
- Reduce particle count (line 109 in main.js)
- Reduce network lines (line 171 in main.js)
- Disable post-processing (comment out line 264)
- Lower pixel ratio (line 68: setPixelRatio(1))

**Content not updating?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache completely
- Check that you saved the file after editing
- Verify correct file path

## ✅ Deployment Checklist

Before deploying:
- [ ] Updated all personal information
- [ ] Replaced all placeholder links
- [ ] Tested on different browsers
- [ ] Tested on mobile devices
- [ ] Checked all animations work smoothly
- [ ] Verified all links are working
- [ ] Optimized any custom images

## 📧 Update Priority

1. **Must Update First:**
   - Name and title (about.js)
   - Email and contact info (contacts.js)
   - Social media links (contacts.js)

2. **Important:**
   - Projects (projects.js)
   - Skills (skills.js)
   - Certifications (certifications.js)

3. **Optional:**
   - Colors (style.css)
   - 3D effects (main.js)
   - Animation timings (animations.js)

---

⚡ **Pro Tip**: Start by updating one section file at a time, save, and refresh to see changes immediately!
