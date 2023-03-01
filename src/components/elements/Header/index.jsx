import React from 'react';
import { APP_NAME } from '../../../constants';

import './Header.css';

export default function Header() {
  return (
    <header className='body-padding'>
      <h1>{APP_NAME.toUpperCase()}</h1>
    </header>
  );
}
