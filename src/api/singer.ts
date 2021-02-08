import request from '@/utils/request'

export const getCategory = () => 
  request({
    url: '/singer/category',
    method: 'get'
  })

export const getSingerList = (params: any) => 
  request({
    url: '/singer/list',
    method: 'get',
    params
  })