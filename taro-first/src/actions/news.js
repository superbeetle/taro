import { API_NEWS_LIST } from '@/constants/api'
import { NEWS_LIST } from '@/constants/news'
import { createAction } from '@/utils/redux'
/**
 * 获取新闻列表
 * @param {*} payload
 */
export const newsList = payload => createAction({
    url: API_NEWS_LIST,
    type: NEWS_LIST,
    payload
})
