import useInteract from '../../hooks/useInteract';
import { useEffect, useState } from 'react';

const Crosshair = () => {
  const { currentState } = useInteract();

  return (
    <div className='crosshair__wrapper'>
      <div className={`crosshair__dot ${currentState}`}></div>
    </div>
  );
};

export default Crosshair;

// Use zustand to store and set active state
// use ray to detect intersection with objects
// -> toggle active if intersects,
// and maybe another active state when distance close enough and can interact
