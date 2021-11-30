import $ from 'jquery'
let routerTitle='',Title='';

function setT(){
    let title = '';
    if(!routerTitle && !Title){
        title = 'loading....'
    }else if(!routerTitle && Title){
        title = Title
    }else if(routerTitle && !Title){
        title = routerTitle
    }else{
        title = routerTitle + '-' + Title
    }
    $('title').text(title)
}


export default {
    setRouterTitle(title){
        routerTitle = title;
        setT()
    },
    setTitle(title){
        Title = title;
        setT()
    }
}