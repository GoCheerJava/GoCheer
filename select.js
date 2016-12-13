/**
 * Created by ZHY on 2016/12/12.
 */
/**
 * Created by ZHY on 2016/12/2.
 */
var log_state;

function ask_for_loginstate(data) {
    log_state = data;
    // alert(log_state);
}

$(function () {
    var word;
    var obj;
    var has_result = false;
    var has_word = false;
    $("body").unbind("click").bind("click", function getword(a) {

        chrome.extension.sendRequest({"funct": "ask_for_loginstate"}, ask_for_loginstate);

        if (has_result == false) {
            console.log("1");
            var text_result_box =
                    '<div id="icIBahyI-main_box" style="display: none;">' +
                    '    <div class="icIBahyI-main_title" id="icIBahyI-main_title" style="cursor: default;">' +
                    '        <a href="javascript:;" id="icIBahyI-gb" class="icIBahyI-gb" title="关闭"></a>' +
                    // '        <i class="icIBahyI-logo"></i>' +
                    '    </div>' +
                    '    <div class="icIBahyI-search" id="ICIBA_HUAYI_input"></div>' +
                    '    <div class="icIBahyI-loading" id="loading" style="display: none;"></div>' +
                    '    <div class="icIBahyI-main_cont" id="icIBahyI-main_cont" style="display: block;">' +
                    '        <div id="icIBahyI-title" class="icIBahyI-title" style="display:none">hold</div>' +
                    '        <div id="icIBahyI-dict_main">' +
                    '            <div class="icIBahyI-dictbar" style="padding-top: 6px;">' +
                    '                <div class="icIBahyI-simple">' +
                    '                    <div class="icIBahyI-tab_list"></div>' +
                    '                    <div class="icIBahyI-dict_content">' +
                    '                        <div class="icIBahyI-group_prons">' +
                    '                            <div class="icIBahyI-group_pos">' +
                    '                            </div>' +
                    '                        </div>' +
                    '                    </div>' +
                    '                </div>' +
                    '            </div>' +
                    '        </div>' +
                    '    </div>' +
                    '</div>'
                ;

            var text_achivement_box =
                    '<div id="pop" style="display:none;z-index: 9999;">' +
                    '    <div id="popHead">' +
                    '        <a id="popClose" title="关闭">关闭</a>' +
                    '        <h2>枸杞提示</h2>' +
                    '    </div>' +
                    '    <div id="popContent">' +
                    '        <dl>' +
// '            <dt id="popTitle"><a href="http://yanue.info/" target="_blank">这里是参数</a></dt>' +'
                    '            <img src="http://gocheer.donggu.me/images/logo.png">' +
                    '            <dt id="popTitle">恭喜获得新成就：</dt>' +
                    '            <dd id="popAchName" style="font-weight: bold">这里是成就名称</dd>' +
                    '            <dd id="popIntro">这里是成就描述</dd>' +
                    '            <dd id="popState">是否隐藏成就</dd>' +
                    '        </dl>' +
                    '        <p id="popMore"><a href="http://yanue.info/" target="_blank">查看详情 »</a></p>' +
                    '    </div>' +
                    '</div>'
                ;
            var has_result_box_or_not = document.getElementById("icIBahyI-main_box");
            if (!has_result_box_or_not) {
                $("body").append(text_result_box);
            }
            var has_achivement_box_or_not = document.getElementById("pop");
            if (!has_achivement_box_or_not) {
                $("body").append(text_achivement_box);
            }

            // 划词时鼠标定位

            if (word = window.getSelection ? window.getSelection() : document.selection.createRange().text) {
                has_word = true;
                $.ajax({
                    type: "get",
                    url: "//fanyi.youdao.com/openapi.do?keyfrom=GoCheer&key=1831162149&type=data&doctype=json&version=1.1&q=" + word,
                    success: function (item) {
                        // console.log(item);
                        obj = eval(item);
                        var result = new Array();
                        $("#ICIBA_HUAYI_input").text(word);
                        for (var i = 0; i < obj.basic.explains.length; i++) {
                            result[i] = obj.basic.explains[i];
                            var temp = document.createElement("p");
                            temp.innerHTML = result[i];
                            $(".icIBahyI-group_pos").append(temp);
                        }

                        if (log_state == true) {
                            $("#icIBahyI-main_box").css("display", "block");
                            $("#icIBahyI-main_box").css("position", "absolute").css("left", (getMousePos(a).x + 10) + "px").css("top", (getMousePos(a).y + 10) + "px").css("z-index", "999");
                            has_result = true;
                            var pop1 = new Pop("Lonely", "http://www.baidu.com", "Learning on Frieday night.", true);
                        }

                        // var pop1 = new Pop("Lonely", "http://www.baidu.com", "Learning on Frieday night.", true);
                        // var pop2 = new Pop("sssss", "http://www.baidu.com", "ttttttttttttt.", true);

                    }
                });

            }
            a.stopPropagation();
        }
        else if (has_word == true && has_result == true) {
            console.log("2");
            $("#icIBahyI-main_box").css("display", "none");
            $(".icIBahyI-group_pos").empty();
            has_result = false;
            has_word = false;
        }
        else if (has_word == false && has_result == true) {
            console.log("3");
            $("#icIBahyI-main_box").css("display", "none");
            $(".icIBahyI-group_pos").empty();
            has_result = false;
            has_word = false;
        }
        else {
            console.log("5");
        }
    })

})


//获得划词时鼠标的位置
function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return {'x': x, 'y': y};
}

// $(function () {
//     if (has_result==false)
//     {
//         $("body").unbind("click").bind("click",function getWord(a) {
//             var text_result_box=
//                     '<div id="icIBahyI-main_box" style="display: none;">' +
//                     '    <div class="icIBahyI-main_title" id="icIBahyI-main_title" style="cursor: default;">' +
//                     '        <a href="javascript:;" id="icIBahyI-gb" class="icIBahyI-gb" title="关闭"></a>' +
//                     '        <i class="icIBahyI-logo"></i>' +
//                     '    </div>' +
//                     '    <div class="icIBahyI-search" id="ICIBA_HUAYI_input"></div>' +
//                     '    <div class="icIBahyI-loading" id="loading" style="display: none;"></div>' +
//                     '    <div class="icIBahyI-main_cont" id="icIBahyI-main_cont" style="display: block;">' +
//                     '        <div id="icIBahyI-title" class="icIBahyI-title" style="display:none">hold</div>' +
//                     '        <div id="icIBahyI-dict_main">' +
//                     '            <div class="icIBahyI-dictbar" style="padding-top: 6px;">' +
//                     '                <div class="icIBahyI-simple">' +
//                     '                    <div class="icIBahyI-tab_list"></div>' +
//                     '                    <div class="icIBahyI-dict_content">' +
//                     '                        <div class="icIBahyI-group_prons">' +
//                     '                            <div class="icIBahyI-group_pos">' +
//                     '                            </div>' +
//                     '                        </div>' +
//                     '                    </div>' +
//                     '                </div>' +
//                     '            </div>' +
//                     '        </div>' +
//                     '    </div>' +
//                     '</div>'
//                 ;
//
//             var has_result_box_or_not = document.getElementById("icIBahyI-main_box");
//             if (!has_result_box_or_not){
//                 $("body").append(text_result_box);
//             }
//
//             // 划词时鼠标定位
//             var word = window.getSelection ? window.getSelection() : document.selection.createRange().text;
//
//             $.ajax({
//                 type: "get",
//                 url: "//fanyi.youdao.com/openapi.do?keyfrom=GoCheer&key=1831162149&type=data&doctype=json&version=1.1&q=" + word,
//                 success: function (item) {
//                     has_result=true;
//                     // console.log(item);
//                     obj = eval(item);
//                     var result=new Array();
//                     $("#ICIBA_HUAYI_input").text(word);
//                     for (var i=0;i<obj.basic.explains.length;i++){
//                         result[i] = obj.basic.explains[i];
//                         var temp=document.createElement("p");
//                         temp.innerHTML=result[i];
//                         $(".icIBahyI-group_pos").append(temp);
//                     }
//                     // console.log(result);
//                     // console.log(posx, posy);
//                     $("#icIBahyI-main_box").css("display", "block");
//                     $("#icIBahyI-main_box").css("position", "absolute").css("left", (getMousePos(a).x + 10) + "px").css("top", (getMousePos(a).y + 10) + "px").css("z-index", "999");
//                     $("body").click(function (e) {
//                         has_result=false;
//                         $("#icIBahyI-main_box").css("display", "none");
//                         $(".icIBahyI-group_pos").empty();
//                         e.stopPropagation();
//                     })
//                 }
//             });
//             a.stopPropagation();
//         })
//     }
// })

// document.body.addEventListener("click", getWord, false);