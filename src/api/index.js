const BASE = '/api/';
const APP_ID = 'nlhnooqtpchfk26f';
const APP_SECRET = 'V3dQRDJmaEtCT1l0WGJ0RGI1a1JHZz09';

const API = {
  TYPES: BASE + 'news/types',
  LIST: BASE + 'news/list',
};

const buildGetUrl = (api = '', params = {}) => {
  const hadQuery = api.indexOf('?') >= 0;
  const keys = Object.keys(params);
  const query = keys.reduce((pre, current) => `${pre}${current}=${params[current]}&`, hadQuery ? '&' : '?');

  // 暂时未处理直接以？结尾的url
  return api + query.slice(0, query.length - 1);
}

const get = (api, params = {}) => {
  return fetch(buildGetUrl(api, params), {
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

export const fetchList = (params) => {
  return get(API.LIST, params);
};
