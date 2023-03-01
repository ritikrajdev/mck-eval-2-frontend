import PropTypes from 'prop-types';
import React from 'react';

import './Card.css';

export default function Card({
  event,
  handleBookmarkButtonClick,
  detailView,
  handleRegisterButtonClick,
}) {
  const greaterThanRequiredWidth = window.innerWidth > 500;
  return (
    <div
      className='card'
      style={
        detailView
          ? {
              fontSize: greaterThanRequiredWidth ? '1.5rem' : '1rem',
            }
          : {
              width: '300px',
              height: '400px',
            }
      }
    >
      <img src={event.imgUrl} alt='' />

      <div
        className='card-info'
        style={
          detailView
            ? {
                padding: '0 1.5rem',
              }
            : {}
        }
      >
        {detailView && <br />}
        <h3
          style={
            detailView
              ? {
                  fontSize: '2rem',
                }
              : {
                  fontSize: '1.3rem',
                  height: '24px',
                  overflow: 'hidden',
                }
          }
        >
          {event.name}
        </h3>
        {detailView && <br />}
        <p
          className='event-desc'
          style={
            detailView
              ? {}
              : {
                  WebkitLineClamp: '3',
                  height: '76px',
                }
          }
        >
          {event.description}
        </p>

        {detailView && <br />}
        <div
          style={{
            height: '12px',
          }}
        />

        <p
          className='venue'
          style={
            detailView
              ? {}
              : {
                  height: '18px',
                  WebkitLineClamp: 1,
                }
          }
        >
          <strong>VENUE: </strong> {event.venue}
        </p>
        <p className='date'>
          <strong>DATE: </strong> {new Date(event.datetime).toLocaleString()}
        </p>

        {detailView && <br />}
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
            {event.isBookmarked ? (
              <i
                className='bookmark fa-solid fa-bookmark'
                style={{
                  fontSize:
                    detailView && greaterThanRequiredWidth ? '3rem' : '1.5rem',
                }}
              />
            ) : (
              <i
                className='bookmark fa-regular fa-bookmark'
                style={{
                  fontSize:
                    detailView && greaterThanRequiredWidth ? '3rem' : '1.5rem',
                }}
              />
            )}
          </button>
        </div>

        {detailView && <br />}

        {detailView && event.areSeatsAvailable && (
          <center>
            <button
              className='purple-button'
              style={{
                fontSize: greaterThanRequiredWidth ? '1.5rem' : '1rem',
              }}
              onClick={handleRegisterButtonClick}
            >
              {event.isRegistered ? 'UNREGISTER' : 'REGISTER'}
            </button>
          </center>
        )}

        {detailView && <br />}
      </div>
    </div>
  );
}

Card.propTypes = {
  event: PropTypes.object.isRequired,
  handleBookmarkButtonClick: PropTypes.func,
  detailView: PropTypes.bool,
  handleRegisterButtonClick: PropTypes.func,
};

Card.defaultProps = {
  detailView: false,
};
