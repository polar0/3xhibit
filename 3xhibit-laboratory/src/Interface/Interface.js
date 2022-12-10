import useGlobal from '../hooks/useGlobal';
import { Leva } from 'leva';
import { useEffect, useState } from 'react';

const Interface = () => {
  const {
    defaultTheme,
    setTheme,
    activeLocation,
    setActiveLocation,
    showInterface,
    setShowInterface,
  } = useGlobal((state) => ({
    defaultTheme: state.defaultTheme,
    setTheme: state.setTheme,
    activeLocation: state.activeLocation,
    setActiveLocation: state.setActiveLocation,
    showInterface: state.showInterface,
    setShowInterface: state.setShowInterface,
  }));

  // Update theme
  const updateTheme = (e, theme) => {
    if (theme !== defaultTheme) setTheme(theme);
    e.stopPropagation();
  };

  // Update location
  const updateLocation = (e, location) => {
    if (location !== activeLocation) {
      setActiveLocation(location);
    }
    e.stopPropagation();
  };

  // Show interface with escape key
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setShowInterface(true);
    }
  };

  // Hide interface on click
  const handleOverlayClick = (e) => {
    // Doesn't need to be handled in the museum
    if (activeLocation === 'museum') return;
    console.log(e.target);
    setShowInterface(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleOverlayClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleOverlayClick);
    };
  }, [activeLocation]);

  // Add/remove visible class to overlay
  useEffect(() => {
    const overlay = document.querySelector('#overlay');

    if (showInterface) {
      overlay.classList.add('visible');
    } else {
      overlay.classList.remove('visible');
    }
    console.log('now', showInterface);
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
                  onClick={(e) => updateTheme(e, 'dark')}
                >
                  Dark
                </button>
                <div className='separator'>/</div>
                <button
                  className={defaultTheme === 'light' ? 'active' : ''}
                  onClick={(e) => updateTheme(e, 'light')}
                >
                  Light
                </button>
              </div>

              <div className='interface__location'>
                <button
                  className={activeLocation === 'museum' ? 'active' : ''}
                  onClick={(e) => updateLocation(e, 'museum')}
                >
                  Museum
                </button>
                <div className='separator'>/</div>
                <button
                  className={activeLocation === 'laboratory' ? 'active' : ''}
                  onClick={(e) => updateLocation(e, 'laboratory')}
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

// setShowInterface with event listener on escape only in laboratory
// Back to 'game' button
// Prevent default on click in any other place
// When going back to laboratory reset camera position
