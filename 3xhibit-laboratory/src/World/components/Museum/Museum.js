import useGlobal from '../../../hooks/useGlobal';
import useCreated from '../../../hooks/useCreated';
import Sphere from '../Sphere';
import * as DREI from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useEffect, useMemo, useState } from 'react';

const Museum = () => {
  const structure = useMemo(() => <Structure />, []);
  const [creations, setCreations] = useState([]);
  const { created, getCreated, isLoading, isLoaded, isError } = useCreated();

  useEffect(() => {
    getCreated();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setCreations(created);
    } else {
      setCreations(null);
    }
  }, [created]);

  return (
    <>
      <DREI.Environment preset='city' />
      {structure}
      {creations && creations.length > 0 ? (
        // creations.map((creation) => (
        <RigidBody type='fixed'>
          <Sphere
            key={creations[1].id}
            colorA={creations[1].traits.colorA}
            colorB={creations[1].traits.colorB}
            intensity={creations[1].traits.intensity}
            wireframe={creations[1].traits.wireframe}
            position={[0, 2, -5]}
          />
        </RigidBody>
      ) : (
        // ))
        <mesh position={[0, 0, -5]}>
          <sphereGeometry args={[1, 20, 20]} />
          <meshStandardMaterial color='red' />
        </mesh>
      )}
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
