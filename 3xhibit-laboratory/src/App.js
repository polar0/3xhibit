import World from './World';
import { Canvas } from '@react-three/fiber';
import Interface from './Interface';

export const App = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 2, 8],
        }}
      >
        <World />
      </Canvas>
      <Interface />
    </>
  );
};
