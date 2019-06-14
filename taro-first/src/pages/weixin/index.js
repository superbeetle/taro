import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import logoImg from '@/assets/images/logo_weixin.png'
import '../index/index.scss'

export default class Index extends Taro.Component {
    config = {
        navigationBarTitleText: '微信API'
    }

    constructor() {
        super(...arguments)

        this.state = {
            list: [
                {
                    id: 'open_api',
                    title: '开放接口',
                    content: '登录、获取用户信息等',
                },
                {
                    id: 'pay',
                    title: '微支付',
                    content: '支付',
                },
                {
                    id: 'camera',
                    title: '相机',
                    content: '相机',
                },
                {
                    id: 'audio',
                    title: '音频',
                    content: '音频',
                },
                {
                    id: 'share',
                    title: '分享',
                    content: '小程序分享',
                }
            ]
        }
    }

    onShareAppMessage() {
        return {
            title: 'Taro UI',
            path: '/pages/index/index',
            imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
        }
    }

    gotoPanel = e => {
        const { id } = e.currentTarget.dataset
        Taro.navigateTo({
            url: `/pages/weixin/${id.toLowerCase()}`
        })
    }

    render() {
        const { list } = this.state

        return (
            <View className='page page-index'>
                <View className='logo'>
                    <Image src={logoImg} className='img' mode='aspectFit' />
                </View>
                <View className='page-title'>微信API</View>
                <View className='module-list'>
                    {list.map((item, index) => (
                        <View
                            className='module-list__item'
                            key={index}
                            data-id={item.id}
                            data-name={item.title}
                            data-list={item.subpages}
                            onClick={this.gotoPanel}
                        >
                            <View className='module-list__item-title'>{item.title}</View>
                            <View className='module-list__item-content'>{item.content}</View>
                        </View>
                    ))}
                </View>
            </View>
        )
    }
}
