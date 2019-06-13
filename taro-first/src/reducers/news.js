import { NEWS_LIST } from '@/constants/news'
import { NEWS_INFO } from '../constants/news';

const INITIAL_STATE = {
    itemInfo: {}
}

export default function news(state = INITIAL_STATE, action) {
    switch (action.type) {
        case NEWS_LIST: {
            return {
                ...state,
                newsList: action.payload
            }
        }
        case NEWS_INFO: {
            return {
                ...state,
                newsInfo: action.payload
            }
        }
        default:
            return state
    }
}