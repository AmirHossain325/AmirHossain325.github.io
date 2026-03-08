// Advanced Three.js Scene with 3D Models and Post-Processing
class PortfolioScene {
    constructor() {
        this.canvas = document.getElementById('webgl-canvas');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.composer = null;
        this.particles = null;
        this.model = null;
        this.networkLines = [];
        this.clock = new THREE.Clock();
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        this.loadingManager = new THREE.LoadingManager();
        
        this.setupLoadingManager();
        this.init();
        this.createAdvancedParticles();
        this.createHolographicGrid();
        this.createNetworkLines();        this.create3DTerminalMonitor();        this.loadModels();
        this.setupPostProcessing();
        this.animate();
        this.handleResize();
        this.setupInteractions();
    }

    setupLoadingManager() {
        const loadingScreen = document.getElementById('loading-screen');
        const progressBar = document.querySelector('.loading-progress');
        const percentage = document.querySelector('.loading-percentage');

        this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
            const progress = (itemsLoaded / itemsTotal) * 100;
            progressBar.style.width = progress + '%';
            percentage.textContent = Math.round(progress) + '%';
        };

        this.loadingManager.onLoad = () => {
            this.hideLoadingScreen(loadingScreen);
        };

        // Fallback: hide loading screen after 3 seconds if it hasn't loaded
        setTimeout(() => {
            this.hideLoadingScreen(loadingScreen);
        }, 3000);
    }

    hideLoadingScreen(loadingScreen) {
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            loadingScreen.classList.add('hidden');
        }
    }

    init() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x0a0e1a, 0.01);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 0, 50);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Advanced Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);

        const mainLight = new THREE.DirectionalLight(0x00ff88, 1);
        mainLight.position.set(5, 10, 5);
        mainLight.castShadow = true;
        this.scene.add(mainLight);

        const pointLight1 = new THREE.PointLight(0x00ff88, 2, 100);
        pointLight1.position.set(10, 10, 10);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x0099ff, 2, 100);
        pointLight2.position.set(-10, -10, 10);
        this.scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0xff006e, 1.5, 100);
        pointLight3.position.set(0, -10, -10);
        this.scene.add(pointLight3);
    }

    createAdvancedParticles() {
        // Main particle system
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 3000;
        const posArray = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
        const sizes = new Float32Array(particlesCount);

        for (let i = 0; i < particlesCount * 3; i += 3) {
            posArray[i] = (Math.random() - 0.5) * 150;
            posArray[i + 1] = (Math.random() - 0.5) * 150;
            posArray[i + 2] = (Math.random() - 0.5) * 150;

            // Varied colors (cyan, green, blue)
            const colorChoice = Math.random();
            if (colorChoice < 0.33) {
                colors[i] = 0;
                colors[i + 1] = 1;
                colors[i + 2] = 1; // Cyan
            } else if (colorChoice < 0.66) {
                colors[i] = 0;
                colors[i + 1] = 1;
                colors[i + 2] = 0.5; // Green
            } else {
                colors[i] = 0;
                colors[i + 1] = 0.6;
                colors[i + 2] = 1; // Blue
            }

            sizes[i / 3] = Math.random() * 0.3;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });

        this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);
    }

    createHolographicGrid() {
        // Create a grid plane with holographic effect
        const gridSize = 100;
        const divisions = 50;
        
        const gridHelper = new THREE.GridHelper(gridSize, divisions, 0x00ff88, 0x0099ff);
        gridHelper.material.opacity = 0.2;
        gridHelper.material.transparent = true;
        gridHelper.position.y = -20;
        this.scene.add(gridHelper);

        // Add a circular platform
        const platformGeometry = new THREE.CircleGeometry(30, 64);
        const platformMaterial = new THREE.MeshStandardMaterial({
            color: 0x00ff88,
            emissive: 0x00ff88,
            emissiveIntensity: 0.3,
            transparent: true,
            opacity: 0.1,
            side: THREE.DoubleSide
        });
        const platform = new THREE.Mesh(platformGeometry, platformMaterial);
        platform.rotation.x = -Math.PI / 2;
        platform.position.y = -19.5;
        this.scene.add(platform);
    }

    createNetworkLines() {
        const lineCount = 80;
        
        for (let i = 0; i < lineCount; i++) {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(6);
            
            positions[0] = (Math.random() - 0.5) * 100;
            positions[1] = (Math.random() - 0.5) * 100;
            positions[2] = (Math.random() - 0.5) * 100;
            positions[3] = (Math.random() - 0.5) * 100;
            positions[4] = (Math.random() - 0.5) * 100;
            positions[5] = (Math.random() - 0.5) * 100;
            
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const material = new THREE.LineBasicMaterial({
                color: Math.random() > 0.5 ? 0x00ff88 : 0x0099ff,
                transparent: true,
                opacity: 0.15,
                blending: THREE.AdditiveBlending
            });
            
            const line = new THREE.Line(geometry, material);
            this.networkLines.push(line);
            this.scene.add(line);
        }
    }

    create3DTerminalMonitor() {
        // Create a 3D terminal monitor with monitor texture
        const group = new THREE.Group();
        group.position.set(-30, 0, 0);
        
        // Monitor frame (bezels)
        const frameGeometry = new THREE.BoxGeometry(16, 12, 2);
        const frameMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1a1a,
            metalness: 0.8,
            roughness: 0.3
        });
        const frame = new THREE.Mesh(frameGeometry, frameMaterial);
        group.add(frame);
        
        // Load and apply monitor texture
        const textureLoader = new THREE.TextureLoader(this.loadingManager);
        textureLoader.load(
            'source/fin_monitor_silo_01_col.png',
            (texture) => {
                texture.magFilter = THREE.LinearFilter;
                texture.minFilter = THREE.LinearFilter;
                
                const screenGeometry = new THREE.PlaneGeometry(15, 11.25);
                const screenMaterial = new THREE.MeshStandardMaterial({
                    map: texture,
                    emissive: 0x00ff00,
                    emissiveIntensity: 0.1,
                    emissiveMap: texture
                });
                const screen = new THREE.Mesh(screenGeometry, screenMaterial);
                screen.position.z = 1.1;
                group.add(screen);
                
                this.screenMesh = screen;
                this.screenTexture = texture;
            },
            undefined,
            (error) => {
                console.log('Error loading monitor texture:', error);
                // Fallback to cyan screen if texture fails
                const screenGeometry = new THREE.PlaneGeometry(15, 11.25);
                const screenMaterial = new THREE.MeshStandardMaterial({
                    color: 0x001a00,
                    emissive: 0x00ff00,
                    emissiveIntensity: 0.3
                });
                const screen = new THREE.Mesh(screenGeometry, screenMaterial);
                screen.position.z = 1.1;
                group.add(screen);
                this.screenMesh = screen;
            }
        );
        
        // Add a glow behind the screen
        const glowGeometry = new THREE.PlaneGeometry(16, 12.1);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            transparent: true,
            opacity: 0.1
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.z = 0.9;
        group.add(glow);
        
        // Monitor stand
        const standGeometry = new THREE.BoxGeometry(0.5, 4, 2);
        const standMaterial = new THREE.MeshStandardMaterial({
            color: 0x0d0d0d,
            metalness: 0.6,
            roughness: 0.4
        });
        const stand = new THREE.Mesh(standGeometry, standMaterial);
        stand.position.y = -8;
        group.add(stand);
        
        this.scene.add(group);
    }

    loadModels() {
        const loader = new THREE.GLTFLoader(this.loadingManager);
        
        // Load the Control Room Monitor model
        loader.load(
            'source/Control Room Monitor.gltf',
            (gltf) => {
                this.model = gltf.scene;
                this.model.scale.set(3, 3, 3);
                this.model.position.set(0, 0, 0);
                
                // Add emissive materials to make it glow
                this.model.traverse((child) => {
                    if (child.isMesh) {
                        child.material.emissive = new THREE.Color(0x00ff88);
                        child.material.emissiveIntensity = 0.3;
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
                
                this.scene.add(this.model);
            },
            (progress) => {
                console.log('Loading model:', (progress.loaded / progress.total * 100) + '%');
            },
            (error) => {
                console.log('Error loading model:', error);
                // If model fails to load, create a placeholder
                this.createPlaceholderObject();
            }
        );
    }

    createPlaceholderObject() {
        // Futuristic cube as placeholder
        const geometry = new THREE.BoxGeometry(10, 10, 10);
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.LineBasicMaterial({ 
            color: 0x00ff88,
            linewidth: 2
        });
        const wireframe = new THREE.LineSegments(edges, material);
        
        const cubeMaterial = new THREE.MeshStandardMaterial({
            color: 0x00ff88,
            emissive: 0x00ff88,
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.3,
            wireframe: false
        });
        const cube = new THREE.Mesh(geometry, cubeMaterial);
        cube.add(wireframe);
        
        this.model = cube;
        this.scene.add(this.model);
    }

    setupPostProcessing() {
        if (!THREE.EffectComposer) return;

        this.composer = new THREE.EffectComposer(this.renderer);
        
        const renderPass = new THREE.RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);

        // Bloom effect for glowing elements
        const bloomPass = new THREE.UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.8,  // strength
            0.4,  // radius
            0.85  // threshold
        );
        this.composer.addPass(bloomPass);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const elapsedTime = this.clock.getElapsedTime();

        // Rotate particles
        if (this.particles) {
            this.particles.rotation.y = elapsedTime * 0.03;
            this.particles.rotation.x = Math.sin(elapsedTime * 0.5) * 0.05;
        }

        // Animate 3D model
        if (this.model) {
            this.model.rotation.y = elapsedTime * 0.2;
            this.model.position.y = Math.sin(elapsedTime * 0.5) * 2;
        }

        // Animate network lines
        this.networkLines.forEach((line, index) => {
            line.rotation.y = Math.sin(elapsedTime + index) * 0.1;
            line.rotation.x = Math.cos(elapsedTime + index * 0.5) * 0.1;
            line.material.opacity = 0.1 + Math.sin(elapsedTime + index) * 0.05;
        });

        // Render with post-processing or normal
        if (this.composer) {
            this.composer.render();
        } else {
            this.renderer.render(this.scene, this.camera);
        }
    }

    setupInteractions() {
        // Mouse movement
        window.addEventListener('mousemove', (event) => {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            
            this.camera.position.x += (this.mouse.x * 3 - this.camera.position.x) * 0.05;
            this.camera.position.y += (this.mouse.y * 3 - this.camera.position.y) * 0.05;
            
            // Create cursor trail
            this.createCursorTrail(event.clientX, event.clientY);
        });

        // Mouse click interaction
        window.addEventListener('click', (event) => {
            this.raycaster.setFromCamera(this.mouse, this.camera);
            
            if (this.model) {
                const intersects = this.raycaster.intersectObject(this.model, true);
                if (intersects.length > 0) {
                    this.pulseModel();
                }
            }
        });
    }

    createCursorTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 1000);
    }

    pulseModel() {
        if (!this.model) return;
        
        const originalScale = this.model.scale.clone();
        gsap.to(this.model.scale, {
            x: originalScale.x * 1.2,
            y: originalScale.y * 1.2,
            z: originalScale.z * 1.2,
            duration: 0.2,
            yoyo: true,
            repeat: 1
        });
    }

    handleResize() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            
            if (this.composer) {
                this.composer.setSize(window.innerWidth, window.innerHeight);
            }
        });
    }
}

// Initialize scene when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const portfolioScene = new PortfolioScene();
    
    // Add data stream effect
    createDataStream();
    
    // Create matrix rain effect in terminal
    createMatrixRain();
});

function createMatrixRain() {
    const matrixContainer = document.querySelector('.matrix-rain');
    if (!matrixContainer) return;
    
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    function createChar() {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = characters[Math.floor(Math.random() * characters.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.top = '-20px';
        char.style.animationDuration = (Math.random() * 5 + 5) + 's';
        char.style.opacity = Math.random() * 0.5;
        
        matrixContainer.appendChild(char);
        
        setTimeout(() => char.remove(), 10000);
    }
    
    setInterval(createChar, 100);
}

function createDataStream() {
    const dataStream = document.createElement('div');
    dataStream.className = 'data-stream';
    document.body.appendChild(dataStream);
    
    setInterval(() => {
        const span = document.createElement('span');
        span.textContent = Math.random().toString(16).substr(2, 8).toUpperCase();
        span.style.left = Math.random() * window.innerWidth + 'px';
        span.style.animationDuration = (Math.random() * 3 + 2) + 's';
        dataStream.appendChild(span);
        
        setTimeout(() => span.remove(), 5000);
    }, 200);
}

function updateTerminalContent() {
    const terminalContent = document.querySelector('.terminal-content');
    if (!terminalContent) return;
    
    const messages = [
        { prompt: '$', text: 'accessing security protocols', type: 'command' },
        { prompt: '$', text: 'initializing quantum encryption...', type: 'command' },
        { prompt: '$', text: '████████████████░░░░ 75%', type: 'status' },
        { prompt: '$', text: 'deploying advanced security framework', type: 'command' },
        { prompt: '$', text: 'scanning threat intelligence database', type: 'command' },
        { prompt: '$', text: 'analyzing vulnerability patterns', type: 'command' },
        { prompt: '$', text: '████████████████████ 100%', type: 'status' },
        { prompt: '$', text: 'Connection established ✓', type: 'status' }
    ];
    
    // Rotate terminal messages every 15 seconds
    setInterval(() => {
        const lines = terminalContent.querySelectorAll('.terminal-line');
        if (lines.length > 0) {
            const lastLine = lines[lines.length - 1];
            lastLine.style.animation = 'none';
            setTimeout(() => {
                lastLine.remove();
                
                // Add new line
                const newLine = document.createElement('div');
                newLine.className = 'terminal-line';
                const randomMsg = messages[Math.floor(Math.random() * messages.length)];
                
                const prompt = document.createElement('span');
                prompt.className = randomMsg.type === 'status' ? '' : 'terminal-prompt';
                prompt.textContent = randomMsg.type === 'status' ? '' : randomMsg.prompt + ' ';
                
                const text = document.createElement('span');
                text.className = randomMsg.type === 'status' ? 'terminal-status' : 'terminal-command';
                text.textContent = randomMsg.text;
                
                newLine.appendChild(prompt);
                newLine.appendChild(text);
                terminalContent.insertBefore(newLine, terminalContent.lastChild);
                newLine.style.animationDelay = '0s';
                
                // Scroll to bottom
                terminalContent.scrollTop = terminalContent.scrollHeight;
            }, 100);
        }
    }, 8000);
}

// Call update terminal on DOMContentLoaded
window.addEventListener('load', () => {
    setTimeout(() => updateTerminalContent(), 2000);
});

export default PortfolioScene;
