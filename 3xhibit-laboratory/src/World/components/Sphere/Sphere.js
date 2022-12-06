import useCreation from '../../../hooks/useCreation';
import SimulationMaterial from './SimulationMaterial';
import { vertexShader, fragmentShader } from './shaders';
import * as THREE from 'three';
import { createPortal, extend, useFrame } from '@react-three/fiber';
import { Center, Float, PresentationControls, useFBO } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { useControls } from 'leva';

extend({ SimulationMaterial });

const Sphere = () => {
  const { color, pointSize } = useCreation((state) => ({
    color: state.color,
    pointSize: state.pointSize,
  }));

  const size = 128;

  const points = useRef();
  const simulationMaterialRef = useRef();

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(
    -1,
    1,
    1,
    -1,
    1 / Math.pow(2, 53),
    1,
  );
  const positions = new Float32Array([
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
  ]);
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  });

  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      let i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null,
      },
      uPointSize: {
        value: pointSize,
      },
      uColor: {
        value: new THREE.Color(color),
      },
    }),
    [],
  );

  useFrame((state) => {
    const { gl, clock } = state;

    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    points.current.material.uniforms.uPositions.value = renderTarget.texture;
    points.current.material.uniforms.uPointSize.value = pointSize;
    points.current.material.uniforms.uColor.value = new THREE.Color(color);

    simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <>
      {/* <Float> */}
      <PresentationControls
        global
        polar={[-Infinity, Infinity]}
        config={{ mass: 0.5, tension: 200, friction: 26 }}
      >
        {/* <Center> */}
        {/* <mesh position={[0, 0.5, 0]}>
              <sphereGeometry args={[1, 64, 32]} />
              <meshStandardMaterial
                color={color}
                flatShading
                roughness={0}
                metalness={0}
              />
            </mesh> */}
        {createPortal(
          <mesh>
            <simulationMaterial ref={simulationMaterialRef} args={[size]} />
            <bufferGeometry>
              <bufferAttribute
                attach='attributes-position'
                count={positions.length / 3}
                array={positions}
                itemSize={3}
              />
              <bufferAttribute
                attach='attributes-uv'
                count={uvs.length / 2}
                array={uvs}
                itemSize={2}
              />
            </bufferGeometry>
          </mesh>,
          scene,
        )}
        <points ref={points}>
          <bufferGeometry>
            <bufferAttribute
              attach='attributes-position'
              count={particlesPosition.length / 3}
              array={particlesPosition}
              itemSize={3}
            />
          </bufferGeometry>
          <shaderMaterial
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={uniforms}
          />
        </points>
        {/* </Center> */}
      </PresentationControls>
      {/* </Float> */}
    </>
  );
};

export default Sphere;
