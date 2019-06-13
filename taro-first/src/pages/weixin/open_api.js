import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtButton, AtDivider, AtSteps } from 'taro-ui';

import '../index/index.scss';

export default class OpenApi extends Taro.Component {
    config = {
        navigationBarTitleText: '微信API'
    }

    constructor() {
        super(...arguments)
        this.state = {
            current: 0,
        }
    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onChange(current) {
        this.setState({
            current
        })
    }

    authUserInfo = () => {
        // 判断是否userinfo授权过
        let that = this;
        Taro.getSetting().then(res => {
            if (!res.authSetting['scope.userInfo']) {
                // 未授权，走授权流程
                Taro.authorize({
                    scope: 'scope.userInfo'
                }).then((res) => {
                    console.log('取得用户头像授权')
                }).catch(res => {
                    console.log('用户拒绝头像授权')
                })
            } else {
                console.log('用户头像已授权，无须再授权')
            }
        });
    }

    authPhoneNumber = (e) => {
        this.login().then(res => {
            console.log('获取号码前登录成功')
            console.log(e)
            console.log(e.detail.errMsg)
            console.log(e.detail.iv)
            console.log(e.detail.encryptedData)
            // 解密过程
            var encryptedData = e.detail.encryptedData
            var iv = e.detail.iv
            // 请求后台解密，目前nodejs里没做解密的，正式时Java作后台因为需要登录要用到session_key
            Taro.request({
                url: 'http://localhost:8888/wxcrypt',
                method: 'POST',
                data: {
                    iv: iv,
                    cryptData: encryptedData
                },
                header: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(res => console.log('解密：' + res.data))

        }).catch(res => {
            console.log('获取号码前登录失败')
        })

    }

    // 登录
    login = () => {
        return new Promise((resolve, reject) => {
            // 检查session
            Taro.checkSession().then((res) => {
                //session_key 未过期，并且在本生命周期一直有效
                console.log('checkSession:ok');
                resolve(res)
            }).catch(() => {
                // session_key 已经失效，需要重新执行登录流程
                console.log('checkSession fail，需要调用获取用户信息接口')
                Taro.login().then(res => {
                    console.log('微信登录返回code:' + res.code);
                    // dosomething
                    // 调用后台服务登录接口
                    // 登录成功后把token存入客户端中
                    Taro.setStorage({ key: 'token', data: 'aaaa' }).then(res => {
                        resolve(res)
                    });
                }).catch((res) => {
                    reject(res)
                })
            });
        })
    }

    render() {
        const items = [
            {
                'title': '步骤一',
                'desc': 'setting接口是否已授权',
                'success': true
            },
            {
                'title': '步骤二',
                'desc': '没授权用户授权'
            }
        ]

        const phoneItems = [
            {
                'title': '步骤一',
                'desc': 'wx.login登录',
                'success': true
            },
            {
                'title': '步骤二',
                'desc': '弹窗请求用户获取手机'
            },
            {
                'title': '步骤三',
                'desc': '请求开发者服务器解密'
            }
        ]
        return (
            <View>
                <AtSteps
                    items={items}
                    current={this.state.current}
                    onChange={this.onChange.bind(this)}
                />
                <AtButton type='primary' size='normal' openType="getUserInfo" onGetUserInfo={this.authUserInfo}>头像授权</AtButton>

                <AtSteps
                    items={phoneItems}
                    current={this.state.current}
                    onChange={this.onChange.bind(this)}
                />
                <AtButton type='primary' size='normal' openType="getPhoneNumber" onGetPhoneNumber={this.authPhoneNumber}>手机号</AtButton>
            </View>
        )
    }
}