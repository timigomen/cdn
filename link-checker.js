$(document).ready(function(){
    checkLink();
});
$(document).on('pjax:complete', function () {
    checkLink();   
});
async function checkLink(){
    console.log("Running...")
    let link = document.getElementsByTagName('a');
    //console.log(link)
    for(var i=0;i<link.length;i++){
        if(link[i].href==="" || link[i].className==="gitter-open-chat-button")continue;//去除Gitter聊天框的影响
        if(!await checkLocalSite(link[i].href)){
            link[i].href = "https://gojumper.netlify.app/#"+window.btoa(link[i].href)
            console.log("edit.")
        }
    }
}
async function checkLocalSite(url){
    try{
        console.log("check:",url)
        let domain = url.split("/")[2];
        if(domain.endsWith("gtcblog.js.cool")||domain.endsWith("localhost:4000"))return true;
        return false;
    }catch(err){
        return true;
    }
}
