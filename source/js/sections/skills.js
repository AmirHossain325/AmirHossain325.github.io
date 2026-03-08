// Skills Inventory Section Data and Rendering

const skillsData = {
    categories: [
        {
            icon: "🔒",
            title: "Security Testing",
            skills: [
                "SOC Analysis",
                "Web Application Security",
                "Network Security Testing",
                "Social Engineering"
            ]
        },
        {
            icon: "🛠️",
            title: "Security Tools",
            skills: [
                "Burp Suite",
                "Metasploit",
                "Nmap",
                "Wireshark",
                "SQLMap",
                "Radare2",
                "Ghidra",
                "IDA Pro",
                "GDB",
            ]
        },
        {
            icon: "💻",
            title: "Programming & Scripting",
            skills: [
                "Python",
                "C/C#",
                "Java",
                "SQL",
                "Bash/Shell Scripting"
            ]
        },
        {
            icon: "🌐",
            title: "Network Security",
            skills: [
                "IDS/IPS",
                "Traffic Analysis",
                "DDoS Mitigation"
            ]
        },
        {
            icon: "🔐",
            title: "Security Frameworks",
            skills: [
                "OWASP Top 10",
                "MITRE ATT&CK"
            ]
        },
        {
            icon: "🚨",
            title: "Incident Response",
            skills: [
                "Threat Hunting",
                "Digital Forensics",
                "SIEM Tools (Wazuh, SecurityOnion )",
                "Security Monitoring (Graylog)",
                "Incident Case Management (TheHive)"
            ]
        },
        {
            icon: "🧠",
            title: "Soft Skills",
            skills: [
                "Problem Solving",
                "Communication",
                "Consistency",
                "Patience",
                "Adaptability"
            ]
        },
        {
            icon: "🤖",
            title: "Robotics & Electronics",
            skills: [
                "Arduino Programming",
                "Microcontroller Development",
                "IoT Security",
                "Embedded Systems"
            ]
        },

    ]
};

function renderSkillsSection() {
    const skillsContent = document.getElementById('skills-content');
    
    const html = `
        <div class="skills-grid">
            ${skillsData.categories.map((category, idx) => `
                <div class="skill-category glow-effect" style="
                    background: linear-gradient(135deg, rgba(0, 255, 136, 0.05), rgba(0, 153, 255, 0.05));
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="position: absolute; top: -50%; right: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%); animation: rotate-gradient ${5 + idx}s linear infinite;"></div>
                    <h3 style="position: relative; z-index: 1;">
                        <span style="font-size: 2rem; filter: drop-shadow(0 0 10px var(--primary-color));">${category.icon}</span>
                        <span class="hologram-text">${category.title}</span>
                    </h3>
                    <ul style="position: relative; z-index: 1;">
                        ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
        <style>
            @keyframes rotate-gradient {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    
    skillsContent.innerHTML = html;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderSkillsSection);

export { skillsData, renderSkillsSection };
