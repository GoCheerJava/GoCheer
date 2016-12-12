var login_state;

$(function () {
    $.ajax({
        type:"get",
        url:"http://gocheer.donggu.me/userInfo",
        success:function (item) {
            obj = eval(item);
            if(obj.user==null){
                $("#not_logged_in").css("display","block");
                login_state=false;
            }
            else{
                $("#login_success").css("display","block");
                login_state=true;
            }
        }
    })
})

$(function () {
    $("#logout").unbind("click").bind("click",function (e) {
        $.ajax({
            type:"post",
            url:"http://gocheer.donggu.me/logout",
            data:{ extension: "true"},
            success:function () {
                console.log("logout success.");
            }
        })
    })

})

chrome.extension.onMessage.addListener(function(objRequest, sender, sendResponse){
    console.log(objRequest);
    console.log(sender);
    sendResponse(login_state);//将登录状态状态发给select.js
});