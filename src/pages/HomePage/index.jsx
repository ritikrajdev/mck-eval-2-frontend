import React from 'react';
import Card from '../../components/elements/Card';
import { mockAllEvents } from '../../mocks/events';

import './HomePage.css';

export default function HomePage() {
  return (
    <div className='body-padding'>
      <div className='cards'>
        {mockAllEvents.map((event) => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
