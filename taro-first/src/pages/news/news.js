import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtBadge } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { newsList } from '@/actions/news'

import './news.scss'


@connect(({ data }) => ({
    data
}), (dispatch) => ({
    newsList() {
        dispatch(newsList())
    }
}))
class Index extends Taro.Component {

    config = {
        navigationBarTitleText: '新闻列表'
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
            </View>
        )
    }
}

export default Index
