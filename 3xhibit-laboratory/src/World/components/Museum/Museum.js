import * as DREI from '@react-three/drei';

const Museum = () => {
  return (
    <>
      <DREI.OrbitControls />
      <mesh scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <DREI.MeshReflectorMaterial attach='material' args={[0.5, 0.5]} />
      </mesh>
    </>
  );
};

export default Museum;
