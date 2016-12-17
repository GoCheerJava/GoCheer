//pop右下角弹窗函数

function Pop(name, url, intro, state, no,num) {
    this.name = name;
    this.url = url;
    this.intro = intro;
    this.state = state;
    this.no = no;
    this.num=num;
    this.apearTime = 1000;
    this.hideTime = 1000;
    this.delay = 30000;
    //添加信息
    this.addInfo();
    //显示
    this.showDiv(this.apearTime,this.hideTime,this.delay,this.no);
    //关闭
    this.closeDiv(this.no);
}

Pop.prototype = {
    addInfo: function () {
        $("#" + "pop" + this.no).find("#popAchName").html(this.name);
        $("#" + "pop" + this.no).find("#popIntro").html(this.intro);
        $("#" + "pop" + this.no).find("#popMore a").attr('href', this.url);
        $("#" + "pop" + this.no).find("#popState").html(this.state);
    },
    showDiv: function (at,ht,dl,n) {
        $("#" + "pop" + n).slideDown(at).delay(dl).slideUp(ht);
        // $("#" + "pop" + n).mouseover(function () {
        //     $("#" + "pop" + n).delay(30000);
        // });
        // $("#" + "pop" + n).mouseout(function () {
        //     $("#" + "pop" + n).delay(1000).slideUp(ht);
        // });
        // $("#" + "pop" + n).slideUp(ht);
    },
    closeDiv: function (n) {
        $("#" + "pop" + n).find("#popClose").unbind("click").click(function () {
            // $("#" + "pop" + n).css("display","none");
            $("#" + "pop" + n).stop(true, true).slideToggle(1000);

            console.log("#" + "pop" + n);
        });
    }
}


