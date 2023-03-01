export const BASE_URL = 'http://localhost:8000';

// apiEndpoint = {
//   baseURL: BASE_URL
//   url: '',
//   method: ''
// }

export const GET_ALL_EVENTS = {
  url: BASE_URL + '/api/events',
};

export const UPDATE_EVENT = (id) => ({
  url: BASE_URL + '/api/events/' + id,
  method: 'PATCH',
});

export const GET_EVENT_DETAIL = (id) => ({
  url: BASE_URL + '/api/events/' + id,
});

export const GET_ALL_THEMES = {
  url: BASE_URL + '/api/themes',
};

export const SET_DEFAULT_THEME = {
  url: BASE_URL + '/api/themes',
  method: 'PUT',
};
