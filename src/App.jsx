import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/elements/Header';
import { ERROR_ROUTE, EVENT_ROUTE, HOME_ROUTE } from './constants/routes';
import ErrorPage from './pages/ErrorPage';
import EventDetail from './pages/EventDetail';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage />} />

        {/* TODO: Not a good thing but doing for now */}
        <Route path={EVENT_ROUTE} element={<HomePage />} />
        <Route path={`${EVENT_ROUTE}/:eventId`} element={<EventDetail />} />

        <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<ErrorPage />} />
        <Route path='*' element={<ErrorPage notFound={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
