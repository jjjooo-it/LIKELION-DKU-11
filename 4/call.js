function add(callback){
    let dd = document.createElement('div');
    dd.style.width = "100px";
    dd.style.height = "100px";
    setTimeout(()=>{
        document.body.append(dd);
        if(document.getElementsByTageName('div').length>0){
            dd.style.backgroundColor= "lightblue";
        }else{
            callback(new Error('에러발생'));
        }
   },2000);
}