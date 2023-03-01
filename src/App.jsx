import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/elements/Header';
import ThemeFooter from './components/elements/ThemeFooter';
import { ERROR_ROUTE, EVENT_ROUTE, HOME_ROUTE } from './constants/routes';
import ErrorPage from './pages/ErrorPage';
import EventDetail from './pages/EventDetail';
import HomePage from './pages/HomePage';

function App() {
  const [themeColor, setThemeColor] = useState('black');

  return (
    <div
      className='app'
      style={{
        '--purple': themeColor,
      }}
    >
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path={HOME_ROUTE} element={<HomePage />} />

            {/* TODO: Not a good thing but doing for now */}
            <Route path={EVENT_ROUTE} element={<HomePage />} />
            <Route path={`${EVENT_ROUTE}/:eventId`} element={<EventDetail />} />

            <Route
              path={`${ERROR_ROUTE}/:errorCode?`}
              element={<ErrorPage />}
            />
            <Route path='*' element={<ErrorPage notFound={true} />} />
          </Routes>
        </main>
        <ThemeFooter themeColor={themeColor} setThemeColor={setThemeColor} />
      </BrowserRouter>
    </div>
  );
}

export default App;
