export const BASE_URL = 'http://localhost:8000';

// apiEndpoint = {
//   baseURL: BASE_URL
//   url: '',
//   method: ''
// }

export const GET_ALL_EVENTS = {
  url: BASE_URL + '/api/events',
};

export const UPDATE_BOOKMARK = (id) => ({
  url: BASE_URL + '/api/events/' + id,
  method: 'PATCH',
});
