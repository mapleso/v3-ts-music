import request from '@/utils/request'

export const getMv = (params: number) => 
  request({
    url: '/new/mv',
    method: 'get',
    params:{type: params}
  })
