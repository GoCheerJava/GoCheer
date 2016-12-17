/**
 * Created by ZHY on 2016/12/12.
 */
/**
 * Created by ZHY on 2016/12/2.
 */
var log_state;
var ach_no = 0;
var ach_obj;

var temp1 =
        '    <div id="popHead">' +
        '        <a id="popClose" title="关闭">关闭</a>' +
        '        <h2>枸杞提示</h2>' +
        '    </div>' +
        '    <div id="popContent">' +
        '        <dl>' +
        // '            <dt id="popTitle"><a href="http://yanue.info/" target="_blank">这里是参数</a></dt>' +
//                     '            <img src=" chrome-extension://abaimkcklagckaoeopbangiihoabpmjo/images/icon10.png">' +
        '            <dt id="popTitle">恭喜获得新成就：</dt>' +
        '            <dd id="popAchName" style="font-weight: bold">这里是成就名称</dd>' +
        '            <dd id="popIntro">这里是成就描述</dd>' +
        '            <dd id="popState">是否隐藏成就</dd>' +
        '        </dl>' +
        '        <p id="popMore"><a href="http://yanue.info/" target="_blank">查看详情 »</a></p>' +
        '    </div>'
    ;
function ask_for_loginstate(data) {
    log_state = data;
    // alert(log_state);
}

function ask_for_achivement(data) {
    ach_obj = data;
    console.log(ach_obj);
    if (ach_obj.achievement != null) {
        for (var i = 0; i < ach_obj.achievement.length; i++) {
            var p1 = document.createElement("div");
            $("#GoCheer_PopWrap").append(p1);
            p1.setAttribute("id", "pop" + ach_no);
            $("#pop" + ach_no).addClass("asd");
            p1.style.display = "none";
            $("#pop" + ach_no).append(temp1);
            console.log(ach_obj.achievement[i].name);
            new Pop(ach_obj.achievement[i].name, "http://www.baidu.com", ach_obj.achievement[i].description, ach_obj.achievement[i].hidden, ach_no);
            ach_no++;
        }
    }
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
                    '<div id="GoCheer-main_box" style="display: none;">' +
                    '    <div class="GoCheer-main_title" id="GoCheer-main_title" style="cursor: default;">' +
                    '        <a href="javascript:;" id="GoCheer-gb" class="GoCheer-gb" title="关闭"></a>' +
                    // '        <i class="GoCheer-logo"></i>' +
                    '    </div>' +
                    '    <div class="GoCheer-search" id="ICIBA_HUAYI_input"></div>' +
                    '    <div class="GoCheer-loading" id="loading" style="display: none;"></div>' +
                    '    <div class="GoCheer-main_cont" id="GoCheer-main_cont" style="display: block;">' +
                    '        <div id="GoCheer-title" class="GoCheer-title" style="display:none">hold</div>' +
                    '        <div id="GoCheer-dict_main">' +
                    '            <div class="GoCheer-dictbar" style="padding-top: 6px;">' +
                    '                <div class="GoCheer-simple">' +
                    '                    <div class="GoCheer-tab_list"></div>' +
                    '                    <div class="GoCheer-dict_content">' +
                    '                        <div class="GoCheer-group_prons">' +
                    '                            <div class="GoCheer-group_pos">' +
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
                    // '            <dt id="popTitle"><a href="http://yanue.info/" target="_blank">这里是参数</a></dt>' +
//                     '            <img src=" chrome-extension://abaimkcklagckaoeopbangiihoabpmjo/images/icon10.png">' +
                    '            <dt id="popTitle">恭喜获得新成就：</dt>' +
                    '            <dd id="popAchName" style="font-weight: bold">这里是成就名称</dd>' +
                    '            <dd id="popIntro">这里是成就描述</dd>' +
                    '            <dd id="popState">是否隐藏成就</dd>' +
                    '        </dl>' +
                    '        <p id="popMore"><a href="http://yanue.info/" target="_blank">查看详情 »</a></p>' +
                    '    </div>' +
                    '</div>'
                ;

            var temp1 =
                    '    <div id="popHead">' +
                    '        <a id="popClose" title="关闭">关闭</a>' +
                    '        <h2>枸杞提示</h2>' +
                    '    </div>' +
                    '    <div id="popContent">' +
                    '        <dl>' +
                    // '            <dt id="popTitle"><a href="http://yanue.info/" target="_blank">这里是参数</a></dt>' +
//                     '            <img src=" chrome-extension://abaimkcklagckaoeopbangiihoabpmjo/images/icon10.png">' +
                    '            <dt id="popTitle">恭喜获得新成就：</dt>' +
                    '            <dd id="popAchName" style="font-weight: bold">这里是成就名称</dd>' +
                    '            <dd id="popIntro">这里是成就描述</dd>' +
                    '            <dd id="popState">是否隐藏成就</dd>' +
                    '        </dl>' +
                    '        <p id="popMore"><a href="http://yanue.info/" target="_blank">查看详情 »</a></p>' +
                    '    </div>'
                ;
            var has_result_box_or_not = document.getElementById("GoCheer-main_box");
            if (!has_result_box_or_not) {
                $("body").append(text_result_box);
            }

            var b = document.getElementById("GoCheer_PopWrap");
            if (!b) {
                var p2 = document.createElement("div");
                p2.setAttribute("id", "GoCheer_PopWrap");
                document.body.appendChild(p2);
            }


            // 划词时鼠标定位


            if (log_state == true) {

                if (word = window.getSelection ? window.getSelection() : document.selection.createRange().text) {
                    has_word = true;
                    $.ajax({
                        type: "get",
                        url: "//fanyi.youdao.com/openapi.do?keyfrom=GoCheer&key=1831162149&type=data&doctype=json&version=1.1&q=" + word,
                        success: function (item) {
                            // console.log(item);
                            obj = eval(item);
                            var result = new Array();
                            $("#ICIBA_HUAYI_input").text(obj.query);
//                         errorCode：
// 　                       0 - 正常
//                         20 - 要翻译的文本过长
//                         30 - 无法进行有效的翻译
//                         40 - 不支持的语言类型
//                         50 - 无效的key
//                         60 - 无词典结果，仅在获取词典结果生效
                            if (obj.basic != null && obj.errorCode == 0) { //有道词典-基本词典
                                for (var i = 0; i < obj.basic.explains.length; i++) {
                                    result[i] = obj.basic.explains[i];
                                    var temp = document.createElement("p");
                                    temp.innerHTML = result[i];
                                    $(".GoCheer-group_pos").append(temp);
                                }
                            }
                            else if (obj.translation != null && obj.errorCode == 0) { //有道翻译
                                for (var i = 0; i < obj.translation.length; i++) {
                                    result[i] = obj.translation[i];
                                    var temp = document.createElement("p");
                                    temp.innerHTML = result[i];
                                    $(".GoCheer-group_pos").append(temp);
                                }
                            }
                            else if (obj.errorCode == 20) {
                                var temp = document.createElement("p");
                                temp.innerHTML = "抱歉，您要翻译的文本过长。";
                                $(".GoCheer-group_pos").append(temp);
                            }
                            else if (obj.errorCode == 30 || obj.errorCode == 40 || obj.errorCode == 50 || obj.errorCode == 60) {
                                var temp = document.createElement("p");
                                temp.innerHTML = "抱歉，我们无法进行有效的翻译。";
                                $(".GoCheer-group_pos").append(temp);
                            }


                            $("#GoCheer-main_box").css("display", "block");
                            $("#GoCheer-main_box").css("position", "absolute").css("left", (getMousePos(a).x + 10) + "px").css("top", (getMousePos(a).y + 10) + "px").css("z-index", "999");
                            has_result = true;

                            chrome.extension.sendRequest({
                                "funct": "ask_for_achievement",
                                "word": obj.query
                            }, ask_for_achivement);


                            // var num = 2;
                            // for (var j = 0; j < num; j++) {
                            //
                            //     // setTimeout(function () {
                            //     var p1 = document.createElement("div");
                            //     $("#GoCheer_PopWrap").append(p1);
                            //     p1.setAttribute("id", "pop" + ach_no);
                            //     $("#pop" + ach_no).addClass("asd");
                            //     p1.style.display = "none";
                            //     $("#pop" + ach_no).append(temp1);
                            //     new Pop(ach_obj, "http://www.baidu.com", "Learning on Frieday night.", true, ach_no);
                            //     ach_no++;
                            //     // }, 1000);
                            //
                            // }
                        }
                    });

                }


                // var pop1 = new Pop("Lonely", "http://www.baidu.com", "Learning on Frieday night.", true);
            }

            a.stopPropagation();
        }
        else if (has_word == true && has_result == true) {
            console.log("2");
            $("#GoCheer-main_box").css("display", "none");
            $(".GoCheer-group_pos").empty();
            has_result = false;
            has_word = false;
        }
        else if (has_word == false && has_result == true) {
            console.log("3");
            $("#GoCheer-main_box").css("display", "none");
            $(".GoCheer-group_pos").empty();
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
//                     '<div id="GoCheer-main_box" style="display: none;">' +
//                     '    <div class="GoCheer-main_title" id="GoCheer-main_title" style="cursor: default;">' +
//                     '        <a href="javascript:;" id="GoCheer-gb" class="GoCheer-gb" title="关闭"></a>' +
//                     '        <i class="GoCheer-logo"></i>' +
//                     '    </div>' +
//                     '    <div class="GoCheer-search" id="ICIBA_HUAYI_input"></div>' +
//                     '    <div class="GoCheer-loading" id="loading" style="display: none;"></div>' +
//                     '    <div class="GoCheer-main_cont" id="GoCheer-main_cont" style="display: block;">' +
//                     '        <div id="GoCheer-title" class="GoCheer-title" style="display:none">hold</div>' +
//                     '        <div id="GoCheer-dict_main">' +
//                     '            <div class="GoCheer-dictbar" style="padding-top: 6px;">' +
//                     '                <div class="GoCheer-simple">' +
//                     '                    <div class="GoCheer-tab_list"></div>' +
//                     '                    <div class="GoCheer-dict_content">' +
//                     '                        <div class="GoCheer-group_prons">' +
//                     '                            <div class="GoCheer-group_pos">' +
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
//             var has_result_box_or_not = document.getElementById("GoCheer-main_box");
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
//                         $(".GoCheer-group_pos").append(temp);
//                     }
//                     // console.log(result);
//                     // console.log(posx, posy);
//                     $("#GoCheer-main_box").css("display", "block");
//                     $("#GoCheer-main_box").css("position", "absolute").css("left", (getMousePos(a).x + 10) + "px").css("top", (getMousePos(a).y + 10) + "px").css("z-index", "999");
//                     $("body").click(function (e) {
//                         has_result=false;
//                         $("#GoCheer-main_box").css("display", "none");
//                         $(".GoCheer-group_pos").empty();
//                         e.stopPropagation();
//                     })
//                 }
//             });
//             a.stopPropagation();
//         })
//     }
// })

// document.body.addEventListener("click", getWord, false);