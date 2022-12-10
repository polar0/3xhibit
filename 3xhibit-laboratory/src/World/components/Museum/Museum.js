import useGlobal from '../../../hooks/useGlobal';
import useCreated from '../../../hooks/useCreated';
import * as DREI from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useEffect, useMemo } from 'react';

const Museum = () => {
  const structure = useMemo(() => <Structure />, []);
  const { created, getCreated, isLoading, isLoaded, isError } = useCreated();

  useEffect(() => {
    getCreated();
  }, []);

  useEffect(() => {
    console.log(created);
  }, [created]);

  return (
    <>
      <DREI.Environment preset='city' />
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
    <RigidBody type='fixed'>
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
    </RigidBody>
  );
};

export default Museum;
