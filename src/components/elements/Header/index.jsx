import React from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_NAME } from '../../../constants';
import { HOME_ROUTE } from '../../../constants/routes';

import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className='body-padding'>
      <h1>
        <span onClick={() => navigate(HOME_ROUTE)}>
          {APP_NAME.toUpperCase()}
        </span>
      </h1>
    </header>
  );
}
