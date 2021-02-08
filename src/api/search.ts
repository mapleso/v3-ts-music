import request from '@/utils/request'

export const getHotSong = () => 
  request({
    url: '/search/hot',
    method: 'get'
  })

export const searchResult = (params: any) => 
  request({
    url: '/search/quick',
    method: 'get',
    params: {key: params}
  })