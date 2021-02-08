import request from '@/utils/request'

export const getSwiper = () =>  
  request({
    url: '/recommend/banner',
    method: 'get',
  })

export const getSongList = () => 
  request({
    url: '/recommend/playlist/u',
    method: 'get'
  })