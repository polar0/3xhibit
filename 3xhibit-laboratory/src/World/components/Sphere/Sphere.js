import useCreation from '../../../hooks/useCreation';
import SphereMaterial, { fragmentShader, vertexShader } from './shaders';
import * as THREE from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { PresentationControls, shaderMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { useControls } from 'leva';
import { MathUtils } from 'three';

extend({ SphereMaterial });

const Sphere = () => {
  const { colorA, colorB, intensity, wireframe } = useCreation((state) => ({
    colorA: state.colorA,
    colorB: state.colorB,
    intensity: state.intensity,
    wireframe: state.wireframe,
  }));

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

  const particles = useMemo(() => {
    const particles = new THREE.BufferGeometry();
    const count = 1000;
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      scales[i] = Math.random();
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

    return particles;
  }, []);

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
        // Translate the rotation to a new vector
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
