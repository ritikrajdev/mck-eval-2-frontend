import PropTypes from 'prop-types';
import React from 'react';

import './Card.css';

export default function Card({ event, handleBookmarkButtonClick }) {
  return (
    <div className='card'>
      <img src={event.imgUrl} alt='' />

      <div className='card-info'>
        <h3>{event.name}</h3>
        <p className='event-desc'>{event.description}</p>

        <div
          style={{
            height: '12px',
          }}
        />

        <p className='venue'>
          <strong>VENUE: </strong> {event.venue}
        </p>
        <p className='date'>
          <strong>DATE: </strong> {new Date(event.datetime).toLocaleString()}
        </p>

        <div
          style={{
            height: '12px',
          }}
        />

        <div className='card-actions'>
          <div>
            {event.isRegistered ? (
              <div className='registered'>
                <i className='fa-solid fa-circle-check'></i>
                <strong style={{ marginLeft: '12px' }}>REGISTERED</strong>
              </div>
            ) : (
              !event.areSeatsAvailable && (
                <div className='no-seats-available'>
                  <i className='fa-solid fa-circle-xmark'></i>
                  <strong style={{ marginLeft: '12px' }}>
                    NO SEATS AVAILABLE
                  </strong>
                </div>
              )
            )}
          </div>

          <button onClick={handleBookmarkButtonClick}>
            {event.isRegistered ? (
              <i className='bookmark fa-regular fa-bookmark' />
            ) : (
              <i className='bookmark fa-solid fa-bookmark' />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  event: PropTypes.object.isRequired,
  handleBookmarkButtonClick: PropTypes.func,
};
