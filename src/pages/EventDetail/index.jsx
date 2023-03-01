import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../components/elements/Card';
import { GET_EVENT_DETAIL, UPDATE_EVENT } from '../../constants/apiEndpoints';
import { makeRequest } from '../../utils/makeRequest';

export default function EventDetail() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(undefined);

  useEffect(() => {
    makeRequest(GET_EVENT_DETAIL(eventId), {}, navigate).then((event) => {
      console.log(event);
      setEvent(event);
    });
  }, []);

  if (event === undefined) return 'Loading...';

  async function handleBookmarkButtonClick() {
    const isBookmarked = event.isBookmarked;
    try {
      await makeRequest(UPDATE_EVENT(eventId), {
        data: {
          isBookmarked: !isBookmarked,
        },
      });

      event.isBookmarked = !isBookmarked;
      setEvent({ ...event });
    } catch (e) {
      console.error(e);
    }
  }

  async function handleRegisterButtonClick() {
    const isRegistered = event.isRegistered;
    try {
      await makeRequest(UPDATE_EVENT(eventId), {
        data: {
          isRegistered: !isRegistered,
        },
      });

      event.isRegistered = !isRegistered;
      setEvent({ ...event });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className='body-padding'>
      <Card
        event={event}
        detailView={true}
        handleBookmarkButtonClick={handleBookmarkButtonClick}
        handleRegisterButtonClick={handleRegisterButtonClick}
      />
    </div>
  );
}
