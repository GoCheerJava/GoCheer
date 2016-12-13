

var o;
var login_state1;

function onRequest(request, sender, callback) {
    console.log(request);
    console.log(sender);
    // callback(
    //     {
    //         "state":login_state,
    //         "achievement":{
    //             // "image": "default.png",
    //             "hidden": ach_hidden,
    //             "name": ach_name,
    //             "description": ach_discription,
    //             "id": ach_id
    //         }
    //     }
    //     );
    $.ajax({
        type: "get",
        url: "http://gocheer.donggu.me/userInfo",
        success: function (item) {
            obj = eval(item);
            if (obj.user == null) {
                // $("#not_logged_in").css("display", "block");
                login_state1 = false;
            }
            else {
                // $("#login_success").css("display", "block");
                login_state1 = true;
            }
            callback(login_state1);//将登录状态状态发给select.js
        }
    })
    // callback(login_state);//将登录状态状态发给select.js

}

chrome.extension.onRequest.addListener(onRequest);

