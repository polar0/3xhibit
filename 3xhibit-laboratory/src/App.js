import World from './World';
import Interface from './Interface';
import { Canvas } from '@react-three/fiber';
import { StrictMode } from 'react';

export const App = () => {
  return (
    <>
      <StrictMode>
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
      </StrictMode>
    </>
  );
};
