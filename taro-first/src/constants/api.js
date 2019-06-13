/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
export const host = HOST
// user
export const API_USER = `${host}/xhr/user/getDetail.json`
export const API_USER_LOGIN = `${host}/xhr/u/mailLogin.json`

// taobao
export const API_NEWS_LIST = 'http://127.0.0.1:8888/'