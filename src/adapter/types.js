import { fetchTypes } from '@/api/index';
import { isUsefulList } from '@/utils/index';
import { result } from './common';

// 将数据清洗成期望的格式
const success = (data) => {
  if (!isUsefulList(data)) return [];

  return data.map(({ typeId, typeName }) => ({ id: typeId, name: typeName }));
}


export const getTypeList = () => {
  return fetchTypes()
    .then(res => result(res))
    .then(data => success(data))
}
