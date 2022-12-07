import { OrbitControls } from '@react-three/drei';
import { MeshReflectorMaterial } from '@react-three/drei';

const Museum = () => {
  return (
    <>
      <OrbitControls />
      <mesh scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <MeshReflectorMaterial attach='material' args={[0.5, 0.5]} />
      </mesh>
    </>
  );
};

export default Museum;
