import Taro, { Component } from './node_modules/@tarojs/taro'
import { View, Button, Text } from './node_modules/@tarojs/components'
import { AtButton, AtBadge } from './node_modules/taro-ui'
import { connect } from './node_modules/@tarojs/redux'

import { add, minus, asyncAdd } from './node_modules/@/actions/counter'

import './count_redux.scss'


@connect(({ counter }) => ({
    counter
}), (dispatch) => ({
    add() {
        dispatch(add())
    },
    dec() {
        dispatch(minus())
    },
    asyncAdd() {
        dispatch(asyncAdd())
    }
}))
class Index extends Taro.Component {

    config = {
        navigationBarTitleText: 'Redux例子'
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
                <AtButton type='primary' className='add_btn' onClick={this.props.add}>+</AtButton>
                <AtButton className='dec_btn' onClick={this.props.dec}>-</AtButton>
                <AtButton className='dec_btn' onClick={this.props.asyncAdd}>async</AtButton>
                <View><Text>{this.props.counter.num}</Text></View>
                <View><Text>Hello, World</Text></View>
            </View>
        )
    }
}

export default Index
