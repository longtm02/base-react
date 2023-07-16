// actions.js
export const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST',
});

// actions.js
export const fetchDataRequestFast = () => ({
  type: 'FETCH_DATA_REQUEST_FAST',
});

export const fetchDataSuccess = (data: any) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

export const fetchDataFailure = (error: any) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error,
});
