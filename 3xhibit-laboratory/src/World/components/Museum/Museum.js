import * as DREI from '@react-three/drei';
import { useMemo } from 'react';

const Museum = () => {
  const structure = useMemo(() => <Structure />, []);

  return (
    <>
      <DREI.Environment preset='city' />
      {structure}
      <DREI.OrbitControls />
    </>
  );
};

const Structure = () => {
  return (
    <mesh scale={10} rotation-x={-Math.PI * 0.5}>
      <planeGeometry />
      <DREI.MeshReflectorMaterial attach='material' args={[0.5, 0.5]} />
    </mesh>
  );
};

export default Museum;
