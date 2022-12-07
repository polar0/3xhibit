import useGlobal from '../hooks/useGlobal';
import useLab from '../hooks/useLab';
import { Leva } from 'leva';
import { useEffect, useState } from 'react';

const Interface = () => {
  const [showInterface, setShowInterface] = useState(true);

  const { defaultTheme, setTheme, activeLocation, setActiveLocation } =
    useGlobal((state) => ({
      defaultTheme: state.defaultTheme,
      setTheme: state.setTheme,
      activeLocation: state.activeLocation,
      setActiveLocation: state.setActiveLocation,
    }));

  const { setTheme: setLabTheme } = useLab((state) => ({
    setTheme: state.setTheme,
  }));

  // Update theme
  const updateTheme = (theme) => {
    if (theme !== defaultTheme) {
      setTheme(theme);
      setLabTheme(theme);
    }
  };

  // Update location
  const updateLocation = (location) => {
    if (location !== activeLocation) {
      setActiveLocation(location);
    }
  };

  // Toggle interface on/off with escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowInterface((showInterface) => !showInterface);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Add/remove visible class to overlay
  useEffect(() => {
    const overlay = document.querySelector('#overlay');

    if (showInterface) {
      overlay.classList.add('visible');
    } else {
      overlay.classList.remove('visible');
    }
  }, [showInterface]);

  return (
    <>
      <Leva />
      <div id='overlay'>
        <div
          className={
            defaultTheme === 'dark' ? 'interface dark' : 'interface light'
          }
        >
          <div className='wrapper'>
            <div className='interface__header'>
              <h1 className='interface__title'>3XHIBIT</h1>
              <span
                className='interface__close'
                onClick={() => setShowInterface(false)}
              >
                x
              </span>
            </div>
            <div className='interface__content'>
              <div className='interface__theme'>
                <button
                  className={defaultTheme === 'dark' ? 'active' : ''}
                  onClick={() => updateTheme('dark')}
                >
                  Dark
                </button>
                <div className='separator'>/</div>
                <button
                  className={defaultTheme === 'light' ? 'active' : ''}
                  onClick={() => updateTheme('light')}
                >
                  Light
                </button>
              </div>

              <div className='interface__location'>
                <button
                  className={activeLocation === 'museum' ? 'active' : ''}
                  onClick={() => updateLocation('museum')}
                >
                  Museum
                </button>
                <div className='separator'>/</div>
                <button
                  className={activeLocation === 'laboratory' ? 'active' : ''}
                  onClick={() => updateLocation('laboratory')}
                >
                  Laboratory
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interface;
