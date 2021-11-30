import ins from './request'

export async function getSetting(){
    return await ins('/api/setting');
}