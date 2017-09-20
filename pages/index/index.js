//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://img.alicdn.com/imgextra/i4/2590951958/TB2Fz6XfgMPMeJjy1XbXXcwxVXa_!!2590951958.jpg',
      'https://img.alicdn.com/imgextra/i1/2590951958/TB2dj_XfgMPMeJjy1XbXXcwxVXa_!!2590951958.jpg',
     'https://img.alicdn.com/imgextra/i4/2590951958/TB2z.NKbaagSKJjy0FgXXcRqFXa_!!2590951958.jpg',
      'https://img.alicdn.com/imgextra/i3/2590951958/TB2BjWVavNNTKJjSspkXXaeWFXa_!!2590951958.jpg',
      'https://img.alicdn.com/imgextra/i3/2590951958/TB28118fgoQMeJjy1XaXXcSsFXa_!!2590951958.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
