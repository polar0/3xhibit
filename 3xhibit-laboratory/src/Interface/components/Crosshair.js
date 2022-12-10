import { useEffect, useState } from 'react';

const Crosshair = () => {
  const [isActive, setIsActive] = useState(false);
  // Toggle on click
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='crosshair__wrapper'>
      <div
        className={isActive ? 'crosshair__dot active' : 'crosshair__dot'}
      ></div>
    </div>
  );
};

export default Crosshair;

// Use zustand to store and set active state
// use ray to detect intersection with objects
// -> toggle active if intersects,
// and maybe another active state when distance close enough and can interact
