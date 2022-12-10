import Laboratory from './components/Laboratory';
import Museum from './components/Museum';
import useGlobal from '../hooks/useGlobal';
import { LabControls, Player } from './components/Controls';
import * as DREI from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useEffect } from 'react';
import { Physics } from '@react-three/rapier';

const World = () => {
  const { activeLocation, gravity, setShowInterface } = useGlobal((state) => ({
    activeLocation: state.activeLocation,
    gravity: state.gravity,
    setShowInterface: state.setShowInterface,
  }));

  useEffect(() => {
    console.log(activeLocation);
  }, [activeLocation]);

  return (
    <>
      <Perf position='top-left' />

      {/* Lab */}
      {activeLocation === 'laboratory' ? (
        <>
          <DREI.OrbitControls
            enablePan={false}
            enableRotate={false}
            zoomSpeed={0.5}
            minDistance={3}
            maxDistance={10}
          />
          <Laboratory />
          <LabControls />
        </>
      ) : (
        <>
          <Physics gravity={gravity}>
            <Museum />
            <Player />
          </Physics>
          <DREI.PointerLockControls
            onLock={() => setShowInterface(false)}
            onUnlock={() => setShowInterface(true)}
          />
        </>
      )}
    </>
  );
};

export default World;
