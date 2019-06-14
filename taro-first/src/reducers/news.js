import { NEWS_LIST } from '@/constants/news'
import { NEWS_INFO } from '@/constants/news';

const INITIAL_STATE = {
    newsInfo: {},
    newsList: []
}

export default function news(state = INITIAL_STATE, action) {
    switch (action.type) {
        case NEWS_LIST: {
            return {
                ...state,
                newsList: action.payload.data
            }
        }
        case NEWS_INFO: {
            return {
                ...state,
                newsInfo: action.payload.data
            }
        }
        default:
            return state
    }
}