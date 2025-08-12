'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WebGLBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create triangular prisms
    const geometry = new THREE.ConeGeometry(0.3, 0.6, 3);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00D9FF,
      wireframe: true,
      opacity: 0.15,
      transparent: true
    });

    const prisms: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const prism = new THREE.Mesh(geometry, material.clone());
      prism.position.x = (Math.random() - 0.5) * 8;
      prism.position.y = (Math.random() - 0.5) * 8;
      prism.position.z = (Math.random() - 0.5) * 5;
      prism.rotation.x = Math.random() * Math.PI;
      prism.rotation.y = Math.random() * Math.PI;
      scene.add(prism);
      prisms.push(prism);
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      prisms.forEach((prism, index) => {
        prism.rotation.x += 0.001 * (index % 2 === 0 ? 1 : -1);
        prism.rotation.y += 0.001 * (index % 2 === 0 ? -1 : 1);
        prism.position.y += Math.sin(Date.now() * 0.0005 + index) * 0.0005;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
