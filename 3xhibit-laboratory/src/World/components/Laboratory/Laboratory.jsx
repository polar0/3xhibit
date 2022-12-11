import Lights from './Lights';
import Sphere from '../Sphere';
import useGlobal from '../../../hooks/useGlobal';
import useCreation from '../../../hooks/useCreation';
import { useThree } from '@react-three/fiber';
import * as DREI from '@react-three/drei';
import { useMemo } from 'react';

const Laboratory = () => {
  const { colorA, colorB, intensity, wireframe } = useCreation((state) => ({
    colorA: state.colorA,
    colorB: state.colorB,
    intensity: state.intensity,
    wireframe: state.wireframe,
  }));

  const structure = useMemo(() => <Structure />, []);
  const lights = useMemo(() => <Lights />, []);
  const sphere = useMemo(
    () => (
      <Sphere
        colorA={colorA}
        colorB={colorB}
        intensity={intensity}
        wireframe={wireframe}
      />
    ),
    [],
  );

  const { camera } = useThree();
  camera.position.set(0, 2, 8);

  return (
    <>
      {lights}
      {structure}
      <DREI.PresentationControls
        global
        polar={[-Infinity, Infinity]}
        config={{ mass: 0.5, tension: 200, friction: 26 }}
      >
        {sphere}
      </DREI.PresentationControls>
    </>
  );
};

const Structure = () => {
  const { material } = useGlobal((state) => ({
    material: state.material,
  }));

  return (
    <group>
      {/* Floor */}
      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <DREI.MeshReflectorMaterial
          resolution={512}
          color={material.color}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
        />
      </mesh>

      {/* Front wall */}
      <mesh
        position-z={-5}
        rotation-y={Math.PI}
        rotation-x={-Math.PI}
        scale={10}
      >
        <planeGeometry />
        <DREI.MeshReflectorMaterial
          resolution={512}
          color={material.color}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
        />
      </mesh>

      {/* Left wall */}
      <mesh position-x={-5} rotation-y={Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <DREI.MeshReflectorMaterial
          resolution={512}
          color={material.color}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
        />
      </mesh>

      {/* Right wall */}
      <mesh position-x={5} rotation-y={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <DREI.MeshReflectorMaterial
          resolution={512}
          color={material.color}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
        />
      </mesh>

      {/* Back wall */}
      <mesh position-z={5} rotation-x={Math.PI} scale={10}>
        <planeGeometry />
        <DREI.MeshReflectorMaterial
          resolution={512}
          color={material.color}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
        />
      </mesh>

      {/* Ceiling */}
      <mesh position-y={5} rotation-x={Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <DREI.MeshReflectorMaterial
          resolution={512}
          color={material.color}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
        />
      </mesh>
    </group>
  );
};

export default Laboratory;
