import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/elements/Card';
import Filters from '../../components/elements/Filters';
import { GET_ALL_EVENTS, UPDATE_EVENT } from '../../constants/apiEndpoints';
import { EVENT_DESCRIPTION_ROUTE } from '../../constants/routes';
import { makeRequest } from '../../utils/makeRequest';

import './HomePage.css';

export default function HomePage() {
  const [allEvents, setAllEvents] = useState(undefined);
  const [allOriginalEvents, setAllOriginalEvents] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_ALL_EVENTS, {}, navigate).then((events) => {
      events.sort(function (a, b) {
        return new Date(a.datetime) - new Date(b.datetime);
      });
      setAllEvents(events);
      setAllOriginalEvents(events);
    });
  }, []);

  async function handleBookmarkButtonClick(eventId) {
    const eventIdx = allEvents.findIndex((event) => event.id === eventId);

    const isBookmarked = allEvents[eventIdx].isBookmarked;
    try {
      await makeRequest(UPDATE_EVENT(eventId), {
        data: {
          isBookmarked: !isBookmarked,
        },
      });

      allEvents[eventIdx].isBookmarked = !isBookmarked;
      setAllEvents([...allEvents]);
      setAllOriginalEvents([...allEvents]);
    } catch (e) {
      console.error(e);
    }
  }

  if (allEvents === undefined) return <p>Loading ...</p>;

  return (
    <div className='body-padding'>
      <Filters
        onFiltersChange={(filters) => {
          const { search, filter } = filters;
          let filteredData = allOriginalEvents;
          if (search)
            filteredData = filteredData.filter((event) =>
              event.name.toLowerCase().includes(search)
            );

          switch (filter) {
            case 'bookmarked': {
              filteredData = filteredData.filter((event) => event.isBookmarked);
              break;
            }

            case 'registered': {
              filteredData = filteredData.filter((event) => event.isRegistered);
              break;
            }

            case 'seats-available': {
              filteredData = filteredData.filter(
                (event) => event.areSeatsAvailable
              );
              break;
            }
            default: {
              // do nothing
            }
          }

          setAllEvents(filteredData);
        }}
      />
      <div className='cards'>
        {allEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => {
              navigate(EVENT_DESCRIPTION_ROUTE(event.id));
            }}
          >
            <Card
              event={event}
              handleBookmarkButtonClick={(e) => {
                e.stopPropagation();
                handleBookmarkButtonClick(event.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
