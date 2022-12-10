import World from './World';
import Interface from './Interface';
import { Canvas } from '@react-three/fiber';
import * as DREI from '@react-three/drei';
import { StrictMode } from 'react';

export const App = () => {
  return (
    <>
      <StrictMode>
        <DREI.KeyboardControls
          map={[
            { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
            { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
            { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
            { name: 'right', keys: ['ArrowRight', 'KeyD'] },
            { name: 'jump', keys: ['Space'] },
            { name: 'interact', keys: ['KeyE'] },
          ]}
        >
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
        </DREI.KeyboardControls>
      </StrictMode>
    </>
  );
};
