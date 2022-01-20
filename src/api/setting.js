import ins from './request'

export async function getSetting(){
    return await ins({
        method:"get",
        url:"/api/setting"
    });
}