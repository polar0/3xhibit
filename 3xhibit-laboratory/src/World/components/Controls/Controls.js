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

  const { color, pointSize, setColor, setPointSize } = useCreation((state) => ({
    color: state.color,
    pointSize: state.pointSize,
    setColor: state.setColor,
    setPointSize: state.setPointSize,
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
    color: {
      value: color,
      onChange: (color) => setColor(color),
    },
    'point size': {
      value: pointSize,
      onChange: (pointSize) => setPointSize(pointSize),
      min: 1,
      max: 6,
    },
  });

  return null;
};

export default Controls;
