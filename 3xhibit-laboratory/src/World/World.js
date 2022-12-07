import Laboratory from './components/Laboratory';
import Museum from './components/Museum';
import useGlobal from '../hooks/useGlobal';
import { LabControls } from './components/Controls';
import * as DREI from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useEffect } from 'react';

const World = () => {
  const { activeLocation } = useGlobal((state) => ({
    activeLocation: state.activeLocation,
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
        <Museum />
      )}
    </>
  );
};

export default World;
