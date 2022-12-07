import useLab from '../../../hooks/useLab';
import useCreation from '../../../hooks/useCreation';
import { useControls } from 'leva';

const Controls = () => {
  const {
    themes,
    activeTheme,
    setTheme,
    neonEnabled,
    neonColor,
    flashlightIntensity,
    setNeonEnabled,
    setNeonColor,
    setFlashlightIntensity,
  } = useLab((state) => ({
    themes: state.themes,
    activeTheme: state.activeTheme,
    setTheme: state.setTheme,
    background: state.background,
    neonEnabled: state.neonEnabled,
    neonColor: state.neonColor,
    flashlightIntensity: state.flashlightIntensity,
    setNeonEnabled: state.setNeonEnabled,
    setNeonColor: state.setNeonColor,
    setFlashlightIntensity: state.setFlashlightIntensity,
  }));

  const {
    colorA,
    colorB,
    intensity,
    wireframe,
    setColorA,
    setColorB,
    setIntensity,
    setWireframe,
  } = useCreation((state) => ({
    colorA: state.colorA,
    colorB: state.colorB,
    intensity: state.intensity,
    wireframe: state.wireframe,
    setColorA: state.setColorA,
    setColorB: state.setColorB,
    setIntensity: state.setIntensity,
    setWireframe: state.setWireframe,
  }));

  useControls('Laboratory', {
    Theme: {
      value: activeTheme,
      options: themes,
      onChange: (theme) => setTheme(theme),
    },
    'Flashlight intensity': {
      value: flashlightIntensity,
      onChange: (intensity) => setFlashlightIntensity(intensity),
      min: 0,
      max: 1,
    },
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
  });

  return null;
};

export default Controls;
