import ins from './request.js'

export async function getBanners() {
    return await ins({
        url: '/api/banner',
        method: 'get'
    })
}