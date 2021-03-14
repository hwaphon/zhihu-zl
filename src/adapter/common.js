import { CODE } from '@/api/index';

export const error = (error) => Promise.reject(error);

export const result = (res) => {
  const { code, msg, data } = res;

  if (CODE.SUCCESS === code) {
    return Promise.resolve(data);
  }

  return error({ message: msg });
}