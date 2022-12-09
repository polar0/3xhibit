import useLab from '../../../hooks/useLab';
import useCreation from '../../../hooks/useCreation';
import { useControls, button } from 'leva';

const Controls = () => {
  const { neonEnabled, neonColor, setNeonEnabled, setNeonColor } = useLab(
    (state) => ({
      neonEnabled: state.neonEnabled,
      neonColor: state.neonColor,
      setNeonEnabled: state.setNeonEnabled,
      setNeonColor: state.setNeonColor,
    }),
  );

  const {
    colorA,
    colorB,
    intensity,
    wireframe,
    setColorA,
    setColorB,
    setIntensity,
    setWireframe,
    randomize,
  } = useCreation((state) => ({
    colorA: state.colorA,
    colorB: state.colorB,
    intensity: state.intensity,
    wireframe: state.wireframe,
    setColorA: state.setColorA,
    setColorB: state.setColorB,
    setIntensity: state.setIntensity,
    setWireframe: state.setWireframe,
    randomize: state.randomize,
  }));

  useControls('Laboratory', {
    Neon: {
      value: neonEnabled,
      onChange: (enabled) => setNeonEnabled(enabled),
    },
    'Neon Color': {
      value: neonColor,
      onChange: (color) => setNeonColor(color),
    },
  });

  useControls('Creation', {
    colorA: {
      value: colorA,
      onChange: (color) => setColorA(color),
    },
    colorB: {
      value: colorB,
      onChange: (color) => setColorB(color),
    },
    intensity: {
      value: intensity,
      onChange: (intensity) => setIntensity(intensity),
      min: 0,
      max: 0.5,
    },
    wireframe: {
      value: wireframe,
      onChange: (wireframe) => setWireframe(wireframe),
    },
    randomize: button(() => randomize()),
  });

  return null;
};

export default Controls;
