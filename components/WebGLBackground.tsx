'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WebGLBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
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
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create triangular prisms (pyramids)
    const pyramidGeometry = new THREE.ConeGeometry(0.5, 1, 3);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00D9FF,
      wireframe: true,
      opacity: 0.3,
      transparent: true
    });

    const pyramids: THREE.Mesh[] = [];
    for (let i = 0; i < 15; i++) {
      const pyramid = new THREE.Mesh(pyramidGeometry, material.clone());
      pyramid.position.x = (Math.random() - 0.5) * 10;
      pyramid.position.y = (Math.random() - 0.5) * 10;
      pyramid.position.z = (Math.random() - 0.5) * 10;
      pyramid.rotation.x = Math.random() * Math.PI;
      pyramid.rotation.y = Math.random() * Math.PI;
      scene.add(pyramid);
      pyramids.push(pyramid);
    }

    // Animation
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      pyramids.forEach((pyramid, index) => {
        pyramid.rotation.x += 0.001 * (index % 2 === 0 ? 1 : -1);
        pyramid.rotation.y += 0.002 * (index % 2 === 0 ? -1 : 1);
        pyramid.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
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
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
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
      className="fixed inset-0 -z-10 opacity-50"
      style={{ pointerEvents: 'none' }}
    />
  );
}
