import { useState, useEffect } from 'react';
import useLocation from '../hooks/useLocation';

const Location = () => {
  const coords = useLocation();
  
  return (
    <article>
      <h2>Location Component</h2>
      {coords.loading && <p>loading...</p>}
      {coords.error && <p>there was an error</p>}
      {(!coords.error && !coords.loading) && <p>my location: {coords.lat}, {coords.lng}</p>}

    </article>
  )
};

export default Location;