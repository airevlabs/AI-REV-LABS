import React, { useEffect, useRef } from 'react';
import * as THREE from 'https://esm.sh/three';

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    camera.position.y = 10;
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance" 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Wave Configuration
    const width = 60;
    const depth = 60;
    const density = 0.8; // Space between particles
    
    const countX = Math.floor(width / density);
    const countZ = Math.floor(depth / density);
    const particleCount = countX * countZ;

    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    
    let i = 0;
    for (let x = 0; x < countX; x++) {
      for (let z = 0; z < countZ; z++) {
        const xPos = (x - countX / 2) * density;
        const zPos = (z - countZ / 2) * density;
        
        positions[i * 3] = xPos;
        positions[i * 3 + 1] = 0; // y handled in shader
        positions[i * 3 + 2] = zPos;
        
        scales[i] = Math.random();
        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

    // Custom Shader Material for the Wave
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#d1d5db') }, // Light gray (Gray-300)
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        
        attribute float aScale;
        
        void main() {
          vec3 pos = position;
          
          // Wave Logic
          // Calculate distance from center for radial ripple
          float d = length(pos.xz);
          
          // Compound sine waves for organic motion
          float y = sin(pos.x * 0.2 + uTime * 1.5) * 1.5;
          y += sin(pos.z * 0.15 + uTime * 1.2) * 1.5;
          y += sin(d * 0.2 - uTime) * 1.0;
          
          pos.y = y;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Size attenuation
          gl_PointSize = (4.0 * aScale + 2.0) * uPixelRatio;
          gl_PointSize *= (20.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        
        void main() {
          // Circular particle
          float r = distance(gl_PointCoord, vec2(0.5));
          if (r > 0.5) discard;
          
          // Soft edge
          float alpha = 1.0 - smoothstep(0.3, 0.5, r);
          
          // Fade based on z-depth handled by fog/opacity manually if needed
          gl_FragColor = vec4(uColor, alpha * 0.6); 
        }
      `
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      // Mask the bottom to fade into content
      style={{ 
        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
      }}
    />
  );
};
