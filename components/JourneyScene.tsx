import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { GlassSphere } from './GlassSphere';
import { useEffect, useState } from 'react';

interface JourneySceneProps {
  step: number; // 0 = intro, 1 = identify, 2 = develop, 3 = scale
}

export const JourneyScene: React.FC<JourneySceneProps> = ({ step }) => {
  const [sphereConfig, setSphereConfig] = useState({
    count: 1,
    positions: [[0, 0, 0]] as [number, number, number][]
  });

  useEffect(() => {
    switch(step) {
      case 0:
        setSphereConfig({
          count: 2,
          positions: [[0, 0, 0], [0, 0, -2]]
        });
        break;
      case 1:
        setSphereConfig({
          count: 1,
          positions: [[0, 0, 0]]
        });
        break;
      case 2:
        setSphereConfig({
          count: 2,
          positions: [[-1.5, 0, 0], [1.5, 0, 0]]
        });
        break;
      case 3:
        setSphereConfig({
          count: 3,
          positions: [[-2, 0, 0], [0, 0, 0], [2, 0, 0]]
        });
        break;
    }
  }, [step]);

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {sphereConfig.positions.slice(0, sphereConfig.count).map((pos, i) => (
        <GlassSphere
          key={i}
          position={pos}
          scale={1.5}
          rotationSpeed={0.005 + i * 0.002}
        />
      ))}
      
      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset="city" />
    </Canvas>
  );
};
