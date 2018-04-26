import axios from 'axios';

/**
 * Request Wrapper with default success/error actions
 */

const request = async function (options, isHeader = true) {

  const client = axios.create({
    baseURL: 'https://newsapi.org/v1/',
    //headers: { 'Authorization': authHeader }

  });

  // Add a request interceptor
  client.interceptors.request.use(function (request) {
    // Do something before request is sent
    console.debug("Interceptor Request", request);
    return request;
  }, function (error) {
    console.debug("Interceptor Request error", error);
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  client.interceptors.response.use(function (response) {
    // Do something with response data
    console.debug("Interceptor response", response);
    return response;
  }, function (error) {
    console.debug("Interceptor response error", error);
    // Do something with response error
    return Promise.reject(error);
  });


  const onSuccess = function (response) {

    console.debug('Request Successful!', response.data);
    return response.data;
  }

  const onError = function (error) {
    console.debug('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.debug('Status:', error.response.status);
      console.debug('Data:', error.response.data);
      console.debug('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.debug('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }


  return client(options)
    .then(onSuccess)
    .catch(onError);
}

export default request;