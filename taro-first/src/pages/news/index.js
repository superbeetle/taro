import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import logoImg from '@/assets/images/logo_taro.png'
import '../index/index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: '新闻、消息'
  }

  constructor() {
    super(...arguments)

    this.state = {
      list: [
        {
          id: 'news',
          title: '简易新闻',
          content: '列表、图文',
        },
        {
          id: 'news',
          title: '新闻分类',
          content: '带tab新闻分类',
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
      url: `/pages/${id.toLowerCase()}/${id.toLowerCase()}`
    })
  }

  render() {
    const { list } = this.state

    return (
      <View className='page page-index'>
        <View className='logo'>
          <Image src={logoImg} className='img' mode='widthFix' />
        </View>
        <View className='page-title'>新闻、消息</View>
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
