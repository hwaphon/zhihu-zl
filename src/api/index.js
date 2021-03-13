const BASE = '/api/';
const APP_ID = 'nlhnooqtpchfk26f';
const APP_SECRET = 'V3dQRDJmaEtCT1l0WGJ0RGI1a1JHZz09';

const API = {
  TYPES: BASE + 'news/types',
};

const get = (api, params = {}) => {
  return fetch(api, {
    ...params,
    credentials: 'include',
    headers: {
      app_id: APP_ID,
      app_secret: APP_SECRET
    },
    method: 'GET',
    mode: 'cors',
  })
    .then(res => res.json())
    .catch(e => {
      console.error(`${e}`);
      return Promise.reject();
    });
};

export const CODE = {
  SUCCESS: 1,
};

export const fetchTypes = () => {
  return get(API.TYPES);
};

