import { World } from './World/World';
import { Canvas } from '@react-three/fiber';

export const App = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          //   position: [2.5, 4, 6],
        }}
      >
        <World />
      </Canvas>
    </>
  );
};
