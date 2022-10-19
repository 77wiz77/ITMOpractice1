import React from 'react';
import Card from '../card/Card';
import './Cards.scss';
import { Glossary } from '../../../data/glossary';

const GridCards: React.FC = () => {
  return (
    <div className='cards-area'>
      <div className='cards'>
        {Glossary.map((item) => (
          <Card
            id={item.id}
            term={item.term}
            definition={item.definition}
            source={item.source}
          />
        ))}
      </div>
    </div>
  );
};

export default GridCards;
