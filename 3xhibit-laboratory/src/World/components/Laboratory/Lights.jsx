import useLab from '../../../hooks/useLab';
import * as DREI from '@react-three/drei';

const Lights = () => {
  const { neonEnabled, neonColor } = useLab((state) => ({
    neonEnabled: state.neonEnabled,
    neonColor: state.neonColor,
  }));

  return (
    <>
      <DREI.Environment background>
        <DREI.Lightformer
          position={1}
          rotation-x={Math.PI}
          scale={1}
          color={neonColor}
          intensity={neonEnabled ? 10 : 0}
          form='rect'
        />
      </DREI.Environment>

      <ambientLight intensity={0.2} />
    </>
  );
};

export default Lights;
