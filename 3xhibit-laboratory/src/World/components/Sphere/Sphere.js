import useCreation from '../../../hooks/useCreation';
import { Float } from '@react-three/drei';

const Sphere = () => {
  const { color } = useCreation((state) => ({
    color: state.color,
  }));

  return (
    <>
      <Float>
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </Float>
    </>
  );
};

export default Sphere;
