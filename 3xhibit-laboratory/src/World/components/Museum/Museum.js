import * as DREI from '@react-three/drei';
import { useMemo } from 'react';
import useGlobal from '../../../hooks/useGlobal';

const Museum = () => {
  const structure = useMemo(() => <Structure />, []);

  return (
    <>
      <DREI.Environment preset='city' />
      <DREI.OrbitControls />
      {structure}
      <mesh position-y={2}>
        <sphereGeometry />
        <meshStandardMaterial color='red' />
      </mesh>
    </>
  );
};

const Structure = () => {
  const { material } = useGlobal((state) => ({
    material: state.material,
  }));
  return (
    <mesh scale={100} rotation-x={-Math.PI * 0.5}>
      <planeGeometry />
      <DREI.MeshReflectorMaterial
        resolution={512}
        color={material.color}
        blur={[1000, 1000]}
        mixBlur={1}
        mirror={0.5}
      />
    </mesh>
  );
};

export default Museum;
