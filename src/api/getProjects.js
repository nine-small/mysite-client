import ins from './request'

export async function getProjects(){
    return await ins.get('/api/project')
}