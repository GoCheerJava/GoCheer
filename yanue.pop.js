
//pop右下角弹窗函数

function Pop(name, url, intro, state,no) {
    this.name = name;
    this.url = url;
    this.intro = intro;
    this.state = state;
    this.no=no;
    this.apearTime = 1000;
    this.hideTime = 1000;
    this.delay = 3000;
    //添加信息
    this.addInfo();
    //显示
    this.showDiv();
    //关闭
    this.closeDiv();
}

Pop.prototype = {
    addInfo: function () {
        $("#popAchName").html(this.name);
        $("#popIntro").html(this.intro);
        $("#popMore a").attr('href', this.url);
        $("#popState").html(this.state);
    },
    showDiv: function (time) {
        $('#pop').slideDown(this.apearTime).delay(this.delay).slideUp(this.hideTime);
    },
    closeDiv: function () {
        $("#popClose").click(function (e) {
                $('#pop').css("display", "none");
                e.stopPropagation();
            }
        );
    }
}


