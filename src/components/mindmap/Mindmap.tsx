import React, { useState, Suspense, lazy } from 'react';
import './Mindmap.scss';
import Loader from '../loader/Loader';

const Mindmap: React.FC = () => {
  const [load, setLoad] = useState(true);

  const FrameMindMap = lazy(async () => {
    await new Promise((res) => setTimeout(res, 1000));
    return await import('./FrameMindMap');
  });

  return (
    <div className='mindmap-area'>
      <Suspense fallback={<Loader />}>
        <FrameMindMap onload={false} />
      </Suspense>
    </div>
  );
};

export default Mindmap;
