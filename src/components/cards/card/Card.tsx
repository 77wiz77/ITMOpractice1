import React from 'react';
import './Card.scss';
import { GlossaryProps } from '../../../interface/GlossaryProps';

const Card: React.FC<GlossaryProps> = ({ term, definition, source }) => {
  return (
    <div className='card'>
      <div className='card-title'>{term}</div>
      <div className='card-body'>{definition}</div>
      <div className='card-source'>
        Источник: <br />
        {source}
      </div>
    </div>
  );
};

export default Card;
