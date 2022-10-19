import React from 'react';
import './Mindmap.scss';

interface props {
  onload: boolean;
}

const FrameMindmap: React.FC<props> = (onload) => {
  return (
    <div className='frame-area'>
      Ожидайте полной загрузки фрейма
      <iframe
        title='mindmap'
        width='720'
        height='480'
        loading='lazy'
        frameBorder='0'
        src='https://www.mindmeister.com/maps/public_map_shell/2448338020/react?width=600&height=400&z=auto&no_share=1&no_logo=1'
        scrolling='no'
        className='forFrame'>
        Ваш браузер не отображает фреймы. Пожалуйста, посетите{' '}
        <a
          href='https://www.mindmeister.com/2448338020/react'
          target='_blank'
          rel='noreferrer'>
          React
        </a>{' '}
        в MindMeister.
      </iframe>
    </div>
  );
};

export default FrameMindmap;
