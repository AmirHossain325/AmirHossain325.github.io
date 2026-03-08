// Contacts and Links Section Data and Rendering

const contactData = {
    tagline: "Let's Connect and Secure the Digital World Together",
    description: "I'm always interested in hearing about new opportunities, collaborations, or just connecting with fellow security professionals. Feel free to reach out!",
    email: "hossainaamir343125@gmail.com",
    phone: "01407366395",
    location: "Mirpuir-1,Dhaka, Bangladesh",
    contactLinks: [
        {
            icon: "📧",
            value: "hossainaamir343125@gmail.com",
            link: "mailto:hossainaamir343125@gmail.com"
        },
        {
            icon: "📱",
            value: "01407366395",
            link: "tel:01407366395"
        },
        {
            icon: "📍",
            value: "Mirpur-1, Dhaka, Bangladesh",
            link: "#contact"
        }
    ],
    socialLinks: [
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/amir625/",
            icon: "💼"
        },
        {
            platform: "GitHub",
            url: "https://github.com/AmirHossain325",
            icon: "💻"
        },

        {
            platform: "TryHackMe",
            url: "https://tryhackme.com/p/aestheteportento",
            icon: "🎮"
        }
    ]
};

function renderContactSection() {
    const contactContent = document.getElementById('contact-content');
    
    const html = `
        <div class="contact-content">
            <h2 class="glitch" data-text="${contactData.tagline}" style="
                color: var(--secondary-color); 
                font-size: 2rem; 
                margin-bottom: 1rem;
            ">
                ${contactData.tagline}
            </h2>
            <p>${contactData.description}</p>
            
            <div style="margin: 3rem 0;">
                <h3 class="hologram-text" style="margin-bottom: 2rem; font-size: 1.8rem;">
                    Find Me Online
                </h3>
                <div class="social-links">
                    ${contactData.socialLinks.map((social, idx) => `
                        <a href="${social.url}" 
                           class="social-link glow-effect" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           title="${social.platform}"
                           style="
                               animation: float ${2 + idx * 0.2}s ease-in-out infinite;
                               animation-delay: ${idx * 0.1}s;
                           ">
                            <span style="font-size: 1.5rem;">${social.icon}</span>
                        </a>
                    `).join('')}
                </div>
            </div>
            
            <div class="cyber-border" style="
                margin-top: 3rem; 
                padding: 2rem; 
                background: linear-gradient(135deg, rgba(0,255,136,0.05), rgba(0,153,255,0.05)); 
                border-radius: 10px;
                position: relative;
                overflow: hidden;
            ">
                <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(45deg, transparent 30%, rgba(0, 255, 136, 0.1) 50%, transparent 70%);
                    animation: shimmer 3s infinite;
                "></div>
                <h3 class="hologram-text" style="margin-bottom: 1.5rem; position: relative; z-index: 1;">Quick Info</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; position: relative; z-index: 1;">
                    <div>
                        <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">📍 Location</p>
                        <p style="color: var(--text-color); font-weight: 600;">${contactData.location}</p>
                    </div>
                    <div>
                        <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">📧 Email</p>
                        <p style="color: var(--text-color); font-weight: 600;">${contactData.email}</p>
                    </div>
                    <div>
                        <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">📱 Phone</p>
                        <p style="color: var(--text-color); font-weight: 600;">${contactData.phone}</p>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 3rem; text-align: center; padding: 2rem 0; border-top: 1px solid rgba(0,255,136,0.2);">
                <p style="color: var(--text-secondary);">
                    © 2026 Amir Hossain Portfolio. Built with Three.js & GSAP
                </p>
                <p class="hologram-text" style="margin-top: 1rem; font-size: 2rem;">
                    🔒 Stay Secure! 🔒
                </p>
            </div>
        </div>
        <style>
            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
        </style>
    `;
    
    contactContent.innerHTML = html;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderContactSection);

export { contactData, renderContactSection };
