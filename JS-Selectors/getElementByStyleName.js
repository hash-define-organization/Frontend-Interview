document.findByStyleName = function (property, value) {
    let result = [];
    let dom = document.getElementsByTagName('*');
    for(let element of dom){
        if(window.getComputedStyle(element)[property] === value ){
            result.push(element)
        }
    }


    return result;
    
}