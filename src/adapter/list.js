import { fetchList } from '@/api/index';
import { isUsefulList } from '@/utils/index';
import { result } from './common';
const PAGESIZE = 15;
const INIT_PAGE = 1;

let page;
// 记录上次的type id
let preId;

const preFetch = (id) => {
  if (id !== preId) {
    preId = id;
    page = INIT_PAGE;
  } else {
    page += 1;
  }
}

const formatTime = (param = '') => {
  try {
    const [date, time] = param.split(' ');
    const [, month, day] = date.split('-');
    const [hour, minute] = time.split(':');

    return `${month}-${day} ${hour}:${minute}`;
  } catch (e) {
    return param || '';
  }
}

const success = (data) => {
  if (!isUsefulList(data)) return [];

  return data.map(item => ({
    title: item.title,
    source: item.source,
    imgs: item.imgList || [],
    id: item.newsId,
    time: formatTime(item.postTime)
  }));
}

export const getArticleList = (id) => {
  preFetch(id);

  return fetchList({
    page,
    pagesize: PAGESIZE,
    typeId: id
  })
    .then(res => result(res))
    .then(data => success(data))
}