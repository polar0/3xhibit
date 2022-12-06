import Laboratory from './components/Laboratory';
import Controls from './components/Controls';
import useLab from '../hooks/useLab';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

const World = () => {
  const { background } = useLab((state) => ({
    background: state.background,
  }));

  return (
    <>
      <color attach='background' args={[background.color]} />

      <Perf position='top-left' />
      <OrbitControls
        enablePan={false}
        enableRotate={false}
        zoomSpeed={0.5}
        minDistance={3}
        maxDistance={10}
      />

      <Laboratory />
      <Controls />
    </>
  );
};

export default World;
