import Laboratory from './components/Laboratory';
import useGlobal from '../hooks/useGlobal';
import { LabControls } from './components/Controls';
import { OrbitControls } from '@react-three/drei';
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
          <OrbitControls
            enablePan={false}
            enableRotate={false}
            zoomSpeed={0.5}
            minDistance={3}
            maxDistance={10}
          />
          <Laboratory />
          <LabControls />
        </>
      ) : null}
    </>
  );
};

export default World;
