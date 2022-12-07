import SphereMaterial, { fragmentShader, vertexShader } from './shaders';
import * as THREE from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { PresentationControls, shaderMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { MathUtils } from 'three';

extend({ SphereMaterial });

const Sphere = ({ colorA, colorB, intensity, wireframe }) => {
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

    sphere.current.material.uniforms.uIntensity.value = MathUtils.lerp(
      sphere.current.material.uniforms.uIntensity.value,
      sphereHover.current ? intensity + 0.45 : intensity + 0.05,
      0.02,
    );
  });

  return (
    <>
      <PresentationControls
        global
        polar={[-Infinity, Infinity]}
        config={{ mass: 0.5, tension: 200, friction: 26 }}
      >
        <mesh
          ref={sphere}
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
      </PresentationControls>
    </>
  );
};

export default Sphere;
