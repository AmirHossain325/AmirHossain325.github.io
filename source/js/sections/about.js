// About Me Section Data and Rendering

const aboutData = {
    greeting: "Hi, I'm a Security Engineer",
    name: "Amir Hossain",
    title: "Security Engineer",
    description: [
        "I am a SOC Analyst specializing in threat detection, incident response, and security monitoring. I have successfully deployed a Security Operations Center (SOC) using open-source tools in my university environment. My experience also includes vulnerability assessment and red teaming practices to identify and mitigate security risks."
    ],
    highlights: [
        "SOC Deployment and Management",
        "Security Monitoring & SIEM",
        "SOC Automation",
        "Incident Response with case management & Threat Hunting",

    ]
};

function renderAboutSection() {
    const aboutContent = document.getElementById('about-content');
    
    const html = `
        <div class="about-content">
            <div class="about-text">
                <h2 class="glitch" data-text="${aboutData.greeting}">${aboutData.greeting}</h2>
                <h3 class="hologram-text" style="font-size: 2.5rem; margin-bottom: 1.5rem;">${aboutData.name}</h3>
                <p style="color: var(--secondary-color); font-size: 1.3rem; font-weight: 600; margin-bottom: 2rem; text-shadow: 0 0 10px var(--secondary-color);">${aboutData.title}</p>
                
                ${aboutData.description.map(para => `<p>${para}</p>`).join('')}
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 2rem;">
                    ${aboutData.highlights.map(highlight => `
                        <div class="cyber-border" style="display: flex; align-items: center; gap: 10px; padding: 1rem; border-radius: 5px; background: rgba(0, 255, 136, 0.05);">
                            <span style="color: var(--primary-color); font-size: 1.5rem;">✓</span>
                            <span style="color: var(--text-color);">${highlight}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="about-visual">
                <div class="floating hexagon-pattern" style="
                    width: 100%;
                    height: 400px;
                    border-radius: 10px;
                    border: 2px solid rgba(0, 255, 136, 0.3);
                    position: relative;
                    overflow: hidden;
                ">
                    <!-- Full Cover Image -->
                    <img src="my_pic.jpeg" alt="Amir Hossain" style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border: 3px solid var(--primary-color);
                        border-radius: 8px;
                        filter: drop-shadow(0 0 30px var(--primary-color));
                        z-index: 1;
                    ">
                    
                    <!-- Face Scan Frame Overlay -->
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 3; pointer-events: none;">
                        <!-- Corner Brackets -->
                        <div style="position: absolute; top: 20px; left: 20px; width: 40px; height: 40px; border-top: 3px solid var(--primary-color); border-left: 3px solid var(--primary-color);"></div>
                        <div style="position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; border-top: 3px solid var(--primary-color); border-right: 3px solid var(--primary-color);"></div>
                        <div style="position: absolute; bottom: 20px; left: 20px; width: 40px; height: 40px; border-bottom: 3px solid var(--primary-color); border-left: 3px solid var(--primary-color);"></div>
                        <div style="position: absolute; bottom: 20px; right: 20px; width: 40px; height: 40px; border-bottom: 3px solid var(--primary-color); border-right: 3px solid var(--primary-color);"></div>
                        
                        <!-- Scan Info - Top Left on Image -->
                        <div style="position: absolute; top: 30px; left: 30px; font-family: 'Courier New', monospace; color: var(--primary-color); font-size: 0.85rem; text-shadow: 0 0 10px var(--primary-color), 0 0 5px rgba(0,0,0,0.8); background: rgba(0,0,0,0.6); padding: 10px; border-left: 3px solid var(--primary-color);">
                            <div style="margin-bottom: 5px; font-weight: bold;">[ FACE SCAN FRAME ]</div>
                            <div style="margin-bottom: 5px;">TARGET: Amir Hossain</div>
                            <div style="margin-bottom: 5px;">ROLE: SOC ANALYST</div>
                            <div style="color: #00ff00; font-weight: bold;">STATUS: ACTIVE</div>
                        </div>
                        
                        <!-- Scanning Line -->
                        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, var(--primary-color), transparent); animation: scan-line 2s linear infinite; z-index: 4;"></div>
                    </div>
                    
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(45deg, transparent 30%, rgba(0, 255, 136, 0.1) 50%, transparent 70%); animation: shimmer 3s infinite; z-index: 2;"></div>
                </div>
            </div>
        </div>
        <style>
            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
            @keyframes scan-line {
                0% { top: 0; }
                100% { top: 100%; }
            }
        </style>
    `;
    
    aboutContent.innerHTML = html;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderAboutSection);

export { aboutData, renderAboutSection };
