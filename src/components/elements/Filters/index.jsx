import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import './Filters.css';

export default function Filters({ onFiltersChange }) {
  const [filters, setFilters] = useState({});
  const [openFilters, setOpenFilters] = useState(window.innerWidth > 400);
  setFilters;
  useEffect(() => {
    onFiltersChange(filters);
  }, [filters]);

  function toggleOpenFilters() {
    setOpenFilters(!openFilters);
  }

  function radioClickhandler(e) {
    setFilters({ ...filters, filter: e.target.value });
  }

  return (
    <div className='filters'>
      <div className='filter-search'>
        <div onClick={toggleOpenFilters}>
          <i className='fa-solid fa-filter' style={{ marginRight: '8px' }}></i>
          <span>FILTER</span>
          <i
            className='fa-solid fa-chevron-up'
            style={{ marginLeft: '8px' }}
          ></i>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const searchQuery = e.currentTarget.querySelector('input').value;

            const newFilters = { ...filters, search: searchQuery };
            setFilters(newFilters);
            onFiltersChange(newFilters);
          }}
        >
          <input type='text' name='search' placeholder='EVENT NAME' />
          <button
            type='submit'
            style={{
              marginLeft: '8px',
            }}
          >
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
        </form>
      </div>

      {openFilters && (
        <div
          style={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}
        >
          <div className='radio-buttons-container'>
            {/* TODO: style radio buttons */}
            <div>
              <input
                type='radio'
                name='filter'
                value='all'
                id='filter-all'
                onClick={radioClickhandler}
              />
              <label htmlFor='filter-all'>All</label>
            </div>

            <div>
              <label htmlFor='filter-bookmarked'>Bookmarked</label>
              <input
                type='radio'
                name='filter'
                value='bookmarked'
                id='filter-bookmarked'
                onChange={radioClickhandler}
              />
            </div>
          </div>

          <div className='radio-buttons-container'>
            <div>
              <input
                type='radio'
                name='filter'
                value='registered'
                id='filter-registered'
                onChange={radioClickhandler}
              />
              <label htmlFor='filter-registered'>Registered</label>
            </div>

            <div>
              <label htmlFor='filter-seats-available'>Seats Available</label>
              <input
                type='radio'
                name='filter'
                value='seats-available'
                id='filter-seats-available'
                onChange={radioClickhandler}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Filters.propTypes = {
  onFiltersChange: PropTypes.func.isRequired,
};
