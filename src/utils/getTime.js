export default function (date, bool) {
    const dateObj = new Date(+date);
    const year = dateObj.getFullYear()
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    const hour = dateObj.getHours()
    const minutes = dateObj.getMinutes()
    const seconds = dateObj.getSeconds()
    const str = `${year}-${fill0(month)}-${fill0(day)}`
    const str1 = `${fill0(hour)}:${fill0(minutes)}:${fill0(seconds)}`
    if (!bool) {
        return str
    } else {
        return str + ' ' + str1
    }
}


function fill0(str){
    if(str < 10){
        return `0${str}`
    }else{
        return str
    }
}