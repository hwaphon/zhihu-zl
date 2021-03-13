import { fetchTypes, CODE } from '@/api/index';
import { isUsefulList } from '@/utils/index';

// 将数据清洗成期望的格式
const success = (data) => {
  if (!isUsefulList(data)) return [];

  return data.map(({ typeId, typeName }) => ({ id: typeId, name: typeName }));
}

const error = (error) => Promise.reject(error);

export const getTypeList = () => {
  return fetchTypes()
    .then(res => {
      const { code, msg, data } = res;

      if (CODE.SUCCESS === code) {
        return success(data);
      }

      return error({ message: msg });
    })
    .catch(e => error({ message: `${e}` }));
}
