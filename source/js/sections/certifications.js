// Certifications Section Data and Rendering

const certificationsData = {
    certifications: [

    
        {
            name: "CEH",
            fullName: "Certified Ethical Hacker",
            issuer: "EC-Council",
            icon: "🔓",
            color: "#0099ff"
        },
        
        {
            name: "CSA",
            fullName: "Certified SOC Analyst",
            issuer: "EC-Council",
            icon: "🛡️",
            color: "#ff9500"
        },
        {
            name: "CCNA Security",
            fullName: "Cisco Certified Network Associate Security",
            issuer: "Cisco",
            icon: "🔌",
            color: "#1ba0d8"
        },
    ]
};

function renderCertificationsSection() {
    const certificationsContent = document.getElementById('certifications-content');
    
    const html = `
        <div class="certifications-grid">
            ${certificationsData.certifications.map((cert, idx) => `
                <div class="cert-card glow-effect" style="
                    border-color: ${cert.color}33;
                    background: linear-gradient(135deg, ${cert.color}10, ${cert.color}05);
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 150%;
                        height: 150%;
                        background: radial-gradient(circle, ${cert.color}20 0%, transparent 70%);
                        animation: pulse-glow ${2 + idx * 0.3}s ease-in-out infinite;
                    "></div>
                    
                    <div class="cert-icon" style="
                        position: relative;
                        z-index: 1;
                        filter: drop-shadow(0 0 20px ${cert.color});
                    ">${cert.icon}</div>
                    <h3 class="hologram-text" style="
                        color: ${cert.color};
                        position: relative;
                        z-index: 1;
                        text-shadow: 0 0 10px ${cert.color};
                    ">${cert.name}</h3>
                    <p style="font-size: 0.95rem; color: var(--text-color); margin-bottom: 0.5rem; position: relative; z-index: 1;">${cert.fullName}</p>
                    <p class="issuer" style="position: relative; z-index: 1;">${cert.issuer}</p>
                </div>
            `).join('')}
        </div>
        <style>
            @keyframes pulse-glow {
                0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
                50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
            }
        </style>
    `;
    
    certificationsContent.innerHTML = html;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderCertificationsSection);

export { certificationsData, renderCertificationsSection };
