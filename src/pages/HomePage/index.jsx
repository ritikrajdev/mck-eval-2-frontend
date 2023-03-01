import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/elements/Card';
import { GET_ALL_EVENTS, UPDATE_BOOKMARK } from '../../constants/apiEndpoints';
import { makeRequest } from '../../utils/makeRequest';

import './HomePage.css';

export default function HomePage() {
  const [allEvents, setAllEvents] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_ALL_EVENTS, {}, navigate).then((events) => {
      setAllEvents(events);
    });
  }, []);

  async function handleBookmarkButtonClick(eventId) {
    const eventIdx = allEvents.findIndex((event) => event.id === eventId);

    const isBookmarked = allEvents[eventIdx].isBookmarked;
    try {
      await makeRequest(UPDATE_BOOKMARK(eventId), {
        data: {
          isBookmarked: !isBookmarked,
        },
      });

      allEvents[eventIdx].isBookmarked = !isBookmarked;
      setAllEvents([...allEvents]);
    } catch (e) {
      console.error(e);
    }
  }

  if (allEvents === undefined) return <p>Loading ...</p>;

  return (
    <div className='body-padding'>
      <div className='cards'>
        {allEvents.map((event) => (
          <Card
            key={event.id}
            event={event}
            handleBookmarkButtonClick={() =>
              handleBookmarkButtonClick(event.id)
            }
          />
        ))}
      </div>
    </div>
  );
}
