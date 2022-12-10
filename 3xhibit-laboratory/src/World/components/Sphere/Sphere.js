import SphereMaterial, { fragmentShader, vertexShader } from './shaders';
import * as THREE from 'three';
import { extend, useFrame } from '@react-three/fiber';
import * as DREI from '@react-three/drei';
import { useMemo, useRef } from 'react';

extend({ SphereMaterial });

const Sphere = ({
  colorA,
  colorB,
  intensity,
  wireframe,
  position = [0, 0, 0],
}) => {
  const sphere = useRef();
  const sphereHover = useRef(false);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color(colorA) },
      uColorB: { value: new THREE.Color(colorB) },
      uIntensity: { value: intensity },
    }),
    [],
  );

  useFrame(({ clock }) => {
    sphere.current.material.uniforms.uTime.value = clock.getElapsedTime() * 0.5;

    sphere.current.material.uniforms.uColorA.value = new THREE.Color(colorA);
    sphere.current.material.uniforms.uColorB.value = new THREE.Color(colorB);

    sphere.current.material.uniforms.uIntensity.value = THREE.MathUtils.lerp(
      sphere.current.material.uniforms.uIntensity.value,
      sphereHover.current ? intensity + 0.45 : intensity + 0.05,
      0.02,
    );
  });

  return (
    <>
      <mesh
        ref={sphere}
        position={position}
        onPointerOver={() => (sphereHover.current = true)}
        onPointerOut={() => (sphereHover.current = false)}
      >
        <icosahedronGeometry args={[1, 20]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          wireframe={wireframe}
        />
      </mesh>
    </>
  );
};

export default Sphere;
