import { CommunicationError, RequestError } from '../../core/utils/errors';

export function addToken(config) {
  // add security token
  return config;
}

export function handleSuccess(response) {
  // handle success here
  return response;
}

export function handleRequestError(error) {
  return Promise.reject(error);
}

export function handleResponseError(error) {
  if (error.response.status === 0) {
    Promise.reject(new CommunicationError());
    return;
  }
  const requestError = new RequestError(
    error.response.status,
    error.response.statusText,
    error.response,
  );
  return Promise.reject(requestError);
}

export function applyDefaultInterceptors(interceptors) {
  interceptors.request.use(addToken, handleRequestError);
  interceptors.response.use(handleSuccess, handleResponseError);
}
