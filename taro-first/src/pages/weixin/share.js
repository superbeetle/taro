import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';


export default class Share extends Taro.Component {
    config = {
        navigationBarTitleText: '分享'
    }

    constructor() {
        super(...arguments)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onShareAppMessage = () => {
        return {
            title: '分享',
            path: '/pages/index/index',
            imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
        }
    }

    render() {
        return (
            <View>
                <AtButton type="primary" openType="share" size="normal">分享</AtButton>
            </View>
        )
    }
}