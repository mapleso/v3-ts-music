import request from '@/utils/request'

export const getRank = () => 
  request({
    url: '/top/category',
    method: 'get'
  })