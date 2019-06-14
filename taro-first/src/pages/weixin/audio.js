import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton, AtSteps } from 'taro-ui';
import '../index/index.scss';


export default class Audio extends Taro.Component {
    config = {
        navigationBarTitleText: '音频'
    }

    // 音频
    audioCtx = null

    constructor() {
        super(...arguments)
    }

    componentDidMount() {
        this.audioCtx = Taro.createInnerAudioContext()
        // 下面的貌似本地发布不了
        // this.audioCtx.setSrc('../../assets/audios/audio_demo.mp3')
        this.audioCtx.src = 'http://zhangmenshiting.qianqian.com/data2/music/0d11239185a730085ae9ad1051ffaa38/599612081/599612081.mp3?xcode=dab67d0b4e44976a5990d376263109e0'
    }

    componentWillUnmount() {
    }

    audioPlay = () => {
        this.audioCtx.play()
    }

    audioPause = () => {
        this.audioCtx.pause()
    }

    render() {
        return (
            <View>
                <AtButton type="primary" onClick={this.audioPlay}>播放</AtButton>
                <AtButton type="primary" onClick={this.audioPause}>暂停</AtButton>
            </View>
        )
    }
}