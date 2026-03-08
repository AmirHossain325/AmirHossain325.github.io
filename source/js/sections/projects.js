// Projects Section Data and Rendering

const projectsData = {
    projects: [
        {
            title: "Security Operations Center (SOC) Deployment",
            description: "Designed and deployed a complete Security Operations Center (SOC) in the university data center to monitor, detect, and respond to cyber threats in real time. The university network previously had limited centralized monitoring, making it difficult to detect attacks quickly. The SOC implementation enabled centralized log analysis, threat detection, and incident response. Results: 75% reduction in successful attacks, 80% of attacks now detected automatically, faster incident response through automated alerting, and centralized monitoring for multiple systems.",
            tags: ["Wazuh", "TheHive", "Cortex", "Suricata", "IDS", "SIEM"],
            link: "SOC_Deployment_Report_DIU.pdf",
            icon: "🛡️"
        },
        {
            title: "OWASP Top 10 & Mr. Robot Lab Exploitation",
            description: "Performed web application penetration testing by exploiting vulnerabilities from the OWASP Top 10 in a controlled lab environment. Successfully completed the Mr. Robot security lab, identifying and exploiting multiple web vulnerabilities including Broken Authentication, Sensitive Data Exposure, Security Misconfiguration, Broken Access Control, and Cross-Site Scripting (XSS). Successfully exploited vulnerabilities, discovered hidden directories using DirBuster, and intercepted/modified web requests using Burp Suite.",
            tags: ["Burp Suite", "DirBuster", "OWASP Top 10", "Web Exploitation", "XSS", "Pentesting"],
            link: "web_security.pdf",
            icon: "🕵️"
        },
        {
            title: "WiFi Security Tools: Rubber Ducky & Deauther",
            description: "Built custom WiFi security testing tools using Arduino Pro Micro and ESP32. Created a WiFi Rubber Ducky for keystroke injection attacks and a WiFi Deauther for network security testing and demonstration of deauthentication vulnerabilities. These tools provide hands-on experience with hardware-based security testing and wireless network exploitation techniques.",
            tags: ["Arduino Pro Micro", "ESP32", "WiFi Security", "Hardware Hacking", "Pentesting Tools"],
            link: "#",
            icon: "📡"
        },
        {
            title: "Autonomous Robotics Projects",
            description: "Designed and programmed autonomous robots using Arduino, NodeMCU, and ESP32 microcontrollers. Built a Line Following Robot using IR sensors for path detection and navigation, and an Obstacle Avoiding Robot with ultrasonic sensors for real-time object detection and collision avoidance. Demonstrated embedded systems programming and sensor integration skills.",
            tags: ["Arduino", "NodeMCU", "ESP32", "IR Sensors", "Robotics", "Embedded Systems"],
            link: "#",
            icon: "🤖"
        },

    ]
};

function renderProjectsSection() {
    const projectsContent = document.getElementById('projects-content');
    if (!projectsContent) return;
    
    const html = `
        <div class="projects-grid">
            ${projectsData.projects.map((project, idx) => `
                <div class="project-card cyber-border" style="
                    background: linear-gradient(135deg, rgba(0, 153, 255, 0.05), rgba(255, 0, 110, 0.05));
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent);
                        animation: scan-project ${3 + idx * 0.5}s ease-in-out infinite;
                    "></div>
                    
                    <div style="font-size: 3rem; margin-bottom: 1rem; position: relative; z-index: 1; filter: drop-shadow(0 0 20px var(--secondary-color));">${project.icon}</div>
                    <h3 class="hologram-text" style="position: relative; z-index: 1;">${project.title}</h3>
                    <p style="position: relative; z-index: 1;">${project.description}</p>
                    <div class="project-tags" style="position: relative; z-index: 1;">
                        ${project.tags.map(tag => `
                            <span class="tag" style="
                                box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
                                animation: tag-pulse ${2 + Math.random()}s ease-in-out infinite;
                            ">${tag}</span>
                        `).join('')}
                    </div>
                    <a href="${project.link}" class="project-link neon-button" style="
                        position: relative;
                        z-index: 1;
                        display: inline-block;
                        margin-top: 1rem;
                        padding: 0.5rem 1.5rem;
                        text-decoration: none;
                    ">
                        View Project →
                    </a>
                </div>
            `).join('')}
        </div>
        <style>
            @keyframes scan-project {
                0%, 100% { left: -100%; }
                50% { left: 100%; }
            }
            @keyframes tag-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
        </style>
    `;
    
    projectsContent.innerHTML = html;
}

// Initialize reliably for both immediate and DOM-ready execution paths
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjectsSection);
} else {
    renderProjectsSection();
}

export { projectsData, renderProjectsSection };
