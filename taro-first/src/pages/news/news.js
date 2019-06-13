import { newsList } from '@/actions/news';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Taro from '@tarojs/taro';
import { AtList, AtListItem } from 'taro-ui';
import './news.scss';


@connect(({ news }) => ({
    news
}), (dispatch) => ({
    newsList() {
        dispatch(newsList())
    }
}))
class Index extends Taro.Component {

    config = {
        navigationBarTitleText: '关注新闻'
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount() { }

    componentDidShow() { this.props.newsList() }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                <AtList>
                    {this.props.news.newsList.map((item, index) => (
                        <AtListItem
                            arrow='right'
                            extraText='详细信息'
                            title={item.adName}
                            note={item.content}
                        />
                    ))}
                </AtList>
            </View>
        )
    }
}

export default Index
