import useLab from '../../../hooks/useLab';
import {
  Environment,
  Lightformer,
  RandomizedLight,
  SpotLight,
} from '@react-three/drei';

const Lights = () => {
  const { neonEnabled, neonColor, flashlightIntensity } = useLab((state) => ({
    neonEnabled: state.neonEnabled,
    neonColor: state.neonColor,
    flashlightIntensity: state.flashlightIntensity,
  }));

  return (
    <>
      {/* Neon */}
      <Environment background>
        <Lightformer
          position={1}
          rotation-x={Math.PI}
          scale={1}
          color={neonColor}
          intensity={neonEnabled ? 10 : 0}
          form='rect'
        />
      </Environment>

      {/* <SpotLight
        position={[0, 2, 8]}
        intensity={flashlightIntensity}
        penumbra={1}
        distance={15}
        angle={1}
        attenuation={5}
        anglePower={4} // Diffuse-cone anglePower (default: 5)
      /> */}

      <RandomizedLight
        castShadow
        intensity={0.3}
        radius={0.5}
        amount={10}
        frames={Infinity}
        position={[4, 5, 6]}
      />

      <ambientLight intensity={0.2} />
    </>
  );
};

export default Lights;
