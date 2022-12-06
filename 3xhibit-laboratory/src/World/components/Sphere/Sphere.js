import useCreation from '../../../hooks/useCreation';
import { Center, Float, PresentationControls } from '@react-three/drei';

const Sphere = () => {
  const { color } = useCreation((state) => ({
    color: state.color,
  }));

  return (
    <>
      <Float>
        <PresentationControls
          global
          polar={[-Infinity, Infinity]}
          config={{ mass: 0.5, tension: 200, friction: 26 }}
        >
          <Center>
            <mesh position={[0, 0.5, 0]}>
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color={color} flatShading />
            </mesh>
          </Center>
        </PresentationControls>
      </Float>
    </>
  );
};

export default Sphere;
