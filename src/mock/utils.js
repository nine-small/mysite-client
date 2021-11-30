function pathArr(path) {
    const obj = {};
    if(path.indexOf('?') != -1){
        path = path.split('?')[1]
    }
    const arr = path.split("&")
    arr.forEach(ele => {
        const item = ele.split('=');
        obj[item[0]] = item[1]
    })
    return obj
}


export {
    pathArr
}