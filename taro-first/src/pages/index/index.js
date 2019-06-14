import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import logoImg from '@/assets/images/logo_taro.png'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor() {
    super(...arguments)

    this.state = {
      list: [
        {
          id: 'count_redux',
          title: 'Redux',
          content: '场景收集',
        },
        {
          id: 'news',
          title: '数据列表',
          content: '新闻列表、消息列表等',
        },
        {
          id: 'weixin',
          title: '微信API',
          content: 'api调用例子',
        },
        {
          id: 'charts',
          title: '图表',
          content: '收集图表模板',
        },
        {
          id: 'cus_theme',
          title: '主题',
          content: '收集各类主题模板',
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
      // url: `/pages/panel/index?id=${id.toLowerCase()}`
      url: `/pages/${id.toLowerCase()}/index`
    })
  }

  render() {
    const { list } = this.state

    return (
      <View className='page page-index'>
        <View className='logo'>
          <Image src={logoImg} className='img' mode='widthFix' />
        </View>
        <View className='page-title'>Taro UI</View>
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
