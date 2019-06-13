import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtBadge, AtCard } from 'taro-ui'

import './index.scss'


class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View >
        <View className='at-row'>
          <View className='at-col at-col-6'>
            <AtCard
              note='小Tips'
              extra='额外信息'
              title='这是个标题'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            >
              这也是内容区 可以随意定义功能
          </AtCard>
          </View>
          <View className='at-col at-col-6'>
            <AtCard
              note='小Tips'
              extra='额外信息'
              title='这是个标题'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            >
              这也是内容区 可以随意定义功能
          </AtCard>
          </View>
        </View>

        <View className='at-row'>
          <View className='at-col at-col-6'>
            <AtCard
              note='小Tips'
              extra='额外信息'
              title='这是个标题'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            >
              这也是内容区 可以随意定义功能
          </AtCard>
          </View>
          <View className='at-col at-col-6'>
            <AtCard
              note='小Tips'
              extra='额外信息'
              title='这是个标题'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            >
              这也是内容区 可以随意定义功能
          </AtCard>
          </View>
        </View>

      </View>
    )
  }
}

export default Index
